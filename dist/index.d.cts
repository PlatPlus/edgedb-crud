import { Client, ConnectOptions } from 'edgedb';
export { createClient } from 'edgedb';

declare class CRUDService<
/** "types" object exported from interfaces */
AllTypes extends {
    [key: string]: object;
}, TypeName extends keyof Omit<AllTypes['default'], 'Timestampable' | 'Role'>, Type extends AllTypes['default'][TypeName]> {
    private config;
    e: any;
    typeName: TypeName;
    eType: any;
    eFields: any;
    client: Client;
    constructor(config: {
        /** Ready EdgeDB client or options for instantialization */
        client?: Client | ConnectOptions;
        /** Name of EdgeDB type */
        type: TypeName;
        /** Default object exported from edgeql-js */
        edgedb: any;
    });
    create: (data: Omit<Type, 'id'>) => Promise<Type>;
    updateById: (id: string, data: Partial<Type>) => Promise<Type>;
    findAll: () => Promise<Type[]>;
    findById: (id: string) => Promise<Type>;
    deleteById: (id: string) => Promise<Type>;
    findByField: <Field extends keyof Type>(field: Field, value: Type[Field]) => Promise<Type>;
    findAllByField: <Field extends keyof Type>(field: Field, value: Type[Field]) => Promise<Type[]>;
    findByFields: <Field extends keyof Type>(fields: { [key in Field]: Type[Field]; }) => Promise<Type>;
}

export { CRUDService };
