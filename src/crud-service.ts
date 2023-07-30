import createClient, { Client, ConnectOptions, Duration } from "edgedb";

export { createClient } from "edgedb";

// Class which implements CRUD operations for a given type with EdgeDB objects
export class CRUDService<
	/** "types" object exported from interfaces */
    AllTypes extends any,
    // @ts-expect-error
	TypeName extends keyof Omit<AllTypes['default'], 'Timestampable' | 'Role'> = keyof Omit<AllTypes['default'], 'Timestampable' | 'Role'>,
    // @ts-expect-error
    Type extends AllTypes['default'][TypeName] = AllTypes['default'][TypeName]
> {
    e: any
	typeName: TypeName
	eType: any
	eFields: any
    client: Client

	constructor(private config: {
		/** Ready EdgeDB client or options for instantialization */
        client?: Client | ConnectOptions,
		/** Name of EdgeDB type */
		type: TypeName,
		/** Default object exported from edgeql-js */
		edgedb: any
    }) {
        if (config.client) {
            // if is client key has 'options', it means it's a Client
			if (!('options' in config.client)) {
				this.client = createClient(config.client)
			}

			this.client = this.client.withConfig({
				session_idle_transaction_timeout: Duration.from({ seconds: 10 }),
				allow_bare_ddl: 'AlwaysAllow',
			})
			.withRetryOptions({
				attempts: 3,
				backoff: (attemptNo: number) => {
					// exponential backoff
					return 2 ** attemptNo * 100 + Math.random() * 100
				},
			})
        }

        this.e = this.config.edgedb
        this.typeName = this.config.type
        this.eType = this.e[this.typeName]
        this.eFields = this.eType['*']
    }

	create = async (data: Omit<Type, 'id'>) => {
		return await this.client.transaction(async (tx) => {
			const { id: newId } = await this.e.insert(this.eType, data as any).run(tx)

			return (await this.e
				.select(this.eType, () => ({
					...this.eFields,
					filter_single: {
						id: newId,
					},
				}))
				.run(tx)) as Type
		})
	}

	updateById = async (id: string, data: Partial<Type>) => {
		const query = this.e.update(this.eType, () => ({
			set: data,
			filter_single: {
				id: id,
			},
		}))
		return (await query.run(this.client)) as Type
	}

	findAll = async () => {
		const query = this.e.select(this.eType, () => ({
			...this.eFields,
		}))
		return (await query.run(this.client)) as Type[]
	}

	findById = async (id: string) => {
		const query = this.e.select(this.eType, () => ({
			...this.eFields,
			filter_single: {
				id: id,
			},
		}))
		return (await query.run(this.client)) as Type
	}

	deleteById = async (id: string) => {
		const query = this.e.delete(this.eType, () => ({
			filter_single: {
				id: id,
			},
		}))
		return (await query.run(this.client)) as Type
	}

	findByField = async <Field extends keyof Type>(field: Field, value: Type[Field]) => {
		const query = this.e.select(this.eType, (obj) => ({
			...this.eFields,
			filter_single: this.e.op(obj[field], '=', this.e.uuid(value)),
		}))
		return (await query.run(this.client)) as Type
	}

	findAllByField = async <Field extends keyof Type>(field: Field, value: Type[Field]) => {
		const query = this.e.select(this.eType, (obj) => ({
			...this.eFields,
			filter: this.e.op(obj[field], '=', this.e.uuid(value)),
		}))
		return (await query.run(this.client)) as Type[]
	}

	findByFields = async <Field extends keyof Type>(fields: { [key in Field]: Type[Field] }) => {
		const query = this.e.select(this.eType, () => ({
			...this.eFields,
			filter_single: fields,
		}))
		return (await query.run(this.client)) as Type
	}
}

export default CRUDService