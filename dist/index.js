var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});
var __commonJS = (cb, mod) => function __require2() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/chars.js
var require_chars = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/chars.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.chr = exports.ord = exports.$v = exports.$s = exports.$r = exports.$p = exports.$o = exports.$n = exports.$m = exports.$j = exports.$b = exports.$Z = exports.$Y = exports.$X = exports.$V = exports.$T = exports.$S = exports.$R = exports.$Q = exports.$P = exports.$O = exports.$M = exports.$L = exports.$K = exports.$I = exports.$H = exports.$E = exports.$D = exports.$C = exports.$A = exports.$1 = exports.$0 = void 0;
    exports.$0 = ord("0");
    exports.$1 = ord("1");
    exports.$A = ord("A");
    exports.$C = ord("C");
    exports.$D = ord("D");
    exports.$E = ord("E");
    exports.$H = ord("H");
    exports.$I = ord("I");
    exports.$K = ord("K");
    exports.$L = ord("L");
    exports.$M = ord("M");
    exports.$O = ord("O");
    exports.$P = ord("P");
    exports.$Q = ord("Q");
    exports.$R = ord("R");
    exports.$S = ord("S");
    exports.$T = ord("T");
    exports.$V = ord("V");
    exports.$X = ord("X");
    exports.$Y = ord("Y");
    exports.$Z = ord("Z");
    exports.$b = ord("b");
    exports.$j = ord("j");
    exports.$m = ord("m");
    exports.$n = ord("n");
    exports.$o = ord("o");
    exports.$p = ord("p");
    exports.$r = ord("r");
    exports.$s = ord("s");
    exports.$v = ord("v");
    function ord(str) {
      const ch = str.charCodeAt(0);
      if (ch <= 0 || ch >= 255) {
        throw new TypeError(`char "${ch}" is outside ASCII`);
      }
      return ch & 255;
    }
    exports.ord = ord;
    function chr(ch) {
      if (ch <= 0 || ch >= 255) {
        throw new TypeError(`char "${ch}" is outside ASCII`);
      }
      return String.fromCharCode(ch);
    }
    exports.chr = chr;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/bigint.js
var require_bigint = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/bigint.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.remainder = exports.lt = exports.gte = exports.bitand = exports.rshift = exports.mul = exports.div = exports.sub = exports.add = exports.make = exports.isBigInt = exports.plugJSBI = exports.hasNativeBigInt = void 0;
    var JSBI = null;
    exports.hasNativeBigInt = typeof BigInt !== "undefined";
    function plugJSBI(jsbi) {
      JSBI = jsbi;
    }
    exports.plugJSBI = plugJSBI;
    var _isBigInt;
    var _make;
    var _add;
    var _div;
    var _sub;
    var _mul;
    var _rshift;
    var _bitand;
    var _gte;
    var _lt;
    var _remainder;
    if (exports.hasNativeBigInt) {
      _isBigInt = (val) => typeof val === "bigint";
      _make = (val) => BigInt(val);
      _add = (op1, op2) => op1 + op2;
      _sub = (op1, op2) => op1 - op2;
      _div = (op1, op2) => op1 / op2;
      _mul = (op1, op2) => op1 * op2;
      _rshift = (op1, op2) => op1 >> op2;
      _bitand = (op1, op2) => op1 & op2;
      _gte = (op1, op2) => op1 >= op2;
      _lt = (op1, op2) => op1 < op2;
      _remainder = (op1, op2) => op1 % op2;
    } else {
      _isBigInt = (val) => {
        const j = ensureJSBI();
        return val instanceof j;
      };
      _make = (val) => {
        const j = ensureJSBI();
        return j.BigInt(val);
      };
      _add = (op1, op2) => {
        const j = ensureJSBI();
        return j.add(op1, op2);
      };
      _sub = (op1, op2) => {
        const j = ensureJSBI();
        return j.subtract(op1, op2);
      };
      _div = (op1, op2) => {
        const j = ensureJSBI();
        return j.divide(op1, op2);
      };
      _mul = (op1, op2) => {
        const j = ensureJSBI();
        return j.multiply(op1, op2);
      };
      _rshift = (op1, op2) => {
        const j = ensureJSBI();
        return j.signedRightShift(op1, op2);
      };
      _bitand = (op1, op2) => {
        const j = ensureJSBI();
        return j.bitwiseAnd(op1, op2);
      };
      _gte = (op1, op2) => {
        const j = ensureJSBI();
        return j.greaterThanOrEqual(op1, op2);
      };
      _lt = (op1, op2) => {
        const j = ensureJSBI();
        return j.lessThan(op1, op2);
      };
      _remainder = (op1, op2) => {
        const j = ensureJSBI();
        return j.remainder(op1, op2);
      };
    }
    function ensureJSBI() {
      if (JSBI == null) {
        throw new Error("JSBI library is required to polyfill BigInt");
      }
      return JSBI;
    }
    exports.isBigInt = _isBigInt;
    exports.make = _make;
    exports.add = _add;
    exports.sub = _sub;
    exports.div = _div;
    exports.mul = _mul;
    exports.rshift = _rshift;
    exports.bitand = _bitand;
    exports.gte = _gte;
    exports.lt = _lt;
    exports.remainder = _remainder;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/compat.js
var require_compat = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/compat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.decodeInt64ToString = void 0;
    function decodeInt64ToString(buf) {
      if (buf.length !== 8) {
        throw new Error("expected 8 bytes buffer");
      }
      let inp = Array.from(buf);
      let negative = false;
      if (inp[0] & 128) {
        inp = inp.map((x) => x ^ 255);
        inp[inp.length - 1]++;
        negative = true;
      }
      let result = "0";
      for (const digit of inp) {
        let acc = digit;
        let ret = "";
        for (let j = result.length - 1; j >= 0; j--) {
          const num = parseInt(result[j], 10) * 256 + acc;
          ret = num % 10 + ret;
          acc = Math.floor(num / 10);
        }
        result = acc ? acc + ret : ret;
      }
      return negative ? `-${result}` : result;
    }
    exports.decodeInt64ToString = decodeInt64ToString;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/ifaces.js
var require_ifaces = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/ifaces.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LegacyHeaderCodes = exports.Cardinality = exports.OutputFormat = void 0;
    var chars = __importStar(require_chars());
    var OutputFormat;
    (function(OutputFormat2) {
      OutputFormat2[OutputFormat2["BINARY"] = chars.$b] = "BINARY";
      OutputFormat2[OutputFormat2["JSON"] = chars.$j] = "JSON";
      OutputFormat2[OutputFormat2["NONE"] = chars.$n] = "NONE";
    })(OutputFormat = exports.OutputFormat || (exports.OutputFormat = {}));
    var Cardinality;
    (function(Cardinality2) {
      Cardinality2[Cardinality2["NO_RESULT"] = chars.$n] = "NO_RESULT";
      Cardinality2[Cardinality2["AT_MOST_ONE"] = chars.$o] = "AT_MOST_ONE";
      Cardinality2[Cardinality2["ONE"] = chars.$A] = "ONE";
      Cardinality2[Cardinality2["MANY"] = chars.$m] = "MANY";
      Cardinality2[Cardinality2["AT_LEAST_ONE"] = chars.$M] = "AT_LEAST_ONE";
    })(Cardinality = exports.Cardinality || (exports.Cardinality = {}));
    exports.LegacyHeaderCodes = {
      implicitLimit: 65281,
      implicitTypenames: 65282,
      implicitTypeids: 65283,
      allowCapabilities: 65284,
      capabilities: 4097,
      explicitObjectids: 65285
    };
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/buffer.js
var require_buffer = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/buffer.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReadBuffer = exports.ReadMessageBuffer = exports.uuidToBuffer = exports.WriteMessageBuffer = exports.WriteBuffer = exports.BufferError = exports.encodeB64 = exports.decodeB64 = exports.utf8Decoder = exports.utf8Encoder = void 0;
    var chars = __importStar(require_chars());
    var bi = __importStar(require_bigint());
    var compat = __importStar(require_compat());
    var ifaces_1 = require_ifaces();
    var BUFFER_INC_SIZE = 4096;
    var EMPTY_BUFFER = new Uint8Array(0);
    exports.utf8Encoder = new TextEncoder();
    exports.utf8Decoder = new TextDecoder("utf8");
    var decodeB64;
    exports.decodeB64 = decodeB64;
    var encodeB64;
    exports.encodeB64 = encodeB64;
    if (typeof btoa === "undefined") {
      exports.decodeB64 = decodeB64 = (b64) => {
        return Buffer.from(b64, "base64");
      };
      exports.encodeB64 = encodeB64 = (data) => {
        return Buffer.from(data).toString("base64");
      };
    } else {
      exports.decodeB64 = decodeB64 = (b64) => {
        const binaryString = atob(b64);
        const size = binaryString.length;
        const bytes = new Uint8Array(size);
        for (let i = 0; i < size; i++) {
          bytes[i] = binaryString.charCodeAt(i);
        }
        return bytes;
      };
      exports.encodeB64 = encodeB64 = (data) => {
        const binaryString = String.fromCharCode(...data);
        return btoa(binaryString);
      };
    }
    var useBigInt64Fallback = typeof DataView.prototype.getBigInt64 === "undefined";
    var BufferError = class extends Error {
    };
    exports.BufferError = BufferError;
    var WriteBuffer = class {
      constructor() {
        Object.defineProperty(this, "_rawBuffer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "buffer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "size", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "pos", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.size = BUFFER_INC_SIZE;
        this.pos = 0;
        this._rawBuffer = new Uint8Array(this.size);
        this.buffer = new DataView(this._rawBuffer.buffer);
      }
      get position() {
        return this.pos;
      }
      reset() {
        this.pos = 0;
      }
      ensureAlloced(extraLength) {
        const newSize = this.pos + extraLength;
        if (newSize > this.size) {
          this.__realloc(newSize);
        }
      }
      __realloc(newSize) {
        newSize += BUFFER_INC_SIZE;
        const newBuffer = new Uint8Array(newSize);
        newBuffer.set(this._rawBuffer);
        this._rawBuffer = newBuffer;
        this.buffer = new DataView(this._rawBuffer.buffer);
        this.size = newSize;
      }
      writeChar(ch) {
        this.ensureAlloced(1);
        this.buffer.setUint8(this.pos, ch);
        this.pos++;
        return this;
      }
      writeString(s) {
        return this.writeBytes(exports.utf8Encoder.encode(s));
      }
      writeBytes(buf) {
        this.ensureAlloced(buf.length + 4);
        this.buffer.setInt32(this.pos, buf.length);
        this.pos += 4;
        this._rawBuffer.set(buf, this.pos);
        this.pos += buf.length;
        return this;
      }
      writeInt16(i) {
        this.ensureAlloced(2);
        this.buffer.setInt16(this.pos, i);
        this.pos += 2;
        return this;
      }
      writeInt32(i) {
        this.ensureAlloced(4);
        this.buffer.setInt32(this.pos, i);
        this.pos += 4;
        return this;
      }
      writeFloat32(i) {
        this.ensureAlloced(4);
        this.buffer.setFloat32(this.pos, i);
        this.pos += 4;
        return this;
      }
      writeFloat64(i) {
        this.ensureAlloced(8);
        this.buffer.setFloat64(this.pos, i);
        this.pos += 8;
        return this;
      }
      writeUInt8(i) {
        this.ensureAlloced(1);
        this.buffer.setUint8(this.pos, i);
        this.pos += 1;
        return this;
      }
      writeUInt16(i) {
        this.ensureAlloced(2);
        this.buffer.setUint16(this.pos, i);
        this.pos += 2;
        return this;
      }
      writeUInt32(i) {
        this.ensureAlloced(4);
        this.buffer.setUint32(this.pos, i);
        this.pos += 4;
        return this;
      }
      writeInt64(i) {
        this.ensureAlloced(8);
        const hi = Math.floor(i / 4294967296);
        const lo = i - hi * 4294967296;
        this.buffer.setInt32(this.pos, hi);
        this.buffer.setUint32(this.pos + 4, lo);
        this.pos += 8;
        return this;
      }
      writeBigInt64(i) {
        let ii = i;
        if (bi.lt(ii, bi.make(0))) {
          ii = bi.add(bi.make("18446744073709551616"), i);
        }
        const hi = bi.rshift(ii, bi.make(32));
        const lo = bi.bitand(ii, bi.make(4294967295));
        this.writeUInt32(Number(hi));
        this.writeUInt32(Number(lo));
        return this;
      }
      writeBuffer(buf) {
        const len = buf.length;
        this.ensureAlloced(len);
        this._rawBuffer.set(buf, this.pos);
        this.pos += len;
        return this;
      }
      unwrap() {
        return this._rawBuffer.subarray(0, this.pos);
      }
    };
    exports.WriteBuffer = WriteBuffer;
    var WriteMessageBuffer = class {
      constructor() {
        Object.defineProperty(this, "buffer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "messagePos", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.messagePos = -1;
        this.buffer = new WriteBuffer();
      }
      reset() {
        this.messagePos = -1;
        this.buffer.reset();
        return this;
      }
      beginMessage(mtype) {
        if (this.messagePos >= 0) {
          throw new BufferError("cannot begin a new message: the previous message is not finished");
        }
        this.messagePos = this.buffer.position;
        this.buffer.writeChar(mtype);
        this.buffer.writeInt32(0);
        return this;
      }
      endMessage() {
        if (this.messagePos < 0) {
          throw new BufferError("cannot end the message: no current message");
        }
        this.buffer.buffer.setInt32(this.messagePos + 1, this.buffer.position - this.messagePos - 1);
        this.messagePos = -1;
        return this;
      }
      writeLegacyHeaders(headers) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeHeaders: no current message");
        }
        if (!headers) {
          this.buffer.writeUInt16(0);
          return this;
        }
        const entries = Object.entries(headers).filter(([_, value]) => value !== void 0);
        this.buffer.writeUInt16(entries.length);
        for (const [code, value] of entries) {
          this.buffer.writeUInt16(ifaces_1.LegacyHeaderCodes[code]);
          if (value instanceof Uint8Array) {
            this.buffer.writeUInt32(value.byteLength);
            this.buffer.writeBuffer(value);
          } else if (typeof value === "string") {
            this.buffer.writeString(value);
          } else {
            throw new BufferError("cannot write header: value is not a Uint8Array or string");
          }
        }
        return this;
      }
      writeChar(ch) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeChar: no current message");
        }
        this.buffer.writeChar(ch);
        return this;
      }
      writeString(s) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeString: no current message");
        }
        this.buffer.writeString(s);
        return this;
      }
      writeBytes(val) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeBytes: no current message");
        }
        this.buffer.writeBytes(val);
        return this;
      }
      writeInt16(i) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeInt16: no current message");
        }
        this.buffer.writeInt16(i);
        return this;
      }
      writeInt32(i) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeInt32: no current message");
        }
        this.buffer.writeInt32(i);
        return this;
      }
      writeUInt16(i) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeInt16: no current message");
        }
        this.buffer.writeUInt16(i);
        return this;
      }
      writeUInt32(i) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeInt32: no current message");
        }
        this.buffer.writeUInt32(i);
        return this;
      }
      writeBigInt64(i) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeChar: no current message");
        }
        this.buffer.writeBigInt64(i);
        return this;
      }
      writeFlags(h, l) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeChar: no current message");
        }
        this.buffer.writeUInt32(h);
        this.buffer.writeUInt32(l);
        return this;
      }
      writeBuffer(buf) {
        if (this.messagePos < 0) {
          throw new BufferError("cannot writeBuffer: no current message");
        }
        this.buffer.writeBuffer(buf);
        return this;
      }
      writeSync() {
        if (this.messagePos >= 0) {
          throw new BufferError("cannot writeSync: the previous message is not finished");
        }
        this.buffer.writeBuffer(SYNC_MESSAGE);
        return this;
      }
      writeFlush() {
        if (this.messagePos >= 0) {
          throw new BufferError("cannot writeFlush: the previous message is not finished");
        }
        this.buffer.writeBuffer(FLUSH_MESSAGE);
        return this;
      }
      unwrap() {
        if (this.messagePos >= 0) {
          throw new BufferError("cannot unwrap: an unfinished message is in the buffer");
        }
        return this.buffer.unwrap();
      }
    };
    exports.WriteMessageBuffer = WriteMessageBuffer;
    var SYNC_MESSAGE = new WriteMessageBuffer().beginMessage(chars.$S).endMessage().unwrap();
    var FLUSH_MESSAGE = new WriteMessageBuffer().beginMessage(chars.$H).endMessage().unwrap();
    var byteToHex = [];
    for (let i = 0; i < 256; ++i) {
      byteToHex.push((i + 256).toString(16).slice(1));
    }
    function uuidToBuffer(uuid) {
      const buf = new Uint8Array(16);
      for (let i = 0; i < 16; i++) {
        buf[i] = parseInt(uuid.slice(i * 2, i * 2 + 2), 16);
      }
      return buf;
    }
    exports.uuidToBuffer = uuidToBuffer;
    var ReadMessageBuffer = class {
      constructor() {
        Object.defineProperty(this, "bufs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "len", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "buf0", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "pos0", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "len0", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "curMessageType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "curMessageLen", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "curMessageLenUnread", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "curMessageReady", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.bufs = [];
        this.buf0 = null;
        this.pos0 = 0;
        this.len0 = 0;
        this.len = 0;
        this.curMessageType = 0;
        this.curMessageLen = 0;
        this.curMessageLenUnread = 0;
        this.curMessageReady = false;
      }
      get length() {
        return this.len;
      }
      feed(buf) {
        if (this.buf0 == null || this.pos0 === this.len0 && this.bufs.length === 0) {
          this.buf0 = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
          this.len0 = buf.byteLength;
          this.pos0 = 0;
          this.len = this.len0;
        } else {
          this.feedEnqueue(buf);
        }
      }
      feedEnqueue(buf) {
        this.bufs.push(buf);
        this.len += buf.byteLength;
      }
      ensureFirstBuf() {
        if (this.pos0 === this.len0) {
          this.__nextBuf();
        }
        const buf0 = this.buf0;
        if (buf0 == null || buf0.byteLength < 1) {
          throw new BufferError("empty buffer");
        }
        return buf0;
      }
      checkOverread(size) {
        if (this.curMessageLenUnread < size || size > this.len) {
          throw new BufferError("buffer overread");
        }
      }
      __nextBuf() {
        const nextBuf = this.bufs.shift();
        if (nextBuf == null) {
          throw new BufferError("buffer overread");
        }
        this.buf0 = new DataView(nextBuf.buffer, nextBuf.byteOffset, nextBuf.byteLength);
        this.pos0 = 0;
        this.len0 = nextBuf.byteLength;
      }
      discardBuffer(size) {
        this.ensureFirstBuf();
        while (true) {
          if (this.pos0 + size > this.len0) {
            const nread = this.len0 - this.pos0;
            this.pos0 = this.len0;
            this.len -= nread;
            size -= nread;
            this.ensureFirstBuf();
          } else {
            this.pos0 += size;
            this.len -= size;
            break;
          }
        }
      }
      _finishMessage() {
        this.curMessageLen = 0;
        this.curMessageLenUnread = 0;
        this.curMessageReady = false;
        this.curMessageType = 0;
      }
      __readBufferCopy(buf0, size) {
        const ret = new Uint8Array(size);
        let retPos = 0;
        while (true) {
          if (this.pos0 + size > this.len0) {
            const nread = this.len0 - this.pos0;
            ret.set(new Uint8Array(buf0.buffer, buf0.byteOffset + this.pos0, nread), retPos);
            retPos += nread;
            this.pos0 = this.len0;
            this.len -= nread;
            size -= nread;
            buf0 = this.ensureFirstBuf();
          } else {
            ret.set(new Uint8Array(buf0.buffer, buf0.byteOffset + this.pos0, size), retPos);
            this.pos0 += size;
            this.len -= size;
            break;
          }
        }
        return ret;
      }
      _readBuffer(size) {
        if (size === 0) {
          return EMPTY_BUFFER;
        }
        const buf0 = this.ensureFirstBuf();
        if (this.pos0 + size <= this.len0) {
          const ret = new Uint8Array(buf0.buffer, buf0.byteOffset + this.pos0, size);
          this.pos0 += size;
          this.len -= size;
          return ret;
        }
        return this.__readBufferCopy(buf0, size);
      }
      readBuffer(size) {
        this.checkOverread(size);
        const buf = this._readBuffer(size);
        this.curMessageLenUnread -= size;
        return buf;
      }
      readUUID() {
        const buf = this.readBuffer(16);
        return byteToHex[buf[0]] + byteToHex[buf[1]] + byteToHex[buf[2]] + byteToHex[buf[3]] + byteToHex[buf[4]] + byteToHex[buf[5]] + byteToHex[buf[6]] + byteToHex[buf[7]] + byteToHex[buf[8]] + byteToHex[buf[9]] + byteToHex[buf[10]] + byteToHex[buf[11]] + byteToHex[buf[12]] + byteToHex[buf[13]] + byteToHex[buf[14]] + byteToHex[buf[15]];
      }
      readChar() {
        this.checkOverread(1);
        const buf0 = this.ensureFirstBuf();
        const ret = buf0.getUint8(this.pos0);
        this.pos0++;
        this.curMessageLenUnread--;
        this.len--;
        return ret;
      }
      readInt16() {
        this.checkOverread(2);
        const buf0 = this.ensureFirstBuf();
        if (this.pos0 + 2 <= this.len0) {
          const ret = buf0.getInt16(this.pos0);
          this.pos0 += 2;
          this.curMessageLenUnread -= 2;
          this.len -= 2;
          return ret;
        }
        const buf = this._readBuffer(2);
        this.curMessageLenUnread -= 2;
        return new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getInt16(0);
      }
      readInt32() {
        this.checkOverread(4);
        const buf0 = this.ensureFirstBuf();
        if (this.pos0 + 4 <= this.len0) {
          const ret = buf0.getInt32(this.pos0);
          this.pos0 += 4;
          this.curMessageLenUnread -= 4;
          this.len -= 4;
          return ret;
        }
        const buf = this._readBuffer(4);
        this.curMessageLenUnread -= 4;
        return new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getInt32(0);
      }
      readUInt16() {
        this.checkOverread(2);
        const buf0 = this.ensureFirstBuf();
        if (this.pos0 + 2 <= this.len0) {
          const ret = buf0.getUint16(this.pos0);
          this.pos0 += 2;
          this.curMessageLenUnread -= 2;
          this.len -= 2;
          return ret;
        }
        const buf = this._readBuffer(2);
        this.curMessageLenUnread -= 2;
        return new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getUint16(0);
      }
      readUInt32() {
        this.checkOverread(4);
        const buf0 = this.ensureFirstBuf();
        if (this.pos0 + 4 <= this.len0) {
          const ret = buf0.getUint32(this.pos0);
          this.pos0 += 4;
          this.curMessageLenUnread -= 4;
          this.len -= 4;
          return ret;
        }
        const buf = this._readBuffer(4);
        this.curMessageLenUnread -= 4;
        return new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getUint32(0);
      }
      readBigInt64() {
        this.checkOverread(8);
        const buf0 = this.ensureFirstBuf();
        if (this.pos0 + 8 <= this.len0) {
          const ret = buf0.getBigInt64(this.pos0);
          this.pos0 += 8;
          this.curMessageLenUnread -= 8;
          this.len -= 8;
          return ret;
        }
        const buf = this._readBuffer(8);
        this.curMessageLenUnread -= 8;
        return new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getBigInt64(0);
      }
      readString() {
        const len = this.readInt32();
        const buf = this.readBuffer(len);
        return exports.utf8Decoder.decode(buf);
      }
      readLenPrefixedBuffer() {
        const len = this.readInt32();
        return this.readBuffer(len);
      }
      takeMessage() {
        if (this.curMessageReady) {
          return true;
        }
        if (this.curMessageType === 0) {
          if (this.len < 1) {
            return false;
          }
          const buf0 = this.ensureFirstBuf();
          this.curMessageType = buf0.getUint8(this.pos0);
          this.pos0++;
          this.len--;
        }
        if (this.curMessageLen === 0) {
          if (this.len < 4) {
            return false;
          }
          const buf0 = this.ensureFirstBuf();
          if (this.pos0 + 4 <= this.len0) {
            this.curMessageLen = buf0.getInt32(this.pos0);
            this.pos0 += 4;
            this.len -= 4;
          } else {
            const buf = this._readBuffer(4);
            this.curMessageLen = new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getInt32(0);
          }
          this.curMessageLenUnread = this.curMessageLen - 4;
        }
        if (this.len < this.curMessageLenUnread) {
          return false;
        }
        this.curMessageReady = true;
        return true;
      }
      getMessageType() {
        return this.curMessageType;
      }
      takeMessageType(mtype) {
        if (this.curMessageReady) {
          return this.curMessageType === mtype;
        }
        if (this.len >= 1) {
          const buf0 = this.ensureFirstBuf();
          const unreadMessageType = buf0.getUint8(this.pos0);
          return mtype === unreadMessageType && this.takeMessage();
        }
        return false;
      }
      putMessage() {
        if (!this.curMessageReady) {
          throw new BufferError("cannot put message: no message taken");
        }
        if (this.curMessageLenUnread !== this.curMessageLen - 4) {
          throw new BufferError("cannot put message: message is partially read");
        }
        this.curMessageReady = false;
      }
      discardMessage() {
        if (!this.curMessageReady) {
          throw new BufferError("no message to discard");
        }
        if (this.curMessageLenUnread > 0) {
          this.discardBuffer(this.curMessageLenUnread);
        }
        this._finishMessage();
      }
      consumeMessage() {
        if (!this.curMessageReady) {
          throw new BufferError("no message to consume");
        }
        let buf;
        if (this.curMessageLenUnread > 0) {
          buf = this._readBuffer(this.curMessageLenUnread);
          this.curMessageLenUnread = 0;
        } else {
          buf = EMPTY_BUFFER;
        }
        this._finishMessage();
        return buf;
      }
      consumeMessageInto(frb) {
        if (!this.curMessageReady) {
          throw new BufferError("no message to consume");
        }
        if (this.curMessageLenUnread > 0) {
          if (this.pos0 + this.curMessageLenUnread <= this.len0) {
            ReadBuffer.init(frb, new Uint8Array(this.buf0.buffer, this.buf0.byteOffset + this.pos0, this.curMessageLenUnread));
            this.pos0 += this.curMessageLenUnread;
            this.len -= this.curMessageLenUnread;
          } else {
            const buf = this._readBuffer(this.curMessageLenUnread);
            ReadBuffer.init(frb, buf);
          }
          this.curMessageLenUnread = 0;
        } else {
          ReadBuffer.init(frb, EMPTY_BUFFER);
        }
        this._finishMessage();
      }
      finishMessage() {
        if (this.curMessageType === 0 || !this.curMessageReady) {
          return;
        }
        if (this.curMessageLenUnread) {
          throw new BufferError(`cannot finishMessage: unread data in message "${chars.chr(this.curMessageType)}"`);
        }
        this._finishMessage();
      }
    };
    exports.ReadMessageBuffer = ReadMessageBuffer;
    var ReadBuffer = class {
      constructor(buf) {
        Object.defineProperty(this, "_rawBuffer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "buffer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "pos", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "len", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._rawBuffer = buf;
        this.buffer = new DataView(buf.buffer, buf.byteOffset, buf.byteLength);
        this.len = buf.length;
        this.pos = 0;
      }
      get position() {
        return this.pos;
      }
      get length() {
        return this.len - this.pos;
      }
      finish() {
        if (this.len !== this.pos) {
          throw new BufferError("unexpected trailing data in buffer");
        }
      }
      discard(size) {
        if (this.pos + size > this.len) {
          throw new BufferError("buffer overread");
        }
        this.pos += size;
      }
      readUInt8() {
        if (this.pos + 1 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getUint8(this.pos);
        this.pos++;
        return num;
      }
      readUInt16() {
        if (this.pos + 2 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getUint16(this.pos);
        this.pos += 2;
        return num;
      }
      readInt8() {
        if (this.pos + 1 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getInt8(this.pos);
        this.pos++;
        return num;
      }
      readInt16() {
        if (this.pos + 2 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getInt16(this.pos);
        this.pos += 2;
        return num;
      }
      readInt32() {
        if (this.pos + 4 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getInt32(this.pos);
        this.pos += 4;
        return num;
      }
      readFloat32() {
        if (this.pos + 4 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getFloat32(this.pos);
        this.pos += 4;
        return num;
      }
      readFloat64() {
        if (this.pos + 8 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getFloat64(this.pos);
        this.pos += 8;
        return num;
      }
      readUInt32() {
        if (this.pos + 4 > this.len) {
          throw new BufferError("buffer overread");
        }
        const num = this.buffer.getUint32(this.pos);
        this.pos += 4;
        return num;
      }
      reportInt64Overflow(hi, lo) {
        const bhi = bi.make(hi);
        const blo = bi.make(lo >>> 0);
        const num = bi.add(bi.mul(bhi, bi.make(4294967296)), blo);
        throw new BufferError(`integer overflow: cannot unpack <std::int64>'${num.toString()}' into JavaScript Number type without losing precision`);
      }
      readInt64() {
        if (this.pos + 8 > this.len) {
          throw new BufferError("buffer overread");
        }
        const hi = this.buffer.getInt32(this.pos);
        const lo = this.buffer.getInt32(this.pos + 4);
        this.pos += 8;
        if (hi === 0) {
          return lo >>> 0;
        } else if (hi >= -2097152 && hi < 2097152) {
          return hi * 4294967296 + (lo >>> 0);
        }
        return this.reportInt64Overflow(hi, lo);
      }
      readBigInt64Fallback() {
        if (bi.hasNativeBigInt) {
          const hi = this.buffer.getUint32(this.pos);
          const lo = this.buffer.getUint32(this.pos + 4);
          this.pos += 8;
          let res = (BigInt(hi) << BigInt(32)) + BigInt(lo);
          if (hi >= 2147483648) {
            res = BigInt("-18446744073709551616") + res;
          }
          return res;
        } else {
          const buf = this.readBuffer(8);
          const snum = compat.decodeInt64ToString(buf);
          return bi.make(snum);
        }
      }
      readBigInt64() {
        if (this.pos + 8 > this.len) {
          throw new BufferError("buffer overread");
        }
        if (!useBigInt64Fallback) {
          const ret = this.buffer.getBigInt64(this.pos);
          this.pos += 8;
          return ret;
        } else {
          return this.readBigInt64Fallback();
        }
      }
      readBuffer(size) {
        if (this.pos + size > this.len) {
          throw new BufferError("buffer overread");
        }
        const buf = this._rawBuffer.subarray(this.pos, this.pos + size);
        this.pos += size;
        return buf;
      }
      readUUID(dash = "") {
        if (this.pos + 16 > this.len) {
          throw new BufferError("buffer overread");
        }
        const buf = this._rawBuffer;
        const pos = this.pos;
        const uuid = byteToHex[buf[pos + 0]] + byteToHex[buf[pos + 1]] + byteToHex[buf[pos + 2]] + byteToHex[buf[pos + 3]] + dash + byteToHex[buf[pos + 4]] + byteToHex[buf[pos + 5]] + dash + byteToHex[buf[pos + 6]] + byteToHex[buf[pos + 7]] + dash + byteToHex[buf[pos + 8]] + byteToHex[buf[pos + 9]] + dash + byteToHex[buf[pos + 10]] + byteToHex[buf[pos + 11]] + byteToHex[buf[pos + 12]] + byteToHex[buf[pos + 13]] + byteToHex[buf[pos + 14]] + byteToHex[buf[pos + 15]];
        this.pos += 16;
        return uuid;
      }
      readString() {
        const len = this.readUInt32();
        const buf = this.readBuffer(len);
        return exports.utf8Decoder.decode(buf);
      }
      consumeAsString() {
        if (this.pos === this.len) {
          return "";
        }
        const res = exports.utf8Decoder.decode(this._rawBuffer.subarray(this.pos, this.len));
        this.pos = this.len;
        return res;
      }
      consumeAsBuffer() {
        const res = this._rawBuffer.subarray(this.pos, this.len);
        this.pos = this.len;
        return res;
      }
      sliceInto(frb, size) {
        if (this.pos + size > this.len) {
          throw new BufferError("buffer overread");
        }
        frb._rawBuffer = this._rawBuffer;
        frb.buffer = this.buffer;
        frb.pos = this.pos;
        frb.len = this.pos + size;
        this.pos += size;
      }
      static init(frb, buffer) {
        frb._rawBuffer = buffer;
        frb.buffer = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
        frb.pos = 0;
        frb.len = buffer.byteLength;
      }
      static alloc() {
        return new this(EMPTY_BUFFER);
      }
    };
    exports.ReadBuffer = ReadBuffer;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/base.js
var require_base = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/base.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.prettyPrintError = exports.EdgeDBError = void 0;
    var buffer_1 = require_buffer();
    var EdgeDBError = class extends Error {
      constructor(message, options) {
        super(void 0, options);
        Object.defineProperty(this, "source", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_message", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_query", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_attrs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperties(this, {
          _message: { writable: true, enumerable: false },
          _query: { writable: true, enumerable: false },
          _attrs: { writable: true, enumerable: false }
        });
        this._message = message !== null && message !== void 0 ? message : "";
      }
      get message() {
        return this._message + (this._query && this._attrs ? prettyPrintError(this._attrs, this._query) : "");
      }
      get name() {
        return this.constructor.name;
      }
      hasTag(tag) {
        var _a;
        const error_type = this.constructor;
        return Boolean((_a = error_type.tags) === null || _a === void 0 ? void 0 : _a[tag]);
      }
    };
    Object.defineProperty(EdgeDBError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {}
    });
    exports.EdgeDBError = EdgeDBError;
    var ErrorAttr;
    (function(ErrorAttr2) {
      ErrorAttr2[ErrorAttr2["hint"] = 1] = "hint";
      ErrorAttr2[ErrorAttr2["details"] = 2] = "details";
      ErrorAttr2[ErrorAttr2["serverTraceback"] = 257] = "serverTraceback";
      ErrorAttr2[ErrorAttr2["positionStart"] = -15] = "positionStart";
      ErrorAttr2[ErrorAttr2["positionEnd"] = -14] = "positionEnd";
      ErrorAttr2[ErrorAttr2["lineStart"] = -13] = "lineStart";
      ErrorAttr2[ErrorAttr2["columnStart"] = -12] = "columnStart";
      ErrorAttr2[ErrorAttr2["utf16ColumnStart"] = -11] = "utf16ColumnStart";
      ErrorAttr2[ErrorAttr2["lineEnd"] = -10] = "lineEnd";
      ErrorAttr2[ErrorAttr2["columnEnd"] = -9] = "columnEnd";
      ErrorAttr2[ErrorAttr2["utf16ColumnEnd"] = -8] = "utf16ColumnEnd";
      ErrorAttr2[ErrorAttr2["characterStart"] = -7] = "characterStart";
      ErrorAttr2[ErrorAttr2["characterEnd"] = -6] = "characterEnd";
    })(ErrorAttr || (ErrorAttr = {}));
    function tryParseInt(val) {
      if (val instanceof Uint8Array) {
        try {
          return parseInt(buffer_1.utf8Decoder.decode(val), 10);
        } catch (e) {
        }
      }
      return null;
    }
    function prettyPrintError(attrs, query) {
      const lineStart = tryParseInt(attrs.get(ErrorAttr.lineStart));
      const lineEnd = tryParseInt(attrs.get(ErrorAttr.lineEnd));
      const colStart = tryParseInt(attrs.get(ErrorAttr.utf16ColumnStart));
      const colEnd = tryParseInt(attrs.get(ErrorAttr.utf16ColumnEnd));
      if (lineStart == null || lineEnd == null || colStart == null || colEnd == null) {
        return "";
      }
      const queryLines = query.split("\n");
      const lineNoWidth = lineEnd.toString().length;
      let errMessage = "\n";
      errMessage += "|".padStart(lineNoWidth + 3) + "\n";
      for (let i = lineStart; i < lineEnd + 1; i++) {
        const line = queryLines[i - 1];
        const start = i === lineStart ? colStart : 0;
        const end = i === lineEnd ? colEnd : line.length;
        errMessage += ` ${i.toString().padStart(lineNoWidth)} | ${line}
`;
        errMessage += `${"|".padStart(lineNoWidth + 3)} ${"".padStart(end - start, "^").padStart(end)}
`;
      }
      if (attrs.has(ErrorAttr.hint)) {
        errMessage += `Hint: ${buffer_1.utf8Decoder.decode(attrs.get(ErrorAttr.hint))}
`;
      }
      return errMessage;
    }
    exports.prettyPrintError = prettyPrintError;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/tags.js
var require_tags = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/tags.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SHOULD_RETRY = exports.SHOULD_RECONNECT = void 0;
    exports.SHOULD_RECONNECT = Symbol("SHOULD_RECONNECT");
    exports.SHOULD_RETRY = Symbol("SHOULD_RETRY");
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/index.js
var require_errors = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DuplicateDatabaseDefinitionError = exports.DuplicateUserDefinitionError = exports.DuplicatePropertyDefinitionError = exports.DuplicateLinkDefinitionError = exports.DuplicateModuleDefinitionError = exports.DuplicateDefinitionError = exports.InvalidCastDefinitionError = exports.InvalidConstraintDefinitionError = exports.InvalidFunctionDefinitionError = exports.InvalidAliasDefinitionError = exports.InvalidOperatorDefinitionError = exports.InvalidDatabaseDefinitionError = exports.InvalidUserDefinitionError = exports.InvalidPropertyDefinitionError = exports.InvalidLinkDefinitionError = exports.InvalidModuleDefinitionError = exports.InvalidDefinitionError = exports.SchemaDefinitionError = exports.SchemaError = exports.UnknownParameterError = exports.UnknownDatabaseError = exports.UnknownUserError = exports.UnknownPropertyError = exports.UnknownLinkError = exports.UnknownModuleError = exports.InvalidReferenceError = exports.InvalidPropertyTargetError = exports.InvalidLinkTargetError = exports.InvalidTargetError = exports.InvalidTypeError = exports.GraphQLSyntaxError = exports.SchemaSyntaxError = exports.EdgeQLSyntaxError = exports.InvalidSyntaxError = exports.QueryError = exports.DisabledCapabilityError = exports.UnsupportedCapabilityError = exports.CapabilityError = exports.ResultCardinalityMismatchError = exports.StateMismatchError = exports.ParameterTypeMismatchError = exports.InputDataError = exports.UnexpectedMessageError = exports.TypeSpecNotFoundError = exports.UnsupportedProtocolVersionError = exports.BinaryProtocolError = exports.ProtocolError = exports.UnsupportedFeatureError = exports.InternalServerError = exports.EdgeDBError = void 0;
    exports.InternalClientError = exports.NoDataError = exports.InvalidArgumentError = exports.UnknownArgumentError = exports.MissingArgumentError = exports.QueryArgumentError = exports.InterfaceError = exports.ClientConnectionClosedError = exports.ClientConnectionTimeoutError = exports.ClientConnectionFailedTemporarilyError = exports.ClientConnectionFailedError = exports.ClientConnectionError = exports.ClientError = exports.WarningMessage = exports.LogMessage = exports.UnsupportedBackendFeatureError = exports.BackendError = exports.BackendUnavailableError = exports.AvailabilityError = exports.AuthenticationError = exports.AccessError = exports.ConfigurationError = exports.WatchError = exports.TransactionDeadlockError = exports.TransactionSerializationError = exports.TransactionConflictError = exports.TransactionError = exports.MissingRequiredError = exports.CardinalityViolationError = exports.ConstraintViolationError = exports.IntegrityError = exports.QueryAssertionError = exports.AccessPolicyError = exports.NumericOutOfRangeError = exports.DivisionByZeroError = exports.InvalidValueError = exports.ExecutionError = exports.IdleTransactionTimeoutError = exports.TransactionTimeoutError = exports.QueryTimeoutError = exports.IdleSessionTimeoutError = exports.SessionTimeoutError = exports.DuplicateMigrationError = exports.DuplicateCastDefinitionError = exports.DuplicateConstraintDefinitionError = exports.DuplicateFunctionDefinitionError = exports.DuplicateViewDefinitionError = exports.DuplicateOperatorDefinitionError = void 0;
    var base_1 = require_base();
    var tags = __importStar(require_tags());
    var base_2 = require_base();
    Object.defineProperty(exports, "EdgeDBError", { enumerable: true, get: function() {
      return base_2.EdgeDBError;
    } });
    __exportStar(require_tags(), exports);
    var InternalServerError = class extends base_1.EdgeDBError {
      get code() {
        return 16777216;
      }
    };
    exports.InternalServerError = InternalServerError;
    var UnsupportedFeatureError = class extends base_1.EdgeDBError {
      get code() {
        return 33554432;
      }
    };
    exports.UnsupportedFeatureError = UnsupportedFeatureError;
    var ProtocolError = class extends base_1.EdgeDBError {
      get code() {
        return 50331648;
      }
    };
    exports.ProtocolError = ProtocolError;
    var BinaryProtocolError = class extends ProtocolError {
      get code() {
        return 50397184;
      }
    };
    exports.BinaryProtocolError = BinaryProtocolError;
    var UnsupportedProtocolVersionError = class extends BinaryProtocolError {
      get code() {
        return 50397185;
      }
    };
    exports.UnsupportedProtocolVersionError = UnsupportedProtocolVersionError;
    var TypeSpecNotFoundError = class extends BinaryProtocolError {
      get code() {
        return 50397186;
      }
    };
    exports.TypeSpecNotFoundError = TypeSpecNotFoundError;
    var UnexpectedMessageError = class extends BinaryProtocolError {
      get code() {
        return 50397187;
      }
    };
    exports.UnexpectedMessageError = UnexpectedMessageError;
    var InputDataError = class extends ProtocolError {
      get code() {
        return 50462720;
      }
    };
    exports.InputDataError = InputDataError;
    var ParameterTypeMismatchError = class extends InputDataError {
      get code() {
        return 50462976;
      }
    };
    exports.ParameterTypeMismatchError = ParameterTypeMismatchError;
    var StateMismatchError = class extends InputDataError {
      get code() {
        return 50463232;
      }
    };
    Object.defineProperty(StateMismatchError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { [tags.SHOULD_RETRY]: true }
    });
    exports.StateMismatchError = StateMismatchError;
    var ResultCardinalityMismatchError = class extends ProtocolError {
      get code() {
        return 50528256;
      }
    };
    exports.ResultCardinalityMismatchError = ResultCardinalityMismatchError;
    var CapabilityError = class extends ProtocolError {
      get code() {
        return 50593792;
      }
    };
    exports.CapabilityError = CapabilityError;
    var UnsupportedCapabilityError = class extends CapabilityError {
      get code() {
        return 50594048;
      }
    };
    exports.UnsupportedCapabilityError = UnsupportedCapabilityError;
    var DisabledCapabilityError = class extends CapabilityError {
      get code() {
        return 50594304;
      }
    };
    exports.DisabledCapabilityError = DisabledCapabilityError;
    var QueryError = class extends base_1.EdgeDBError {
      get code() {
        return 67108864;
      }
    };
    exports.QueryError = QueryError;
    var InvalidSyntaxError = class extends QueryError {
      get code() {
        return 67174400;
      }
    };
    exports.InvalidSyntaxError = InvalidSyntaxError;
    var EdgeQLSyntaxError = class extends InvalidSyntaxError {
      get code() {
        return 67174656;
      }
    };
    exports.EdgeQLSyntaxError = EdgeQLSyntaxError;
    var SchemaSyntaxError = class extends InvalidSyntaxError {
      get code() {
        return 67174912;
      }
    };
    exports.SchemaSyntaxError = SchemaSyntaxError;
    var GraphQLSyntaxError = class extends InvalidSyntaxError {
      get code() {
        return 67175168;
      }
    };
    exports.GraphQLSyntaxError = GraphQLSyntaxError;
    var InvalidTypeError = class extends QueryError {
      get code() {
        return 67239936;
      }
    };
    exports.InvalidTypeError = InvalidTypeError;
    var InvalidTargetError = class extends InvalidTypeError {
      get code() {
        return 67240192;
      }
    };
    exports.InvalidTargetError = InvalidTargetError;
    var InvalidLinkTargetError = class extends InvalidTargetError {
      get code() {
        return 67240193;
      }
    };
    exports.InvalidLinkTargetError = InvalidLinkTargetError;
    var InvalidPropertyTargetError = class extends InvalidTargetError {
      get code() {
        return 67240194;
      }
    };
    exports.InvalidPropertyTargetError = InvalidPropertyTargetError;
    var InvalidReferenceError = class extends QueryError {
      get code() {
        return 67305472;
      }
    };
    exports.InvalidReferenceError = InvalidReferenceError;
    var UnknownModuleError = class extends InvalidReferenceError {
      get code() {
        return 67305473;
      }
    };
    exports.UnknownModuleError = UnknownModuleError;
    var UnknownLinkError = class extends InvalidReferenceError {
      get code() {
        return 67305474;
      }
    };
    exports.UnknownLinkError = UnknownLinkError;
    var UnknownPropertyError = class extends InvalidReferenceError {
      get code() {
        return 67305475;
      }
    };
    exports.UnknownPropertyError = UnknownPropertyError;
    var UnknownUserError = class extends InvalidReferenceError {
      get code() {
        return 67305476;
      }
    };
    exports.UnknownUserError = UnknownUserError;
    var UnknownDatabaseError = class extends InvalidReferenceError {
      get code() {
        return 67305477;
      }
    };
    exports.UnknownDatabaseError = UnknownDatabaseError;
    var UnknownParameterError = class extends InvalidReferenceError {
      get code() {
        return 67305478;
      }
    };
    exports.UnknownParameterError = UnknownParameterError;
    var SchemaError = class extends QueryError {
      get code() {
        return 67371008;
      }
    };
    exports.SchemaError = SchemaError;
    var SchemaDefinitionError = class extends QueryError {
      get code() {
        return 67436544;
      }
    };
    exports.SchemaDefinitionError = SchemaDefinitionError;
    var InvalidDefinitionError = class extends SchemaDefinitionError {
      get code() {
        return 67436800;
      }
    };
    exports.InvalidDefinitionError = InvalidDefinitionError;
    var InvalidModuleDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436801;
      }
    };
    exports.InvalidModuleDefinitionError = InvalidModuleDefinitionError;
    var InvalidLinkDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436802;
      }
    };
    exports.InvalidLinkDefinitionError = InvalidLinkDefinitionError;
    var InvalidPropertyDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436803;
      }
    };
    exports.InvalidPropertyDefinitionError = InvalidPropertyDefinitionError;
    var InvalidUserDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436804;
      }
    };
    exports.InvalidUserDefinitionError = InvalidUserDefinitionError;
    var InvalidDatabaseDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436805;
      }
    };
    exports.InvalidDatabaseDefinitionError = InvalidDatabaseDefinitionError;
    var InvalidOperatorDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436806;
      }
    };
    exports.InvalidOperatorDefinitionError = InvalidOperatorDefinitionError;
    var InvalidAliasDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436807;
      }
    };
    exports.InvalidAliasDefinitionError = InvalidAliasDefinitionError;
    var InvalidFunctionDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436808;
      }
    };
    exports.InvalidFunctionDefinitionError = InvalidFunctionDefinitionError;
    var InvalidConstraintDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436809;
      }
    };
    exports.InvalidConstraintDefinitionError = InvalidConstraintDefinitionError;
    var InvalidCastDefinitionError = class extends InvalidDefinitionError {
      get code() {
        return 67436810;
      }
    };
    exports.InvalidCastDefinitionError = InvalidCastDefinitionError;
    var DuplicateDefinitionError = class extends SchemaDefinitionError {
      get code() {
        return 67437056;
      }
    };
    exports.DuplicateDefinitionError = DuplicateDefinitionError;
    var DuplicateModuleDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437057;
      }
    };
    exports.DuplicateModuleDefinitionError = DuplicateModuleDefinitionError;
    var DuplicateLinkDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437058;
      }
    };
    exports.DuplicateLinkDefinitionError = DuplicateLinkDefinitionError;
    var DuplicatePropertyDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437059;
      }
    };
    exports.DuplicatePropertyDefinitionError = DuplicatePropertyDefinitionError;
    var DuplicateUserDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437060;
      }
    };
    exports.DuplicateUserDefinitionError = DuplicateUserDefinitionError;
    var DuplicateDatabaseDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437061;
      }
    };
    exports.DuplicateDatabaseDefinitionError = DuplicateDatabaseDefinitionError;
    var DuplicateOperatorDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437062;
      }
    };
    exports.DuplicateOperatorDefinitionError = DuplicateOperatorDefinitionError;
    var DuplicateViewDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437063;
      }
    };
    exports.DuplicateViewDefinitionError = DuplicateViewDefinitionError;
    var DuplicateFunctionDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437064;
      }
    };
    exports.DuplicateFunctionDefinitionError = DuplicateFunctionDefinitionError;
    var DuplicateConstraintDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437065;
      }
    };
    exports.DuplicateConstraintDefinitionError = DuplicateConstraintDefinitionError;
    var DuplicateCastDefinitionError = class extends DuplicateDefinitionError {
      get code() {
        return 67437066;
      }
    };
    exports.DuplicateCastDefinitionError = DuplicateCastDefinitionError;
    var DuplicateMigrationError = class extends DuplicateDefinitionError {
      get code() {
        return 67437067;
      }
    };
    exports.DuplicateMigrationError = DuplicateMigrationError;
    var SessionTimeoutError = class extends QueryError {
      get code() {
        return 67502080;
      }
    };
    exports.SessionTimeoutError = SessionTimeoutError;
    var IdleSessionTimeoutError = class extends SessionTimeoutError {
      get code() {
        return 67502336;
      }
    };
    Object.defineProperty(IdleSessionTimeoutError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { [tags.SHOULD_RETRY]: true }
    });
    exports.IdleSessionTimeoutError = IdleSessionTimeoutError;
    var QueryTimeoutError = class extends SessionTimeoutError {
      get code() {
        return 67502592;
      }
    };
    exports.QueryTimeoutError = QueryTimeoutError;
    var TransactionTimeoutError = class extends SessionTimeoutError {
      get code() {
        return 67504640;
      }
    };
    exports.TransactionTimeoutError = TransactionTimeoutError;
    var IdleTransactionTimeoutError = class extends TransactionTimeoutError {
      get code() {
        return 67504641;
      }
    };
    exports.IdleTransactionTimeoutError = IdleTransactionTimeoutError;
    var ExecutionError = class extends base_1.EdgeDBError {
      get code() {
        return 83886080;
      }
    };
    exports.ExecutionError = ExecutionError;
    var InvalidValueError = class extends ExecutionError {
      get code() {
        return 83951616;
      }
    };
    exports.InvalidValueError = InvalidValueError;
    var DivisionByZeroError = class extends InvalidValueError {
      get code() {
        return 83951617;
      }
    };
    exports.DivisionByZeroError = DivisionByZeroError;
    var NumericOutOfRangeError = class extends InvalidValueError {
      get code() {
        return 83951618;
      }
    };
    exports.NumericOutOfRangeError = NumericOutOfRangeError;
    var AccessPolicyError = class extends InvalidValueError {
      get code() {
        return 83951619;
      }
    };
    exports.AccessPolicyError = AccessPolicyError;
    var QueryAssertionError = class extends InvalidValueError {
      get code() {
        return 83951620;
      }
    };
    exports.QueryAssertionError = QueryAssertionError;
    var IntegrityError = class extends ExecutionError {
      get code() {
        return 84017152;
      }
    };
    exports.IntegrityError = IntegrityError;
    var ConstraintViolationError = class extends IntegrityError {
      get code() {
        return 84017153;
      }
    };
    exports.ConstraintViolationError = ConstraintViolationError;
    var CardinalityViolationError = class extends IntegrityError {
      get code() {
        return 84017154;
      }
    };
    exports.CardinalityViolationError = CardinalityViolationError;
    var MissingRequiredError = class extends IntegrityError {
      get code() {
        return 84017155;
      }
    };
    exports.MissingRequiredError = MissingRequiredError;
    var TransactionError = class extends ExecutionError {
      get code() {
        return 84082688;
      }
    };
    exports.TransactionError = TransactionError;
    var TransactionConflictError = class extends TransactionError {
      get code() {
        return 84082944;
      }
    };
    Object.defineProperty(TransactionConflictError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { [tags.SHOULD_RETRY]: true }
    });
    exports.TransactionConflictError = TransactionConflictError;
    var TransactionSerializationError = class extends TransactionConflictError {
      get code() {
        return 84082945;
      }
    };
    Object.defineProperty(TransactionSerializationError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { [tags.SHOULD_RETRY]: true }
    });
    exports.TransactionSerializationError = TransactionSerializationError;
    var TransactionDeadlockError = class extends TransactionConflictError {
      get code() {
        return 84082946;
      }
    };
    Object.defineProperty(TransactionDeadlockError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { [tags.SHOULD_RETRY]: true }
    });
    exports.TransactionDeadlockError = TransactionDeadlockError;
    var WatchError = class extends ExecutionError {
      get code() {
        return 84148224;
      }
    };
    exports.WatchError = WatchError;
    var ConfigurationError = class extends base_1.EdgeDBError {
      get code() {
        return 100663296;
      }
    };
    exports.ConfigurationError = ConfigurationError;
    var AccessError = class extends base_1.EdgeDBError {
      get code() {
        return 117440512;
      }
    };
    exports.AccessError = AccessError;
    var AuthenticationError = class extends AccessError {
      get code() {
        return 117506048;
      }
    };
    exports.AuthenticationError = AuthenticationError;
    var AvailabilityError = class extends base_1.EdgeDBError {
      get code() {
        return 134217728;
      }
    };
    exports.AvailabilityError = AvailabilityError;
    var BackendUnavailableError = class extends AvailabilityError {
      get code() {
        return 134217729;
      }
    };
    Object.defineProperty(BackendUnavailableError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: { [tags.SHOULD_RETRY]: true }
    });
    exports.BackendUnavailableError = BackendUnavailableError;
    var BackendError = class extends base_1.EdgeDBError {
      get code() {
        return 150994944;
      }
    };
    exports.BackendError = BackendError;
    var UnsupportedBackendFeatureError = class extends BackendError {
      get code() {
        return 150995200;
      }
    };
    exports.UnsupportedBackendFeatureError = UnsupportedBackendFeatureError;
    var LogMessage = class extends base_1.EdgeDBError {
      get code() {
        return 4026531840;
      }
    };
    exports.LogMessage = LogMessage;
    var WarningMessage = class extends LogMessage {
      get code() {
        return 4026597376;
      }
    };
    exports.WarningMessage = WarningMessage;
    var ClientError = class extends base_1.EdgeDBError {
      get code() {
        return 4278190080;
      }
    };
    exports.ClientError = ClientError;
    var ClientConnectionError = class extends ClientError {
      get code() {
        return 4278255616;
      }
    };
    exports.ClientConnectionError = ClientConnectionError;
    var ClientConnectionFailedError = class extends ClientConnectionError {
      get code() {
        return 4278255872;
      }
    };
    exports.ClientConnectionFailedError = ClientConnectionFailedError;
    var ClientConnectionFailedTemporarilyError = class extends ClientConnectionFailedError {
      get code() {
        return 4278255873;
      }
    };
    Object.defineProperty(ClientConnectionFailedTemporarilyError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        [tags.SHOULD_RECONNECT]: true,
        [tags.SHOULD_RETRY]: true
      }
    });
    exports.ClientConnectionFailedTemporarilyError = ClientConnectionFailedTemporarilyError;
    var ClientConnectionTimeoutError = class extends ClientConnectionError {
      get code() {
        return 4278256128;
      }
    };
    Object.defineProperty(ClientConnectionTimeoutError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        [tags.SHOULD_RECONNECT]: true,
        [tags.SHOULD_RETRY]: true
      }
    });
    exports.ClientConnectionTimeoutError = ClientConnectionTimeoutError;
    var ClientConnectionClosedError = class extends ClientConnectionError {
      get code() {
        return 4278256384;
      }
    };
    Object.defineProperty(ClientConnectionClosedError, "tags", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: {
        [tags.SHOULD_RECONNECT]: true,
        [tags.SHOULD_RETRY]: true
      }
    });
    exports.ClientConnectionClosedError = ClientConnectionClosedError;
    var InterfaceError = class extends ClientError {
      get code() {
        return 4278321152;
      }
    };
    exports.InterfaceError = InterfaceError;
    var QueryArgumentError = class extends InterfaceError {
      get code() {
        return 4278321408;
      }
    };
    exports.QueryArgumentError = QueryArgumentError;
    var MissingArgumentError = class extends QueryArgumentError {
      get code() {
        return 4278321409;
      }
    };
    exports.MissingArgumentError = MissingArgumentError;
    var UnknownArgumentError = class extends QueryArgumentError {
      get code() {
        return 4278321410;
      }
    };
    exports.UnknownArgumentError = UnknownArgumentError;
    var InvalidArgumentError = class extends QueryArgumentError {
      get code() {
        return 4278321411;
      }
    };
    exports.InvalidArgumentError = InvalidArgumentError;
    var NoDataError = class extends ClientError {
      get code() {
        return 4278386688;
      }
    };
    exports.NoDataError = NoDataError;
    var InternalClientError = class extends ClientError {
      get code() {
        return 4278452224;
      }
    };
    exports.InternalClientError = InternalClientError;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/lru.js
var require_lru = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/lru.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var errors_1 = require_errors();
    var Node = class {
      constructor(key, value) {
        Object.defineProperty(this, "key", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "value", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "next", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "prev", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.key = key;
        this.value = value;
        this.next = null;
        this.prev = null;
      }
    };
    var Deque = class {
      constructor() {
        Object.defineProperty(this, "head", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "tail", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "len", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.head = null;
        this.tail = null;
        this.len = 0;
      }
      get length() {
        return this.len;
      }
      push(key, value) {
        const node = new Node(key, value);
        if (this.head == null) {
          this.head = node;
          this.tail = node;
        } else {
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
        }
        this.len++;
        return node;
      }
      moveToTop(node) {
        if (node.prev == null) {
          return;
        }
        const prev = node.prev;
        const next = node.next;
        prev.next = next;
        if (next != null) {
          next.prev = prev;
        }
        if (this.tail === node) {
          this.tail = prev;
        }
        node.prev = null;
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      }
      deleteBottom() {
        if (!this.len || !this.tail || !this.head) {
          return null;
        }
        if (this.tail === this.head) {
          this.len = 0;
          const node = this.tail;
          this.tail = null;
          this.head = null;
          return node;
        }
        const tail = this.tail;
        const beforeLast = this.tail.prev;
        beforeLast.next = null;
        this.tail.prev = null;
        this.tail.next = null;
        this.tail = beforeLast;
        this.len--;
        return tail;
      }
    };
    var LRU = class {
      constructor({ capacity }) {
        Object.defineProperty(this, "capacity", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "map", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "deque", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        if (capacity <= 0) {
          throw new TypeError("capacity is expected to be greater than 0");
        }
        this.capacity = capacity;
        this.map = /* @__PURE__ */ new Map();
        this.deque = new Deque();
      }
      get length() {
        const len = this.map.size;
        if (len !== this.deque.length) {
          throw new errors_1.InternalClientError("deque & map disagree on elements count");
        }
        return len;
      }
      has(key) {
        return this.map.has(key);
      }
      get(key) {
        const node = this.map.get(key);
        if (node != null) {
          this.deque.moveToTop(node);
          return node.value;
        }
        return void 0;
      }
      set(key, value) {
        const existingNode = this.map.get(key);
        if (existingNode != null) {
          existingNode.value = value;
          this.deque.moveToTop(existingNode);
        } else {
          const newNode = this.deque.push(key, value);
          this.map.set(key, newNode);
          while (this.deque.length > this.capacity) {
            const bottomNode = this.deque.deleteBottom();
            this.map.delete(bottomNode.key);
          }
        }
      }
      *keys() {
        let node = this.deque.head;
        while (node != null) {
          yield node.key;
          node = node.next;
        }
      }
      *entries() {
        let node = this.deque.head;
        while (node != null) {
          yield [node.key, node.value];
          node = node.next;
        }
      }
      *values() {
        let node = this.deque.head;
        while (node != null) {
          yield node.value;
          node = node.next;
        }
      }
    };
    exports.default = LRU;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/consts.js
var require_consts = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/consts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AT_LEAST_ONE = exports.MANY = exports.ONE = exports.AT_MOST_ONE = exports.NO_RESULT = exports.KNOWN_TYPENAMES = exports.KNOWN_TYPES = exports.INVALID_CODEC_ID = exports.NULL_CODEC_ID = void 0;
    exports.NULL_CODEC_ID = "00000000000000000000000000000000";
    exports.INVALID_CODEC_ID = "ffffffffffffffffffffffffffffffff";
    exports.KNOWN_TYPES = /* @__PURE__ */ new Map([
      ["00000000000000000000000000000001", "anytype"],
      ["00000000000000000000000000000002", "anytuple"],
      ["000000000000000000000000000000f0", "std"],
      ["000000000000000000000000000000ff", "empty-tuple"],
      ["00000000000000000000000000000100", "std::uuid"],
      ["00000000000000000000000000000101", "std::str"],
      ["00000000000000000000000000000102", "std::bytes"],
      ["00000000000000000000000000000103", "std::int16"],
      ["00000000000000000000000000000104", "std::int32"],
      ["00000000000000000000000000000105", "std::int64"],
      ["00000000000000000000000000000106", "std::float32"],
      ["00000000000000000000000000000107", "std::float64"],
      ["00000000000000000000000000000108", "std::decimal"],
      ["00000000000000000000000000000109", "std::bool"],
      ["0000000000000000000000000000010a", "std::datetime"],
      ["0000000000000000000000000000010b", "cal::local_datetime"],
      ["0000000000000000000000000000010c", "cal::local_date"],
      ["0000000000000000000000000000010d", "cal::local_time"],
      ["0000000000000000000000000000010e", "std::duration"],
      ["0000000000000000000000000000010f", "std::json"],
      ["00000000000000000000000000000110", "std::bigint"],
      ["00000000000000000000000000000111", "cal::relative_duration"],
      ["00000000000000000000000000000112", "cal::date_duration"],
      ["00000000000000000000000000000130", "cfg::memory"],
      ["9565dd8804f511eea6910b6ebe179825", "ext::pgvector::vector"]
    ]);
    exports.KNOWN_TYPENAMES = (() => {
      const res = /* @__PURE__ */ new Map();
      for (const [id, name] of exports.KNOWN_TYPES.entries()) {
        res.set(name, id);
      }
      return res;
    })();
    exports.NO_RESULT = 110;
    exports.AT_MOST_ONE = 111;
    exports.ONE = 65;
    exports.MANY = 109;
    exports.AT_LEAST_ONE = 77;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/ifaces.js
var require_ifaces2 = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/ifaces.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ScalarCodec = exports.Codec = void 0;
    var buffer_1 = require_buffer();
    var consts_1 = require_consts();
    var Codec = class {
      constructor(tid) {
        Object.defineProperty(this, "tid", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "tidBuffer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.tid = tid;
        this.tidBuffer = (0, buffer_1.uuidToBuffer)(tid);
      }
      getKnownTypeName() {
        return "anytype";
      }
    };
    exports.Codec = Codec;
    var ScalarCodec = class extends Codec {
      constructor(tid, derivedFromTid = null) {
        super(tid);
        Object.defineProperty(this, "derivedFromTid", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "typeName", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "unknown"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
        this.derivedFromTid = derivedFromTid;
      }
      setTypeName(typeName) {
        this.typeName = typeName;
      }
      derive(tid) {
        const self = this.constructor;
        return new self(tid, this.tid);
      }
      getSubcodecs() {
        return [];
      }
      getKind() {
        return "scalar";
      }
      getKnownTypeName() {
        if (this.typeName) {
          return this.typeName;
        }
        if (this.derivedFromTid) {
          return consts_1.KNOWN_TYPES.get(this.derivedFromTid);
        }
        return consts_1.KNOWN_TYPES.get(this.tid) || "anytype";
      }
    };
    exports.ScalarCodec = ScalarCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/boolean.js
var require_boolean = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/boolean.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BoolCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    var BoolCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "boolean"
        });
      }
      encode(buf, object) {
        const typeOf = typeof object;
        if (typeOf !== "boolean" && typeOf !== "number") {
          throw new errors_1.InvalidArgumentError(`a boolean or a number was expected, got "${object}"`);
        }
        buf.writeInt32(1);
        buf.writeChar(object ? 1 : 0);
      }
      decode(buf) {
        return buf.readUInt8() !== 0;
      }
    };
    exports.BoolCodec = BoolCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/numbers.js
var require_numbers = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/numbers.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Float64Codec = exports.Float32Codec = exports.Int16Codec = exports.Int32Codec = exports.Int64BigintCodec = exports.Int64Codec = void 0;
    var bi = __importStar(require_bigint());
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    var Int64Codec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "number"
        });
      }
      encode(buf, object) {
        if (typeof object !== "number") {
          throw new errors_1.InvalidArgumentError(`a number was expected, got "${object}"`);
        }
        buf.writeInt32(8);
        buf.writeInt64(object);
      }
      decode(buf) {
        return buf.readInt64();
      }
    };
    exports.Int64Codec = Int64Codec;
    var Int64BigintCodec = class extends ifaces_1.ScalarCodec {
      encode(buf, object) {
        if (!bi.isBigInt(object)) {
          throw new errors_1.InvalidArgumentError(`a bigint was expected, got "${object}"`);
        }
        buf.writeInt32(8);
        buf.writeBigInt64(object);
      }
      decode(buf) {
        return buf.readBigInt64();
      }
    };
    exports.Int64BigintCodec = Int64BigintCodec;
    var Int32Codec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "number"
        });
      }
      encode(buf, object) {
        if (typeof object !== "number") {
          throw new errors_1.InvalidArgumentError(`a number was expected, got "${object}"`);
        }
        buf.writeInt32(4);
        buf.writeInt32(object);
      }
      decode(buf) {
        return buf.readInt32();
      }
    };
    exports.Int32Codec = Int32Codec;
    var Int16Codec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "number"
        });
      }
      encode(buf, object) {
        if (typeof object !== "number") {
          throw new errors_1.InvalidArgumentError(`a number was expected, got "${object}"`);
        }
        buf.writeInt32(2);
        buf.writeInt16(object);
      }
      decode(buf) {
        return buf.readInt16();
      }
    };
    exports.Int16Codec = Int16Codec;
    var Float32Codec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "number"
        });
      }
      encode(buf, object) {
        if (typeof object !== "number") {
          throw new errors_1.InvalidArgumentError(`a number was expected, got "${object}"`);
        }
        buf.writeInt32(4);
        buf.writeFloat32(object);
      }
      decode(buf) {
        return buf.readFloat32();
      }
    };
    exports.Float32Codec = Float32Codec;
    var Float64Codec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "number"
        });
      }
      encode(buf, object) {
        if (typeof object !== "number") {
          throw new errors_1.InvalidArgumentError(`a number was expected, got "${object}"`);
        }
        buf.writeInt32(8);
        buf.writeFloat64(object);
      }
      decode(buf) {
        return buf.readFloat64();
      }
    };
    exports.Float64Codec = Float64Codec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/numerics.js
var require_numerics = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/numerics.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DecimalStringCodec = exports.BigIntCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    var NUMERIC_POS = 0;
    var NUMERIC_NEG = 16384;
    var BigIntCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "bigint"
        });
      }
      encode(buf, object) {
        if (typeof object !== "bigint") {
          throw new errors_1.InvalidArgumentError(`a bigint was expected, got "${object}"`);
        }
        const NBASE = BigInt("10000");
        const ZERO = BigInt("0");
        const digits = [];
        let sign = NUMERIC_POS;
        let uval = object;
        if (object === ZERO) {
          buf.writeUInt32(8);
          buf.writeUInt32(0);
          buf.writeUInt16(NUMERIC_POS);
          buf.writeUInt16(0);
          return;
        }
        if (object < ZERO) {
          sign = NUMERIC_NEG;
          uval = -uval;
        }
        while (uval) {
          const mod = uval % NBASE;
          uval /= NBASE;
          digits.push(mod);
        }
        buf.writeUInt32(8 + digits.length * 2);
        buf.writeUInt16(digits.length);
        buf.writeUInt16(digits.length - 1);
        buf.writeUInt16(sign);
        buf.writeUInt16(0);
        for (let i = digits.length - 1; i >= 0; i--) {
          buf.writeUInt16(Number(digits[i]));
        }
      }
      decode(buf) {
        return BigInt(decodeBigIntToString(buf));
      }
    };
    exports.BigIntCodec = BigIntCodec;
    var DecimalStringCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "string"
        });
      }
      encode(buf, object) {
        if (typeof object !== "string") {
          throw new errors_1.InvalidArgumentError(`a string was expected, got "${object}"`);
        }
        const match = object.match(/^(-?)([0-9]+)(?:\.([0-9]+))?(?:[eE]([-+]?[0-9]+))?$/);
        if (!match) {
          throw new errors_1.InvalidArgumentError(`invalid decimal string "${object}"`);
        }
        const [_, sign, int, _frac, _exp] = match;
        const frac = _frac !== null && _frac !== void 0 ? _frac : "";
        const exp = _exp ? parseInt(_exp, 10) : 0;
        const sdigits = int.padStart(Math.ceil(int.length / 4) * 4, "0") + frac.padEnd(Math.ceil(frac.length / 4) * 4, "0");
        const digits = [];
        for (let i = 0, len = sdigits.length; i < len; i += 4) {
          digits.push(parseInt(sdigits.slice(i, i + 4), 10));
        }
        buf.writeUInt32(8 + digits.length * 2);
        buf.writeUInt16(digits.length);
        buf.writeInt16(Math.ceil((int.length + exp) / 4) - 1);
        buf.writeUInt16(sign === "-" ? NUMERIC_NEG : NUMERIC_POS);
        buf.writeUInt16(Math.max(frac.length - exp, 0));
        for (let i = 0, len = digits.length; i < len; i++) {
          buf.writeUInt16(digits[i]);
        }
      }
      decode(buf) {
        return decodeDecimalToString(buf);
      }
    };
    exports.DecimalStringCodec = DecimalStringCodec;
    function decodeBigIntToString(buf) {
      const ndigits = buf.readUInt16();
      const weight = buf.readInt16();
      const sign = buf.readUInt16();
      const dscale = buf.readUInt16();
      let result = "";
      switch (sign) {
        case NUMERIC_POS:
          break;
        case NUMERIC_NEG:
          result += "-";
          break;
        default:
          throw new errors_1.ProtocolError("bad bigint sign data");
      }
      if (dscale !== 0) {
        throw new errors_1.ProtocolError("bigint data has fractional part");
      }
      if (ndigits === 0) {
        return "0";
      }
      let i = weight;
      let d = 0;
      while (i >= 0) {
        if (i <= weight && d < ndigits) {
          const digit = buf.readUInt16().toString();
          result += d > 0 ? digit.padStart(4, "0") : digit;
          d++;
        } else {
          result += "0000";
        }
        i--;
      }
      return result;
    }
    function decodeDecimalToString(buf) {
      const ndigits = buf.readUInt16();
      const weight = buf.readInt16();
      const sign = buf.readUInt16();
      const dscale = buf.readUInt16();
      let result = "";
      switch (sign) {
        case NUMERIC_POS:
          break;
        case NUMERIC_NEG:
          result += "-";
          break;
        default:
          throw new errors_1.ProtocolError("bad decimal sign data");
      }
      let d = 0;
      if (weight < 0) {
        d = weight + 1;
        result += "0";
      } else {
        for (d = 0; d <= weight; d++) {
          const digit = d < ndigits ? buf.readUInt16() : 0;
          let sdigit = digit.toString();
          if (d > 0) {
            sdigit = sdigit.padStart(4, "0");
          }
          result += sdigit;
        }
      }
      if (dscale > 0) {
        result += ".";
        const end = result.length + dscale;
        for (let i = 0; i < dscale; d++, i += 4) {
          const digit = d >= 0 && d < ndigits ? buf.readUInt16() : 0;
          result += digit.toString().padStart(4, "0");
        }
        result = result.slice(0, end);
      }
      return result;
    }
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/text.js
var require_text = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/text.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StrCodec = void 0;
    var buffer_1 = require_buffer();
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    var StrCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "string"
        });
      }
      encode(buf, object) {
        if (typeof object !== "string") {
          throw new errors_1.InvalidArgumentError(`a string was expected, got "${object}"`);
        }
        const val = object;
        const strbuf = buffer_1.utf8Encoder.encode(val);
        buf.writeInt32(strbuf.length);
        buf.writeBuffer(strbuf);
      }
      decode(buf) {
        return buf.consumeAsString();
      }
    };
    exports.StrCodec = StrCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/uuid.js
var require_uuid = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/uuid.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UUIDCodec = void 0;
    var buffer_1 = require_buffer();
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    function UUIDBufferFromString(uuid) {
      let uuidClean = uuid;
      if (uuidClean.length !== 32) {
        uuidClean = uuidClean.replace(/\-/g, "");
        if (uuidClean.length !== 32) {
          throw new TypeError(`invalid UUID "${uuid}"`);
        }
      }
      try {
        return (0, buffer_1.uuidToBuffer)(uuidClean);
      } catch (e) {
        throw new TypeError(`invalid UUID "${uuid}"`);
      }
    }
    var UUIDCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "string"
        });
      }
      encode(buf, object) {
        if (typeof object === "string") {
          const ubuf = UUIDBufferFromString(object);
          buf.writeInt32(16);
          buf.writeBuffer(ubuf);
        } else {
          throw new errors_1.InvalidArgumentError(`cannot encode UUID "${object}": invalid type`);
        }
      }
      decode(buf) {
        return buf.readUUID("-");
      }
    };
    exports.UUIDCodec = UUIDCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/bytes.js
var require_bytes = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/bytes.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BytesCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    var BytesCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "Uint8Array"
        });
      }
      encode(buf, object) {
        if (!(object instanceof Uint8Array)) {
          throw new errors_1.InvalidArgumentError(`a Uint8Array or Buffer was expected, got "${object}"`);
        }
        buf.writeInt32(object.length);
        buf.writeBuffer(object);
      }
      decode(buf) {
        return buf.consumeAsBuffer();
      }
    };
    exports.BytesCodec = BytesCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/json.js
var require_json = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/json.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.JSONStringCodec = exports.JSONCodec = void 0;
    var buffer_1 = require_buffer();
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    var JSONCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "unknown"
        });
      }
      encode(buf, object) {
        let val;
        try {
          val = JSON.stringify(object);
        } catch (err) {
          throw new errors_1.InvalidArgumentError(`a JSON-serializable value was expected, got "${object}"`);
        }
        if (typeof val !== "string") {
          throw new errors_1.InvalidArgumentError(`a JSON-serializable value was expected, got "${object}"`);
        }
        const strbuf = buffer_1.utf8Encoder.encode(val);
        buf.writeInt32(strbuf.length + 1);
        buf.writeChar(1);
        buf.writeBuffer(strbuf);
      }
      decode(buf) {
        const format = buf.readUInt8();
        if (format !== 1) {
          throw new errors_1.ProtocolError(`unexpected JSON format ${format}`);
        }
        return JSON.parse(buf.consumeAsString());
      }
    };
    exports.JSONCodec = JSONCodec;
    var JSONStringCodec = class extends ifaces_1.ScalarCodec {
      encode(buf, object) {
        if (typeof object !== "string") {
          throw new errors_1.InvalidArgumentError(`a string was expected, got "${object}"`);
        }
        const strbuf = buffer_1.utf8Encoder.encode(object);
        buf.writeInt32(strbuf.length + 1);
        buf.writeChar(1);
        buf.writeBuffer(strbuf);
      }
      decode(buf) {
        const format = buf.readUInt8();
        if (format !== 1) {
          throw new errors_1.ProtocolError(`unexpected JSON format ${format}`);
        }
        return buf.consumeAsString();
      }
    };
    exports.JSONStringCodec = JSONStringCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/dateutil.js
var require_dateutil = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/dateutil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ord2ymd = exports.ymd2ord = exports.daysBeforeMonth = exports.daysInMonth = exports.isLeapYear = void 0;
    function isLeapYear(year) {
      return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
    }
    exports.isLeapYear = isLeapYear;
    function daysInMonth(year, month) {
      if (month === 2 && isLeapYear(year)) {
        return 29;
      }
      return _DAYS_IN_MONTH[month];
    }
    exports.daysInMonth = daysInMonth;
    function daysBeforeYear(year) {
      const y = year - 1;
      return y * 365 + Math.trunc(y / 4) - Math.trunc(y / 100) + Math.trunc(y / 400);
    }
    function daysBeforeMonth(year, month) {
      return _DAYS_BEFORE_MONTH[month] + (month > 2 && isLeapYear(year) ? 1 : 0);
    }
    exports.daysBeforeMonth = daysBeforeMonth;
    var _DI400Y = daysBeforeYear(401);
    var _DI100Y = daysBeforeYear(101);
    var _DI4Y = daysBeforeYear(5);
    var _DAYS_IN_MONTH = [-1, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var _DAYS_BEFORE_MONTH = (() => {
      const dbf = [-1];
      let dbm = 0;
      for (let i = 1; i < _DAYS_IN_MONTH.length; i++) {
        const dim = _DAYS_IN_MONTH[i];
        dbf.push(dbm);
        dbm += dim;
      }
      return dbf;
    })();
    function ymd2ord(year, month, day) {
      return daysBeforeYear(year) + daysBeforeMonth(year, month) + day;
    }
    exports.ymd2ord = ymd2ord;
    function divmod(dividend, divisor) {
      const quotient = Math.floor(dividend / divisor);
      return [quotient, dividend - divisor * quotient];
    }
    function ord2ymd(n) {
      n--;
      let n400;
      [n400, n] = divmod(n, _DI400Y);
      let year = n400 * 400 + 1;
      let n100;
      [n100, n] = divmod(n, _DI100Y);
      let n4;
      [n4, n] = divmod(n, _DI4Y);
      let n1;
      [n1, n] = divmod(n, 365);
      year += n100 * 100 + n4 * 4 + n1;
      if (n1 === 4 || n100 === 4) {
        return [year - 1, 12, 31];
      }
      const leapyear = n1 === 3 && (n4 !== 24 || n100 === 3);
      let month = n + 50 >> 5;
      let preceding = _DAYS_BEFORE_MONTH[month] + (month > 2 && leapyear ? 1 : 0);
      if (preceding > n) {
        month -= 1;
        preceding -= _DAYS_IN_MONTH[month] + (month === 2 && leapyear ? 1 : 0);
      }
      n -= preceding;
      return [year, month, n + 1];
    }
    exports.ord2ymd = ord2ymd;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/datetime.js
var require_datetime = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/datetime.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseHumanDurationString = exports.DateDuration = exports.RelativeDuration = exports.Duration = exports.LocalDateTime = exports.LocalDateFromOrdinal = exports.LocalDateToOrdinal = exports.LocalDate = exports.LocalTime = exports.DATE_PRIVATE = void 0;
    var bi = __importStar(require_bigint());
    var dateutil_1 = require_dateutil();
    exports.DATE_PRIVATE = Symbol.for("edgedb.datetime");
    function toNumber(val) {
      const n = Number(val);
      if (Number.isNaN(n)) {
        return 0;
      }
      return n;
    }
    function assertInteger(val) {
      if (!Number.isInteger(val)) {
        throw new RangeError(`unsupported fractional value ${val}`);
      }
      return val;
    }
    var LocalTime = class {
      constructor(isoHour = 0, isoMinute = 0, isoSecond = 0, isoMillisecond = 0, isoMicrosecond = 0, isoNanosecond = 0) {
        Object.defineProperty(this, "_hour", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_minute", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_second", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_millisecond", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_microsecond", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_nanosecond", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        isoHour = Math.floor(toNumber(isoHour));
        isoMinute = Math.floor(toNumber(isoMinute));
        isoSecond = Math.floor(toNumber(isoSecond));
        isoMillisecond = Math.floor(toNumber(isoMillisecond));
        isoMicrosecond = Math.floor(toNumber(isoMicrosecond));
        isoNanosecond = Math.floor(toNumber(isoNanosecond));
        if (isoHour < 0 || isoHour > 23) {
          throw new RangeError(`invalid number of hours ${isoHour}: expected a value in 0-23 range`);
        }
        if (isoMinute < 0 || isoMinute > 59) {
          throw new RangeError(`invalid number of minutes ${isoMinute}: expected a value in 0-59 range`);
        }
        if (isoSecond < 0 || isoSecond > 59) {
          throw new RangeError(`invalid number of seconds ${isoSecond}: expected a value in 0-59 range`);
        }
        if (isoMillisecond < 0 || isoMillisecond > 999) {
          throw new RangeError(`invalid number of milliseconds ${isoMillisecond}: expected a value in 0-999 range`);
        }
        if (isoMicrosecond < 0 || isoMicrosecond > 999) {
          throw new RangeError(`invalid number of microseconds ${isoMicrosecond}: expected a value in 0-999 range`);
        }
        if (isoNanosecond < 0 || isoNanosecond > 999) {
          throw new RangeError(`invalid number of nanoseconds ${isoNanosecond}: expected a value in 0-999 range`);
        }
        this._hour = isoHour;
        this._minute = isoMinute;
        this._second = isoSecond;
        this._millisecond = isoMillisecond;
        this._microsecond = isoMicrosecond;
        this._nanosecond = isoNanosecond;
      }
      get hour() {
        return this._hour;
      }
      get minute() {
        return this._minute;
      }
      get second() {
        return this._second;
      }
      get millisecond() {
        return this._millisecond;
      }
      get microsecond() {
        return this._microsecond;
      }
      get nanosecond() {
        return this._nanosecond;
      }
      toString() {
        const hh = this._hour.toString().padStart(2, "0");
        const mm = this._minute.toString().padStart(2, "0");
        const ss = this._second.toString().padStart(2, "0");
        let repr = `${hh}:${mm}:${ss}`;
        if (this._millisecond || this._microsecond || this._nanosecond) {
          repr += `.${this._millisecond.toString().padStart(3, "0")}${this._microsecond.toString().padStart(3, "0")}${this._nanosecond.toString().padStart(3, "0")}`.replace(/(?:0+)$/, "");
        }
        return repr;
      }
      toJSON() {
        return this.toString();
      }
      valueOf() {
        throw new TypeError("Not possible to compare LocalTime");
      }
    };
    exports.LocalTime = LocalTime;
    var LocalDate = class {
      constructor(isoYear, isoMonth, isoDay) {
        Object.defineProperty(this, "_date", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        isoYear = Math.trunc(toNumber(isoYear));
        isoMonth = Math.floor(toNumber(isoMonth));
        isoDay = Math.floor(toNumber(isoDay));
        if (isoYear < -271820 || isoYear > 275759) {
          throw new RangeError(`invalid year ${isoYear}: expected a value in -271820-275759 range`);
        }
        if (isoMonth < 1 || isoMonth > 12) {
          throw new RangeError(`invalid month ${isoMonth}: expected a value in 1-12 range`);
        }
        const maxDays = (0, dateutil_1.daysInMonth)(isoYear, isoMonth);
        if (isoDay < 1 || isoDay > maxDays) {
          throw new RangeError(`invalid number of days ${isoDay}: expected a value in 1-${maxDays} range`);
        }
        this._date = new Date(Date.UTC(isoYear, isoMonth - 1, isoDay));
        if (isoYear >= 0 && isoYear <= 99) {
          this._date.setUTCFullYear(isoYear);
        }
      }
      get year() {
        return this._date.getUTCFullYear();
      }
      get month() {
        return this._date.getUTCMonth() + 1;
      }
      get day() {
        return this._date.getUTCDate();
      }
      get dayOfWeek() {
        return (this._date.getUTCDay() + 6) % 7 + 1;
      }
      get dayOfYear() {
        return (0, dateutil_1.daysBeforeMonth)(this._date.getUTCFullYear(), this._date.getUTCMonth() + 1) + this._date.getUTCDate();
      }
      get daysInWeek() {
        return 7;
      }
      get daysInMonth() {
        return (0, dateutil_1.daysInMonth)(this._date.getUTCFullYear(), this._date.getUTCMonth() + 1);
      }
      get daysInYear() {
        return (0, dateutil_1.isLeapYear)(this._date.getUTCFullYear()) ? 366 : 365;
      }
      get monthsInYear() {
        return 12;
      }
      get inLeapYear() {
        return (0, dateutil_1.isLeapYear)(this._date.getUTCFullYear());
      }
      toString() {
        const year = this.year < 0 || this.year > 9999 ? (this.year < 0 ? "-" : "+") + Math.abs(this.year).toString().padStart(6, "0") : this.year.toString().padStart(4, "0");
        const month = this.month.toString().padStart(2, "0");
        const day = this.day.toString().padStart(2, "0");
        return `${year}-${month}-${day}`;
      }
      toJSON() {
        return this.toString();
      }
      valueOf() {
        throw new TypeError("Not possible to compare LocalDate");
      }
    };
    exports.LocalDate = LocalDate;
    function LocalDateToOrdinal(localdate) {
      return (0, dateutil_1.ymd2ord)(localdate.year, localdate.month, localdate.day);
    }
    exports.LocalDateToOrdinal = LocalDateToOrdinal;
    function LocalDateFromOrdinal(ordinal) {
      const [year, month, day] = (0, dateutil_1.ord2ymd)(ordinal);
      return new LocalDate(year, month, day);
    }
    exports.LocalDateFromOrdinal = LocalDateFromOrdinal;
    var LocalDateTime = class extends LocalDate {
      constructor(isoYear, isoMonth, isoDay, isoHour = 0, isoMinute = 0, isoSecond = 0, isoMillisecond = 0, isoMicrosecond = 0, isoNanosecond = 0) {
        super(isoYear, isoMonth, isoDay);
        Object.defineProperty(this, "_time", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._time = new LocalTime(isoHour, isoMinute, isoSecond, isoMillisecond, isoMicrosecond, isoNanosecond);
      }
      get hour() {
        return this._time["_hour"];
      }
      get minute() {
        return this._time["_minute"];
      }
      get second() {
        return this._time["_second"];
      }
      get millisecond() {
        return this._time["_millisecond"];
      }
      get microsecond() {
        return this._time["_microsecond"];
      }
      get nanosecond() {
        return this._time["_nanosecond"];
      }
      toString() {
        return `${super.toString()}T${this._time.toString()}`;
      }
      valueOf() {
        throw new TypeError("Not possible to compare LocalDateTime");
      }
    };
    exports.LocalDateTime = LocalDateTime;
    var durationRegex = new RegExp(`^(\\-|\\+)?P(?:(\\d+)Y)?(?:(\\d+)M)?(?:(\\d+)W)?(?:(\\d+)D)?(T(?:(\\d+)(\\.\\d{1,10})?H)?(?:(\\d+)(\\.\\d{1,10})?M)?(?:(\\d+)(\\.\\d{1,9})?S)?)?$`, "i");
    var Duration2 = class _Duration {
      constructor(years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0, nanoseconds = 0) {
        Object.defineProperty(this, "_years", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_months", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_weeks", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_days", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_hours", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_minutes", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_seconds", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_milliseconds", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_microseconds", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_nanoseconds", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_sign", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        years = assertInteger(toNumber(years));
        months = assertInteger(toNumber(months));
        weeks = assertInteger(toNumber(weeks));
        days = assertInteger(toNumber(days));
        hours = assertInteger(toNumber(hours));
        minutes = assertInteger(toNumber(minutes));
        seconds = assertInteger(toNumber(seconds));
        milliseconds = assertInteger(toNumber(milliseconds));
        microseconds = assertInteger(toNumber(microseconds));
        nanoseconds = assertInteger(toNumber(nanoseconds));
        const fields = [
          years,
          months,
          weeks,
          days,
          hours,
          minutes,
          seconds,
          milliseconds,
          microseconds,
          nanoseconds
        ];
        let sign = 0;
        for (const field of fields) {
          if (field === Infinity || field === -Infinity) {
            throw new RangeError("infinite values not allowed as duration fields");
          }
          const fieldSign = Math.sign(field);
          if (sign && fieldSign && fieldSign !== sign) {
            throw new RangeError("mixed-sign values not allowed as duration fields");
          }
          sign = sign || fieldSign;
        }
        this._years = years || 0;
        this._months = months || 0;
        this._weeks = weeks || 0;
        this._days = days || 0;
        this._hours = hours || 0;
        this._minutes = minutes || 0;
        this._seconds = seconds || 0;
        this._milliseconds = milliseconds || 0;
        this._microseconds = microseconds || 0;
        this._nanoseconds = nanoseconds || 0;
        this._sign = sign || 0;
      }
      get years() {
        return this._years;
      }
      get months() {
        return this._months;
      }
      get weeks() {
        return this._weeks;
      }
      get days() {
        return this._days;
      }
      get hours() {
        return this._hours;
      }
      get minutes() {
        return this._minutes;
      }
      get seconds() {
        return this._seconds;
      }
      get milliseconds() {
        return this._milliseconds;
      }
      get microseconds() {
        return this._microseconds;
      }
      get nanoseconds() {
        return this._nanoseconds;
      }
      get sign() {
        return this._sign;
      }
      get blank() {
        return this._sign === 0;
      }
      toString() {
        let dateParts = "";
        if (this._years) {
          dateParts += bi.make(Math.abs(this._years)) + "Y";
        }
        if (this._months) {
          dateParts += bi.make(Math.abs(this._months)) + "M";
        }
        if (this._weeks) {
          dateParts += bi.make(Math.abs(this._weeks)) + "W";
        }
        if (this._days) {
          dateParts += bi.make(Math.abs(this._days)) + "D";
        }
        let timeParts = "";
        if (this._hours) {
          timeParts += bi.make(Math.abs(this._hours)) + "H";
        }
        if (this._minutes) {
          timeParts += bi.make(Math.abs(this._minutes)) + "M";
        }
        if (!dateParts && !timeParts || this._seconds || this._milliseconds || this._microseconds || this._nanoseconds) {
          const totalNanoseconds = bi.add(bi.add(bi.add(bi.mul(bi.make(Math.abs(this._seconds)), bi.make(1e9)), bi.mul(bi.make(Math.abs(this._milliseconds)), bi.make(1e6))), bi.mul(bi.make(Math.abs(this._microseconds)), bi.make(1e3))), bi.make(Math.abs(this._nanoseconds))).toString().padStart(10, "0");
          const seconds = totalNanoseconds.slice(0, -9);
          const fracSeconds = totalNanoseconds.slice(-9).replace(/0+$/, "");
          timeParts += seconds + (fracSeconds.length ? "." + fracSeconds : "") + "S";
        }
        return (this._sign === -1 ? "-" : "") + "P" + dateParts + (timeParts ? "T" + timeParts : "");
      }
      toJSON() {
        return this.toString();
      }
      valueOf() {
        throw new TypeError("Not possible to compare TemporalDuration");
      }
      static from(item) {
        let result;
        if (item instanceof _Duration) {
          result = item;
        }
        if (typeof item === "object") {
          if (item.years === void 0 && item.months === void 0 && item.weeks === void 0 && item.days === void 0 && item.hours === void 0 && item.minutes === void 0 && item.seconds === void 0 && item.milliseconds === void 0 && item.microseconds === void 0 && item.nanoseconds === void 0) {
            throw new TypeError(`invalid duration-like`);
          }
          result = item;
        } else {
          const str = String(item);
          const matches = str.match(durationRegex);
          if (!matches) {
            throw new RangeError(`invalid duration: ${str}`);
          }
          const [_duration, _sign, years, months, weeks, days, _time, hours, fHours, minutes, fMinutes, seconds, fSeconds] = matches;
          if (_duration.length < 3 || _time.length === 1) {
            throw new RangeError(`invalid duration: ${str}`);
          }
          const sign = _sign === "-" ? -1 : 1;
          result = {};
          if (years) {
            result.years = sign * Number(years);
          }
          if (months) {
            result.months = sign * Number(months);
          }
          if (weeks) {
            result.weeks = sign * Number(weeks);
          }
          if (days) {
            result.days = sign * Number(days);
          }
          if (hours) {
            result.hours = sign * Number(hours);
          }
          if (fHours) {
            if (minutes || fMinutes || seconds || fSeconds) {
              throw new RangeError("only the smallest unit can be fractional");
            }
            result.minutes = Number(fHours) * 60;
          } else {
            result.minutes = toNumber(minutes);
          }
          if (fMinutes) {
            if (seconds || fSeconds) {
              throw new RangeError("only the smallest unit can be fractional");
            }
            result.seconds = Number(fMinutes) * 60;
          } else if (seconds) {
            result.seconds = Number(seconds);
          } else {
            result.seconds = result.minutes % 1 * 60;
          }
          if (fSeconds) {
            const ns = fSeconds.slice(1).padEnd(9, "0");
            result.milliseconds = Number(ns.slice(0, 3));
            result.microseconds = Number(ns.slice(3, 6));
            result.nanoseconds = sign * Number(ns.slice(6));
          } else {
            result.milliseconds = result.seconds % 1 * 1e3;
            result.microseconds = result.milliseconds % 1 * 1e3;
            result.nanoseconds = sign * Math.floor(result.microseconds % 1 * 1e3);
          }
          result.minutes = sign * Math.floor(result.minutes);
          result.seconds = sign * Math.floor(result.seconds);
          result.milliseconds = sign * Math.floor(result.milliseconds);
          result.microseconds = sign * Math.floor(result.microseconds);
        }
        return new _Duration(result.years, result.months, result.weeks, result.days, result.hours, result.minutes, result.seconds, result.milliseconds, result.microseconds, result.nanoseconds);
      }
    };
    exports.Duration = Duration2;
    var RelativeDuration = class {
      constructor(years = 0, months = 0, weeks = 0, days = 0, hours = 0, minutes = 0, seconds = 0, milliseconds = 0, microseconds = 0) {
        Object.defineProperty(this, "_years", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_months", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_weeks", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_days", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_hours", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_minutes", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_seconds", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_milliseconds", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_microseconds", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._years = Math.trunc(years) || 0;
        this._months = Math.trunc(months) || 0;
        this._weeks = Math.trunc(weeks) || 0;
        this._days = Math.trunc(days) || 0;
        this._hours = Math.trunc(hours) || 0;
        this._minutes = Math.trunc(minutes) || 0;
        this._seconds = Math.trunc(seconds) || 0;
        this._milliseconds = Math.trunc(milliseconds) || 0;
        this._microseconds = Math.trunc(microseconds) || 0;
      }
      get years() {
        return this._years;
      }
      get months() {
        return this._months;
      }
      get weeks() {
        return this._weeks;
      }
      get days() {
        return this._days;
      }
      get hours() {
        return this._hours;
      }
      get minutes() {
        return this._minutes;
      }
      get seconds() {
        return this._seconds;
      }
      get milliseconds() {
        return this._milliseconds;
      }
      get microseconds() {
        return this._microseconds;
      }
      toString() {
        let str = "P";
        if (this._years) {
          str += `${this._years}Y`;
        }
        if (this._months) {
          str += `${this._months}M`;
        }
        const days = this._days + 7 * this._weeks;
        if (days) {
          str += `${days}D`;
        }
        let timeParts = "";
        if (this._hours) {
          timeParts += `${this._hours}H`;
        }
        if (this._minutes) {
          timeParts += `${this._minutes}M`;
        }
        const seconds = this._seconds + this._milliseconds / 1e3 + this._microseconds / 1e6;
        if (seconds !== 0) {
          timeParts += `${seconds}S`;
        }
        if (timeParts) {
          str += `T${timeParts}`;
        }
        if (str === "P") {
          return "PT0S";
        }
        return str;
      }
      toJSON() {
        return this.toString();
      }
      valueOf() {
        throw new TypeError("Not possible to compare RelativeDuration");
      }
    };
    exports.RelativeDuration = RelativeDuration;
    var DateDuration = class {
      constructor(years = 0, months = 0, weeks = 0, days = 0) {
        Object.defineProperty(this, "_years", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_months", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_weeks", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_days", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._years = Math.trunc(years) || 0;
        this._months = Math.trunc(months) || 0;
        this._weeks = Math.trunc(weeks) || 0;
        this._days = Math.trunc(days) || 0;
      }
      get years() {
        return this._years;
      }
      get months() {
        return this._months;
      }
      get weeks() {
        return this._weeks;
      }
      get days() {
        return this._days;
      }
      toString() {
        let str = "P";
        if (this._years) {
          str += `${this._years}Y`;
        }
        if (this._months) {
          str += `${this._months}M`;
        }
        const days = this._days + 7 * this._weeks;
        if (days) {
          str += `${days}D`;
        }
        if (str === "P") {
          return "PT0S";
        }
        return str;
      }
      toJSON() {
        return this.toString();
      }
      valueOf() {
        throw new TypeError("Not possible to compare DateDuration");
      }
    };
    exports.DateDuration = DateDuration;
    var humanDurationPrefixes = {
      h: 36e5,
      hou: 36e5,
      m: 6e4,
      min: 6e4,
      s: 1e3,
      sec: 1e3,
      ms: 1,
      mil: 1
    };
    function parseHumanDurationString(durationStr) {
      const regex = /(\d+|\d+\.\d+|\.\d+)\s*(hours?|minutes?|seconds?|milliseconds?|ms|h|m|s)\s*/g;
      let duration = 0;
      const seen = /* @__PURE__ */ new Set();
      let match = regex.exec(durationStr);
      let lastIndex = 0;
      while (match) {
        if (match.index !== lastIndex) {
          throw new Error(`invalid duration "${durationStr}"`);
        }
        const mult = humanDurationPrefixes[match[2].slice(0, 3)];
        if (seen.has(mult)) {
          throw new Error(`invalid duration "${durationStr}"`);
        }
        duration += Number(match[1]) * mult;
        seen.add(mult);
        lastIndex = regex.lastIndex;
        match = regex.exec(durationStr);
      }
      if (lastIndex !== durationStr.length) {
        throw new Error(`invalid duration "${durationStr}"`);
      }
      return duration;
    }
    exports.parseHumanDurationString = parseHumanDurationString;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/datetime.js
var require_datetime2 = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/datetime.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.DateDurationCodec = exports.RelativeDurationCodec = exports.DurationCodec = exports.checkValidEdgeDBDuration = exports.LocalTimeCodec = exports.LocalDateCodec = exports.LocalDateTimeCodec = exports.DateTimeCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var bi = __importStar(require_bigint());
    var datetime_1 = require_datetime();
    var dateutil_1 = require_dateutil();
    var errors_1 = require_errors();
    var TIMESHIFT = 9466848e5;
    var DATESHIFT_ORD = (0, dateutil_1.ymd2ord)(2e3, 1, 1);
    var DateTimeCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "Date"
        });
      }
      encode(buf, object) {
        if (!(object instanceof Date)) {
          throw new errors_1.InvalidArgumentError(`a Date instance was expected, got "${object}"`);
        }
        const ms = object.getTime() - TIMESHIFT;
        const us = ms * 1e3;
        buf.writeInt32(8);
        buf.writeInt64(us);
      }
      decode(buf) {
        const us = Number(buf.readBigInt64());
        let ms = Math.round(us / 1e3);
        if (Math.abs(us % 1e3) === 500 && Math.abs(ms) % 2 === 1) {
          ms -= 1;
        }
        return new Date(ms + TIMESHIFT);
      }
    };
    exports.DateTimeCodec = DateTimeCodec;
    var LocalDateTimeCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "LocalDateTime"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      encode(buf, object) {
        if (!(object instanceof datetime_1.LocalDateTime)) {
          throw new errors_1.InvalidArgumentError(`a LocalDateTime instance was expected, got "${object}"`);
        }
        const ms = bi.make(object["_date"].getTime() - TIMESHIFT);
        let us = bi.add(bi.mul(ms, bi.make(1e3)), bi.make(object.hour * 36e8 + object.minute * 6e7 + object.second * 1e6 + object.millisecond * 1e3 + object.microsecond));
        if (object.nanosecond === 500 && Math.abs(object.microsecond) % 2 === 1 || object.nanosecond > 500) {
          us = bi.add(us, bi.make(1));
        }
        buf.writeInt32(8);
        buf.writeBigInt64(us);
      }
      decode(buf) {
        const bi1000 = bi.make(1e3);
        const bi_us = buf.readBigInt64();
        const bi_ms = bi.div(bi_us, bi1000);
        let us = Number(bi.sub(bi_us, bi.mul(bi_ms, bi1000)));
        let ms = Number(bi_ms);
        if (us < 0) {
          us += 1e3;
          ms -= 1;
        }
        const date = new Date(Number(ms) + TIMESHIFT);
        return new datetime_1.LocalDateTime(date.getUTCFullYear(), date.getUTCMonth() + 1, date.getUTCDate(), date.getUTCHours(), date.getUTCMinutes(), date.getUTCSeconds(), date.getUTCMilliseconds(), us);
      }
    };
    exports.LocalDateTimeCodec = LocalDateTimeCodec;
    var LocalDateCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "LocalDate"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      encode(buf, object) {
        if (!(object instanceof datetime_1.LocalDate)) {
          throw new errors_1.InvalidArgumentError(`a LocalDate instance was expected, got "${object}"`);
        }
        buf.writeInt32(4);
        buf.writeInt32((0, datetime_1.LocalDateToOrdinal)(object) - DATESHIFT_ORD);
      }
      decode(buf) {
        const ord = buf.readInt32();
        return (0, datetime_1.LocalDateFromOrdinal)(ord + DATESHIFT_ORD);
      }
    };
    exports.LocalDateCodec = LocalDateCodec;
    var LocalTimeCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "LocalTime"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      encode(buf, object) {
        if (!(object instanceof datetime_1.LocalTime)) {
          throw new errors_1.InvalidArgumentError(`a LocalTime instance was expected, got "${object}"`);
        }
        let us = object.hour * 36e8 + object.minute * 6e7 + object.second * 1e6 + object.millisecond * 1e3 + object.microsecond;
        if (object.nanosecond === 500 && us % 2 === 1 || object.nanosecond > 500) {
          us += 1;
        }
        buf.writeInt32(8);
        buf.writeInt64(us);
      }
      decode(buf) {
        let us = Number(buf.readBigInt64());
        let seconds = Math.floor(us / 1e6);
        const ms = Math.floor(us % 1e6 / 1e3);
        us = us % 1e6 - ms * 1e3;
        let minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        const hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
        return new datetime_1.LocalTime(hours, minutes, seconds, ms, us);
      }
    };
    exports.LocalTimeCodec = LocalTimeCodec;
    var unencodableDurationFields = [
      "years",
      "months",
      "weeks",
      "days"
    ];
    function checkValidEdgeDBDuration(duration) {
      for (const field of unencodableDurationFields) {
        if (duration[field] !== 0) {
          return field;
        }
      }
      return null;
    }
    exports.checkValidEdgeDBDuration = checkValidEdgeDBDuration;
    var DurationCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "Duration"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      encode(buf, object) {
        if (!(object instanceof datetime_1.Duration)) {
          throw new errors_1.InvalidArgumentError(`a Duration instance was expected, got "${object}"`);
        }
        const invalidField = checkValidEdgeDBDuration(object);
        if (invalidField) {
          throw new errors_1.InvalidArgumentError(`Cannot encode a 'Duration' with a non-zero number of ${invalidField}`);
        }
        let us = bi.make(Math.abs(object.microseconds));
        us = bi.add(us, bi.mul(bi.make(Math.abs(object.milliseconds)), bi.make(1e3)));
        us = bi.add(us, bi.mul(bi.make(Math.abs(object.seconds)), bi.make(1e6)));
        us = bi.add(us, bi.mul(bi.make(Math.abs(object.minutes)), bi.make(6e7)));
        us = bi.add(us, bi.mul(bi.make(Math.abs(object.hours)), bi.make(36e8)));
        if (Math.abs(object.nanoseconds) === 500 && Math.abs(object.microseconds) % 2 === 1 || Math.abs(object.nanoseconds) > 500) {
          us = bi.add(us, bi.make(1));
        }
        if (object.sign < 0) {
          us = bi.mul(us, bi.make(-1));
        }
        buf.writeInt32(16);
        buf.writeBigInt64(us);
        buf.writeInt32(0);
        buf.writeInt32(0);
      }
      decode(buf) {
        let bius = buf.readBigInt64();
        const days = buf.readInt32();
        const months = buf.readInt32();
        if (days !== 0) {
          throw new errors_1.ProtocolError("non-zero reserved bytes in duration");
        }
        if (months !== 0) {
          throw new errors_1.ProtocolError("non-zero reserved bytes in duration");
        }
        let sign = 1;
        if (Number(bius) < 0) {
          sign = -1;
          bius = bi.mul(bi.make(-1), bius);
        }
        const biMillion = bi.make(1e6);
        const biSeconds = bi.div(bius, biMillion);
        let us = Number(bi.sub(bius, bi.mul(biSeconds, biMillion)));
        const ms = Math.floor(us / 1e3);
        us = us % 1e3;
        let seconds = Number(biSeconds);
        let minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        const hours = Math.floor(minutes / 60);
        minutes = Math.floor(minutes % 60);
        return new datetime_1.Duration(0, 0, 0, 0, hours * sign, minutes * sign, seconds * sign, ms * sign, us * sign);
      }
    };
    exports.DurationCodec = DurationCodec;
    var RelativeDurationCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "RelativeDuration"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      encode(buf, object) {
        if (!(object instanceof datetime_1.RelativeDuration)) {
          throw new errors_1.InvalidArgumentError(`
        a RelativeDuration instance was expected, got "${object}"
      `);
        }
        let us = bi.make(object.microseconds);
        us = bi.add(us, bi.mul(bi.make(object.milliseconds), bi.make(1e3)));
        us = bi.add(us, bi.mul(bi.make(object.seconds), bi.make(1e6)));
        us = bi.add(us, bi.mul(bi.make(object.minutes), bi.make(6e7)));
        us = bi.add(us, bi.mul(bi.make(object.hours), bi.make(36e8)));
        buf.writeInt32(16);
        buf.writeBigInt64(us);
        buf.writeInt32(object.days + 7 * object.weeks);
        buf.writeInt32(object.months + 12 * object.years);
      }
      decode(buf) {
        let bius = buf.readBigInt64();
        let days = buf.readInt32();
        let months = buf.readInt32();
        let sign = 1;
        if (Number(bius) < 0) {
          sign = -1;
          bius = bi.mul(bi.make(-1), bius);
        }
        const biMillion = bi.make(1e6);
        const biSeconds = bi.div(bius, biMillion);
        let us = Number(bi.sub(bius, bi.mul(biSeconds, biMillion)));
        const ms = Math.trunc(us / 1e3);
        us = us % 1e3;
        let seconds = Number(biSeconds);
        let minutes = Math.trunc(seconds / 60);
        seconds = Math.trunc(seconds % 60);
        const hours = Math.trunc(minutes / 60);
        minutes = Math.trunc(minutes % 60);
        const weeks = Math.trunc(days / 7);
        days = Math.trunc(days % 7);
        const years = Math.trunc(months / 12);
        months = Math.trunc(months % 12);
        return new datetime_1.RelativeDuration(years, months, weeks, days, hours * sign, minutes * sign, seconds * sign, ms * sign, us * sign);
      }
    };
    exports.RelativeDurationCodec = RelativeDurationCodec;
    var DateDurationCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "DateDuration"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      encode(buf, object) {
        if (!(object instanceof datetime_1.DateDuration)) {
          throw new errors_1.InvalidArgumentError(`
        a DateDuration instance was expected, got "${object}"
      `);
        }
        buf.writeInt32(16);
        buf.writeInt64(0);
        buf.writeInt32(object.days + 7 * object.weeks);
        buf.writeInt32(object.months + 12 * object.years);
      }
      decode(buf) {
        buf.discard(8);
        let days = buf.readInt32();
        let months = buf.readInt32();
        const weeks = Math.trunc(days / 7);
        days = Math.trunc(days % 7);
        const years = Math.trunc(months / 12);
        months = Math.trunc(months % 12);
        return new datetime_1.DateDuration(years, months, weeks, days);
      }
    };
    exports.DateDurationCodec = DateDurationCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/memory.js
var require_memory = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/memory.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigMemory = void 0;
    var bi = __importStar(require_bigint());
    var KiB = 1024;
    var MiB = 1024 * KiB;
    var GiB = 1024 * MiB;
    var TiB = 1024 * GiB;
    var PiB = 1024 * TiB;
    var ConfigMemory = class {
      constructor(bytes) {
        Object.defineProperty(this, "_bytes", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._bytes = bytes;
      }
      get bytes() {
        return Number(this._bytes);
      }
      get bytesBigInt() {
        return this._bytes;
      }
      get kibibytes() {
        return Number(this._bytes) / KiB;
      }
      get mebibytes() {
        return Number(this._bytes) / MiB;
      }
      get gibibytes() {
        return Number(this._bytes) / GiB;
      }
      get tebibytes() {
        return Number(this._bytes) / TiB;
      }
      get pebibytes() {
        return Number(this._bytes) / PiB;
      }
      toString() {
        const bytes = this._bytes;
        const bigPiB = bi.make(PiB);
        if (bi.gte(bytes, bigPiB) && Number(bi.remainder(bytes, bigPiB)) === 0) {
          return `${bi.div(bytes, bigPiB)}PiB`;
        }
        const bigTiB = bi.make(TiB);
        if (bi.gte(bytes, bigTiB) && Number(bi.remainder(bytes, bigTiB)) === 0) {
          return `${bi.div(bytes, bigTiB)}TiB`;
        }
        const bigGiB = bi.make(GiB);
        if (bi.gte(bytes, bigGiB) && Number(bi.remainder(bytes, bigGiB)) === 0) {
          return `${bi.div(bytes, bigGiB)}GiB`;
        }
        const bigMiB = bi.make(MiB);
        if (bi.gte(bytes, bigMiB) && Number(bi.remainder(bytes, bigMiB)) === 0) {
          return `${bi.div(bytes, bigMiB)}MiB`;
        }
        const bigKiB = bi.make(KiB);
        if (bi.gte(bytes, bigKiB) && Number(bi.remainder(bytes, bigKiB)) === 0) {
          return `${bi.div(bytes, bigKiB)}KiB`;
        }
        return `${bytes}B`;
      }
    };
    exports.ConfigMemory = ConfigMemory;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/memory.js
var require_memory2 = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/memory.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConfigMemoryCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var memory_1 = require_memory();
    var errors_1 = require_errors();
    var ConfigMemoryCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "ConfigMemory"
        });
        Object.defineProperty(this, "importedType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      encode(buf, object) {
        if (!(object instanceof memory_1.ConfigMemory)) {
          throw new errors_1.InvalidArgumentError(`a ConfigMemory instance was expected, got "${object}"`);
        }
        buf.writeInt32(8);
        buf.writeBigInt64(object._bytes);
      }
      decode(buf) {
        return new memory_1.ConfigMemory(buf.readBigInt64());
      }
    };
    exports.ConfigMemoryCodec = ConfigMemoryCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/pgvector.js
var require_pgvector = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/pgvector.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.PgVectorCodec = exports.PG_VECTOR_MAX_DIM = void 0;
    var ifaces_1 = require_ifaces2();
    var errors_1 = require_errors();
    exports.PG_VECTOR_MAX_DIM = (1 << 16) - 1;
    var PgVectorCodec = class extends ifaces_1.ScalarCodec {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "tsType", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: "Float32Array"
        });
      }
      encode(buf, object) {
        if (!(object instanceof Float32Array || Array.isArray(object))) {
          throw new errors_1.InvalidArgumentError(`a Float32Array or array of numbers was expected, got "${object}"`);
        }
        if (object.length > exports.PG_VECTOR_MAX_DIM) {
          throw new errors_1.InvalidArgumentError("too many elements in array to encode into pgvector");
        }
        buf.writeInt32(4 + object.length * 4).writeUInt16(object.length).writeUInt16(0);
        if (object instanceof Float32Array) {
          for (const el of object) {
            buf.writeFloat32(el);
          }
        } else {
          for (const el of object) {
            if (typeof el !== "number") {
              throw new errors_1.InvalidArgumentError(`elements of vector array expected to be a numbers, got "${el}"`);
            }
            buf.writeFloat32(el);
          }
        }
      }
      decode(buf) {
        const dim = buf.readUInt16();
        buf.discard(2);
        const vecBuf = buf.readBuffer(dim * 4);
        const data = new DataView(vecBuf.buffer, vecBuf.byteOffset, vecBuf.byteLength);
        const vec = new Float32Array(dim);
        for (let i = 0; i < dim; i++) {
          vec[i] = data.getFloat32(i * 4);
        }
        return vec;
      }
    };
    exports.PgVectorCodec = PgVectorCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/codecs.js
var require_codecs = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/codecs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.INVALID_CODEC = exports.NULL_CODEC = exports.SCALAR_CODECS = exports.NullCodec = void 0;
    var buffer_1 = require_buffer();
    var boolean_1 = require_boolean();
    var ifaces_1 = require_ifaces2();
    var numbers_1 = require_numbers();
    var numerics_1 = require_numerics();
    var text_1 = require_text();
    var uuid_1 = require_uuid();
    var bytes_1 = require_bytes();
    var json_1 = require_json();
    var datetime_1 = require_datetime2();
    var memory_1 = require_memory2();
    var pgvector_1 = require_pgvector();
    var errors_1 = require_errors();
    var consts_1 = require_consts();
    var NullCodec = class extends ifaces_1.Codec {
      encode(_buf, _object) {
        throw new errors_1.InternalClientError("null codec cannot used to encode data");
      }
      decode(_buf) {
        throw new errors_1.InternalClientError("null codec cannot used to decode data");
      }
      getSubcodecs() {
        return [];
      }
      getKind() {
        return "scalar";
      }
    };
    Object.defineProperty(NullCodec, "BUFFER", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new buffer_1.WriteBuffer().writeInt32(0).unwrap()
    });
    exports.NullCodec = NullCodec;
    exports.SCALAR_CODECS = /* @__PURE__ */ new Map();
    exports.NULL_CODEC = new NullCodec(consts_1.NULL_CODEC_ID);
    exports.INVALID_CODEC = new NullCodec(consts_1.INVALID_CODEC_ID);
    function registerScalarCodec(typename, type) {
      const id = consts_1.KNOWN_TYPENAMES.get(typename);
      if (id == null) {
        throw new errors_1.InternalClientError("unknown type name");
      }
      exports.SCALAR_CODECS.set(id, new type(id));
    }
    registerScalarCodec("std::int16", numbers_1.Int16Codec);
    registerScalarCodec("std::int32", numbers_1.Int32Codec);
    registerScalarCodec("std::int64", numbers_1.Int64Codec);
    registerScalarCodec("std::float32", numbers_1.Float32Codec);
    registerScalarCodec("std::float64", numbers_1.Float64Codec);
    registerScalarCodec("std::bigint", numerics_1.BigIntCodec);
    registerScalarCodec("std::decimal", numerics_1.DecimalStringCodec);
    registerScalarCodec("std::bool", boolean_1.BoolCodec);
    registerScalarCodec("std::json", json_1.JSONCodec);
    registerScalarCodec("std::str", text_1.StrCodec);
    registerScalarCodec("std::bytes", bytes_1.BytesCodec);
    registerScalarCodec("std::uuid", uuid_1.UUIDCodec);
    registerScalarCodec("cal::local_date", datetime_1.LocalDateCodec);
    registerScalarCodec("cal::local_time", datetime_1.LocalTimeCodec);
    registerScalarCodec("cal::local_datetime", datetime_1.LocalDateTimeCodec);
    registerScalarCodec("std::datetime", datetime_1.DateTimeCodec);
    registerScalarCodec("std::duration", datetime_1.DurationCodec);
    registerScalarCodec("cal::relative_duration", datetime_1.RelativeDurationCodec);
    registerScalarCodec("cal::date_duration", datetime_1.DateDurationCodec);
    registerScalarCodec("cfg::memory", memory_1.ConfigMemoryCodec);
    registerScalarCodec("ext::pgvector::vector", pgvector_1.PgVectorCodec);
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/tuple.js
var require_tuple = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/tuple.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMPTY_TUPLE_CODEC = exports.EMPTY_TUPLE_CODEC_ID = exports.EmptyTupleCodec = exports.TupleCodec = void 0;
    var consts_1 = require_consts();
    var ifaces_1 = require_ifaces2();
    var buffer_1 = require_buffer();
    var errors_1 = require_errors();
    var TupleCodec = class extends ifaces_1.Codec {
      constructor(tid, codecs) {
        super(tid);
        Object.defineProperty(this, "subCodecs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.subCodecs = codecs;
      }
      encode(buf, object, allowNull = false) {
        if (!Array.isArray(object)) {
          throw new errors_1.InvalidArgumentError(`an array was expected, got "${object}"`);
        }
        const codecs = this.subCodecs;
        const codecsLen = codecs.length;
        if (object.length !== codecsLen) {
          throw new errors_1.InvalidArgumentError(`expected ${codecsLen} tuple item${codecsLen === 1 ? "" : "s"}, got ${object.length}`);
        }
        if (!codecsLen) {
          buf.writeBuffer(EmptyTupleCodec.BUFFER);
        }
        const elemData = new buffer_1.WriteBuffer();
        for (let i = 0; i < codecsLen; i++) {
          const elem = object[i];
          elemData.writeInt32(0);
          if (elem == null) {
            if (allowNull) {
              elemData.writeInt32(-1);
            } else {
              throw new errors_1.MissingArgumentError(`element at index ${i} in tuple cannot be 'null'`);
            }
          } else {
            try {
              codecs[i].encode(elemData, elem);
            } catch (e) {
              if (e instanceof errors_1.QueryArgumentError) {
                throw new errors_1.InvalidArgumentError(`invalid element at index ${i} in tuple: ${e.message}`);
              } else {
                throw e;
              }
            }
          }
        }
        const elemBuf = elemData.unwrap();
        buf.writeInt32(4 + elemBuf.length);
        buf.writeInt32(codecsLen);
        buf.writeBuffer(elemBuf);
      }
      encodeArgs(args) {
        if (!Array.isArray(args)) {
          throw new errors_1.InvalidArgumentError("an array of arguments was expected");
        }
        const codecsLen = this.subCodecs.length;
        if (args.length !== codecsLen) {
          throw new errors_1.InvalidArgumentError(`expected ${codecsLen} argument${codecsLen === 1 ? "" : "s"}, got ${args.length}`);
        }
        const buf = new buffer_1.WriteBuffer();
        this.encode(buf, args, true);
        return buf.unwrap();
      }
      decode(buf) {
        const els = buf.readUInt32();
        const subCodecs = this.subCodecs;
        if (els !== subCodecs.length) {
          throw new errors_1.ProtocolError(`cannot decode Tuple: expected ${subCodecs.length} elements, got ${els}`);
        }
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const result = new Array(els);
        for (let i = 0; i < els; i++) {
          buf.discard(4);
          const elemLen = buf.readInt32();
          if (elemLen === -1) {
            result[i] = null;
          } else {
            buf.sliceInto(elemBuf, elemLen);
            result[i] = subCodecs[i].decode(elemBuf);
            elemBuf.finish();
          }
        }
        return result;
      }
      getSubcodecs() {
        return Array.from(this.subCodecs);
      }
      getKind() {
        return "tuple";
      }
    };
    exports.TupleCodec = TupleCodec;
    var EmptyTupleCodec = class extends ifaces_1.Codec {
      encode(buf, object) {
        if (!Array.isArray(object)) {
          throw new errors_1.InvalidArgumentError("cannot encode empty Tuple: expected an array");
        }
        if (object.length) {
          throw new errors_1.InvalidArgumentError(`cannot encode empty Tuple: expected 0 elements got ${object.length}`);
        }
        buf.writeInt32(4);
        buf.writeInt32(0);
      }
      decode(buf) {
        const els = buf.readInt32();
        if (els !== 0) {
          throw new errors_1.ProtocolError(`cannot decode empty Tuple: expected 0 elements, received ${els}`);
        }
        return [];
      }
      getSubcodecs() {
        return [];
      }
      getKind() {
        return "tuple";
      }
    };
    Object.defineProperty(EmptyTupleCodec, "BUFFER", {
      enumerable: true,
      configurable: true,
      writable: true,
      value: new buffer_1.WriteBuffer().writeInt32(4).writeInt32(0).unwrap()
    });
    exports.EmptyTupleCodec = EmptyTupleCodec;
    exports.EMPTY_TUPLE_CODEC_ID = consts_1.KNOWN_TYPENAMES.get("empty-tuple");
    exports.EMPTY_TUPLE_CODEC = new EmptyTupleCodec(exports.EMPTY_TUPLE_CODEC_ID);
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/range.js
var require_range = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/datatypes/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Range = void 0;
    var Range = class _Range {
      constructor(_lower, _upper, _incLower = true, _incUpper = false) {
        Object.defineProperty(this, "_lower", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _lower
        });
        Object.defineProperty(this, "_upper", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _upper
        });
        Object.defineProperty(this, "_incLower", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _incLower
        });
        Object.defineProperty(this, "_incUpper", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _incUpper
        });
        Object.defineProperty(this, "_isEmpty", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
      }
      get lower() {
        return this._lower;
      }
      get upper() {
        return this._upper;
      }
      get incLower() {
        return this._incLower;
      }
      get incUpper() {
        return this._incUpper;
      }
      get isEmpty() {
        return this._isEmpty;
      }
      static empty() {
        const range = new _Range(null, null);
        range._isEmpty = true;
        return range;
      }
      toJSON() {
        return this.isEmpty ? { empty: true } : {
          lower: this._lower,
          upper: this._upper,
          inc_lower: this._incLower,
          inc_upper: this._incUpper
        };
      }
    };
    exports.Range = Range;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/range.js
var require_range2 = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RangeCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var buffer_1 = require_buffer();
    var range_1 = require_range();
    var errors_1 = require_errors();
    var RangeFlags;
    (function(RangeFlags2) {
      RangeFlags2[RangeFlags2["EMPTY"] = 1] = "EMPTY";
      RangeFlags2[RangeFlags2["INC_LOWER"] = 2] = "INC_LOWER";
      RangeFlags2[RangeFlags2["INC_UPPER"] = 4] = "INC_UPPER";
      RangeFlags2[RangeFlags2["EMPTY_LOWER"] = 8] = "EMPTY_LOWER";
      RangeFlags2[RangeFlags2["EMPTY_UPPER"] = 16] = "EMPTY_UPPER";
    })(RangeFlags || (RangeFlags = {}));
    var RangeCodec = class extends ifaces_1.Codec {
      constructor(tid, subCodec) {
        super(tid);
        Object.defineProperty(this, "subCodec", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.subCodec = subCodec;
      }
      encode(buf, obj) {
        if (!(obj instanceof range_1.Range)) {
          throw new errors_1.InvalidArgumentError("a Range was expected");
        }
        const subCodec = this.subCodec;
        const elemData = new buffer_1.WriteBuffer();
        if (obj.lower !== null) {
          subCodec.encode(elemData, obj.lower);
        }
        if (obj.upper !== null) {
          subCodec.encode(elemData, obj.upper);
        }
        const elemBuf = elemData.unwrap();
        buf.writeInt32(1 + elemBuf.length);
        buf.writeUInt8(obj.isEmpty ? RangeFlags.EMPTY : (obj.incLower ? RangeFlags.INC_LOWER : 0) | (obj.incUpper ? RangeFlags.INC_UPPER : 0) | (obj.lower === null ? RangeFlags.EMPTY_LOWER : 0) | (obj.upper === null ? RangeFlags.EMPTY_UPPER : 0));
        buf.writeBuffer(elemBuf);
      }
      decode(buf) {
        const flags = buf.readUInt8();
        if (flags & RangeFlags.EMPTY) {
          return range_1.Range.empty();
        }
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const subCodec = this.subCodec;
        let lower = null;
        let upper = null;
        if (!(flags & RangeFlags.EMPTY_LOWER)) {
          buf.sliceInto(elemBuf, buf.readInt32());
          lower = subCodec.decode(elemBuf);
          elemBuf.finish();
        }
        if (!(flags & RangeFlags.EMPTY_UPPER)) {
          buf.sliceInto(elemBuf, buf.readInt32());
          upper = subCodec.decode(elemBuf);
          elemBuf.finish();
        }
        return new range_1.Range(lower, upper, !!(flags & RangeFlags.INC_LOWER), !!(flags & RangeFlags.INC_UPPER));
      }
      getSubcodecs() {
        return [this.subCodec];
      }
      getKind() {
        return "range";
      }
    };
    exports.RangeCodec = RangeCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/namedtuple.js
var require_namedtuple = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/namedtuple.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NamedTupleCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var buffer_1 = require_buffer();
    var tuple_1 = require_tuple();
    var errors_1 = require_errors();
    var NamedTupleCodec = class extends ifaces_1.Codec {
      constructor(tid, codecs, names) {
        super(tid);
        Object.defineProperty(this, "subCodecs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "names", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "namesSet", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.subCodecs = codecs;
        this.names = names;
        this.namesSet = new Set(names);
      }
      encode(buf, object) {
        if (typeof object !== "object" || Array.isArray(object)) {
          throw new errors_1.InvalidArgumentError(`an object was expected, got "${object}"`);
        }
        const codecsLen = this.subCodecs.length;
        if (Object.keys(object).length !== codecsLen) {
          throw new errors_1.QueryArgumentError(`expected ${codecsLen} element${codecsLen === 1 ? "" : "s"} in named tuple, got ${Object.keys(object).length}`);
        }
        const elemData = new buffer_1.WriteBuffer();
        for (let i = 0; i < codecsLen; i++) {
          const key = this.names[i];
          const val = object[key];
          if (val == null) {
            throw new errors_1.MissingArgumentError(`element '${key}' in named tuple cannot be 'null'`);
          } else {
            elemData.writeInt32(0);
            try {
              this.subCodecs[i].encode(elemData, val);
            } catch (e) {
              if (e instanceof errors_1.QueryArgumentError) {
                throw new errors_1.InvalidArgumentError(`invalid element '${key}' in named tuple: ${e.message}`);
              } else {
                throw e;
              }
            }
          }
        }
        const elemBuf = elemData.unwrap();
        buf.writeInt32(4 + elemBuf.length);
        buf.writeInt32(codecsLen);
        buf.writeBuffer(elemBuf);
      }
      encodeArgs(args) {
        if (args == null) {
          throw new errors_1.MissingArgumentError("One or more named arguments expected, received null");
        }
        const keys = Object.keys(args);
        const names = this.names;
        const namesSet = this.namesSet;
        const codecs = this.subCodecs;
        const codecsLen = codecs.length;
        if (keys.length > codecsLen) {
          const extraKeys = keys.filter((key) => !namesSet.has(key));
          throw new errors_1.UnknownArgumentError(`Unused named argument${extraKeys.length === 1 ? "" : "s"}: "${extraKeys.join('", "')}"`);
        }
        if (!codecsLen) {
          return tuple_1.EmptyTupleCodec.BUFFER;
        }
        const elemData = new buffer_1.WriteBuffer();
        for (let i = 0; i < codecsLen; i++) {
          const key = names[i];
          const val = args[key];
          elemData.writeInt32(0);
          if (val == null) {
            elemData.writeInt32(-1);
          } else {
            const codec = codecs[i];
            codec.encode(elemData, val);
          }
        }
        const elemBuf = elemData.unwrap();
        const buf = new buffer_1.WriteBuffer();
        buf.writeInt32(4 + elemBuf.length);
        buf.writeInt32(codecsLen);
        buf.writeBuffer(elemBuf);
        return buf.unwrap();
      }
      decode(buf) {
        const els = buf.readUInt32();
        const subCodecs = this.subCodecs;
        if (els !== subCodecs.length) {
          throw new errors_1.ProtocolError(`cannot decode NamedTuple: expected ${subCodecs.length} elements, got ${els}`);
        }
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const names = this.names;
        const result = {};
        for (let i = 0; i < els; i++) {
          buf.discard(4);
          const elemLen = buf.readInt32();
          let val = null;
          if (elemLen !== -1) {
            buf.sliceInto(elemBuf, elemLen);
            val = subCodecs[i].decode(elemBuf);
            elemBuf.finish();
          }
          result[names[i]] = val;
        }
        return result;
      }
      getSubcodecs() {
        return Array.from(this.subCodecs);
      }
      getNames() {
        return Array.from(this.names);
      }
      getKind() {
        return "namedtuple";
      }
    };
    exports.NamedTupleCodec = NamedTupleCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/array.js
var require_array = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/array.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArrayCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var buffer_1 = require_buffer();
    var tuple_1 = require_tuple();
    var range_1 = require_range2();
    var errors_1 = require_errors();
    var namedtuple_1 = require_namedtuple();
    var ArrayCodec = class extends ifaces_1.Codec {
      constructor(tid, subCodec, len) {
        super(tid);
        Object.defineProperty(this, "subCodec", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "len", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.subCodec = subCodec;
        this.len = len;
      }
      encode(buf, obj) {
        if (!(this.subCodec instanceof ifaces_1.ScalarCodec || this.subCodec instanceof tuple_1.TupleCodec || this.subCodec instanceof namedtuple_1.NamedTupleCodec || this.subCodec instanceof range_1.RangeCodec)) {
          throw new errors_1.InvalidArgumentError("only arrays of scalars or tuples are supported");
        }
        if (!Array.isArray(obj) && !isTypedArray(obj)) {
          throw new errors_1.InvalidArgumentError("an array was expected");
        }
        const subCodec = this.subCodec;
        const elemData = new buffer_1.WriteBuffer();
        const objLen = obj.length;
        if (objLen > 2147483647) {
          throw new errors_1.InvalidArgumentError("too many elements in array");
        }
        for (let i = 0; i < objLen; i++) {
          const item = obj[i];
          if (item == null) {
            elemData.writeInt32(-1);
          } else {
            subCodec.encode(elemData, item);
          }
        }
        const elemBuf = elemData.unwrap();
        buf.writeInt32(12 + 8 + elemBuf.length);
        buf.writeInt32(1);
        buf.writeInt32(0);
        buf.writeInt32(0);
        buf.writeInt32(objLen);
        buf.writeInt32(1);
        buf.writeBuffer(elemBuf);
      }
      decode(buf) {
        const ndims = buf.readInt32();
        buf.discard(4);
        buf.discard(4);
        if (ndims === 0) {
          return [];
        }
        if (ndims !== 1) {
          throw new errors_1.ProtocolError("only 1-dimensional arrays are supported");
        }
        const len = buf.readUInt32();
        if (this.len !== -1 && len !== this.len) {
          throw new errors_1.ProtocolError(`invalid array size: received ${len}, expected ${this.len}`);
        }
        buf.discard(4);
        const result = new Array(len);
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const subCodec = this.subCodec;
        for (let i = 0; i < len; i++) {
          const elemLen = buf.readInt32();
          if (elemLen === -1) {
            result[i] = null;
          } else {
            buf.sliceInto(elemBuf, elemLen);
            result[i] = subCodec.decode(elemBuf);
            elemBuf.finish();
          }
        }
        return result;
      }
      getSubcodecs() {
        return [this.subCodec];
      }
      getKind() {
        return "array";
      }
    };
    exports.ArrayCodec = ArrayCodec;
    function isTypedArray(obj) {
      return !!(obj.buffer instanceof ArrayBuffer && obj.BYTES_PER_ELEMENT);
    }
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/enum.js
var require_enum = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/enum.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EnumCodec = void 0;
    var text_1 = require_text();
    var EnumCodec = class extends text_1.StrCodec {
      constructor(tid, derivedFromTid = null, values) {
        super(tid, derivedFromTid);
        Object.defineProperty(this, "values", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.values = values;
      }
    };
    exports.EnumCodec = EnumCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/object.js
var require_object = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/object.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var buffer_1 = require_buffer();
    var consts_1 = require_consts();
    var errors_1 = require_errors();
    var EDGE_POINTER_IS_IMPLICIT = 1 << 0;
    var EDGE_POINTER_IS_LINKPROP = 1 << 1;
    var ObjectCodec = class extends ifaces_1.Codec {
      constructor(tid, codecs, names, flags, cards) {
        super(tid);
        Object.defineProperty(this, "codecs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "fields", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "namesSet", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "cardinalities", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.codecs = codecs;
        this.fields = new Array(names.length);
        this.namesSet = /* @__PURE__ */ new Set();
        this.cardinalities = cards;
        for (let i = 0; i < names.length; i++) {
          const isLinkprop = !!(flags[i] & EDGE_POINTER_IS_LINKPROP);
          const name = isLinkprop ? `@${names[i]}` : names[i];
          this.fields[i] = {
            name,
            implicit: !!(flags[i] & EDGE_POINTER_IS_IMPLICIT),
            linkprop: isLinkprop,
            cardinality: cards[i]
          };
          this.namesSet.add(name);
        }
      }
      encode(_buf, _object) {
        throw new errors_1.InvalidArgumentError("Objects cannot be passed as arguments");
      }
      encodeArgs(args) {
        if (this.fields[0].name === "0") {
          return this._encodePositionalArgs(args);
        }
        return this._encodeNamedArgs(args);
      }
      _encodePositionalArgs(args) {
        if (!Array.isArray(args)) {
          throw new errors_1.InvalidArgumentError("an array of arguments was expected");
        }
        const codecs = this.codecs;
        const codecsLen = codecs.length;
        if (args.length !== codecsLen) {
          throw new errors_1.QueryArgumentError(`expected ${codecsLen} argument${codecsLen === 1 ? "" : "s"}, got ${args.length}`);
        }
        const elemData = new buffer_1.WriteBuffer();
        for (let i = 0; i < codecsLen; i++) {
          elemData.writeInt32(0);
          const arg = args[i];
          if (arg == null) {
            const card = this.cardinalities[i];
            if (card === consts_1.ONE || card === consts_1.AT_LEAST_ONE) {
              throw new errors_1.MissingArgumentError(`argument ${this.fields[i].name} is required, but received ${arg}`);
            }
            elemData.writeInt32(-1);
          } else {
            const codec = codecs[i];
            codec.encode(elemData, arg);
          }
        }
        const elemBuf = elemData.unwrap();
        const buf = new buffer_1.WriteBuffer();
        buf.writeInt32(4 + elemBuf.length);
        buf.writeInt32(codecsLen);
        buf.writeBuffer(elemBuf);
        return buf.unwrap();
      }
      _encodeNamedArgs(args) {
        if (args == null) {
          throw new errors_1.MissingArgumentError("One or more named arguments expected, received null");
        }
        const keys = Object.keys(args);
        const fields = this.fields;
        const namesSet = this.namesSet;
        const codecs = this.codecs;
        const codecsLen = codecs.length;
        if (keys.length > codecsLen) {
          const extraKeys = keys.filter((key) => !namesSet.has(key));
          throw new errors_1.UnknownArgumentError(`Unused named argument${extraKeys.length === 1 ? "" : "s"}: "${extraKeys.join('", "')}"`);
        }
        const elemData = new buffer_1.WriteBuffer();
        for (let i = 0; i < codecsLen; i++) {
          const key = fields[i].name;
          const val = args[key];
          elemData.writeInt32(0);
          if (val == null) {
            const card = this.cardinalities[i];
            if (card === consts_1.ONE || card === consts_1.AT_LEAST_ONE) {
              throw new errors_1.MissingArgumentError(`argument ${this.fields[i].name} is required, but received ${val}`);
            }
            elemData.writeInt32(-1);
          } else {
            const codec = codecs[i];
            codec.encode(elemData, val);
          }
        }
        const elemBuf = elemData.unwrap();
        const buf = new buffer_1.WriteBuffer();
        buf.writeInt32(4 + elemBuf.length);
        buf.writeInt32(codecsLen);
        buf.writeBuffer(elemBuf);
        return buf.unwrap();
      }
      decode(buf) {
        const codecs = this.codecs;
        const fields = this.fields;
        const els = buf.readUInt32();
        if (els !== codecs.length) {
          throw new errors_1.ProtocolError(`cannot decode Object: expected ${codecs.length} elements, got ${els}`);
        }
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const result = {};
        for (let i = 0; i < els; i++) {
          buf.discard(4);
          const elemLen = buf.readInt32();
          const name = fields[i].name;
          let val = null;
          if (elemLen !== -1) {
            buf.sliceInto(elemBuf, elemLen);
            val = codecs[i].decode(elemBuf);
            elemBuf.finish();
          }
          result[name] = val;
        }
        return result;
      }
      getSubcodecs() {
        return Array.from(this.codecs);
      }
      getFields() {
        return Array.from(this.fields);
      }
      getKind() {
        return "object";
      }
    };
    exports.ObjectCodec = ObjectCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/set.js
var require_set = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/set.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SetCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var buffer_1 = require_buffer();
    var array_1 = require_array();
    var errors_1 = require_errors();
    var SetCodec = class extends ifaces_1.Codec {
      constructor(tid, subCodec) {
        super(tid);
        Object.defineProperty(this, "subCodec", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.subCodec = subCodec;
      }
      encode(_buf, _obj) {
        throw new errors_1.InvalidArgumentError("Sets cannot be passed in query arguments");
      }
      decode(buf) {
        if (this.subCodec instanceof array_1.ArrayCodec) {
          return this.decodeSetOfArrays(buf);
        } else {
          return this.decodeSet(buf);
        }
      }
      decodeSetOfArrays(buf) {
        const ndims = buf.readInt32();
        buf.discard(4);
        buf.discard(4);
        if (ndims === 0) {
          return [];
        }
        if (ndims !== 1) {
          throw new errors_1.ProtocolError(`expected 1-dimensional array of records of arrays`);
        }
        const len = buf.readUInt32();
        buf.discard(4);
        const result = new Array(len);
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const subCodec = this.subCodec;
        for (let i = 0; i < len; i++) {
          buf.discard(4);
          const recSize = buf.readUInt32();
          if (recSize !== 1) {
            throw new errors_1.ProtocolError("expected a record with a single element as an array set element envelope");
          }
          buf.discard(4);
          const elemLen = buf.readInt32();
          if (elemLen === -1) {
            throw new errors_1.ProtocolError("unexpected NULL value in array set element");
          }
          buf.sliceInto(elemBuf, elemLen);
          result[i] = subCodec.decode(elemBuf);
          elemBuf.finish();
        }
        return result;
      }
      decodeSet(buf) {
        const ndims = buf.readInt32();
        buf.discard(4);
        buf.discard(4);
        if (ndims === 0) {
          return [];
        }
        if (ndims !== 1) {
          throw new errors_1.ProtocolError(`invalid set dimensinality: ${ndims}`);
        }
        const len = buf.readUInt32();
        buf.discard(4);
        const result = new Array(len);
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const subCodec = this.subCodec;
        for (let i = 0; i < len; i++) {
          const elemLen = buf.readInt32();
          if (elemLen === -1) {
            result[i] = null;
          } else {
            buf.sliceInto(elemBuf, elemLen);
            result[i] = subCodec.decode(elemBuf);
            elemBuf.finish();
          }
        }
        return result;
      }
      getSubcodecs() {
        return [this.subCodec];
      }
      getKind() {
        return "set";
      }
    };
    exports.SetCodec = SetCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/utils.js
var require_utils = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/utils.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.versionGreaterThanOrEqual = exports.versionGreaterThan = exports.sleep = exports.getUniqueId = void 0;
    var idCounter = {};
    function getUniqueId(prefix = "") {
      if (!idCounter[prefix]) {
        idCounter[prefix] = 0;
      }
      const id = ++idCounter[prefix];
      return `_edgedb_${prefix}_${id.toString(16)}_`;
    }
    exports.getUniqueId = getUniqueId;
    function sleep(durationMillis) {
      return new Promise((accept) => {
        setTimeout(() => accept(), durationMillis);
      });
    }
    exports.sleep = sleep;
    function versionGreaterThan(left, right) {
      if (left[0] > right[0]) {
        return true;
      }
      if (left[0] < right[0]) {
        return false;
      }
      return left[1] > right[1];
    }
    exports.versionGreaterThan = versionGreaterThan;
    function versionGreaterThanOrEqual(left, right) {
      if (left[0] === right[0] && left[1] === right[1]) {
        return true;
      }
      return versionGreaterThan(left, right);
    }
    exports.versionGreaterThanOrEqual = versionGreaterThanOrEqual;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/sparseObject.js
var require_sparseObject = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/sparseObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SparseObjectCodec = void 0;
    var ifaces_1 = require_ifaces2();
    var buffer_1 = require_buffer();
    var errors_1 = require_errors();
    var SparseObjectCodec = class extends ifaces_1.Codec {
      constructor(tid, codecs, names) {
        super(tid);
        Object.defineProperty(this, "codecs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "names", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.codecs = codecs;
        this.names = names;
      }
      encode(buf, object) {
        const elemBuf = new buffer_1.WriteBuffer();
        let objLen = 0;
        for (const [key, val] of Object.entries(object)) {
          if (val !== void 0) {
            const i = this.names.indexOf(key);
            if (i === -1) {
              throw new errors_1.UnknownArgumentError(this.names.length ? `invalid global '${key}', valid globals are ${this.names.map((n) => `'${n}'`).join(", ")}` : `invalid global '${key}', no valid globals exist`);
            }
            objLen += 1;
            elemBuf.writeInt32(i);
            if (val === null) {
              elemBuf.writeInt32(-1);
            } else {
              this.codecs[i].encode(elemBuf, val);
            }
          }
        }
        const elemData = elemBuf.unwrap();
        buf.writeInt32(4 + elemData.length);
        buf.writeInt32(objLen);
        buf.writeBuffer(elemData);
      }
      decode(buf) {
        const codecs = this.codecs;
        const names = this.names;
        const els = buf.readUInt32();
        const elemBuf = buffer_1.ReadBuffer.alloc();
        const result = {};
        for (let _ = 0; _ < els; _++) {
          const i = buf.readUInt32();
          const elemLen = buf.readInt32();
          const name = names[i];
          let val = null;
          if (elemLen !== -1) {
            buf.sliceInto(elemBuf, elemLen);
            val = codecs[i].decode(elemBuf);
            elemBuf.finish();
          }
          result[name] = val;
        }
        return result;
      }
      getSubcodecs() {
        return Array.from(this.codecs);
      }
      getKind() {
        return "sparse_object";
      }
    };
    exports.SparseObjectCodec = SparseObjectCodec;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/registry.js
var require_registry = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/codecs/registry.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.CodecsRegistry = void 0;
    var buffer_1 = require_buffer();
    var lru_1 = __importDefault(require_lru());
    var ifaces_1 = require_ifaces2();
    var codecs_1 = require_codecs();
    var consts_1 = require_consts();
    var tuple_1 = require_tuple();
    var numbers = __importStar(require_numbers());
    var datecodecs = __importStar(require_datetime2());
    var json_1 = require_json();
    var array_1 = require_array();
    var namedtuple_1 = require_namedtuple();
    var enum_1 = require_enum();
    var object_1 = require_object();
    var set_1 = require_set();
    var range_1 = require_range2();
    var utils_1 = require_utils();
    var sparseObject_1 = require_sparseObject();
    var errors_1 = require_errors();
    var CODECS_CACHE_SIZE = 1e3;
    var CODECS_BUILD_CACHE_SIZE = 200;
    var CTYPE_SET = 0;
    var CTYPE_SHAPE = 1;
    var CTYPE_BASE_SCALAR = 2;
    var CTYPE_SCALAR = 3;
    var CTYPE_TUPLE = 4;
    var CTYPE_NAMEDTUPLE = 5;
    var CTYPE_ARRAY = 6;
    var CTYPE_ENUM = 7;
    var CTYPE_INPUT_SHAPE = 8;
    var CTYPE_RANGE = 9;
    var INT64_TYPEID = consts_1.KNOWN_TYPENAMES.get("std::int64");
    var DATETIME_TYPEID = consts_1.KNOWN_TYPENAMES.get("std::datetime");
    var JSON_TYPEID = consts_1.KNOWN_TYPENAMES.get("std::json");
    var CodecsRegistry = class {
      constructor() {
        Object.defineProperty(this, "codecsBuildCache", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "codecs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "customScalarCodecs", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.codecs = new lru_1.default({ capacity: CODECS_CACHE_SIZE });
        this.codecsBuildCache = new lru_1.default({ capacity: CODECS_BUILD_CACHE_SIZE });
        this.customScalarCodecs = /* @__PURE__ */ new Map();
      }
      setCustomCodecs({ int64_bigint, datetime_localDatetime, json_string } = {}) {
        if (int64_bigint) {
          this.customScalarCodecs.set(INT64_TYPEID, new numbers.Int64BigintCodec(INT64_TYPEID));
        } else {
          this.customScalarCodecs.delete(INT64_TYPEID);
        }
        if (datetime_localDatetime) {
          this.customScalarCodecs.set(DATETIME_TYPEID, new datecodecs.LocalDateTimeCodec(DATETIME_TYPEID));
        } else {
          this.customScalarCodecs.delete(DATETIME_TYPEID);
        }
        if (json_string) {
          this.customScalarCodecs.set(JSON_TYPEID, new json_1.JSONStringCodec(JSON_TYPEID));
        } else {
          this.customScalarCodecs.delete(JSON_TYPEID);
        }
      }
      hasCodec(typeId) {
        if (this.codecs.has(typeId)) {
          return true;
        }
        return typeId === consts_1.NULL_CODEC_ID || typeId === tuple_1.EMPTY_TUPLE_CODEC_ID;
      }
      getCodec(typeId) {
        const codec = this.codecs.get(typeId);
        if (codec != null) {
          return codec;
        }
        if (typeId === tuple_1.EMPTY_TUPLE_CODEC_ID) {
          return tuple_1.EMPTY_TUPLE_CODEC;
        }
        if (typeId === consts_1.NULL_CODEC_ID) {
          return codecs_1.NULL_CODEC;
        }
        return null;
      }
      buildCodec(spec, protocolVersion) {
        const frb = new buffer_1.ReadBuffer(spec);
        const codecsList = [];
        let codec = null;
        while (frb.length) {
          codec = this._buildCodec(frb, codecsList, protocolVersion);
          if (codec == null) {
            continue;
          }
          codecsList.push(codec);
          this.codecs.set(codec.tid, codec);
        }
        if (!codecsList.length) {
          throw new errors_1.InternalClientError("could not build a codec");
        }
        return codecsList[codecsList.length - 1];
      }
      _buildCodec(frb, cl, protocolVersion) {
        var _a;
        const t = frb.readUInt8();
        const tid = frb.readUUID();
        let res = this.codecs.get(tid);
        if (res == null) {
          res = this.codecsBuildCache.get(tid);
        }
        if (res != null) {
          switch (t) {
            case CTYPE_SET: {
              frb.discard(2);
              break;
            }
            case CTYPE_SHAPE:
            case CTYPE_INPUT_SHAPE: {
              const els = frb.readUInt16();
              for (let i = 0; i < els; i++) {
                if ((0, utils_1.versionGreaterThanOrEqual)(protocolVersion, [0, 11])) {
                  frb.discard(5);
                } else {
                  frb.discard(1);
                }
                const elm_length = frb.readUInt32();
                frb.discard(elm_length + 2);
              }
              break;
            }
            case CTYPE_BASE_SCALAR: {
              break;
            }
            case CTYPE_RANGE:
            case CTYPE_SCALAR: {
              frb.discard(2);
              break;
            }
            case CTYPE_TUPLE: {
              const els = frb.readUInt16();
              frb.discard(2 * els);
              break;
            }
            case CTYPE_NAMEDTUPLE: {
              const els = frb.readUInt16();
              for (let i = 0; i < els; i++) {
                const elm_length = frb.readUInt32();
                frb.discard(elm_length + 2);
              }
              break;
            }
            case CTYPE_ARRAY: {
              frb.discard(2);
              const els = frb.readUInt16();
              if (els !== 1) {
                throw new errors_1.ProtocolError("cannot handle arrays with more than one dimension");
              }
              frb.discard(4);
              break;
            }
            case CTYPE_ENUM: {
              const els = frb.readUInt16();
              for (let i = 0; i < els; i++) {
                const elm_length = frb.readUInt32();
                frb.discard(elm_length);
              }
              break;
            }
            default: {
              if (t >= 127 && t <= 255) {
                const ann_length = frb.readUInt32();
                if (t === 255) {
                  const typeName = buffer_1.utf8Decoder.decode(frb.readBuffer(ann_length));
                  const codec = (_a = this.codecs.get(tid)) !== null && _a !== void 0 ? _a : this.codecsBuildCache.get(tid);
                  if (codec instanceof ifaces_1.ScalarCodec) {
                    codec.setTypeName(typeName);
                  }
                } else {
                  frb.discard(ann_length);
                }
                return null;
              } else {
                throw new errors_1.InternalClientError(`no codec implementation for EdgeDB data class ${t}`);
              }
            }
          }
          return res;
        }
        switch (t) {
          case CTYPE_BASE_SCALAR: {
            res = this.customScalarCodecs.get(tid);
            if (res != null) {
              break;
            }
            res = codecs_1.SCALAR_CODECS.get(tid);
            if (!res) {
              if (consts_1.KNOWN_TYPES.has(tid)) {
                throw new errors_1.InternalClientError(`no JS codec for ${consts_1.KNOWN_TYPES.get(tid)}`);
              }
              throw new errors_1.InternalClientError(`no JS codec for the type with ID ${tid}`);
            }
            if (!(res instanceof ifaces_1.ScalarCodec)) {
              throw new errors_1.ProtocolError("could not build scalar codec: base scalar is a non-scalar codec");
            }
            break;
          }
          case CTYPE_SHAPE:
          case CTYPE_INPUT_SHAPE: {
            const els = frb.readUInt16();
            const codecs = new Array(els);
            const names = new Array(els);
            const flags = new Array(els);
            const cards = new Array(els);
            for (let i = 0; i < els; i++) {
              let flag;
              let card;
              if ((0, utils_1.versionGreaterThanOrEqual)(protocolVersion, [0, 11])) {
                flag = frb.readUInt32();
                card = frb.readUInt8();
              } else {
                flag = frb.readUInt8();
                card = 0;
              }
              const name = frb.readString();
              const pos = frb.readUInt16();
              const subCodec = cl[pos];
              if (subCodec == null) {
                throw new errors_1.ProtocolError("could not build object codec: missing subcodec");
              }
              codecs[i] = subCodec;
              names[i] = name;
              flags[i] = flag;
              cards[i] = card;
            }
            res = t === CTYPE_INPUT_SHAPE ? new sparseObject_1.SparseObjectCodec(tid, codecs, names) : new object_1.ObjectCodec(tid, codecs, names, flags, cards);
            break;
          }
          case CTYPE_SET: {
            const pos = frb.readUInt16();
            const subCodec = cl[pos];
            if (subCodec == null) {
              throw new errors_1.ProtocolError("could not build set codec: missing subcodec");
            }
            res = new set_1.SetCodec(tid, subCodec);
            break;
          }
          case CTYPE_SCALAR: {
            const pos = frb.readUInt16();
            res = cl[pos];
            if (res == null) {
              throw new errors_1.ProtocolError("could not build scalar codec: missing a codec for base scalar");
            }
            if (!(res instanceof ifaces_1.ScalarCodec)) {
              throw new errors_1.ProtocolError("could not build scalar codec: base scalar has a non-scalar codec");
            }
            res = res.derive(tid);
            break;
          }
          case CTYPE_ARRAY: {
            const pos = frb.readUInt16();
            const els = frb.readUInt16();
            if (els !== 1) {
              throw new errors_1.ProtocolError("cannot handle arrays with more than one dimension");
            }
            const dimLen = frb.readInt32();
            const subCodec = cl[pos];
            if (subCodec == null) {
              throw new errors_1.ProtocolError("could not build array codec: missing subcodec");
            }
            res = new array_1.ArrayCodec(tid, subCodec, dimLen);
            break;
          }
          case CTYPE_TUPLE: {
            const els = frb.readUInt16();
            if (els === 0) {
              res = tuple_1.EMPTY_TUPLE_CODEC;
            } else {
              const codecs = new Array(els);
              for (let i = 0; i < els; i++) {
                const pos = frb.readUInt16();
                const subCodec = cl[pos];
                if (subCodec == null) {
                  throw new errors_1.ProtocolError("could not build tuple codec: missing subcodec");
                }
                codecs[i] = subCodec;
              }
              res = new tuple_1.TupleCodec(tid, codecs);
            }
            break;
          }
          case CTYPE_NAMEDTUPLE: {
            const els = frb.readUInt16();
            const codecs = new Array(els);
            const names = new Array(els);
            for (let i = 0; i < els; i++) {
              names[i] = frb.readString();
              const pos = frb.readUInt16();
              const subCodec = cl[pos];
              if (subCodec == null) {
                throw new errors_1.ProtocolError("could not build namedtuple codec: missing subcodec");
              }
              codecs[i] = subCodec;
            }
            res = new namedtuple_1.NamedTupleCodec(tid, codecs, names);
            break;
          }
          case CTYPE_ENUM: {
            const els = frb.readUInt16();
            const values = [];
            for (let i = 0; i < els; i++) {
              values.push(frb.readString());
            }
            res = new enum_1.EnumCodec(tid, null, values);
            break;
          }
          case CTYPE_RANGE: {
            const pos = frb.readUInt16();
            const subCodec = cl[pos];
            if (subCodec == null) {
              throw new errors_1.ProtocolError("could not build range codec: missing subcodec");
            }
            res = new range_1.RangeCodec(tid, subCodec);
            break;
          }
        }
        if (res == null) {
          if (consts_1.KNOWN_TYPES.has(tid)) {
            throw new errors_1.InternalClientError(`could not build a codec for ${consts_1.KNOWN_TYPES.get(tid)} type`);
          } else {
            throw new errors_1.InternalClientError(`could not build a codec for ${tid} type`);
          }
        }
        this.codecsBuildCache.set(tid, res);
        return res;
      }
    };
    exports.CodecsRegistry = CodecsRegistry;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/options.js
var require_options = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/options.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Options = exports.Session = exports.TransactionOptions = exports.RetryOptions = exports.RetryCondition = exports.IsolationLevel = exports.defaultBackoff = void 0;
    var errors = __importStar(require_errors());
    function defaultBackoff(attempt) {
      return 2 ** attempt * 100 + Math.random() * 100;
    }
    exports.defaultBackoff = defaultBackoff;
    var IsolationLevel;
    (function(IsolationLevel2) {
      IsolationLevel2["Serializable"] = "SERIALIZABLE";
    })(IsolationLevel = exports.IsolationLevel || (exports.IsolationLevel = {}));
    var RetryCondition;
    (function(RetryCondition2) {
      RetryCondition2[RetryCondition2["TransactionConflict"] = 0] = "TransactionConflict";
      RetryCondition2[RetryCondition2["NetworkError"] = 1] = "NetworkError";
    })(RetryCondition = exports.RetryCondition || (exports.RetryCondition = {}));
    var RetryRule = class {
      constructor(attempts, backoff) {
        Object.defineProperty(this, "attempts", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "backoff", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.attempts = attempts;
        this.backoff = backoff;
      }
    };
    var RetryOptions = class _RetryOptions {
      constructor(attempts = 3, backoff = defaultBackoff) {
        Object.defineProperty(this, "default", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "overrides", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.default = new RetryRule(attempts, backoff);
        this.overrides = /* @__PURE__ */ new Map();
      }
      withRule(condition, attempts, backoff) {
        const def = this.default;
        const overrides = new Map(this.overrides);
        overrides.set(condition, new RetryRule(attempts !== null && attempts !== void 0 ? attempts : def.attempts, backoff !== null && backoff !== void 0 ? backoff : def.backoff));
        const result = Object.create(_RetryOptions.prototype);
        result.default = def;
        result.overrides = overrides;
        return result;
      }
      getRuleForException(err) {
        let result;
        if (err instanceof errors.TransactionConflictError) {
          result = this.overrides.get(RetryCondition.TransactionConflict);
        } else if (err instanceof errors.ClientError) {
          result = this.overrides.get(RetryCondition.NetworkError);
        }
        return result !== null && result !== void 0 ? result : this.default;
      }
      static defaults() {
        return new _RetryOptions();
      }
    };
    exports.RetryOptions = RetryOptions;
    var TransactionOptions = class _TransactionOptions {
      constructor({ isolation = IsolationLevel.Serializable, readonly = false, deferrable = false } = {}) {
        Object.defineProperty(this, "isolation", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "readonly", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "deferrable", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.isolation = isolation;
        this.readonly = readonly;
        this.deferrable = deferrable;
      }
      static defaults() {
        return new _TransactionOptions();
      }
    };
    exports.TransactionOptions = TransactionOptions;
    var Session = class _Session {
      constructor({ module: module2 = "default", moduleAliases = {}, config = {}, globals = {} } = {}) {
        Object.defineProperty(this, "module", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "moduleAliases", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "config", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "globals", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.module = module2;
        this.moduleAliases = moduleAliases;
        this.config = config;
        this.globals = globals;
      }
      withModuleAliases({ module: module2, ...aliases }) {
        return new _Session({
          ...this,
          module: module2 !== null && module2 !== void 0 ? module2 : this.module,
          moduleAliases: { ...this.moduleAliases, ...aliases }
        });
      }
      withConfig(config) {
        return new _Session({
          ...this,
          config: { ...this.config, ...config }
        });
      }
      withGlobals(globals) {
        return new _Session({
          ...this,
          globals: { ...this.globals, ...globals }
        });
      }
      _serialise() {
        const state = {};
        if (this.module !== "default") {
          state.module = this.module;
        }
        const _aliases = Object.entries(this.moduleAliases);
        if (_aliases.length) {
          state.aliases = _aliases;
        }
        if (Object.keys(this.config).length) {
          state.config = this.config;
        }
        const _globals = Object.entries(this.globals);
        if (_globals.length) {
          state.globals = _globals.reduce((globals, [key, val]) => {
            globals[key.includes("::") ? key : `${this.module}::${key}`] = val;
            return globals;
          }, {});
        }
        return state;
      }
      static defaults() {
        return defaultSession;
      }
    };
    exports.Session = Session;
    var defaultSession = new Session();
    var Options = class _Options {
      constructor({ retryOptions = RetryOptions.defaults(), transactionOptions = TransactionOptions.defaults(), session = Session.defaults() } = {}) {
        Object.defineProperty(this, "retryOptions", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "transactionOptions", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "session", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.retryOptions = retryOptions;
        this.transactionOptions = transactionOptions;
        this.session = session;
      }
      withTransactionOptions(opt) {
        return new _Options({
          ...this,
          transactionOptions: opt instanceof TransactionOptions ? opt : new TransactionOptions(opt)
        });
      }
      withRetryOptions(opt) {
        return new _Options({
          ...this,
          retryOptions: opt instanceof RetryOptions ? opt : new RetryOptions(opt.attempts, opt.backoff)
        });
      }
      withSession(opt) {
        return new _Options({
          ...this,
          session: opt
        });
      }
      static defaults() {
        return new _Options();
      }
    };
    exports.Options = Options;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/event.js
var require_event = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/event.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var errors_1 = require_errors();
    var Event = class {
      async wait() {
        await this._promise;
      }
      then(...args) {
        throw new errors_1.InternalClientError("Event objects cannot be awaited on directly; use Event.wait()");
      }
      get done() {
        return this._done;
      }
      set() {
        if (this._done) {
          throw new errors_1.InternalClientError("emit(): the Event is already set");
        }
        this._resolve(true);
      }
      setError(reason) {
        if (this._done) {
          throw new errors_1.InternalClientError("emitError(): the Event is already set");
        }
        this._reject(reason);
      }
      constructor() {
        Object.defineProperty(this, "_promise", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_resolve", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_reject", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_done", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._done = false;
        let futReject = null;
        let futResolve = null;
        this._promise = new Promise((resolve, reject) => {
          futReject = (reason) => {
            this._done = true;
            reject(reason);
          };
          futResolve = (value) => {
            this._done = true;
            resolve(value);
          };
        });
        if (!futReject || !futResolve) {
          throw new errors_1.InternalClientError("Promise executor was not called synchronously");
        }
        this._reject = futReject;
        this._resolve = futResolve;
      }
    };
    exports.default = Event;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/queues.js
var require_queues = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/queues.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.LifoQueue = void 0;
    var errors_1 = require_errors();
    var LifoQueue = class {
      constructor() {
        Object.defineProperty(this, "_promises", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_resolvers", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_rejecters", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._resolvers = [];
        this._rejecters = [];
        this._promises = [];
      }
      _add() {
        this._promises.push(new Promise((resolve, reject) => {
          this._resolvers.push(resolve);
          this._rejecters.push(reject);
        }));
      }
      push(item) {
        if (!this._resolvers.length) {
          this._add();
        }
        const resolve = this._resolvers.shift();
        this._rejecters.shift();
        if (!resolve) {
          throw new errors_1.InternalClientError("resolve function was null or undefined when attempting to push.");
        }
        resolve(item);
      }
      get() {
        if (!this._promises.length) {
          this._add();
        }
        const promise = this._promises.pop();
        if (!promise) {
          throw new errors_1.InternalClientError("promise was null or undefined when attempting to get.");
        }
        return promise;
      }
      cancelAllPending(err) {
        const rejecters = this._rejecters;
        this._rejecters = [];
        this._resolvers = [];
        for (const reject of rejecters) {
          reject(err);
        }
      }
      get length() {
        return this._promises.length - this._resolvers.length;
      }
      get pending() {
        return Math.max(0, this._resolvers.length - this._promises.length);
      }
    };
    exports.LifoQueue = LifoQueue;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/retry.js
var require_retry = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/retry.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retryingConnect = void 0;
    var errors = __importStar(require_errors());
    var utils_1 = require_utils();
    var lastLoggingAt = 0;
    async function retryingConnect(connectWithTimeout, config, registry) {
      const maxTime = config.connectionParams.waitUntilAvailable === 0 ? 0 : Date.now() + config.connectionParams.waitUntilAvailable;
      while (true) {
        try {
          return await connectWithTimeout(config.connectionParams.address, config, registry);
        } catch (e) {
          if (e instanceof errors.ClientConnectionError) {
            if (e.hasTag(errors.SHOULD_RECONNECT)) {
              const now = Date.now();
              if (now > maxTime) {
                throw e;
              }
              if (config.logging && (!lastLoggingAt || now - lastLoggingAt > 5e3)) {
                lastLoggingAt = now;
                const logMsg = [
                  `A client connection error occurred; reconnecting because of "waitUntilAvailable=${config.connectionParams.waitUntilAvailable}".`,
                  e
                ];
                if (!config.fromProject && !config.fromEnv && await config.inProject()) {
                  logMsg.push(`


Hint: it looks like the program is running from a directory initialized with "edgedb project init". Consider calling "edgedb.connect()" without arguments.
`);
                }
                console.warn(...logMsg);
              }
            } else {
              throw e;
            }
          } else {
            console.error("Unexpected connection error:", e);
            throw e;
          }
        }
        await (0, utils_1.sleep)(Math.trunc(10 + Math.random() * 200));
      }
    }
    exports.retryingConnect = retryingConnect;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/transaction.js
var require_transaction = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/transaction.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Transaction = exports.TransactionState = void 0;
    var errors = __importStar(require_errors());
    var ifaces_1 = require_ifaces();
    var TransactionState;
    (function(TransactionState2) {
      TransactionState2[TransactionState2["ACTIVE"] = 0] = "ACTIVE";
      TransactionState2[TransactionState2["COMMITTED"] = 1] = "COMMITTED";
      TransactionState2[TransactionState2["ROLLEDBACK"] = 2] = "ROLLEDBACK";
      TransactionState2[TransactionState2["FAILED"] = 3] = "FAILED";
    })(TransactionState = exports.TransactionState || (exports.TransactionState = {}));
    var Transaction = class _Transaction {
      constructor(holder, rawConn) {
        Object.defineProperty(this, "_holder", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_rawConn", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_state", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_opInProgress", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._holder = holder;
        this._rawConn = rawConn;
        this._state = TransactionState.ACTIVE;
        this._opInProgress = false;
      }
      static async _startTransaction(holder) {
        const rawConn = await holder._getConnection();
        await rawConn.resetState();
        const options = holder.options.transactionOptions;
        await rawConn.fetch(`START TRANSACTION ISOLATION ${options.isolation}, ${options.readonly ? "READ ONLY" : "READ WRITE"}, ${options.deferrable ? "" : "NOT "}DEFERRABLE;`, void 0, ifaces_1.OutputFormat.NONE, ifaces_1.Cardinality.NO_RESULT, holder.options.session, true);
        return new _Transaction(holder, rawConn);
      }
      async _waitForConnAbort() {
        await this._rawConn.connAbortWaiter.wait();
        const abortError = this._rawConn.getConnAbortError();
        if (abortError instanceof errors.EdgeDBError && abortError.source instanceof errors.TransactionTimeoutError) {
          throw abortError.source;
        } else {
          throw abortError;
        }
      }
      async _runOp(opname, op, errMessage) {
        if (this._opInProgress) {
          throw new errors.InterfaceError(errMessage !== null && errMessage !== void 0 ? errMessage : "Another query is in progress. Use the query methods on 'Client' to run queries concurrently.");
        }
        if (this._state !== TransactionState.ACTIVE) {
          throw new errors.InterfaceError(`cannot ${opname}; the transaction is ${this._state === TransactionState.COMMITTED ? "already committed" : this._state === TransactionState.ROLLEDBACK ? "already rolled back" : "in error state"}`);
        }
        this._opInProgress = true;
        try {
          return await op();
        } finally {
          this._opInProgress = false;
        }
      }
      async _commit() {
        await this._runOp("commit", async () => {
          await this._rawConn.fetch("COMMIT", void 0, ifaces_1.OutputFormat.NONE, ifaces_1.Cardinality.NO_RESULT, this._holder.options.session, true);
          this._state = TransactionState.COMMITTED;
        }, "A query is still in progress after transaction block has returned.");
      }
      async _rollback() {
        await this._runOp("rollback", async () => {
          await this._rawConn.fetch("ROLLBACK", void 0, ifaces_1.OutputFormat.NONE, ifaces_1.Cardinality.NO_RESULT, this._holder.options.session, true);
          this._state = TransactionState.ROLLEDBACK;
        }, "A query is still in progress after transaction block has returned.");
      }
      async execute(query, args) {
        return this._runOp("execute", () => this._rawConn.fetch(query, args, ifaces_1.OutputFormat.NONE, ifaces_1.Cardinality.NO_RESULT, this._holder.options.session));
      }
      async query(query, args) {
        return this._runOp("query", () => this._rawConn.fetch(query, args, ifaces_1.OutputFormat.BINARY, ifaces_1.Cardinality.MANY, this._holder.options.session));
      }
      async queryJSON(query, args) {
        return this._runOp("queryJSON", () => this._rawConn.fetch(query, args, ifaces_1.OutputFormat.JSON, ifaces_1.Cardinality.MANY, this._holder.options.session));
      }
      async querySingle(query, args) {
        return this._runOp("querySingle", () => this._rawConn.fetch(query, args, ifaces_1.OutputFormat.BINARY, ifaces_1.Cardinality.AT_MOST_ONE, this._holder.options.session));
      }
      async querySingleJSON(query, args) {
        return this._runOp("querySingleJSON", () => this._rawConn.fetch(query, args, ifaces_1.OutputFormat.JSON, ifaces_1.Cardinality.AT_MOST_ONE, this._holder.options.session));
      }
      async queryRequiredSingle(query, args) {
        return this._runOp("queryRequiredSingle", () => this._rawConn.fetch(query, args, ifaces_1.OutputFormat.BINARY, ifaces_1.Cardinality.ONE, this._holder.options.session));
      }
      async queryRequiredSingleJSON(query, args) {
        return this._runOp("queryRequiredSingleJSON", () => this._rawConn.fetch(query, args, ifaces_1.OutputFormat.JSON, ifaces_1.Cardinality.ONE, this._holder.options.session));
      }
    };
    exports.Transaction = Transaction;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/baseClient.js
var require_baseClient = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/baseClient.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Client = exports.BaseClientPool = exports.ClientConnectionHolder = void 0;
    var registry_1 = require_registry();
    var errors = __importStar(require_errors());
    var ifaces_1 = require_ifaces();
    var options_1 = require_options();
    var event_1 = __importDefault(require_event());
    var queues_1 = require_queues();
    var retry_1 = require_retry();
    var transaction_1 = require_transaction();
    var utils_1 = require_utils();
    var ClientConnectionHolder = class {
      constructor(pool) {
        Object.defineProperty(this, "_pool", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_connection", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_options", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_inUse", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this._pool = pool;
        this._connection = null;
        this._options = null;
        this._inUse = null;
      }
      get options() {
        var _a;
        return (_a = this._options) !== null && _a !== void 0 ? _a : options_1.Options.defaults();
      }
      async _getConnection() {
        if (!this._connection || this._connection.isClosed()) {
          this._connection = await this._pool.getNewConnection();
        }
        return this._connection;
      }
      get connectionOpen() {
        return this._connection !== null && !this._connection.isClosed();
      }
      async acquire(options) {
        if (this._inUse) {
          throw new errors.InternalClientError("ClientConnectionHolder cannot be acquired, already in use");
        }
        this._options = options;
        this._inUse = new event_1.default();
        return this;
      }
      async release() {
        var _a;
        if (this._inUse === null) {
          throw new errors.ClientError("ClientConnectionHolder.release() called on a free connection holder");
        }
        this._options = null;
        await ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.resetState());
        if (!this._inUse.done) {
          this._inUse.set();
        }
        this._inUse = null;
        this._pool.enqueue(this);
      }
      async _waitUntilReleasedAndClose() {
        var _a;
        if (this._inUse) {
          await this._inUse.wait();
        }
        await ((_a = this._connection) === null || _a === void 0 ? void 0 : _a.close());
      }
      terminate() {
        var _a;
        (_a = this._connection) === null || _a === void 0 ? void 0 : _a.close();
      }
      async transaction(action) {
        let result;
        for (let iteration = 0; true; ++iteration) {
          const transaction = await transaction_1.Transaction._startTransaction(this);
          let commitFailed = false;
          try {
            result = await Promise.race([
              action(transaction),
              transaction._waitForConnAbort()
            ]);
            try {
              await transaction._commit();
            } catch (err) {
              commitFailed = true;
              throw err;
            }
          } catch (err) {
            try {
              if (!commitFailed) {
                await transaction._rollback();
              }
            } catch (rollback_err) {
              if (!(rollback_err instanceof errors.EdgeDBError)) {
                throw rollback_err;
              }
            }
            if (err instanceof errors.EdgeDBError && err.hasTag(errors.SHOULD_RETRY) && !(commitFailed && err instanceof errors.ClientConnectionError)) {
              const rule = this.options.retryOptions.getRuleForException(err);
              if (iteration + 1 >= rule.attempts) {
                throw err;
              }
              await (0, utils_1.sleep)(rule.backoff(iteration + 1));
              continue;
            }
            throw err;
          }
          return result;
        }
      }
      async retryingFetch(query, args, outputFormat, expectedCardinality) {
        let result;
        for (let iteration = 0; true; ++iteration) {
          const conn = await this._getConnection();
          try {
            result = await conn.fetch(query, args, outputFormat, expectedCardinality, this.options.session);
          } catch (err) {
            if (err instanceof errors.EdgeDBError && err.hasTag(errors.SHOULD_RETRY) && (conn.getQueryCapabilities(query, outputFormat, expectedCardinality) === 0 || err instanceof errors.TransactionConflictError)) {
              const rule = this.options.retryOptions.getRuleForException(err);
              if (iteration + 1 >= rule.attempts) {
                throw err;
              }
              await (0, utils_1.sleep)(rule.backoff(iteration + 1));
              continue;
            }
            throw err;
          }
          return result;
        }
      }
      async execute(query, args) {
        return this.retryingFetch(query, args, ifaces_1.OutputFormat.NONE, ifaces_1.Cardinality.NO_RESULT);
      }
      async query(query, args) {
        return this.retryingFetch(query, args, ifaces_1.OutputFormat.BINARY, ifaces_1.Cardinality.MANY);
      }
      async queryJSON(query, args) {
        return this.retryingFetch(query, args, ifaces_1.OutputFormat.JSON, ifaces_1.Cardinality.MANY);
      }
      async querySingle(query, args) {
        return this.retryingFetch(query, args, ifaces_1.OutputFormat.BINARY, ifaces_1.Cardinality.AT_MOST_ONE);
      }
      async querySingleJSON(query, args) {
        return this.retryingFetch(query, args, ifaces_1.OutputFormat.JSON, ifaces_1.Cardinality.AT_MOST_ONE);
      }
      async queryRequiredSingle(query, args) {
        return this.retryingFetch(query, args, ifaces_1.OutputFormat.BINARY, ifaces_1.Cardinality.ONE);
      }
      async queryRequiredSingleJSON(query, args) {
        return this.retryingFetch(query, args, ifaces_1.OutputFormat.JSON, ifaces_1.Cardinality.ONE);
      }
    };
    exports.ClientConnectionHolder = ClientConnectionHolder;
    var BaseClientPool = class {
      constructor(_parseConnectArguments, options) {
        var _a;
        Object.defineProperty(this, "_parseConnectArguments", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: _parseConnectArguments
        });
        Object.defineProperty(this, "_closing", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_queue", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_holders", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_userConcurrency", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_suggestedConcurrency", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_connectConfig", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_codecsRegistry", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "__normalizedConnectConfig", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        this.validateClientOptions(options);
        this._codecsRegistry = new registry_1.CodecsRegistry();
        this._queue = new queues_1.LifoQueue();
        this._holders = [];
        this._userConcurrency = (_a = options.concurrency) !== null && _a !== void 0 ? _a : null;
        this._suggestedConcurrency = null;
        this._closing = null;
        this._connectConfig = { ...options };
        this._resizeHolderPool();
      }
      validateClientOptions(opts) {
        if (opts.concurrency != null && (typeof opts.concurrency !== "number" || !Number.isInteger(opts.concurrency) || opts.concurrency < 0)) {
          throw new errors.InterfaceError(`invalid 'concurrency' value: expected integer greater than 0 (got ${JSON.stringify(opts.concurrency)})`);
        }
      }
      _getStats() {
        return {
          queueLength: this._queue.pending,
          openConnections: this._holders.filter((holder) => holder.connectionOpen).length
        };
      }
      async ensureConnected() {
        if (this._closing) {
          throw new errors.InterfaceError(this._closing.done ? "The client is closed" : "The client is closing");
        }
        if (this._getStats().openConnections > 0) {
          return;
        }
        const connHolder = await this._queue.get();
        try {
          await connHolder._getConnection();
        } finally {
          this._queue.push(connHolder);
        }
      }
      get _concurrency() {
        var _a, _b;
        return (_b = (_a = this._userConcurrency) !== null && _a !== void 0 ? _a : this._suggestedConcurrency) !== null && _b !== void 0 ? _b : 1;
      }
      _resizeHolderPool() {
        const holdersDiff = this._concurrency - this._holders.length;
        if (holdersDiff > 0) {
          for (let i = 0; i < holdersDiff; i++) {
            const connectionHolder = new ClientConnectionHolder(this);
            this._holders.push(connectionHolder);
            this._queue.push(connectionHolder);
          }
        } else if (holdersDiff < 0) {
        }
      }
      _getNormalizedConnectConfig() {
        var _a;
        return (_a = this.__normalizedConnectConfig) !== null && _a !== void 0 ? _a : this.__normalizedConnectConfig = this._parseConnectArguments(this._connectConfig);
      }
      async getNewConnection() {
        var _a;
        if ((_a = this._closing) === null || _a === void 0 ? void 0 : _a.done) {
          throw new errors.InterfaceError("The client is closed");
        }
        const config = await this._getNormalizedConnectConfig();
        const connection = await (0, retry_1.retryingConnect)(this._connectWithTimeout, config, this._codecsRegistry);
        const suggestedConcurrency = connection.serverSettings.suggested_pool_concurrency;
        if (suggestedConcurrency && suggestedConcurrency !== this._suggestedConcurrency) {
          this._suggestedConcurrency = suggestedConcurrency;
          this._resizeHolderPool();
        }
        return connection;
      }
      async acquireHolder(options) {
        if (this._closing) {
          throw new errors.InterfaceError(this._closing.done ? "The client is closed" : "The client is closing");
        }
        const connectionHolder = await this._queue.get();
        try {
          return await connectionHolder.acquire(options);
        } catch (error) {
          this._queue.push(connectionHolder);
          throw error;
        }
      }
      enqueue(holder) {
        this._queue.push(holder);
      }
      async close() {
        if (this._closing) {
          return await this._closing.wait();
        }
        this._closing = new event_1.default();
        this._queue.cancelAllPending(new errors.InterfaceError(`The client is closing`));
        const warningTimeoutId = setTimeout(() => {
          console.warn("Client.close() is taking over 60 seconds to complete. Check if you have any unreleased connections left.");
        }, 6e4);
        try {
          await Promise.all(this._holders.map((connectionHolder) => connectionHolder._waitUntilReleasedAndClose()));
        } catch (err) {
          this._terminate();
          this._closing.setError(err);
          throw err;
        } finally {
          clearTimeout(warningTimeoutId);
        }
        this._closing.set();
      }
      _terminate() {
        for (const connectionHolder of this._holders) {
          connectionHolder.terminate();
        }
      }
      terminate() {
        var _a;
        if ((_a = this._closing) === null || _a === void 0 ? void 0 : _a.done) {
          return;
        }
        this._queue.cancelAllPending(new errors.InterfaceError(`The client is closed`));
        this._terminate();
        if (!this._closing) {
          this._closing = new event_1.default();
          this._closing.set();
        }
      }
      isClosed() {
        return !!this._closing;
      }
    };
    exports.BaseClientPool = BaseClientPool;
    var Client2 = class _Client {
      constructor(pool, options) {
        Object.defineProperty(this, "pool", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "options", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.pool = pool;
        this.options = options;
      }
      withTransactionOptions(opts) {
        return new _Client(this.pool, this.options.withTransactionOptions(opts));
      }
      withRetryOptions(opts) {
        return new _Client(this.pool, this.options.withRetryOptions(opts));
      }
      withSession(session) {
        return new _Client(this.pool, this.options.withSession(session));
      }
      withModuleAliases(aliases) {
        return new _Client(this.pool, this.options.withSession(this.options.session.withModuleAliases(aliases)));
      }
      withConfig(config) {
        const newConfig = this.options.session.withConfig(config);
        return new _Client(this.pool, this.options.withSession(newConfig));
      }
      withGlobals(globals) {
        return new _Client(this.pool, this.options.withSession(this.options.session.withGlobals(globals)));
      }
      async ensureConnected() {
        await this.pool.ensureConnected();
        return this;
      }
      isClosed() {
        return this.pool.isClosed();
      }
      async close() {
        await this.pool.close();
      }
      terminate() {
        this.pool.terminate();
      }
      async transaction(action) {
        if (this.pool.isStateless) {
          throw new errors.EdgeDBError(`cannot use 'transaction()' API on HTTP client`);
        }
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.transaction(action);
        } finally {
          await holder.release();
        }
      }
      async execute(query, args) {
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.execute(query, args);
        } finally {
          await holder.release();
        }
      }
      async query(query, args) {
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.query(query, args);
        } finally {
          await holder.release();
        }
      }
      async queryJSON(query, args) {
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.queryJSON(query, args);
        } finally {
          await holder.release();
        }
      }
      async querySingle(query, args) {
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.querySingle(query, args);
        } finally {
          await holder.release();
        }
      }
      async querySingleJSON(query, args) {
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.querySingleJSON(query, args);
        } finally {
          await holder.release();
        }
      }
      async queryRequiredSingle(query, args) {
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.queryRequiredSingle(query, args);
        } finally {
          await holder.release();
        }
      }
      async queryRequiredSingleJSON(query, args) {
        const holder = await this.pool.acquireHolder(this.options);
        try {
          return await holder.queryRequiredSingleJSON(query, args);
        } finally {
          await holder.release();
        }
      }
    };
    exports.Client = Client2;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/credentials.js
var require_credentials = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/credentials.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.validateCredentials = exports.readCredentialsFile = exports.getCredentialsPath = void 0;
    var conUtils_1 = require_conUtils();
    var errors_1 = require_errors();
    async function getCredentialsPath(instanceName, serverUtils) {
      return serverUtils.searchConfigDir("credentials", instanceName + ".json");
    }
    exports.getCredentialsPath = getCredentialsPath;
    async function readCredentialsFile(file, serverUtils) {
      try {
        const data = await serverUtils.readFileUtf8(file);
        return validateCredentials(JSON.parse(data));
      } catch (e) {
        throw new errors_1.InterfaceError(`cannot read credentials file ${file}: ${e}`);
      }
    }
    exports.readCredentialsFile = readCredentialsFile;
    function validateCredentials(data) {
      const port = data.port;
      if (port != null && (typeof port !== "number" || port < 1 || port > 65535)) {
        throw new errors_1.InterfaceError("invalid `port` value");
      }
      const user = data.user;
      if (user == null) {
        throw new errors_1.InterfaceError("`user` key is required");
      }
      if (typeof user !== "string") {
        throw new errors_1.InterfaceError("`user` must be string");
      }
      const result = { user, port };
      const host = data.host;
      if (host != null) {
        if (typeof host !== "string") {
          throw new errors_1.InterfaceError("`host` must be string");
        }
        result.host = host;
      }
      const database = data.database;
      if (database != null) {
        if (typeof database !== "string") {
          throw new errors_1.InterfaceError("`database` must be string");
        }
        result.database = database;
      }
      const password = data.password;
      if (password != null) {
        if (typeof password !== "string") {
          throw new errors_1.InterfaceError("`password` must be string");
        }
        result.password = password;
      }
      const caData = data.tls_ca;
      if (caData != null) {
        if (typeof caData !== "string") {
          throw new errors_1.InterfaceError("`tls_ca` must be string");
        }
        result.tlsCAData = caData;
      }
      const certData = data.tls_cert_data;
      if (certData != null) {
        if (typeof certData !== "string") {
          throw new errors_1.InterfaceError("`tls_cert_data` must be string");
        }
        if (caData != null && certData !== caData) {
          throw new errors_1.InterfaceError(`both 'tls_ca' and 'tls_cert_data' are defined, and are not in agreement`);
        }
        result.tlsCAData = certData;
      }
      let verifyHostname = data.tls_verify_hostname;
      const tlsSecurity = data.tls_security;
      if (verifyHostname != null) {
        if (typeof verifyHostname === "boolean") {
          verifyHostname = verifyHostname ? "strict" : "no_host_verification";
        } else {
          throw new errors_1.InterfaceError("`tls_verify_hostname` must be boolean");
        }
      }
      if (tlsSecurity != null && (typeof tlsSecurity !== "string" || !conUtils_1.validTlsSecurityValues.includes(tlsSecurity))) {
        throw new errors_1.InterfaceError(`\`tls_security\` must be one of ${conUtils_1.validTlsSecurityValues.map((val) => `"${val}"`).join(", ")}`);
      }
      if (verifyHostname && tlsSecurity && verifyHostname !== tlsSecurity && !(verifyHostname === "no_host_verification" && tlsSecurity === "insecure")) {
        throw new errors_1.InterfaceError(`both 'tls_security' and 'tls_verify_hostname' are defined, and are not in agreement`);
      }
      if (tlsSecurity || verifyHostname) {
        result.tlsSecurity = tlsSecurity !== null && tlsSecurity !== void 0 ? tlsSecurity : verifyHostname;
      }
      return result;
    }
    exports.validateCredentials = validateCredentials;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/adapter.shared.node.js
var require_adapter_shared_node = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/adapter.shared.node.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.getEnv = exports.HMAC = exports.H = exports.randomBytes = void 0;
    var randomBytes;
    exports.randomBytes = randomBytes;
    var H;
    exports.H = H;
    var HMAC;
    exports.HMAC = HMAC;
    if (typeof crypto === "undefined") {
      const nodeCrypto = __require("crypto");
      exports.randomBytes = randomBytes = (size) => {
        return new Promise((resolve, reject) => {
          nodeCrypto.randomBytes(size, (err, buf) => {
            if (err) {
              reject(err);
            } else {
              resolve(buf);
            }
          });
        });
      };
      exports.H = H = async (msg) => {
        const sign = nodeCrypto.createHash("sha256");
        sign.update(msg);
        return sign.digest();
      };
      exports.HMAC = HMAC = async (key, msg) => {
        const hm = nodeCrypto.createHmac("sha256", key);
        hm.update(msg);
        return hm.digest();
      };
    } else {
      exports.randomBytes = randomBytes = async (size) => {
        return crypto.getRandomValues(new Uint8Array(size));
      };
      exports.H = H = async (msg) => {
        return new Uint8Array(await crypto.subtle.digest("SHA-256", msg));
      };
      exports.HMAC = HMAC = async (key, msg) => {
        return new Uint8Array(await crypto.subtle.sign("HMAC", await crypto.subtle.importKey("raw", key, {
          name: "HMAC",
          hash: { name: "SHA-256" }
        }, false, ["sign"]), msg));
      };
    }
    function getEnv(envName, required = false) {
      return process.env[envName];
    }
    exports.getEnv = getEnv;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/crcHqx.js
var require_crcHqx = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/primitives/crcHqx.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.crcHqx = void 0;
    var crctabHqx = new Uint16Array([
      0,
      4129,
      8258,
      12387,
      16516,
      20645,
      24774,
      28903,
      33032,
      37161,
      41290,
      45419,
      49548,
      53677,
      57806,
      61935,
      4657,
      528,
      12915,
      8786,
      21173,
      17044,
      29431,
      25302,
      37689,
      33560,
      45947,
      41818,
      54205,
      50076,
      62463,
      58334,
      9314,
      13379,
      1056,
      5121,
      25830,
      29895,
      17572,
      21637,
      42346,
      46411,
      34088,
      38153,
      58862,
      62927,
      50604,
      54669,
      13907,
      9842,
      5649,
      1584,
      30423,
      26358,
      22165,
      18100,
      46939,
      42874,
      38681,
      34616,
      63455,
      59390,
      55197,
      51132,
      18628,
      22757,
      26758,
      30887,
      2112,
      6241,
      10242,
      14371,
      51660,
      55789,
      59790,
      63919,
      35144,
      39273,
      43274,
      47403,
      23285,
      19156,
      31415,
      27286,
      6769,
      2640,
      14899,
      10770,
      56317,
      52188,
      64447,
      60318,
      39801,
      35672,
      47931,
      43802,
      27814,
      31879,
      19684,
      23749,
      11298,
      15363,
      3168,
      7233,
      60846,
      64911,
      52716,
      56781,
      44330,
      48395,
      36200,
      40265,
      32407,
      28342,
      24277,
      20212,
      15891,
      11826,
      7761,
      3696,
      65439,
      61374,
      57309,
      53244,
      48923,
      44858,
      40793,
      36728,
      37256,
      33193,
      45514,
      41451,
      53516,
      49453,
      61774,
      57711,
      4224,
      161,
      12482,
      8419,
      20484,
      16421,
      28742,
      24679,
      33721,
      37784,
      41979,
      46042,
      49981,
      54044,
      58239,
      62302,
      689,
      4752,
      8947,
      13010,
      16949,
      21012,
      25207,
      29270,
      46570,
      42443,
      38312,
      34185,
      62830,
      58703,
      54572,
      50445,
      13538,
      9411,
      5280,
      1153,
      29798,
      25671,
      21540,
      17413,
      42971,
      47098,
      34713,
      38840,
      59231,
      63358,
      50973,
      55100,
      9939,
      14066,
      1681,
      5808,
      26199,
      30326,
      17941,
      22068,
      55628,
      51565,
      63758,
      59695,
      39368,
      35305,
      47498,
      43435,
      22596,
      18533,
      30726,
      26663,
      6336,
      2273,
      14466,
      10403,
      52093,
      56156,
      60223,
      64286,
      35833,
      39896,
      43963,
      48026,
      19061,
      23124,
      27191,
      31254,
      2801,
      6864,
      10931,
      14994,
      64814,
      60687,
      56684,
      52557,
      48554,
      44427,
      40424,
      36297,
      31782,
      27655,
      23652,
      19525,
      15522,
      11395,
      7392,
      3265,
      61215,
      65342,
      53085,
      57212,
      44955,
      49082,
      36825,
      40952,
      28183,
      32310,
      20053,
      24180,
      11923,
      16050,
      3793,
      7920
    ]);
    function crcHqx(data, crc) {
      crc &= 65535;
      const len = data.length;
      let i = 0;
      while (i < len) {
        crc = crc << 8 & 65280 ^ crctabHqx[crc >> 8 ^ data[i++]];
      }
      return crc;
    }
    exports.crcHqx = crcHqx;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/conUtils.js
var require_conUtils = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/conUtils.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseDuration = exports.ResolvedConnectConfig = exports.getConnectArgumentsParser = exports.validTlsSecurityValues = void 0;
    var errors = __importStar(require_errors());
    var credentials_1 = require_credentials();
    var adapter_shared_node_1 = require_adapter_shared_node();
    var datetime_1 = require_datetime();
    var datetime_2 = require_datetime2();
    var errors_1 = require_errors();
    var buffer_1 = require_buffer();
    var crcHqx_1 = require_crcHqx();
    var DOMAIN_NAME_MAX_LEN = 63;
    exports.validTlsSecurityValues = [
      "insecure",
      "no_host_verification",
      "strict",
      "default"
    ];
    function getConnectArgumentsParser(utils) {
      return async (opts) => {
        var _a;
        return {
          ...await parseConnectDsnAndArgs(opts, utils),
          connectTimeout: opts.timeout,
          logging: (_a = opts.logging) !== null && _a !== void 0 ? _a : true
        };
      };
    }
    exports.getConnectArgumentsParser = getConnectArgumentsParser;
    var ResolvedConnectConfig = class {
      constructor() {
        Object.defineProperty(this, "_host", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_hostSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_port", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_portSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_database", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_databaseSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_user", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_userSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_password", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_passwordSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_secretKey", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_secretKeySource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_cloudProfile", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_cloudProfileSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_tlsCAData", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_tlsCADataSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_tlsSecurity", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_tlsSecuritySource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_waitUntilAvailable", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "_waitUntilAvailableSource", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "serverSettings", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: {}
        });
        this.setHost = this.setHost.bind(this);
        this.setPort = this.setPort.bind(this);
        this.setDatabase = this.setDatabase.bind(this);
        this.setUser = this.setUser.bind(this);
        this.setPassword = this.setPassword.bind(this);
        this.setSecretKey = this.setSecretKey.bind(this);
        this.setTlsCAData = this.setTlsCAData.bind(this);
        this.setTlsCAFile = this.setTlsCAFile.bind(this);
        this.setTlsSecurity = this.setTlsSecurity.bind(this);
        this.setWaitUntilAvailable = this.setWaitUntilAvailable.bind(this);
      }
      _setParam(param, value, source, validator) {
        if (this[`_${param}`] === null) {
          this[`_${param}Source`] = source;
          if (value !== null) {
            this[`_${param}`] = validator ? validator(value) : value;
            return true;
          }
        }
        return false;
      }
      async _setParamAsync(param, value, source, validator) {
        if (this[`_${param}`] === null) {
          this[`_${param}Source`] = source;
          if (value !== null) {
            this[`_${param}`] = validator ? await validator(value) : value;
            return true;
          }
        }
        return false;
      }
      setHost(host, source) {
        return this._setParam("host", host, source, validateHost);
      }
      setPort(port, source) {
        return this._setParam("port", port, source, parseValidatePort);
      }
      setDatabase(database, source) {
        return this._setParam("database", database, source, (db) => {
          if (db === "") {
            throw new errors_1.InterfaceError(`invalid database name: '${db}'`);
          }
          return db;
        });
      }
      setUser(user, source) {
        return this._setParam("user", user, source, (_user) => {
          if (_user === "") {
            throw new errors_1.InterfaceError(`invalid user name: '${_user}'`);
          }
          return _user;
        });
      }
      setPassword(password, source) {
        return this._setParam("password", password, source);
      }
      setSecretKey(secretKey, source) {
        return this._setParam("secretKey", secretKey, source);
      }
      setCloudProfile(cloudProfile, source) {
        return this._setParam("cloudProfile", cloudProfile, source);
      }
      setTlsCAData(caData, source) {
        return this._setParam("tlsCAData", caData, source);
      }
      setTlsCAFile(caFile, source, readFile) {
        return this._setParamAsync("tlsCAData", caFile, source, (caFilePath) => readFile(caFilePath));
      }
      setTlsSecurity(tlsSecurity, source) {
        return this._setParam("tlsSecurity", tlsSecurity, source, (_tlsSecurity) => {
          if (!exports.validTlsSecurityValues.includes(_tlsSecurity)) {
            throw new errors_1.InterfaceError(`invalid 'tlsSecurity' value: '${_tlsSecurity}', must be one of ${exports.validTlsSecurityValues.map((val) => `'${val}'`).join(", ")}`);
          }
          const clientSecurity = (0, adapter_shared_node_1.getEnv)("EDGEDB_CLIENT_SECURITY");
          if (clientSecurity !== void 0) {
            if (!["default", "insecure_dev_mode", "strict"].includes(clientSecurity)) {
              throw new errors_1.InterfaceError(`invalid EDGEDB_CLIENT_SECURITY value: '${clientSecurity}', must be one of 'default', 'insecure_dev_mode' or 'strict'`);
            }
            if (clientSecurity === "insecure_dev_mode") {
              if (_tlsSecurity === "default") {
                _tlsSecurity = "insecure";
              }
            } else if (clientSecurity === "strict") {
              if (_tlsSecurity === "insecure" || _tlsSecurity === "no_host_verification") {
                throw new errors_1.InterfaceError(`'tlsSecurity' value (${_tlsSecurity}) conflicts with EDGEDB_CLIENT_SECURITY value (${clientSecurity}), 'tlsSecurity' value cannot be lower than security level set by EDGEDB_CLIENT_SECURITY`);
              }
              _tlsSecurity = "strict";
            }
          }
          return _tlsSecurity;
        });
      }
      setWaitUntilAvailable(duration, source) {
        return this._setParam("waitUntilAvailable", duration, source, parseDuration);
      }
      addServerSettings(settings) {
        this.serverSettings = {
          ...settings,
          ...this.serverSettings
        };
      }
      get address() {
        var _a, _b;
        return [(_a = this._host) !== null && _a !== void 0 ? _a : "localhost", (_b = this._port) !== null && _b !== void 0 ? _b : 5656];
      }
      get database() {
        var _a;
        return (_a = this._database) !== null && _a !== void 0 ? _a : "edgedb";
      }
      get user() {
        var _a;
        return (_a = this._user) !== null && _a !== void 0 ? _a : "edgedb";
      }
      get password() {
        var _a;
        return (_a = this._password) !== null && _a !== void 0 ? _a : void 0;
      }
      get secretKey() {
        var _a;
        return (_a = this._secretKey) !== null && _a !== void 0 ? _a : void 0;
      }
      get cloudProfile() {
        var _a;
        return (_a = this._cloudProfile) !== null && _a !== void 0 ? _a : "default";
      }
      get tlsSecurity() {
        return this._tlsSecurity && this._tlsSecurity !== "default" ? this._tlsSecurity : this._tlsCAData !== null ? "no_host_verification" : "strict";
      }
      get waitUntilAvailable() {
        var _a;
        return (_a = this._waitUntilAvailable) !== null && _a !== void 0 ? _a : 3e4;
      }
      explainConfig() {
        const output = [
          `Parameter          Value                                    Source`,
          `---------          -----                                    ------`
        ];
        const outputLine = (param, val, rawVal, source) => {
          var _a;
          const isDefault = rawVal === null;
          const maxValLength = 40 - (isDefault ? 10 : 0);
          let value = String(val);
          if (value.length > maxValLength) {
            value = value.slice(0, maxValLength - 3) + "...";
          }
          output.push((_a = param.padEnd(19, " ") + (value + (isDefault ? " (default)" : "")).padEnd(42, " ") + source) !== null && _a !== void 0 ? _a : "default");
        };
        outputLine("host", this.address[0], this._host, this._hostSource);
        outputLine("port", this.address[1], this._port, this._portSource);
        outputLine("database", this.database, this._database, this._databaseSource);
        outputLine("user", this.user, this._user, this._userSource);
        outputLine("password", this.password && this.password.slice(0, 3).padEnd(this.password.length, "*"), this._password, this._passwordSource);
        outputLine("tlsCAData", this._tlsCAData && this._tlsCAData.replace(/\r\n?|\n/, ""), this._tlsCAData, this._tlsCADataSource);
        outputLine("tlsSecurity", this.tlsSecurity, this._tlsSecurity, this._tlsSecuritySource);
        outputLine("waitUntilAvailable", this.waitUntilAvailable, this._waitUntilAvailable, this._waitUntilAvailableSource);
        return output.join("\n");
      }
    };
    exports.ResolvedConnectConfig = ResolvedConnectConfig;
    function parseValidatePort(port) {
      let parsedPort;
      if (typeof port === "string") {
        if (!/^\d*$/.test(port)) {
          throw new errors_1.InterfaceError(`invalid port: ${port}`);
        }
        parsedPort = parseInt(port, 10);
        if (Number.isNaN(parsedPort)) {
          throw new errors_1.InterfaceError(`invalid port: ${port}`);
        }
      } else {
        parsedPort = port;
      }
      if (!Number.isInteger(parsedPort) || parsedPort < 1 || parsedPort > 65535) {
        throw new errors_1.InterfaceError(`invalid port: ${port}`);
      }
      return parsedPort;
    }
    function validateHost(host) {
      if (host.includes("/")) {
        throw new errors_1.InterfaceError(`unix socket paths not supported`);
      }
      if (!host.length || host.includes(",")) {
        throw new errors_1.InterfaceError(`invalid host: '${host}'`);
      }
      return host;
    }
    function parseDuration(duration) {
      if (typeof duration === "number") {
        if (duration < 0) {
          throw new errors_1.InterfaceError("invalid waitUntilAvailable duration, must be >= 0");
        }
        return duration;
      }
      if (typeof duration === "string") {
        if (duration.startsWith("P")) {
          duration = datetime_1.Duration.from(duration);
        } else {
          return (0, datetime_1.parseHumanDurationString)(duration);
        }
      }
      if (duration instanceof datetime_1.Duration) {
        const invalidField = (0, datetime_2.checkValidEdgeDBDuration)(duration);
        if (invalidField) {
          throw new errors_1.InterfaceError(`invalid waitUntilAvailable duration, cannot have a '${invalidField}' value`);
        }
        if (duration.sign < 0) {
          throw new errors_1.InterfaceError("invalid waitUntilAvailable duration, must be >= 0");
        }
        return duration.milliseconds + duration.seconds * 1e3 + duration.minutes * 6e4 + duration.hours * 36e5;
      }
      throw new errors_1.InterfaceError(`invalid duration`);
    }
    exports.parseDuration = parseDuration;
    async function parseConnectDsnAndArgs(config, serverUtils) {
      const resolvedConfig = new ResolvedConnectConfig();
      let fromEnv = false;
      let fromProject = false;
      const [dsn, instanceName] = config.instanceName == null && config.dsn != null && !/^[a-z]+:\/\//i.test(config.dsn) ? [void 0, config.dsn] : [config.dsn, config.instanceName];
      let { hasCompoundOptions } = await resolveConfigOptions(resolvedConfig, {
        dsn,
        instanceName,
        credentials: config.credentials,
        credentialsFile: config.credentialsFile,
        host: config.host,
        port: config.port,
        database: config.database,
        user: config.user,
        password: config.password,
        secretKey: config.secretKey,
        tlsCA: config.tlsCA,
        tlsCAFile: config.tlsCAFile,
        tlsSecurity: config.tlsSecurity,
        serverSettings: config.serverSettings,
        waitUntilAvailable: config.waitUntilAvailable
      }, {
        dsn: `'dsnOrInstanceName' option (parsed as dsn)`,
        instanceName: config.instanceName != null ? `'instanceName' option` : `'dsnOrInstanceName' option (parsed as instance name)`,
        credentials: `'credentials' option`,
        credentialsFile: `'credentialsFile' option`,
        host: `'host' option`,
        port: `'port' option`,
        database: `'database' option`,
        user: `'user' option`,
        password: `'password' option`,
        secretKey: `'secretKey' option`,
        tlsCA: `'tlsCA' option`,
        tlsCAFile: `'tlsCAFile' option`,
        tlsSecurity: `'tlsSecurity' option`,
        serverSettings: `'serverSettings' option`,
        waitUntilAvailable: `'waitUntilAvailable' option`
      }, `Cannot have more than one of the following connection options: 'dsn', 'instanceName', 'credentials', 'credentialsFile' or 'host'/'port'`, serverUtils);
      if (!hasCompoundOptions) {
        let port = (0, adapter_shared_node_1.getEnv)("EDGEDB_PORT");
        if (resolvedConfig._port === null && (port === null || port === void 0 ? void 0 : port.startsWith("tcp://"))) {
          console.warn(`EDGEDB_PORT in 'tcp://host:port' format, so will be ignored`);
          port = void 0;
        }
        ({ hasCompoundOptions, anyOptionsUsed: fromEnv } = await resolveConfigOptions(resolvedConfig, {
          dsn: (0, adapter_shared_node_1.getEnv)("EDGEDB_DSN"),
          instanceName: (0, adapter_shared_node_1.getEnv)("EDGEDB_INSTANCE"),
          credentials: (0, adapter_shared_node_1.getEnv)("EDGEDB_CREDENTIALS"),
          credentialsFile: (0, adapter_shared_node_1.getEnv)("EDGEDB_CREDENTIALS_FILE"),
          host: (0, adapter_shared_node_1.getEnv)("EDGEDB_HOST"),
          port,
          database: (0, adapter_shared_node_1.getEnv)("EDGEDB_DATABASE"),
          user: (0, adapter_shared_node_1.getEnv)("EDGEDB_USER"),
          password: (0, adapter_shared_node_1.getEnv)("EDGEDB_PASSWORD"),
          secretKey: (0, adapter_shared_node_1.getEnv)("EDGEDB_SECRET_KEY"),
          cloudProfile: (0, adapter_shared_node_1.getEnv)("EDGEDB_CLOUD_PROFILE"),
          tlsCA: (0, adapter_shared_node_1.getEnv)("EDGEDB_TLS_CA"),
          tlsCAFile: (0, adapter_shared_node_1.getEnv)("EDGEDB_TLS_CA_FILE"),
          tlsSecurity: (0, adapter_shared_node_1.getEnv)("EDGEDB_CLIENT_TLS_SECURITY"),
          waitUntilAvailable: (0, adapter_shared_node_1.getEnv)("EDGEDB_WAIT_UNTIL_AVAILABLE")
        }, {
          dsn: `'EDGEDB_DSN' environment variable`,
          instanceName: `'EDGEDB_INSTANCE' environment variable`,
          credentials: `'EDGEDB_CREDENTIALS' environment variable`,
          credentialsFile: `'EDGEDB_CREDENTIALS_FILE' environment variable`,
          host: `'EDGEDB_HOST' environment variable`,
          port: `'EDGEDB_PORT' environment variable`,
          database: `'EDGEDB_DATABASE' environment variable`,
          user: `'EDGEDB_USER' environment variable`,
          password: `'EDGEDB_PASSWORD' environment variable`,
          secretKey: `'EDGEDB_SECRET_KEY' environment variable`,
          cloudProfile: `'EDGEDB_CLOUD_PROFILE' environment variable`,
          tlsCA: `'EDGEDB_TLS_CA' environment variable`,
          tlsCAFile: `'EDGEDB_TLS_CA_FILE' environment variable`,
          tlsSecurity: `'EDGEDB_CLIENT_TLS_SECURITY' environment variable`,
          waitUntilAvailable: `'EDGEDB_WAIT_UNTIL_AVAILABLE' environment variable`
        }, `Cannot have more than one of the following connection environment variables: 'EDGEDB_DSN', 'EDGEDB_INSTANCE', 'EDGEDB_CREDENTIALS', 'EDGEDB_CREDENTIALS_FILE' or 'EDGEDB_HOST'`, serverUtils));
      }
      if (!hasCompoundOptions) {
        if (!serverUtils) {
          throw new errors.ClientConnectionError("no connection options specified either by arguments to `createClient` API or environment variables; also cannot resolve from edgedb.toml in browser (or edge runtime) environment");
        }
        const projectDir = await (serverUtils === null || serverUtils === void 0 ? void 0 : serverUtils.findProjectDir());
        if (!projectDir) {
          throw new errors.ClientConnectionError("no 'edgedb.toml' found and no connection options specified either via arguments to `createClient()` API or via environment variables EDGEDB_HOST, EDGEDB_INSTANCE, EDGEDB_DSN, EDGEDB_CREDENTIALS or EDGEDB_CREDENTIALS_FILE");
        }
        const stashDir = await serverUtils.findStashPath(projectDir);
        const instName = await serverUtils.readFileUtf8(stashDir, "instance-name").then((name) => name.trim()).catch(() => null);
        if (instName !== null) {
          const [cloudProfile, database] = await Promise.all([
            serverUtils.readFileUtf8(stashDir, "cloud-profile").then((name) => name.trim()).catch(() => void 0),
            serverUtils.readFileUtf8(stashDir, "database").then((name) => name.trim()).catch(() => void 0)
          ]);
          await resolveConfigOptions(resolvedConfig, { instanceName: instName, cloudProfile, database }, {
            instanceName: `project linked instance ('${instName}')`,
            cloudProfile: `project defined cloud instance ('${cloudProfile}')`,
            database: `project default database`
          }, "", serverUtils);
          fromProject = true;
        } else {
          throw new errors.ClientConnectionError("Found 'edgedb.toml' but the project is not initialized. Run `edgedb project init`.");
        }
      }
      resolvedConfig.setTlsSecurity("default", "default");
      return {
        connectionParams: resolvedConfig,
        inProject: async () => await (serverUtils === null || serverUtils === void 0 ? void 0 : serverUtils.findProjectDir(false)) != null,
        fromEnv,
        fromProject
      };
    }
    async function resolveConfigOptions(resolvedConfig, config, sources, compoundParamsError, serverUtils) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
      let anyOptionsUsed = false;
      const readFile = (_a = serverUtils === null || serverUtils === void 0 ? void 0 : serverUtils.readFileUtf8) !== null && _a !== void 0 ? _a : (fn) => {
        throw new errors_1.InterfaceError(`cannot read file "${fn}" in browser (or edge runtime) environment`);
      };
      if (config.tlsCA != null && config.tlsCAFile != null) {
        throw new errors_1.InterfaceError(`Cannot specify both ${sources.tlsCA} and ${sources.tlsCAFile}`);
      }
      anyOptionsUsed = resolvedConfig.setDatabase((_b = config.database) !== null && _b !== void 0 ? _b : null, sources.database) || anyOptionsUsed;
      anyOptionsUsed = resolvedConfig.setUser((_c = config.user) !== null && _c !== void 0 ? _c : null, sources.user) || anyOptionsUsed;
      anyOptionsUsed = resolvedConfig.setPassword((_d = config.password) !== null && _d !== void 0 ? _d : null, sources.password) || anyOptionsUsed;
      anyOptionsUsed = resolvedConfig.setSecretKey((_e = config.secretKey) !== null && _e !== void 0 ? _e : null, sources.secretKey) || anyOptionsUsed;
      anyOptionsUsed = resolvedConfig.setCloudProfile((_f = config.cloudProfile) !== null && _f !== void 0 ? _f : null, sources.cloudProfile) || anyOptionsUsed;
      anyOptionsUsed = resolvedConfig.setTlsCAData((_g = config.tlsCA) !== null && _g !== void 0 ? _g : null, sources.tlsCA) || anyOptionsUsed;
      anyOptionsUsed = await resolvedConfig.setTlsCAFile((_h = config.tlsCAFile) !== null && _h !== void 0 ? _h : null, sources.tlsCAFile, readFile) || anyOptionsUsed;
      anyOptionsUsed = resolvedConfig.setTlsSecurity((_j = config.tlsSecurity) !== null && _j !== void 0 ? _j : null, sources.tlsSecurity) || anyOptionsUsed;
      anyOptionsUsed = resolvedConfig.setWaitUntilAvailable((_k = config.waitUntilAvailable) !== null && _k !== void 0 ? _k : null, sources.waitUntilAvailable) || anyOptionsUsed;
      resolvedConfig.addServerSettings((_l = config.serverSettings) !== null && _l !== void 0 ? _l : {});
      const compoundParamsCount = [
        config.dsn,
        config.instanceName,
        config.credentials,
        config.credentialsFile,
        (_m = config.host) !== null && _m !== void 0 ? _m : config.port
      ].filter((param) => param !== void 0).length;
      if (compoundParamsCount > 1) {
        throw new errors_1.InterfaceError(compoundParamsError);
      }
      if (compoundParamsCount === 1) {
        if (config.dsn !== void 0 || config.host !== void 0 || config.port !== void 0) {
          let dsn = config.dsn;
          if (dsn === void 0) {
            if (config.port !== void 0) {
              resolvedConfig.setPort(config.port, sources.port);
            }
            const host = config.host != null ? validateHost(config.host) : "";
            dsn = `edgedb://${host.includes(":") ? `[${encodeURI(host)}]` : host}`;
          }
          await parseDSNIntoConfig(dsn, resolvedConfig, config.dsn ? sources.dsn : config.host !== void 0 ? sources.host : sources.port, readFile);
        } else {
          let creds;
          let source;
          if (config.credentials != null) {
            creds = (0, credentials_1.validateCredentials)(JSON.parse(config.credentials));
            source = sources.credentials;
          } else {
            if (!serverUtils && !((_o = config.instanceName) === null || _o === void 0 ? void 0 : _o.includes("/"))) {
              throw new errors_1.InterfaceError(`cannot ${config.credentialsFile ? `read credentials file "${config.credentialsFile}"` : `resolve instance name "${config.instanceName}"`} in browser (or edge runtime) environment`);
            }
            let credentialsFile = config.credentialsFile;
            if (credentialsFile === void 0) {
              if (/^\w(-?\w)*$/.test(config.instanceName)) {
                credentialsFile = await (0, credentials_1.getCredentialsPath)(config.instanceName, serverUtils);
                source = sources.instanceName;
              } else {
                if (!/^([A-Za-z0-9](-?[A-Za-z0-9])*)\/([A-Za-z0-9](-?[A-Za-z0-9])*)$/.test(config.instanceName)) {
                  throw new errors_1.InterfaceError(`invalid DSN or instance name: '${config.instanceName}'`);
                }
                await parseCloudInstanceNameIntoConfig(resolvedConfig, config.instanceName, sources.instanceName, serverUtils);
                return { hasCompoundOptions: true, anyOptionsUsed: true };
              }
            } else {
              source = sources.credentialsFile;
            }
            creds = await (0, credentials_1.readCredentialsFile)(credentialsFile, serverUtils);
          }
          resolvedConfig.setHost((_p = creds.host) !== null && _p !== void 0 ? _p : null, source);
          resolvedConfig.setPort((_q = creds.port) !== null && _q !== void 0 ? _q : null, source);
          resolvedConfig.setDatabase((_r = creds.database) !== null && _r !== void 0 ? _r : null, source);
          resolvedConfig.setUser((_s = creds.user) !== null && _s !== void 0 ? _s : null, source);
          resolvedConfig.setPassword((_t = creds.password) !== null && _t !== void 0 ? _t : null, source);
          resolvedConfig.setTlsCAData((_u = creds.tlsCAData) !== null && _u !== void 0 ? _u : null, source);
          resolvedConfig.setTlsSecurity((_v = creds.tlsSecurity) !== null && _v !== void 0 ? _v : null, source);
        }
        return { hasCompoundOptions: true, anyOptionsUsed: true };
      }
      return { hasCompoundOptions: false, anyOptionsUsed };
    }
    async function parseDSNIntoConfig(_dsnString, config, source, readFile) {
      let dsnString = _dsnString;
      let regexHostname = null;
      let zoneId = "";
      const regexResult = /\[(.*?)(%25.+?)\]/.exec(_dsnString);
      if (regexResult) {
        regexHostname = regexResult[1];
        zoneId = decodeURI(regexResult[2]);
        dsnString = dsnString.slice(0, regexResult.index + regexHostname.length + 1) + dsnString.slice(regexResult.index + regexHostname.length + regexResult[2].length + 1);
      }
      let parsed;
      try {
        parsed = new URL(dsnString);
        if (regexHostname !== null && parsed.hostname !== `[${regexHostname}]`) {
          throw new Error();
        }
      } catch (_) {
        throw new errors_1.InterfaceError(`invalid DSN or instance name: '${_dsnString}'`);
      }
      if (parsed.protocol !== "edgedb:") {
        throw new errors_1.InterfaceError(`invalid DSN: scheme is expected to be 'edgedb', got '${parsed.protocol.slice(0, -1)}'`);
      }
      const searchParams = /* @__PURE__ */ new Map();
      for (const [key, value] of parsed.searchParams) {
        if (searchParams.has(key)) {
          throw new errors_1.InterfaceError(`invalid DSN: duplicate query parameter '${key}'`);
        }
        searchParams.set(key, value);
      }
      async function handleDSNPart(paramName, value, currentValue, setter, formatter = (val) => val) {
        var _a, _b;
        if ([
          value || null,
          searchParams.get(paramName),
          searchParams.get(`${paramName}_env`),
          searchParams.get(`${paramName}_file`)
        ].filter((param) => param != null).length > 1) {
          throw new errors_1.InterfaceError(`invalid DSN: more than one of ${value !== null ? `'${paramName}', ` : ""}'?${paramName}=', '?${paramName}_env=' or '?${paramName}_file=' was specified ${dsnString}`);
        }
        if (currentValue === null) {
          let param = value || ((_a = searchParams.get(paramName)) !== null && _a !== void 0 ? _a : null);
          let paramSource = source;
          if (param === null) {
            const env = searchParams.get(`${paramName}_env`);
            if (env != null) {
              param = (_b = (0, adapter_shared_node_1.getEnv)(env, true)) !== null && _b !== void 0 ? _b : null;
              if (param === null) {
                throw new errors_1.InterfaceError(`'${paramName}_env' environment variable '${env}' doesn't exist`);
              }
              paramSource += ` (${paramName}_env: ${env})`;
            }
          }
          if (param === null) {
            const file = searchParams.get(`${paramName}_file`);
            if (file != null) {
              param = await readFile(file);
              paramSource += ` (${paramName}_file: ${file})`;
            }
          }
          param = param !== null ? formatter(param) : null;
          await setter(param, paramSource);
        }
        searchParams.delete(paramName);
        searchParams.delete(`${paramName}_env`);
        searchParams.delete(`${paramName}_file`);
      }
      const hostname = /^\[.*\]$/.test(parsed.hostname) ? parsed.hostname.slice(1, -1) + zoneId : parsed.hostname;
      await handleDSNPart("host", hostname, config._host, config.setHost);
      await handleDSNPart("port", parsed.port, config._port, config.setPort);
      const stripLeadingSlash = (str) => str.replace(/^\//, "");
      await handleDSNPart("database", stripLeadingSlash(parsed.pathname), config._database, config.setDatabase, stripLeadingSlash);
      await handleDSNPart("user", parsed.username, config._user, config.setUser);
      await handleDSNPart("password", parsed.password, config._password, config.setPassword);
      await handleDSNPart("secret_key", null, config._secretKey, config.setSecretKey);
      await handleDSNPart("tls_ca", null, config._tlsCAData, config.setTlsCAData);
      await handleDSNPart("tls_ca_file", null, config._tlsCAData, (val, _source) => config.setTlsCAFile(val, _source, readFile));
      await handleDSNPart("tls_security", null, config._tlsSecurity, config.setTlsSecurity);
      await handleDSNPart("wait_until_available", null, config._waitUntilAvailable, config.setWaitUntilAvailable);
      const serverSettings = {};
      for (const [key, value] of searchParams) {
        serverSettings[key] = value;
      }
      config.addServerSettings(serverSettings);
    }
    async function parseCloudInstanceNameIntoConfig(config, cloudInstanceName, source, serverUtils) {
      const normInstanceName = cloudInstanceName.toLowerCase();
      const [org, instanceName] = normInstanceName.split("/");
      const domainName = `${instanceName}--${org}`;
      if (domainName.length > DOMAIN_NAME_MAX_LEN) {
        throw new errors_1.InterfaceError(`invalid instance name: cloud instance name length cannot exceed ${DOMAIN_NAME_MAX_LEN - 1} characters: ${cloudInstanceName}`);
      }
      let secretKey = config.secretKey;
      if (secretKey == null) {
        try {
          if (!serverUtils) {
            throw new errors_1.InterfaceError(`Cannot get secret key from cloud profile in browser (or edge runtime) environment`);
          }
          const profile = config.cloudProfile;
          const profilePath = await serverUtils.searchConfigDir("cloud-credentials", `${profile}.json`);
          const fileData = await serverUtils.readFileUtf8(profilePath);
          secretKey = JSON.parse(fileData)["secret_key"];
          if (!secretKey) {
            throw new errors_1.InterfaceError(`Cloud profile '${profile}' doesn't contain a secret key`);
          }
          config.setSecretKey(secretKey, `cloud-credentials/${profile}.json`);
        } catch (e) {
          throw new errors_1.InterfaceError(`Cannot connect to cloud instances without a secret key: ${e}`);
        }
      }
      try {
        const keyParts = secretKey.split(".");
        if (keyParts.length < 2) {
          throw new errors_1.InterfaceError("Invalid secret key: does not contain payload");
        }
        const dnsZone = _jwtBase64Decode(keyParts[1])["iss"];
        if (!dnsZone) {
          throw new errors_1.InterfaceError("Invalid secret key: payload does not contain 'iss' value");
        }
        const dnsBucket = ((0, crcHqx_1.crcHqx)(buffer_1.utf8Encoder.encode(normInstanceName), 0) % 100).toString(10).padStart(2, "0");
        const host = `${domainName}.c-${dnsBucket}.i.${dnsZone}`;
        config.setHost(host, `resolved from 'secretKey' and ${source}`);
      } catch (e) {
        if (e instanceof errors.EdgeDBError) {
          throw e;
        } else {
          throw new errors_1.InterfaceError(`Invalid secret key: ${e}`);
        }
      }
    }
    function _jwtBase64Decode(payload) {
      return JSON.parse(buffer_1.utf8Decoder.decode((0, buffer_1.decodeB64)(payload.padEnd(Math.ceil(payload.length / 4) * 4, "="))));
    }
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/map.js
var require_map = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/map.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.errorMapping = void 0;
    var errors = __importStar(require_errors());
    exports.errorMapping = /* @__PURE__ */ new Map();
    exports.errorMapping.set(16777216, errors.InternalServerError);
    exports.errorMapping.set(33554432, errors.UnsupportedFeatureError);
    exports.errorMapping.set(50331648, errors.ProtocolError);
    exports.errorMapping.set(50397184, errors.BinaryProtocolError);
    exports.errorMapping.set(50397185, errors.UnsupportedProtocolVersionError);
    exports.errorMapping.set(50397186, errors.TypeSpecNotFoundError);
    exports.errorMapping.set(50397187, errors.UnexpectedMessageError);
    exports.errorMapping.set(50462720, errors.InputDataError);
    exports.errorMapping.set(50462976, errors.ParameterTypeMismatchError);
    exports.errorMapping.set(50463232, errors.StateMismatchError);
    exports.errorMapping.set(50528256, errors.ResultCardinalityMismatchError);
    exports.errorMapping.set(50593792, errors.CapabilityError);
    exports.errorMapping.set(50594048, errors.UnsupportedCapabilityError);
    exports.errorMapping.set(50594304, errors.DisabledCapabilityError);
    exports.errorMapping.set(67108864, errors.QueryError);
    exports.errorMapping.set(67174400, errors.InvalidSyntaxError);
    exports.errorMapping.set(67174656, errors.EdgeQLSyntaxError);
    exports.errorMapping.set(67174912, errors.SchemaSyntaxError);
    exports.errorMapping.set(67175168, errors.GraphQLSyntaxError);
    exports.errorMapping.set(67239936, errors.InvalidTypeError);
    exports.errorMapping.set(67240192, errors.InvalidTargetError);
    exports.errorMapping.set(67240193, errors.InvalidLinkTargetError);
    exports.errorMapping.set(67240194, errors.InvalidPropertyTargetError);
    exports.errorMapping.set(67305472, errors.InvalidReferenceError);
    exports.errorMapping.set(67305473, errors.UnknownModuleError);
    exports.errorMapping.set(67305474, errors.UnknownLinkError);
    exports.errorMapping.set(67305475, errors.UnknownPropertyError);
    exports.errorMapping.set(67305476, errors.UnknownUserError);
    exports.errorMapping.set(67305477, errors.UnknownDatabaseError);
    exports.errorMapping.set(67305478, errors.UnknownParameterError);
    exports.errorMapping.set(67371008, errors.SchemaError);
    exports.errorMapping.set(67436544, errors.SchemaDefinitionError);
    exports.errorMapping.set(67436800, errors.InvalidDefinitionError);
    exports.errorMapping.set(67436801, errors.InvalidModuleDefinitionError);
    exports.errorMapping.set(67436802, errors.InvalidLinkDefinitionError);
    exports.errorMapping.set(67436803, errors.InvalidPropertyDefinitionError);
    exports.errorMapping.set(67436804, errors.InvalidUserDefinitionError);
    exports.errorMapping.set(67436805, errors.InvalidDatabaseDefinitionError);
    exports.errorMapping.set(67436806, errors.InvalidOperatorDefinitionError);
    exports.errorMapping.set(67436807, errors.InvalidAliasDefinitionError);
    exports.errorMapping.set(67436808, errors.InvalidFunctionDefinitionError);
    exports.errorMapping.set(67436809, errors.InvalidConstraintDefinitionError);
    exports.errorMapping.set(67436810, errors.InvalidCastDefinitionError);
    exports.errorMapping.set(67437056, errors.DuplicateDefinitionError);
    exports.errorMapping.set(67437057, errors.DuplicateModuleDefinitionError);
    exports.errorMapping.set(67437058, errors.DuplicateLinkDefinitionError);
    exports.errorMapping.set(67437059, errors.DuplicatePropertyDefinitionError);
    exports.errorMapping.set(67437060, errors.DuplicateUserDefinitionError);
    exports.errorMapping.set(67437061, errors.DuplicateDatabaseDefinitionError);
    exports.errorMapping.set(67437062, errors.DuplicateOperatorDefinitionError);
    exports.errorMapping.set(67437063, errors.DuplicateViewDefinitionError);
    exports.errorMapping.set(67437064, errors.DuplicateFunctionDefinitionError);
    exports.errorMapping.set(67437065, errors.DuplicateConstraintDefinitionError);
    exports.errorMapping.set(67437066, errors.DuplicateCastDefinitionError);
    exports.errorMapping.set(67437067, errors.DuplicateMigrationError);
    exports.errorMapping.set(67502080, errors.SessionTimeoutError);
    exports.errorMapping.set(67502336, errors.IdleSessionTimeoutError);
    exports.errorMapping.set(67502592, errors.QueryTimeoutError);
    exports.errorMapping.set(67504640, errors.TransactionTimeoutError);
    exports.errorMapping.set(67504641, errors.IdleTransactionTimeoutError);
    exports.errorMapping.set(83886080, errors.ExecutionError);
    exports.errorMapping.set(83951616, errors.InvalidValueError);
    exports.errorMapping.set(83951617, errors.DivisionByZeroError);
    exports.errorMapping.set(83951618, errors.NumericOutOfRangeError);
    exports.errorMapping.set(83951619, errors.AccessPolicyError);
    exports.errorMapping.set(83951620, errors.QueryAssertionError);
    exports.errorMapping.set(84017152, errors.IntegrityError);
    exports.errorMapping.set(84017153, errors.ConstraintViolationError);
    exports.errorMapping.set(84017154, errors.CardinalityViolationError);
    exports.errorMapping.set(84017155, errors.MissingRequiredError);
    exports.errorMapping.set(84082688, errors.TransactionError);
    exports.errorMapping.set(84082944, errors.TransactionConflictError);
    exports.errorMapping.set(84082945, errors.TransactionSerializationError);
    exports.errorMapping.set(84082946, errors.TransactionDeadlockError);
    exports.errorMapping.set(84148224, errors.WatchError);
    exports.errorMapping.set(100663296, errors.ConfigurationError);
    exports.errorMapping.set(117440512, errors.AccessError);
    exports.errorMapping.set(117506048, errors.AuthenticationError);
    exports.errorMapping.set(134217728, errors.AvailabilityError);
    exports.errorMapping.set(134217729, errors.BackendUnavailableError);
    exports.errorMapping.set(150994944, errors.BackendError);
    exports.errorMapping.set(150995200, errors.UnsupportedBackendFeatureError);
    exports.errorMapping.set(4026531840, errors.LogMessage);
    exports.errorMapping.set(4026597376, errors.WarningMessage);
    exports.errorMapping.set(4278190080, errors.ClientError);
    exports.errorMapping.set(4278255616, errors.ClientConnectionError);
    exports.errorMapping.set(4278255872, errors.ClientConnectionFailedError);
    exports.errorMapping.set(4278255873, errors.ClientConnectionFailedTemporarilyError);
    exports.errorMapping.set(4278256128, errors.ClientConnectionTimeoutError);
    exports.errorMapping.set(4278256384, errors.ClientConnectionClosedError);
    exports.errorMapping.set(4278321152, errors.InterfaceError);
    exports.errorMapping.set(4278321408, errors.QueryArgumentError);
    exports.errorMapping.set(4278321409, errors.MissingArgumentError);
    exports.errorMapping.set(4278321410, errors.UnknownArgumentError);
    exports.errorMapping.set(4278321411, errors.InvalidArgumentError);
    exports.errorMapping.set(4278386688, errors.NoDataError);
    exports.errorMapping.set(4278452224, errors.InternalClientError);
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/resolve.js
var require_resolve = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/errors/resolve.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.resolveErrorCode = void 0;
    var errors = __importStar(require_errors());
    var map_1 = require_map();
    function resolveErrorCode(code) {
      let result;
      result = map_1.errorMapping.get(code);
      if (result) {
        return result;
      }
      code = code & 4294967040;
      result = map_1.errorMapping.get(code);
      if (result) {
        return result;
      }
      code = code & 4294901760;
      result = map_1.errorMapping.get(code);
      if (result) {
        return result;
      }
      code = code & 4278190080;
      result = map_1.errorMapping.get(code);
      if (result) {
        return result;
      }
      return errors.EdgeDBError;
    }
    exports.resolveErrorCode = resolveErrorCode;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/baseConn.js
var require_baseConn = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/baseConn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BaseRawConnection = exports.Capabilities = exports.PROTO_VER_MIN = exports.PROTO_VER = void 0;
    var codecs_1 = require_codecs();
    var namedtuple_1 = require_namedtuple();
    var object_1 = require_object();
    var tuple_1 = require_tuple();
    var utils_1 = require_utils();
    var errors = __importStar(require_errors());
    var resolve_1 = require_resolve();
    var ifaces_1 = require_ifaces();
    var buffer_1 = require_buffer();
    var chars = __importStar(require_chars());
    var event_1 = __importDefault(require_event());
    var lru_1 = __importDefault(require_lru());
    var options_1 = require_options();
    exports.PROTO_VER = [1, 0];
    exports.PROTO_VER_MIN = [0, 9];
    var TransactionStatus;
    (function(TransactionStatus2) {
      TransactionStatus2[TransactionStatus2["TRANS_IDLE"] = 0] = "TRANS_IDLE";
      TransactionStatus2[TransactionStatus2["TRANS_ACTIVE"] = 1] = "TRANS_ACTIVE";
      TransactionStatus2[TransactionStatus2["TRANS_INTRANS"] = 2] = "TRANS_INTRANS";
      TransactionStatus2[TransactionStatus2["TRANS_INERROR"] = 3] = "TRANS_INERROR";
      TransactionStatus2[TransactionStatus2["TRANS_UNKNOWN"] = 4] = "TRANS_UNKNOWN";
    })(TransactionStatus || (TransactionStatus = {}));
    var Capabilities;
    (function(Capabilities2) {
      Capabilities2[Capabilities2["NONE"] = 0] = "NONE";
      Capabilities2[Capabilities2["MODIFICATONS"] = 1] = "MODIFICATONS";
      Capabilities2[Capabilities2["SESSION_CONFIG"] = 2] = "SESSION_CONFIG";
      Capabilities2[Capabilities2["TRANSACTION"] = 4] = "TRANSACTION";
      Capabilities2[Capabilities2["DDL"] = 8] = "DDL";
      Capabilities2[Capabilities2["PERSISTENT_CONFIG"] = 16] = "PERSISTENT_CONFIG";
      Capabilities2[Capabilities2["SET_GLOBAL"] = 32] = "SET_GLOBAL";
      Capabilities2[Capabilities2["ALL"] = 4294967295] = "ALL";
    })(Capabilities = exports.Capabilities || (exports.Capabilities = {}));
    var NO_TRANSACTION_CAPABILITIES = (Capabilities.ALL & ~Capabilities.TRANSACTION) >>> 0;
    var NO_TRANSACTION_CAPABILITIES_BYTES = new Uint8Array(Array(8).fill(255));
    new DataView(NO_TRANSACTION_CAPABILITIES_BYTES.buffer).setUint32(4, NO_TRANSACTION_CAPABILITIES);
    var RESTRICTED_CAPABILITIES = (Capabilities.ALL & ~Capabilities.TRANSACTION & ~Capabilities.SESSION_CONFIG & ~Capabilities.SET_GLOBAL) >>> 0;
    var STUDIO_CAPABILITIES = (RESTRICTED_CAPABILITIES | Capabilities.SESSION_CONFIG | Capabilities.SET_GLOBAL) >>> 0;
    var CompilationFlag;
    (function(CompilationFlag2) {
      CompilationFlag2[CompilationFlag2["INJECT_OUTPUT_TYPE_IDS"] = 1] = "INJECT_OUTPUT_TYPE_IDS";
      CompilationFlag2[CompilationFlag2["INJECT_OUTPUT_TYPE_NAMES"] = 2] = "INJECT_OUTPUT_TYPE_NAMES";
      CompilationFlag2[CompilationFlag2["INJECT_OUTPUT_OBJECT_IDS"] = 4] = "INJECT_OUTPUT_OBJECT_IDS";
    })(CompilationFlag || (CompilationFlag = {}));
    var OLD_ERROR_CODES = /* @__PURE__ */ new Map([
      [84082689, 84082945],
      [84082690, 84082946]
    ]);
    var BaseRawConnection = class {
      constructor(registry) {
        Object.defineProperty(this, "connected", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
        Object.defineProperty(this, "lastStatus", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "codecsRegistry", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "queryCodecCache", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "serverSecret", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "serverSettings", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "serverXactStatus", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "buffer", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "messageWaiter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "connWaiter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "connAbortWaiter", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "_abortedWith", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "protocolVersion", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: exports.PROTO_VER
        });
        Object.defineProperty(this, "isLegacyProtocol", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
        Object.defineProperty(this, "stateCodec", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: codecs_1.INVALID_CODEC
        });
        Object.defineProperty(this, "stateCache", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "lastStateUpdate", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: null
        });
        Object.defineProperty(this, "adminUIMode", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
        this.buffer = new buffer_1.ReadMessageBuffer();
        this.codecsRegistry = registry;
        this.queryCodecCache = new lru_1.default({ capacity: 1e3 });
        this.lastStatus = null;
        this.serverSecret = null;
        this.serverSettings = {};
        this.serverXactStatus = TransactionStatus.TRANS_UNKNOWN;
        this.messageWaiter = null;
        this.connWaiter = new event_1.default();
        this.connAbortWaiter = new event_1.default();
      }
      throwNotImplemented(method) {
        throw new errors.InternalClientError(`method ${method} is not implemented`);
      }
      async _waitForMessage() {
        this.throwNotImplemented("_waitForMessage");
      }
      _sendData(data) {
        this.throwNotImplemented("_sendData");
      }
      getConnAbortError() {
        var _a;
        return (_a = this._abortedWith) !== null && _a !== void 0 ? _a : new errors.InterfaceError(`client has been closed`);
      }
      _checkState() {
        if (this.isClosed()) {
          throw this.getConnAbortError();
        }
      }
      _abortWithError(err) {
        this._abortedWith = err;
        this._abort();
      }
      _ignoreHeaders() {
        let numFields = this.buffer.readInt16();
        while (numFields) {
          this.buffer.readInt16();
          this.buffer.readLenPrefixedBuffer();
          numFields--;
        }
      }
      _abortWaiters(err) {
        var _a;
        if (!this.connWaiter.done) {
          this.connWaiter.setError(err);
        }
        (_a = this.messageWaiter) === null || _a === void 0 ? void 0 : _a.setError(err);
        this.messageWaiter = null;
      }
      _parseHeaders() {
        const ret = /* @__PURE__ */ new Map();
        let numFields = this.buffer.readInt16();
        while (numFields) {
          const key = this.buffer.readInt16();
          const value = this.buffer.readLenPrefixedBuffer();
          ret.set(key, value);
          numFields--;
        }
        return ret;
      }
      _parseDescribeTypeMessage() {
        let capabilities = -1;
        if (this.isLegacyProtocol) {
          const headers = this._parseHeaders();
          if (headers.has(ifaces_1.LegacyHeaderCodes.capabilities)) {
            const buf = headers.get(ifaces_1.LegacyHeaderCodes.capabilities);
            capabilities = Number(new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getBigInt64(0));
          }
        } else {
          this._ignoreHeaders();
          capabilities = Number(this.buffer.readBigInt64());
        }
        const cardinality = this.buffer.readChar();
        const inTypeId = this.buffer.readUUID();
        const inTypeData = this.buffer.readLenPrefixedBuffer();
        const outTypeId = this.buffer.readUUID();
        const outTypeData = this.buffer.readLenPrefixedBuffer();
        this.buffer.finishMessage();
        let inCodec = this.codecsRegistry.getCodec(inTypeId);
        if (inCodec == null) {
          inCodec = this.codecsRegistry.buildCodec(inTypeData, this.protocolVersion);
        }
        let outCodec = this.codecsRegistry.getCodec(outTypeId);
        if (outCodec == null) {
          outCodec = this.codecsRegistry.buildCodec(outTypeData, this.protocolVersion);
        }
        return [
          cardinality,
          inCodec,
          outCodec,
          capabilities,
          inTypeData,
          outTypeData
        ];
      }
      _parseCommandCompleteMessage() {
        this._ignoreHeaders();
        let status;
        if (this.isLegacyProtocol) {
          status = this.buffer.readString();
        } else {
          this.buffer.readBigInt64();
          status = this.buffer.readString();
          const stateTypeId = this.buffer.readUUID();
          const stateData = this.buffer.readLenPrefixedBuffer();
          if (this.adminUIMode && stateTypeId === this.stateCodec.tid) {
            this.lastStateUpdate = this.stateCodec.decode(new buffer_1.ReadBuffer(stateData));
          }
        }
        this.buffer.finishMessage();
        return status;
      }
      _parseErrorMessage() {
        var _a;
        this.buffer.readChar();
        const code = this.buffer.readUInt32();
        const message = this.buffer.readString();
        const errorType = (0, resolve_1.resolveErrorCode)((_a = OLD_ERROR_CODES.get(code)) !== null && _a !== void 0 ? _a : code);
        const err = new errorType(message);
        err._attrs = this._parseHeaders();
        this.buffer.finishMessage();
        if (err instanceof errors.AuthenticationError) {
          throw err;
        }
        return err;
      }
      _parseSyncMessage() {
        this._parseHeaders();
        const status = this.buffer.readChar();
        switch (status) {
          case chars.$I:
            this.serverXactStatus = TransactionStatus.TRANS_IDLE;
            break;
          case chars.$T:
            this.serverXactStatus = TransactionStatus.TRANS_INTRANS;
            break;
          case chars.$E:
            this.serverXactStatus = TransactionStatus.TRANS_INERROR;
            break;
          default:
            this.serverXactStatus = TransactionStatus.TRANS_UNKNOWN;
        }
        this.buffer.finishMessage();
      }
      _parseDataMessages(codec, result) {
        const frb = buffer_1.ReadBuffer.alloc();
        const $D = chars.$D;
        const buffer = this.buffer;
        if (Array.isArray(result)) {
          while (buffer.takeMessageType($D)) {
            buffer.consumeMessageInto(frb);
            frb.discard(6);
            result.push(codec.decode(frb));
            frb.finish();
          }
        } else {
          while (buffer.takeMessageType($D)) {
            const msg = buffer.consumeMessage();
            result.writeChar($D);
            result.writeInt32(msg.length + 4);
            result.writeBuffer(msg);
          }
        }
      }
      _parseServerSettings(name, value) {
        switch (name) {
          case "suggested_pool_concurrency": {
            this.serverSettings.suggested_pool_concurrency = parseInt(buffer_1.utf8Decoder.decode(value), 10);
            break;
          }
          case "system_config": {
            const buf = new buffer_1.ReadBuffer(value);
            const typedescLen = buf.readInt32() - 16;
            const typedescId = buf.readUUID();
            const typedesc = buf.readBuffer(typedescLen);
            let codec = this.codecsRegistry.getCodec(typedescId);
            if (codec === null) {
              codec = this.codecsRegistry.buildCodec(typedesc, this.protocolVersion);
            }
            buf.discard(4);
            const data = codec.decode(buf);
            buf.finish();
            this.serverSettings.system_config = data;
            break;
          }
          default:
            this.serverSettings[name] = value;
            break;
        }
      }
      _parseDescribeStateMessage() {
        const typedescId = this.buffer.readUUID();
        const typedesc = this.buffer.readBuffer(this.buffer.readInt32());
        let codec = this.codecsRegistry.getCodec(typedescId);
        if (codec === null) {
          codec = this.codecsRegistry.buildCodec(typedesc, this.protocolVersion);
        }
        this.stateCodec = codec;
        this.stateCache = null;
        this.buffer.finishMessage();
      }
      _fallthrough() {
        const mtype = this.buffer.getMessageType();
        switch (mtype) {
          case chars.$S: {
            const name = this.buffer.readString();
            const value = this.buffer.readLenPrefixedBuffer();
            this._parseServerSettings(name, value);
            this.buffer.finishMessage();
            break;
          }
          case chars.$L: {
            const severity = this.buffer.readChar();
            const code = this.buffer.readUInt32();
            const message = this.buffer.readString();
            this._parseHeaders();
            this.buffer.finishMessage();
            console.info("SERVER MESSAGE", severity, code, message);
            break;
          }
          default:
            throw new errors.UnexpectedMessageError(`unexpected message type ${mtype} ("${chars.chr(mtype)}")`);
        }
      }
      async _legacyParse(query, outputFormat, expectOne) {
        const wb = new buffer_1.WriteMessageBuffer();
        const parseSendsTypeData = (0, utils_1.versionGreaterThanOrEqual)(this.protocolVersion, [0, 14]);
        wb.beginMessage(chars.$P).writeLegacyHeaders({
          explicitObjectids: "true",
          allowCapabilities: NO_TRANSACTION_CAPABILITIES_BYTES
        }).writeChar(outputFormat).writeChar(expectOne ? ifaces_1.Cardinality.AT_MOST_ONE : ifaces_1.Cardinality.MANY);
        wb.writeString("");
        wb.writeString(query);
        wb.endMessage();
        wb.writeSync();
        this._sendData(wb.unwrap());
        let cardinality;
        let inTypeId;
        let outTypeId;
        let inCodec;
        let outCodec;
        let capabilities = -1;
        let parsing = true;
        let error = null;
        let inCodecData = null;
        let outCodecData = null;
        while (parsing) {
          if (!this.buffer.takeMessage()) {
            await this._waitForMessage();
          }
          const mtype = this.buffer.getMessageType();
          switch (mtype) {
            case chars.$1: {
              const headers = this._parseHeaders();
              if (headers.has(ifaces_1.LegacyHeaderCodes.capabilities)) {
                const buf = headers.get(ifaces_1.LegacyHeaderCodes.capabilities);
                capabilities = Number(new DataView(buf.buffer, buf.byteOffset, buf.byteLength).getBigInt64(0));
              }
              cardinality = this.buffer.readChar();
              if (parseSendsTypeData) {
                inTypeId = this.buffer.readUUID();
                inCodecData = this.buffer.readLenPrefixedBuffer();
                outTypeId = this.buffer.readUUID();
                outCodecData = this.buffer.readLenPrefixedBuffer();
              } else {
                inTypeId = this.buffer.readUUID();
                outTypeId = this.buffer.readUUID();
              }
              this.buffer.finishMessage();
              break;
            }
            case chars.$E: {
              error = this._parseErrorMessage();
              error._query = query;
              break;
            }
            case chars.$Z: {
              this._parseSyncMessage();
              parsing = false;
              break;
            }
            default:
              this._fallthrough();
          }
        }
        if (error != null) {
          throw error;
        }
        if (inTypeId == null || outTypeId == null) {
          throw new errors.ProtocolError("did not receive in/out type ids in Parse response");
        }
        inCodec = this.codecsRegistry.getCodec(inTypeId);
        outCodec = this.codecsRegistry.getCodec(outTypeId);
        if (inCodec == null && inCodecData != null) {
          inCodec = this.codecsRegistry.buildCodec(inCodecData, this.protocolVersion);
        }
        if (outCodec == null && outCodecData != null) {
          outCodec = this.codecsRegistry.buildCodec(outCodecData, this.protocolVersion);
        }
        if (inCodec == null || outCodec == null || !parseSendsTypeData) {
          if (parseSendsTypeData) {
            throw new errors.ProtocolError("in/out codecs were not sent");
          }
          wb.reset();
          wb.beginMessage(chars.$D).writeInt16(0).writeChar(chars.$T).writeString("").endMessage().writeSync();
          this._sendData(wb.unwrap());
          parsing = true;
          while (parsing) {
            if (!this.buffer.takeMessage()) {
              await this._waitForMessage();
            }
            const mtype = this.buffer.getMessageType();
            switch (mtype) {
              case chars.$T: {
                try {
                  [
                    cardinality,
                    inCodec,
                    outCodec,
                    capabilities,
                    inCodecData,
                    outCodecData
                  ] = this._parseDescribeTypeMessage();
                } catch (e) {
                  error = e;
                }
                break;
              }
              case chars.$E: {
                error = this._parseErrorMessage();
                error._query = query;
                break;
              }
              case chars.$Z: {
                this._parseSyncMessage();
                parsing = false;
                break;
              }
              default:
                this._fallthrough();
            }
          }
          if (error != null) {
            throw error;
          }
        }
        if (cardinality == null || outCodec == null || inCodec == null) {
          throw new errors.ProtocolError("failed to receive type information in response to a Parse message");
        }
        return [
          cardinality,
          inCodec,
          outCodec,
          capabilities,
          inCodecData,
          outCodecData
        ];
      }
      _encodeArgs(args, inCodec) {
        if ((0, utils_1.versionGreaterThanOrEqual)(this.protocolVersion, [0, 12])) {
          if (inCodec === codecs_1.NULL_CODEC) {
            if (args != null) {
              throw new errors.QueryArgumentError(`This query does not contain any query parameters, but query arguments were provided to the 'query*()' method`);
            }
            return codecs_1.NullCodec.BUFFER;
          }
          if (inCodec instanceof object_1.ObjectCodec) {
            return inCodec.encodeArgs(args);
          }
          throw new errors.ProtocolError("invalid input codec");
        } else {
          if (inCodec === tuple_1.EMPTY_TUPLE_CODEC) {
            if (args != null) {
              throw new errors.QueryArgumentError(`This query does not contain any query parameters, but query arguments were provided to the 'query*()' method`);
            }
            return tuple_1.EmptyTupleCodec.BUFFER;
          }
          if (inCodec instanceof namedtuple_1.NamedTupleCodec || inCodec instanceof tuple_1.TupleCodec) {
            return inCodec.encodeArgs(args);
          }
          throw new errors.ProtocolError("invalid input codec");
        }
      }
      async _legacyExecuteFlow(args, inCodec, outCodec, result) {
        const wb = new buffer_1.WriteMessageBuffer();
        wb.beginMessage(chars.$E).writeLegacyHeaders({
          allowCapabilities: NO_TRANSACTION_CAPABILITIES_BYTES
        }).writeString("").writeBuffer(this._encodeArgs(args, inCodec)).endMessage().writeSync();
        this._sendData(wb.unwrap());
        let parsing = true;
        let error = null;
        while (parsing) {
          if (!this.buffer.takeMessage()) {
            await this._waitForMessage();
          }
          const mtype = this.buffer.getMessageType();
          switch (mtype) {
            case chars.$D: {
              if (error == null) {
                try {
                  this._parseDataMessages(outCodec, result);
                } catch (e) {
                  error = e;
                  this.buffer.finishMessage();
                }
              } else {
                this.buffer.discardMessage();
              }
              break;
            }
            case chars.$C: {
              this.lastStatus = this._parseCommandCompleteMessage();
              break;
            }
            case chars.$E: {
              error = this._parseErrorMessage();
              break;
            }
            case chars.$Z: {
              this._parseSyncMessage();
              parsing = false;
              break;
            }
            default:
              this._fallthrough();
          }
        }
        if (error != null) {
          throw error;
        }
      }
      async _legacyOptimisticExecuteFlow(query, args, outputFormat, expectedCardinality, inCodec, outCodec, result) {
        const expectOne = expectedCardinality === ifaces_1.Cardinality.ONE || expectedCardinality === ifaces_1.Cardinality.AT_MOST_ONE;
        const wb = new buffer_1.WriteMessageBuffer();
        wb.beginMessage(chars.$O);
        wb.writeLegacyHeaders({
          explicitObjectids: "true",
          allowCapabilities: NO_TRANSACTION_CAPABILITIES_BYTES
        });
        wb.writeChar(outputFormat);
        wb.writeChar(expectOne ? ifaces_1.Cardinality.AT_MOST_ONE : ifaces_1.Cardinality.MANY);
        wb.writeString(query);
        wb.writeBuffer(inCodec.tidBuffer);
        wb.writeBuffer(outCodec.tidBuffer);
        wb.writeBuffer(this._encodeArgs(args, inCodec));
        wb.endMessage();
        wb.writeSync();
        this._sendData(wb.unwrap());
        let reExec = false;
        let error = null;
        let parsing = true;
        let newCard = null;
        let capabilities = -1;
        while (parsing) {
          if (!this.buffer.takeMessage()) {
            await this._waitForMessage();
          }
          const mtype = this.buffer.getMessageType();
          switch (mtype) {
            case chars.$D: {
              if (error == null) {
                try {
                  this._parseDataMessages(outCodec, result);
                } catch (e) {
                  error = e;
                  this.buffer.finishMessage();
                }
              } else {
                this.buffer.discardMessage();
              }
              break;
            }
            case chars.$C: {
              this.lastStatus = this._parseCommandCompleteMessage();
              break;
            }
            case chars.$Z: {
              this._parseSyncMessage();
              parsing = false;
              break;
            }
            case chars.$T: {
              try {
                [newCard, inCodec, outCodec, capabilities] = this._parseDescribeTypeMessage();
                const key = this._getQueryCacheKey(query, outputFormat, expectedCardinality);
                this.queryCodecCache.set(key, [
                  newCard,
                  inCodec,
                  outCodec,
                  capabilities
                ]);
                reExec = true;
              } catch (e) {
                error = e;
              }
              break;
            }
            case chars.$E: {
              error = this._parseErrorMessage();
              error._query = query;
              break;
            }
            default:
              this._fallthrough();
          }
        }
        if (error != null) {
          throw error;
        }
        if (reExec) {
          this._validateFetchCardinality(newCard, outputFormat, expectedCardinality);
          return await this._legacyExecuteFlow(args, inCodec, outCodec, result);
        }
      }
      _encodeParseParams(wb, query, outputFormat, expectedCardinality, state, capabilitiesFlags, options) {
        var _a, _b;
        wb.writeFlags(4294967295, capabilitiesFlags);
        wb.writeFlags(0, 0 | ((options === null || options === void 0 ? void 0 : options.injectObjectids) ? CompilationFlag.INJECT_OUTPUT_OBJECT_IDS : 0) | ((options === null || options === void 0 ? void 0 : options.injectTypeids) ? CompilationFlag.INJECT_OUTPUT_TYPE_IDS : 0) | ((options === null || options === void 0 ? void 0 : options.injectTypenames) ? CompilationFlag.INJECT_OUTPUT_TYPE_NAMES : 0));
        wb.writeBigInt64((_a = options === null || options === void 0 ? void 0 : options.implicitLimit) !== null && _a !== void 0 ? _a : BigInt(0));
        wb.writeChar(outputFormat);
        wb.writeChar(expectedCardinality === ifaces_1.Cardinality.ONE || expectedCardinality === ifaces_1.Cardinality.AT_MOST_ONE ? ifaces_1.Cardinality.AT_MOST_ONE : ifaces_1.Cardinality.MANY);
        wb.writeString(query);
        if (!this.adminUIMode && state === options_1.Session.defaults()) {
          wb.writeBuffer(codecs_1.NULL_CODEC.tidBuffer);
          wb.writeInt32(0);
        } else {
          wb.writeBuffer(this.stateCodec.tidBuffer);
          if (this.stateCodec === codecs_1.INVALID_CODEC || this.stateCodec === codecs_1.NULL_CODEC) {
            wb.writeInt32(0);
          } else {
            if (((_b = this.stateCache) === null || _b === void 0 ? void 0 : _b[0]) !== state) {
              const buf = new buffer_1.WriteBuffer();
              this.stateCodec.encode(buf, state._serialise());
              this.stateCache = [state, buf.unwrap()];
            }
            wb.writeBuffer(this.stateCache[1]);
          }
        }
      }
      async _parse(query, outputFormat, expectedCardinality, state, capabilitiesFlags = RESTRICTED_CAPABILITIES, options) {
        const wb = new buffer_1.WriteMessageBuffer();
        wb.beginMessage(chars.$P);
        wb.writeUInt16(0);
        this._encodeParseParams(wb, query, outputFormat, expectedCardinality, state, capabilitiesFlags, options);
        wb.endMessage();
        wb.writeSync();
        this._sendData(wb.unwrap());
        let parsing = true;
        let error = null;
        let newCard = null;
        let capabilities = -1;
        let inCodec = null;
        let outCodec = null;
        let inCodecBuf = null;
        let outCodecBuf = null;
        while (parsing) {
          if (!this.buffer.takeMessage()) {
            await this._waitForMessage();
          }
          const mtype = this.buffer.getMessageType();
          switch (mtype) {
            case chars.$T: {
              try {
                [
                  newCard,
                  inCodec,
                  outCodec,
                  capabilities,
                  inCodecBuf,
                  outCodecBuf
                ] = this._parseDescribeTypeMessage();
                const key = this._getQueryCacheKey(query, outputFormat, expectedCardinality);
                this.queryCodecCache.set(key, [
                  newCard,
                  inCodec,
                  outCodec,
                  capabilities
                ]);
              } catch (e) {
                error = e;
              }
              break;
            }
            case chars.$E: {
              error = this._parseErrorMessage();
              error._query = query;
              break;
            }
            case chars.$s: {
              this._parseDescribeStateMessage();
              break;
            }
            case chars.$Z: {
              this._parseSyncMessage();
              parsing = false;
              break;
            }
            default:
              this._fallthrough();
          }
        }
        if (error !== null) {
          if (error instanceof errors.StateMismatchError) {
            return this._parse(query, outputFormat, expectedCardinality, state, capabilitiesFlags, options);
          }
          throw error;
        }
        return [
          newCard,
          inCodec,
          outCodec,
          capabilities,
          inCodecBuf,
          outCodecBuf
        ];
      }
      async _executeFlow(query, args, outputFormat, expectedCardinality, state, inCodec, outCodec, result, capabilitiesFlags = RESTRICTED_CAPABILITIES, options) {
        const wb = new buffer_1.WriteMessageBuffer();
        wb.beginMessage(chars.$O);
        wb.writeUInt16(0);
        this._encodeParseParams(wb, query, outputFormat, expectedCardinality, state, capabilitiesFlags, options);
        wb.writeBuffer(inCodec.tidBuffer);
        wb.writeBuffer(outCodec.tidBuffer);
        if (inCodec) {
          wb.writeBuffer(this._encodeArgs(args, inCodec));
        } else {
          wb.writeInt32(0);
        }
        wb.endMessage();
        wb.writeSync();
        this._sendData(wb.unwrap());
        let error = null;
        let parsing = true;
        while (parsing) {
          if (!this.buffer.takeMessage()) {
            await this._waitForMessage();
          }
          const mtype = this.buffer.getMessageType();
          switch (mtype) {
            case chars.$D: {
              if (error == null) {
                try {
                  this._parseDataMessages(outCodec, result);
                } catch (e) {
                  error = e;
                  this.buffer.finishMessage();
                }
              } else {
                this.buffer.discardMessage();
              }
              break;
            }
            case chars.$C: {
              this.lastStatus = this._parseCommandCompleteMessage();
              break;
            }
            case chars.$Z: {
              this._parseSyncMessage();
              parsing = false;
              break;
            }
            case chars.$T: {
              try {
                const [newCard, newInCodec, newOutCodec, capabilities] = this._parseDescribeTypeMessage();
                const key = this._getQueryCacheKey(query, outputFormat, expectedCardinality);
                this.queryCodecCache.set(key, [
                  newCard,
                  newInCodec,
                  newOutCodec,
                  capabilities
                ]);
                outCodec = newOutCodec;
              } catch (e) {
                error = e;
              }
              break;
            }
            case chars.$s: {
              this._parseDescribeStateMessage();
              break;
            }
            case chars.$E: {
              error = this._parseErrorMessage();
              error._query = query;
              break;
            }
            default:
              this._fallthrough();
          }
        }
        if (error != null) {
          if (error instanceof errors.StateMismatchError) {
            return this._executeFlow(query, args, outputFormat, expectedCardinality, state, inCodec, outCodec, result, capabilitiesFlags, options);
          }
          throw error;
        }
      }
      _getQueryCacheKey(query, outputFormat, expectedCardinality) {
        const expectOne = expectedCardinality === ifaces_1.Cardinality.ONE || expectedCardinality === ifaces_1.Cardinality.AT_MOST_ONE;
        return [outputFormat, expectOne, query.length, query].join(";");
      }
      _validateFetchCardinality(card, outputFormat, expectedCardinality) {
        if (expectedCardinality === ifaces_1.Cardinality.ONE && card === ifaces_1.Cardinality.NO_RESULT) {
          throw new errors.NoDataError(`query executed via queryRequiredSingle${outputFormat === ifaces_1.OutputFormat.JSON ? "JSON" : ""}() returned no data`);
        }
      }
      async fetch(query, args = null, outputFormat, expectedCardinality, state, privilegedMode = false) {
        var _a, _b;
        if (this.isLegacyProtocol && outputFormat === ifaces_1.OutputFormat.NONE) {
          if (args != null) {
            throw new errors.InterfaceError(`arguments in execute() is not supported in this version of EdgeDB. Upgrade to EdgeDB 2.0 or newer.`);
          }
          return this.legacyExecute(query, privilegedMode);
        }
        this._checkState();
        const requiredOne = expectedCardinality === ifaces_1.Cardinality.ONE;
        const expectOne = requiredOne || expectedCardinality === ifaces_1.Cardinality.AT_MOST_ONE;
        const asJson = outputFormat === ifaces_1.OutputFormat.JSON;
        const key = this._getQueryCacheKey(query, outputFormat, expectedCardinality);
        const ret = [];
        if (!this.isLegacyProtocol) {
          let [card, inCodec, outCodec] = (_a = this.queryCodecCache.get(key)) !== null && _a !== void 0 ? _a : [];
          if (card) {
            this._validateFetchCardinality(card, outputFormat, expectedCardinality);
          }
          if (!inCodec && args !== null || this.stateCodec === codecs_1.INVALID_CODEC && state !== options_1.Session.defaults()) {
            [card, inCodec, outCodec] = await this._parse(query, outputFormat, expectedCardinality, state, privilegedMode ? Capabilities.ALL : void 0);
            this._validateFetchCardinality(card, outputFormat, expectedCardinality);
          }
          try {
            await this._executeFlow(query, args, outputFormat, expectedCardinality, state, inCodec !== null && inCodec !== void 0 ? inCodec : codecs_1.NULL_CODEC, outCodec !== null && outCodec !== void 0 ? outCodec : codecs_1.NULL_CODEC, ret, privilegedMode ? Capabilities.ALL : void 0);
          } catch (e) {
            if (e instanceof errors.ParameterTypeMismatchError) {
              [card, inCodec, outCodec] = this.queryCodecCache.get(key);
              await this._executeFlow(query, args, outputFormat, expectedCardinality, state, inCodec !== null && inCodec !== void 0 ? inCodec : codecs_1.NULL_CODEC, outCodec !== null && outCodec !== void 0 ? outCodec : codecs_1.NULL_CODEC, ret, privilegedMode ? Capabilities.ALL : void 0);
            } else {
              throw e;
            }
          }
        } else {
          if (state !== options_1.Session.defaults()) {
            throw new errors.InterfaceError(`setting session state is not supported in this version of EdgeDB. Upgrade to EdgeDB 2.0 or newer.`);
          }
          if (this.queryCodecCache.has(key)) {
            const [card, inCodec, outCodec] = this.queryCodecCache.get(key);
            this._validateFetchCardinality(card, outputFormat, expectedCardinality);
            await this._legacyOptimisticExecuteFlow(query, args, outputFormat, expectedCardinality, inCodec, outCodec, ret);
          } else {
            const [card, inCodec, outCodec, capabilities] = await this._legacyParse(query, outputFormat, expectOne);
            this._validateFetchCardinality(card, outputFormat, expectedCardinality);
            this.queryCodecCache.set(key, [card, inCodec, outCodec, capabilities]);
            await this._legacyExecuteFlow(args, inCodec, outCodec, ret);
          }
        }
        if (outputFormat === ifaces_1.OutputFormat.NONE) {
          return;
        }
        if (expectOne) {
          if (requiredOne && !ret.length) {
            throw new errors.NoDataError("query returned no data");
          } else {
            return (_b = ret[0]) !== null && _b !== void 0 ? _b : asJson ? "null" : null;
          }
        } else {
          if (ret && ret.length) {
            if (asJson) {
              return ret[0];
            } else {
              return ret;
            }
          } else {
            if (asJson) {
              return "[]";
            } else {
              return ret;
            }
          }
        }
      }
      getQueryCapabilities(query, outputFormat, expectedCardinality) {
        var _a, _b;
        const key = this._getQueryCacheKey(query, outputFormat, expectedCardinality);
        return (_b = (_a = this.queryCodecCache.get(key)) === null || _a === void 0 ? void 0 : _a[3]) !== null && _b !== void 0 ? _b : null;
      }
      async legacyExecute(query, allowTransactionCommands = false) {
        this._checkState();
        const wb = new buffer_1.WriteMessageBuffer();
        wb.beginMessage(chars.$Q).writeLegacyHeaders({
          allowCapabilities: !allowTransactionCommands ? NO_TRANSACTION_CAPABILITIES_BYTES : void 0
        }).writeString(query).endMessage();
        this._sendData(wb.unwrap());
        let error = null;
        let parsing = true;
        while (parsing) {
          if (!this.buffer.takeMessage()) {
            await this._waitForMessage();
          }
          const mtype = this.buffer.getMessageType();
          switch (mtype) {
            case chars.$C: {
              this.lastStatus = this._parseCommandCompleteMessage();
              break;
            }
            case chars.$Z: {
              this._parseSyncMessage();
              parsing = false;
              break;
            }
            case chars.$E: {
              error = this._parseErrorMessage();
              error._query = query;
              break;
            }
            default:
              this._fallthrough();
          }
        }
        if (error != null) {
          throw error;
        }
      }
      async resetState() {
        if (this.connected && this.serverXactStatus !== TransactionStatus.TRANS_IDLE) {
          try {
            await this.fetch(`rollback`, void 0, ifaces_1.OutputFormat.NONE, ifaces_1.Cardinality.NO_RESULT, options_1.Session.defaults(), true);
          } catch (e) {
            this._abortWithError(new errors.ClientConnectionClosedError("failed to reset state"));
          }
        }
      }
      _abort() {
        this.connected = false;
        this._abortWaiters(this.getConnAbortError());
        if (!this.connAbortWaiter.done) {
          this.connAbortWaiter.set();
        }
      }
      isClosed() {
        return !this.connected;
      }
      async close() {
        this._abort();
      }
      async rawParse(query, state, options) {
        const result = await this._parse(query, ifaces_1.OutputFormat.BINARY, ifaces_1.Cardinality.MANY, state, STUDIO_CAPABILITIES, options);
        return [
          result[1],
          result[2],
          result[4],
          result[5],
          this.protocolVersion,
          result[3]
        ];
      }
      async rawExecute(query, state, outCodec, options, inCodec, args = null) {
        const result = new buffer_1.WriteBuffer();
        await this._executeFlow(query, args, outCodec ? ifaces_1.OutputFormat.BINARY : ifaces_1.OutputFormat.NONE, ifaces_1.Cardinality.MANY, state, inCodec !== null && inCodec !== void 0 ? inCodec : codecs_1.NULL_CODEC, outCodec !== null && outCodec !== void 0 ? outCodec : codecs_1.NULL_CODEC, result, STUDIO_CAPABILITIES, options);
        return result.unwrap();
      }
    };
    exports.BaseRawConnection = BaseRawConnection;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/scram.js
var require_scram = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/scram.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.XOR = exports.getServerKey = exports.getClientKey = exports.getSaltedPassword = exports.buildClientFinalMessage = exports.parseServerFinalMessage = exports.parseServerFirstMessage = exports.buildClientFirstMessage = exports.generateNonce = exports.bufferEquals = exports.saslprep = exports.HMAC = exports.H = void 0;
    var adapter_shared_node_1 = require_adapter_shared_node();
    Object.defineProperty(exports, "H", { enumerable: true, get: function() {
      return adapter_shared_node_1.H;
    } });
    Object.defineProperty(exports, "HMAC", { enumerable: true, get: function() {
      return adapter_shared_node_1.HMAC;
    } });
    var buffer_1 = require_buffer();
    var errors_1 = require_errors();
    var RAW_NONCE_LENGTH = 18;
    function saslprep(str) {
      return str.normalize("NFKC");
    }
    exports.saslprep = saslprep;
    function bufferEquals(a, b) {
      if (a.length !== b.length) {
        return false;
      }
      for (let i = 0, len = a.length; i < len; i++) {
        if (a[i] !== b[i]) {
          return false;
        }
      }
      return true;
    }
    exports.bufferEquals = bufferEquals;
    function generateNonce(length = RAW_NONCE_LENGTH) {
      return (0, adapter_shared_node_1.randomBytes)(length);
    }
    exports.generateNonce = generateNonce;
    function buildClientFirstMessage(clientNonce, username) {
      const bare = `n=${saslprep(username)},r=${(0, buffer_1.encodeB64)(clientNonce)}`;
      return [`n,,${bare}`, bare];
    }
    exports.buildClientFirstMessage = buildClientFirstMessage;
    function parseServerFirstMessage(msg) {
      const attrs = msg.split(",");
      if (attrs.length < 3) {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const nonceAttr = attrs[0];
      if (!nonceAttr || nonceAttr[0] !== "r") {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const nonceB64 = nonceAttr.split("=", 2)[1];
      if (!nonceB64) {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const nonce = (0, buffer_1.decodeB64)(nonceB64);
      const saltAttr = attrs[1];
      if (!saltAttr || saltAttr[0] !== "s") {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const saltB64 = saltAttr.split("=", 2)[1];
      if (!saltB64) {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const salt = (0, buffer_1.decodeB64)(saltB64);
      const iterAttr = attrs[2];
      if (!iterAttr || iterAttr[0] !== "i") {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const iter = iterAttr.split("=", 2)[1];
      if (!iter || !iter.match(/^[0-9]*$/)) {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const iterCount = parseInt(iter, 10);
      if (iterCount <= 0) {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      return [nonce, salt, iterCount];
    }
    exports.parseServerFirstMessage = parseServerFirstMessage;
    function parseServerFinalMessage(msg) {
      const attrs = msg.split(",");
      if (attrs.length < 1) {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const nonceAttr = attrs[0];
      if (!nonceAttr || nonceAttr[0] !== "v") {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      const signatureB64 = nonceAttr.split("=", 2)[1];
      if (!signatureB64) {
        throw new errors_1.ProtocolError("malformed SCRAM message");
      }
      return (0, buffer_1.decodeB64)(signatureB64);
    }
    exports.parseServerFinalMessage = parseServerFinalMessage;
    async function buildClientFinalMessage(password, salt, iterations, clientFirstBare, serverFirst, serverNonce) {
      const clientFinal = `c=biws,r=${(0, buffer_1.encodeB64)(serverNonce)}`;
      const authMessage = buffer_1.utf8Encoder.encode(`${clientFirstBare},${serverFirst},${clientFinal}`);
      const saltedPassword = await getSaltedPassword(buffer_1.utf8Encoder.encode(saslprep(password)), salt, iterations);
      const clientKey = await getClientKey(saltedPassword);
      const storedKey = await (0, adapter_shared_node_1.H)(clientKey);
      const clientSignature = await (0, adapter_shared_node_1.HMAC)(storedKey, authMessage);
      const clientProof = XOR(clientKey, clientSignature);
      const serverKey = await getServerKey(saltedPassword);
      const serverProof = await (0, adapter_shared_node_1.HMAC)(serverKey, authMessage);
      return [`${clientFinal},p=${(0, buffer_1.encodeB64)(clientProof)}`, serverProof];
    }
    exports.buildClientFinalMessage = buildClientFinalMessage;
    async function getSaltedPassword(password, salt, iterations) {
      const msg = new Uint8Array(salt.length + 4);
      msg.set(salt);
      msg.set([0, 0, 0, 1], salt.length);
      let Hi = await (0, adapter_shared_node_1.HMAC)(password, msg);
      let Ui = Hi;
      for (let _ = 0; _ < iterations - 1; _++) {
        Ui = await (0, adapter_shared_node_1.HMAC)(password, Ui);
        Hi = XOR(Hi, Ui);
      }
      return Hi;
    }
    exports.getSaltedPassword = getSaltedPassword;
    function getClientKey(saltedPassword) {
      return (0, adapter_shared_node_1.HMAC)(saltedPassword, buffer_1.utf8Encoder.encode("Client Key"));
    }
    exports.getClientKey = getClientKey;
    function getServerKey(saltedPassword) {
      return (0, adapter_shared_node_1.HMAC)(saltedPassword, buffer_1.utf8Encoder.encode("Server Key"));
    }
    exports.getServerKey = getServerKey;
    function XOR(a, b) {
      const len = a.length;
      if (len !== b.length) {
        throw new errors_1.ProtocolError("scram.XOR: buffers are of different lengths");
      }
      const res = new Uint8Array(len);
      for (let i = 0; i < len; i++) {
        res[i] = a[i] ^ b[i];
      }
      return res;
    }
    exports.XOR = XOR;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/httpScram.js
var require_httpScram = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/httpScram.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.HTTPSCRAMAuth = void 0;
    var errors_1 = require_errors();
    var buffer_1 = require_buffer();
    var scram_1 = require_scram();
    var AUTH_ENDPOINT = "/auth/token";
    async function HTTPSCRAMAuth(baseUrl, username, password) {
      var _a;
      const authUrl = baseUrl + AUTH_ENDPOINT;
      const clientNonce = await (0, scram_1.generateNonce)();
      const [clientFirst, clientFirstBare] = (0, scram_1.buildClientFirstMessage)(clientNonce, username);
      const serverFirstRes = await fetch(authUrl, {
        headers: {
          Authorization: `SCRAM-SHA-256 data=${utf8ToB64(clientFirst)}`
        }
      });
      const authenticateHeader = serverFirstRes.headers.get("WWW-Authenticate");
      if (serverFirstRes.status !== 401 || !authenticateHeader) {
        const body = await serverFirstRes.text();
        throw new errors_1.ProtocolError(`authentication failed: ${body}`);
      }
      if (!authenticateHeader.startsWith("SCRAM-SHA-256")) {
        throw new errors_1.ProtocolError(`unsupported authentication scheme: ${authenticateHeader}`);
      }
      const authParams = (_a = authenticateHeader.split(/ (.+)?/, 2)[1]) !== null && _a !== void 0 ? _a : "";
      if (authParams.length === 0) {
        const body = await serverFirstRes.text();
        throw new errors_1.ProtocolError(`authentication failed: ${body}`);
      }
      const { sid, data: serverFirst } = parseScramAttrs(authParams);
      if (!sid || !serverFirst) {
        throw new errors_1.ProtocolError(`authentication challenge missing attributes: expected "sid" and "data", got '${authParams}'`);
      }
      const [serverNonce, salt, iterCount] = (0, scram_1.parseServerFirstMessage)(serverFirst);
      const [clientFinal, expectedServerSig] = await (0, scram_1.buildClientFinalMessage)(password, salt, iterCount, clientFirstBare, serverFirst, serverNonce);
      const serverFinalRes = await fetch(authUrl, {
        headers: {
          Authorization: `SCRAM-SHA-256 sid=${sid}, data=${utf8ToB64(clientFinal)}`
        }
      });
      const authInfoHeader = serverFinalRes.headers.get("Authentication-Info");
      if (!serverFinalRes.ok || !authInfoHeader) {
        const body = await serverFinalRes.text();
        throw new errors_1.ProtocolError(`authentication failed: ${body}`);
      }
      const { data: serverFinal, sid: sidFinal } = parseScramAttrs(authInfoHeader);
      if (!sidFinal || !serverFinal) {
        throw new errors_1.ProtocolError(`authentication info missing attributes: expected "sid" and "data", got '${authInfoHeader}'`);
      }
      if (sidFinal !== sid) {
        throw new errors_1.ProtocolError("SCRAM session id does not match");
      }
      const serverSig = (0, scram_1.parseServerFinalMessage)(serverFinal);
      if (!(0, scram_1.bufferEquals)(serverSig, expectedServerSig)) {
        throw new errors_1.ProtocolError("server SCRAM proof does not match");
      }
      const authToken = await serverFinalRes.text();
      return authToken;
    }
    exports.HTTPSCRAMAuth = HTTPSCRAMAuth;
    function utf8ToB64(str) {
      return (0, buffer_1.encodeB64)(buffer_1.utf8Encoder.encode(str));
    }
    function b64ToUtf8(str) {
      return buffer_1.utf8Decoder.decode((0, buffer_1.decodeB64)(str));
    }
    function parseScramAttrs(paramsStr) {
      var _a;
      const params = new Map(paramsStr.length > 0 ? paramsStr.split(",").map((attr) => attr.split(/=(.+)?/, 2)).map(([key, val]) => [key.trim(), val.trim()]) : []);
      const sid = (_a = params.get("sid")) !== null && _a !== void 0 ? _a : null;
      const rawData = params.get("data");
      const data = rawData ? b64ToUtf8(rawData) : null;
      return { sid, data };
    }
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/fetchConn.js
var require_fetchConn = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/fetchConn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FetchConnection = exports.AdminUIFetchConnection = void 0;
    var baseConn_1 = require_baseConn();
    var event_1 = __importDefault(require_event());
    var chars = __importStar(require_chars());
    var errors_1 = require_errors();
    var httpScram_1 = require_httpScram();
    var PROTO_MIME = `application/x.edgedb.v_${baseConn_1.PROTO_VER[0]}_${baseConn_1.PROTO_VER[1]}.binary'`;
    var BaseFetchConnection = class extends baseConn_1.BaseRawConnection {
      constructor(config, registry) {
        super(registry);
        Object.defineProperty(this, "config", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "addr", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.config = config;
        this.addr = this._buildAddr();
      }
      _buildAddr() {
        this.throwNotImplemented("_buildAddr");
      }
      async _waitForMessage() {
        if (this.buffer.takeMessage()) {
          return;
        }
        if (this.messageWaiter == null || this.messageWaiter.done) {
          throw new errors_1.InternalClientError(`message waiter was not initialized before waiting for response`);
        }
        await this.messageWaiter.wait();
      }
      async __sendData(data) {
        if (this.buffer.takeMessage()) {
          const mtype = this.buffer.getMessageType();
          throw new errors_1.InternalClientError(`sending request before reading all data of the previous one: ${chars.chr(mtype)}`);
        }
        if (this.messageWaiter != null && !this.messageWaiter.done) {
          throw new errors_1.InternalClientError(`sending request before waiting for completion of the previous one`);
        }
        this.messageWaiter = new event_1.default();
        try {
          const headers = {
            "Content-Type": PROTO_MIME
          };
          if (this.config.user !== void 0) {
            headers["X-EdgeDB-User"] = this.config.user;
          }
          if (this.config.token !== void 0) {
            headers.Authorization = `Bearer ${this.config.token}`;
          }
          const resp = await fetch(this.addr, {
            method: "post",
            body: data,
            headers
          });
          if (!resp.ok) {
            throw new errors_1.ProtocolError(`fetch failed with status code ${resp.status}: ${resp.statusText}`);
          }
          const respData = await resp.arrayBuffer();
          const buf = new Uint8Array(respData);
          try {
            this.buffer.feed(buf);
          } catch (e) {
            this.messageWaiter.setError(e);
          }
          if (!this.buffer.takeMessage()) {
            throw new errors_1.ProtocolError("no binary protocol messages in the response");
          }
          this.messageWaiter.set();
        } catch (e) {
          this.messageWaiter.setError(e);
        } finally {
          this.messageWaiter = null;
        }
      }
      _sendData(data) {
        this.__sendData(data);
      }
      static create(config, registry) {
        const conn = new this(config, registry);
        conn.connected = true;
        conn.connWaiter.set();
        return conn;
      }
    };
    var AdminUIFetchConnection = class extends BaseFetchConnection {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "adminUIMode", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
      }
      _buildAddr() {
        const config = this.config;
        if (typeof config.address === "string") {
          return `${config.address}/db/${config.database}`;
        }
        const { address, tlsSecurity, database } = config;
        const protocol = tlsSecurity === "insecure" ? "http" : "https";
        const baseUrl = `${protocol}://${address[0]}:${address[1]}`;
        return `${baseUrl}/db/${database}`;
      }
    };
    exports.AdminUIFetchConnection = AdminUIFetchConnection;
    var _tokens = /* @__PURE__ */ new WeakMap();
    var FetchConnection = class _FetchConnection extends BaseFetchConnection {
      _buildAddr() {
        const config = this.config;
        if (typeof config.address === "string") {
          return `${config.address}/db/${config.database}`;
        }
        const { address, tlsSecurity, database } = config;
        const protocol = tlsSecurity === "insecure" ? "http" : "https";
        const baseUrl = `${protocol}://${address[0]}:${address[1]}`;
        return `${baseUrl}/db/${database}`;
      }
      static async connectWithTimeout(addr, config, registry) {
        const { connectionParams: { tlsSecurity, user, password = "", secretKey } } = config;
        let token = secretKey !== null && secretKey !== void 0 ? secretKey : _tokens.get(config);
        if (!token) {
          const protocol = tlsSecurity === "insecure" ? "http" : "https";
          const baseUrl = `${protocol}://${addr[0]}:${addr[1]}`;
          token = await (0, httpScram_1.HTTPSCRAMAuth)(baseUrl, user, password);
          _tokens.set(config, token);
        }
        const conn = new _FetchConnection({
          address: addr,
          tlsSecurity,
          database: config.connectionParams.database,
          user: config.connectionParams.user,
          token
        }, registry);
        conn.connected = true;
        conn.connWaiter.set();
        return conn;
      }
    };
    exports.FetchConnection = FetchConnection;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/browserClient.js
var require_browserClient = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/browserClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createHttpClient = exports.createClient = exports.FetchClientPool = void 0;
    var baseClient_1 = require_baseClient();
    var conUtils_1 = require_conUtils();
    var errors_1 = require_errors();
    var fetchConn_1 = require_fetchConn();
    var options_1 = require_options();
    var parseConnectArguments = (0, conUtils_1.getConnectArgumentsParser)(null);
    var FetchClientPool = class extends baseClient_1.BaseClientPool {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "isStateless", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: true
        });
        Object.defineProperty(this, "_connectWithTimeout", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: fetchConn_1.FetchConnection.connectWithTimeout
        });
      }
    };
    exports.FetchClientPool = FetchClientPool;
    function createClient3() {
      throw new errors_1.EdgeDBError(`'createClient()' cannot be used in browser (or edge runtime) environment, use 'createHttpClient()' API instead`);
    }
    exports.createClient = createClient3;
    function createHttpClient(options) {
      return new baseClient_1.Client(new FetchClientPool(parseConnectArguments, typeof options === "string" ? { dsn: options } : options !== null && options !== void 0 ? options : {}), options_1.Options.defaults());
    }
    exports.createHttpClient = createHttpClient;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/adapter.node.js
var require_adapter_node = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/adapter.node.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.srcDir = exports.exit = exports.homeDir = exports.input = exports.exists = exports.walk = exports.hashSHA1toHex = exports.readDir = exports.watch = exports.hasFSReadPermission = exports.readFileUtf8 = exports.process = exports.tls = exports.fs = exports.net = exports.path = void 0;
    var crypto2 = __importStar(__require("crypto"));
    var fs_1 = __require("fs");
    Object.defineProperty(exports, "fs", { enumerable: true, get: function() {
      return fs_1.promises;
    } });
    var net = __importStar(__require("net"));
    exports.net = net;
    var os = __importStar(__require("os"));
    var path = __importStar(__require("path"));
    exports.path = path;
    var tls = __importStar(__require("tls"));
    exports.tls = tls;
    var process_1 = __importDefault(__require("process"));
    exports.process = process_1.default;
    var readline = __importStar(__require("readline"));
    var stream_1 = __require("stream");
    async function readFileUtf8(...pathParts) {
      return await fs_1.promises.readFile(path.join(...pathParts), { encoding: "utf8" });
    }
    exports.readFileUtf8 = readFileUtf8;
    function hasFSReadPermission() {
      return true;
    }
    exports.hasFSReadPermission = hasFSReadPermission;
    function watch(dir) {
      return fs_1.promises.watch(dir, { recursive: true });
    }
    exports.watch = watch;
    async function readDir(pathString) {
      return fs_1.promises.readdir(pathString);
    }
    exports.readDir = readDir;
    function hashSHA1toHex(msg) {
      return crypto2.createHash("sha1").update(msg).digest("hex");
    }
    exports.hashSHA1toHex = hashSHA1toHex;
    async function walk(dir, params) {
      const { match, skip = [] } = params || {};
      try {
        await fs_1.promises.access(dir);
      } catch (err) {
        return [];
      }
      const dirents = await fs_1.promises.readdir(dir, { withFileTypes: true });
      const files = await Promise.all(dirents.map((dirent) => {
        const fspath = path.resolve(dir, dirent.name);
        if (skip) {
          if (skip.some((re) => re.test(fspath))) {
            return [];
          }
        }
        if (dirent.isDirectory()) {
          return walk(fspath, params);
        }
        if (match) {
          if (!match.some((re) => re.test(fspath))) {
            return [];
          }
        }
        return [fspath];
      }));
      return Array.prototype.concat(...files);
    }
    exports.walk = walk;
    async function exists(filepath) {
      try {
        await fs_1.promises.access(filepath);
        return true;
      } catch (e) {
        return false;
      }
    }
    exports.exists = exists;
    function input(message, params) {
      let silent = false;
      const output = !!(params === null || params === void 0 ? void 0 : params.silent) ? new stream_1.Writable({
        write(chunk, encoding, callback) {
          if (!silent)
            process_1.default.stdout.write(chunk, encoding);
          callback();
        }
      }) : process_1.default.stdout;
      const rl = readline.createInterface({
        input: process_1.default.stdin,
        output
      });
      return new Promise((resolve, rej) => {
        rl.question(message, (val) => {
          rl.close();
          resolve(val);
        });
        silent = true;
      });
    }
    exports.input = input;
    exports.homeDir = os.homedir;
    function exit(code) {
      process_1.default.exit(code);
    }
    exports.exit = exit;
    function srcDir() {
      return __dirname;
    }
    exports.srcDir = srcDir;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/platform.js
var require_platform = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/platform.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.searchConfigDir = exports.isWindows = void 0;
    var adapter_node_1 = require_adapter_node();
    exports.isWindows = process.platform === "win32";
    var _configDir;
    if (process.platform === "darwin") {
      _configDir = () => {
        return adapter_node_1.path.join((0, adapter_node_1.homeDir)(), "Library", "Application Support", "edgedb");
      };
    } else if (process.platform === "win32") {
      _configDir = () => {
        var _a;
        const localAppDataDir = (_a = process.env.LOCALAPPDATA) !== null && _a !== void 0 ? _a : adapter_node_1.path.join((0, adapter_node_1.homeDir)(), "AppData", "Local");
        return adapter_node_1.path.join(localAppDataDir, "EdgeDB", "config");
      };
    } else {
      _configDir = () => {
        let xdgConfigDir = process.env.XDG_CONFIG_HOME;
        if (!xdgConfigDir || !adapter_node_1.path.isAbsolute(xdgConfigDir)) {
          xdgConfigDir = adapter_node_1.path.join((0, adapter_node_1.homeDir)(), ".config");
        }
        return adapter_node_1.path.join(xdgConfigDir, "edgedb");
      };
    }
    async function searchConfigDir(...configPath) {
      const filePath = adapter_node_1.path.join(_configDir(), ...configPath);
      if (await (0, adapter_node_1.exists)(filePath)) {
        return filePath;
      }
      const fallbackPath = adapter_node_1.path.join((0, adapter_node_1.homeDir)(), ".edgedb", ...configPath);
      if (await (0, adapter_node_1.exists)(fallbackPath)) {
        return fallbackPath;
      }
      return filePath;
    }
    exports.searchConfigDir = searchConfigDir;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/conUtils.server.js
var require_conUtils_server = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/conUtils.server.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.parseConnectArguments = exports.serverUtils = exports.findStashPath = void 0;
    var adapter_node_1 = require_adapter_node();
    var platform = __importStar(require_platform());
    var conUtils_1 = require_conUtils();
    var projectDirCache = /* @__PURE__ */ new Map();
    async function findProjectDir(required = true) {
      if (!required && !(0, adapter_node_1.hasFSReadPermission)()) {
        return null;
      }
      const workingDir = process.cwd();
      if (projectDirCache.has(workingDir)) {
        return projectDirCache.get(workingDir);
      }
      let dir = workingDir;
      const cwdDev = (await adapter_node_1.fs.stat(dir)).dev;
      while (true) {
        if (await (0, adapter_node_1.exists)(adapter_node_1.path.join(dir, "edgedb.toml"))) {
          projectDirCache.set(workingDir, dir);
          return dir;
        }
        const parentDir = adapter_node_1.path.join(dir, "..");
        if (parentDir === dir || (await adapter_node_1.fs.stat(parentDir)).dev !== cwdDev) {
          projectDirCache.set(workingDir, null);
          return null;
        }
        dir = parentDir;
      }
    }
    async function findStashPath(projectDir) {
      let projectPath = await adapter_node_1.fs.realpath(projectDir);
      if (platform.isWindows && !projectPath.startsWith("\\\\")) {
        projectPath = "\\\\?\\" + projectPath;
      }
      const hash = (0, adapter_node_1.hashSHA1toHex)(projectPath);
      const baseName = adapter_node_1.path.basename(projectPath);
      const dirName = baseName + "-" + hash;
      return platform.searchConfigDir("projects", dirName);
    }
    exports.findStashPath = findStashPath;
    exports.serverUtils = {
      findProjectDir,
      findStashPath,
      readFileUtf8: adapter_node_1.readFileUtf8,
      searchConfigDir: platform.searchConfigDir
    };
    exports.parseConnectArguments = (0, conUtils_1.getConnectArgumentsParser)(exports.serverUtils);
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/rawConn.js
var require_rawConn = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/rawConn.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __importDefault = exports && exports.__importDefault || function(mod) {
      return mod && mod.__esModule ? mod : { "default": mod };
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.RawConnection = void 0;
    var adapter_node_1 = require_adapter_node();
    var baseConn_1 = require_baseConn();
    var utils_1 = require_utils();
    var buffer_1 = require_buffer();
    var event_1 = __importDefault(require_event());
    var chars = __importStar(require_chars());
    var scram = __importStar(require_scram());
    var errors = __importStar(require_errors());
    var AuthenticationStatuses;
    (function(AuthenticationStatuses2) {
      AuthenticationStatuses2[AuthenticationStatuses2["AUTH_OK"] = 0] = "AUTH_OK";
      AuthenticationStatuses2[AuthenticationStatuses2["AUTH_SASL"] = 10] = "AUTH_SASL";
      AuthenticationStatuses2[AuthenticationStatuses2["AUTH_SASL_CONTINUE"] = 11] = "AUTH_SASL_CONTINUE";
      AuthenticationStatuses2[AuthenticationStatuses2["AUTH_SASL_FINAL"] = 12] = "AUTH_SASL_FINAL";
    })(AuthenticationStatuses || (AuthenticationStatuses = {}));
    var _tlsOptions = /* @__PURE__ */ new WeakMap();
    function getTlsOptions(config) {
      if (_tlsOptions.has(config)) {
        return _tlsOptions.get(config);
      }
      const tlsSecurity = config.tlsSecurity;
      const tlsOptions = {
        ALPNProtocols: ["edgedb-binary"],
        servername: config.address[0],
        rejectUnauthorized: tlsSecurity !== "insecure"
      };
      _tlsOptions.set(config, tlsOptions);
      if (config._tlsCAData !== null) {
        tlsOptions.ca = config._tlsCAData;
      }
      if (tlsSecurity === "no_host_verification") {
        tlsOptions.checkServerIdentity = (hostname, cert) => {
          const err = adapter_node_1.tls.checkServerIdentity(hostname, cert);
          if (err === void 0) {
            return void 0;
          }
          if (err.message.startsWith("Hostname/IP does not match certificate")) {
            return void 0;
          }
          return err;
        };
      }
      return tlsOptions;
    }
    var RawConnection = class extends baseConn_1.BaseRawConnection {
      constructor(sock, config, registry) {
        super(registry);
        Object.defineProperty(this, "config", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "sock", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        Object.defineProperty(this, "paused", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: void 0
        });
        this.config = config;
        this.paused = false;
        this.sock = sock;
        this.sock.setNoDelay();
        this.sock.on("error", this._onError.bind(this));
        this.sock.on("data", this._onData.bind(this));
        if (adapter_node_1.tls.TLSSocket && this.sock instanceof adapter_node_1.tls.TLSSocket) {
          this.sock.on("secureConnect", this._onConnect.bind(this));
        } else {
          this.sock.on("connect", this._onConnect.bind(this));
        }
        this.sock.on("close", this._onClose.bind(this));
      }
      _onConnect() {
        this.connWaiter.set();
      }
      _onClose() {
        if (!this.connected) {
          return;
        }
        const newErr = new errors.ClientConnectionClosedError(`the connection has been aborted`);
        if (!this.connWaiter.done || this.messageWaiter) {
          this._abortWaiters(newErr);
        }
        if (this.buffer.takeMessage() && this.buffer.getMessageType() === chars.$E) {
          newErr.source = this._parseErrorMessage();
        }
        this._abortWithError(newErr);
      }
      _onError(err) {
        const newErr = new errors.ClientConnectionClosedError(`network error: ${err}`);
        newErr.source = err;
        try {
          this._abortWaiters(newErr);
        } finally {
          this._abortWithError(newErr);
        }
      }
      _onData(data) {
        try {
          this.buffer.feed(data);
        } catch (e) {
          if (this.messageWaiter) {
            this.messageWaiter.setError(e);
            this.messageWaiter = null;
          }
          this._abortWithError(e);
        }
        if (this.messageWaiter) {
          if (this.buffer.takeMessage()) {
            this.messageWaiter.set();
            this.messageWaiter = null;
          }
        }
      }
      async _waitForMessage() {
        if (this.buffer.takeMessage()) {
          return;
        }
        if (this.paused) {
          this.paused = false;
          this.sock.resume();
        }
        this.sock.ref();
        this.messageWaiter = new event_1.default();
        try {
          await this.messageWaiter.wait();
        } finally {
          this.sock.unref();
        }
      }
      _sendData(data) {
        this.sock.write(data);
      }
      static newSock(addr, options) {
        if (typeof addr === "string") {
          return adapter_node_1.net.createConnection(addr);
        }
        const [host, port] = addr;
        if (options == null) {
          return adapter_node_1.net.createConnection(port, host);
        }
        const opts = { ...options, host, port };
        return adapter_node_1.tls.connect(opts);
      }
      _abort() {
        if (this.sock && this.connected) {
          this.sock.destroy();
        }
        super._abort();
      }
      async close() {
        if (this.sock && this.connected) {
          this.sock.write(new buffer_1.WriteMessageBuffer().beginMessage(chars.$X).endMessage().unwrap());
        }
        return await super.close();
      }
      static async connectWithTimeout(addr, config, registry, useTls = true) {
        const sock = this.newSock(addr, useTls ? getTlsOptions(config.connectionParams) : void 0);
        const conn = new this(sock, config, registry);
        const connPromise = conn.connect();
        let timeoutCb = null;
        let timeoutHappened = false;
        if (config.connectTimeout) {
          timeoutCb = setTimeout(() => {
            if (!conn.connected) {
              timeoutHappened = true;
              conn.sock.destroy(new errors.ClientConnectionTimeoutError(`connection timed out (${config.connectTimeout}ms)`));
            }
          }, config.connectTimeout);
        }
        try {
          await connPromise;
        } catch (e) {
          conn._abort();
          if (timeoutHappened && e instanceof errors.ClientConnectionClosedError) {
            throw new errors.ClientConnectionTimeoutError(`connection timed out (${config.connectTimeout}ms)`);
          }
          if (e instanceof errors.EdgeDBError) {
            throw e;
          } else {
            let err;
            switch (e.code) {
              case "EPROTO":
                if (useTls === true) {
                  try {
                    return this.connectWithTimeout(addr, config, registry, false);
                  } catch (e2) {
                  }
                }
                err = new errors.ClientConnectionFailedError(`${e.message}
Attempted to connect using the following credentials:
${config.connectionParams.explainConfig()}
`);
                break;
              case "ECONNREFUSED":
              case "ECONNABORTED":
              case "ECONNRESET":
              case "ENOTFOUND":
              case "ENOENT":
                err = new errors.ClientConnectionFailedTemporarilyError(`${e.message}
Attempted to connect using the following credentials:
${config.connectionParams.explainConfig()}
`);
                break;
              default:
                err = new errors.ClientConnectionFailedError(`${e.message}
Attempted to connect using the following credentials:
${config.connectionParams.explainConfig()}
`);
                break;
            }
            err.source = e;
            throw err;
          }
        } finally {
          if (timeoutCb != null) {
            clearTimeout(timeoutCb);
          }
        }
        return conn;
      }
      async connect() {
        await this.connWaiter.wait();
        if (this.sock instanceof adapter_node_1.tls.TLSSocket) {
          if (this.sock.alpnProtocol !== "edgedb-binary") {
            throw new errors.ClientConnectionFailedError("The server doesn't support the edgedb-binary protocol.");
          }
        }
        const handshake = new buffer_1.WriteMessageBuffer();
        handshake.beginMessage(chars.$V).writeInt16(this.protocolVersion[0]).writeInt16(this.protocolVersion[1]);
        const clientHandshakeOptions = {
          user: this.config.connectionParams.user,
          database: this.config.connectionParams.database
        };
        if (this.config.connectionParams.secretKey != null) {
          clientHandshakeOptions.secret_key = this.config.connectionParams.secretKey;
        }
        handshake.writeInt16(Object.keys(clientHandshakeOptions).length);
        for (const [key, value] of Object.entries(clientHandshakeOptions)) {
          handshake.writeString(key).writeString(value);
        }
        handshake.writeInt16(0);
        handshake.endMessage();
        this.sock.write(handshake.unwrap());
        while (true) {
          if (!this.buffer.takeMessage()) {
            await this._waitForMessage();
          }
          const mtype = this.buffer.getMessageType();
          switch (mtype) {
            case chars.$v: {
              const hi = this.buffer.readInt16();
              const lo = this.buffer.readInt16();
              this._parseHeaders();
              this.buffer.finishMessage();
              const proposed = [hi, lo];
              if ((0, utils_1.versionGreaterThan)(proposed, baseConn_1.PROTO_VER) || (0, utils_1.versionGreaterThan)(baseConn_1.PROTO_VER_MIN, proposed)) {
                throw new errors.UnsupportedProtocolVersionError(`the server requested an unsupported version of the protocol ${hi}.${lo}`);
              }
              this.protocolVersion = [hi, lo];
              this.isLegacyProtocol = !(0, utils_1.versionGreaterThanOrEqual)(this.protocolVersion, [1, 0]);
              break;
            }
            case chars.$R: {
              const status = this.buffer.readInt32();
              if (status === AuthenticationStatuses.AUTH_OK) {
                this.buffer.finishMessage();
              } else if (status === AuthenticationStatuses.AUTH_SASL) {
                await this._authSasl();
              } else {
                throw new errors.ProtocolError(`unsupported authentication method requested by the server: ${status}`);
              }
              break;
            }
            case chars.$K: {
              this.serverSecret = this.buffer.readBuffer(32);
              this.buffer.finishMessage();
              break;
            }
            case chars.$E: {
              throw this._parseErrorMessage();
            }
            case chars.$s: {
              this._parseDescribeStateMessage();
              break;
            }
            case chars.$Z: {
              this._parseSyncMessage();
              if (!(this.sock instanceof adapter_node_1.tls.TLSSocket) && typeof Deno === "undefined" && (0, utils_1.versionGreaterThanOrEqual)(this.protocolVersion, [0, 11])) {
                const [major, minor] = this.protocolVersion;
                throw new errors.ProtocolError(`the protocol version requires TLS: ${major}.${minor}`);
              }
              this.connected = true;
              return;
            }
            default:
              this._fallthrough();
          }
        }
      }
      async _authSasl() {
        const numMethods = this.buffer.readInt32();
        if (numMethods <= 0) {
          throw new errors.ProtocolError("the server requested SASL authentication but did not offer any methods");
        }
        const methods = [];
        let foundScram256 = false;
        for (let _ = 0; _ < numMethods; _++) {
          const method = this.buffer.readString();
          if (method === "SCRAM-SHA-256") {
            foundScram256 = true;
          }
          methods.push(method);
        }
        this.buffer.finishMessage();
        if (!foundScram256) {
          throw new errors.ProtocolError(`the server offered the following SASL authentication methods: ${methods.join(", ")}, neither are supported.`);
        }
        const clientNonce = await scram.generateNonce();
        const [clientFirst, clientFirstBare] = scram.buildClientFirstMessage(clientNonce, this.config.connectionParams.user);
        const wb = new buffer_1.WriteMessageBuffer();
        wb.beginMessage(chars.$p).writeString("SCRAM-SHA-256").writeString(clientFirst).endMessage();
        this.sock.write(wb.unwrap());
        await this._ensureMessage(chars.$R, "SASLContinue");
        let status = this.buffer.readInt32();
        if (status !== AuthenticationStatuses.AUTH_SASL_CONTINUE) {
          throw new errors.ProtocolError(`expected SASLContinue from the server, received ${status}`);
        }
        const serverFirst = this.buffer.readString();
        this.buffer.finishMessage();
        const [serverNonce, salt, itercount] = scram.parseServerFirstMessage(serverFirst);
        const [clientFinal, expectedServerSig] = await scram.buildClientFinalMessage(this.config.connectionParams.password || "", salt, itercount, clientFirstBare, serverFirst, serverNonce);
        wb.reset().beginMessage(chars.$r).writeString(clientFinal).endMessage();
        this.sock.write(wb.unwrap());
        await this._ensureMessage(chars.$R, "SASLFinal");
        status = this.buffer.readInt32();
        if (status !== AuthenticationStatuses.AUTH_SASL_FINAL) {
          throw new errors.ProtocolError(`expected SASLFinal from the server, received ${status}`);
        }
        const serverFinal = this.buffer.readString();
        this.buffer.finishMessage();
        const serverSig = scram.parseServerFinalMessage(serverFinal);
        if (!scram.bufferEquals(serverSig, expectedServerSig)) {
          throw new errors.ProtocolError("server SCRAM proof does not match");
        }
      }
      async _ensureMessage(expectedMtype, err) {
        if (!this.buffer.takeMessage()) {
          await this._waitForMessage();
        }
        const mtype = this.buffer.getMessageType();
        switch (mtype) {
          case chars.$E: {
            throw this._parseErrorMessage();
          }
          case expectedMtype: {
            return;
          }
          default: {
            throw new errors.UnexpectedMessageError(`expected ${err} from the server, received ${chars.chr(mtype)}`);
          }
        }
      }
    };
    exports.RawConnection = RawConnection;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/nodeClient.js
var require_nodeClient = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/nodeClient.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createHttpClient = exports.createClient = void 0;
    var baseClient_1 = require_baseClient();
    var browserClient_1 = require_browserClient();
    var conUtils_server_1 = require_conUtils_server();
    var options_1 = require_options();
    var rawConn_1 = require_rawConn();
    var ClientPool = class extends baseClient_1.BaseClientPool {
      constructor() {
        super(...arguments);
        Object.defineProperty(this, "isStateless", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: false
        });
        Object.defineProperty(this, "_connectWithTimeout", {
          enumerable: true,
          configurable: true,
          writable: true,
          value: rawConn_1.RawConnection.connectWithTimeout.bind(rawConn_1.RawConnection)
        });
      }
    };
    function createClient3(options) {
      return new baseClient_1.Client(new ClientPool(conUtils_server_1.parseConnectArguments, typeof options === "string" ? { dsn: options } : options !== null && options !== void 0 ? options : {}), options_1.Options.defaults());
    }
    exports.createClient = createClient3;
    function createHttpClient(options) {
      return new baseClient_1.Client(new browserClient_1.FetchClientPool(conUtils_server_1.parseConnectArguments, typeof options === "string" ? { dsn: options } : options !== null && options !== void 0 ? options : {}), options_1.Options.defaults());
    }
    exports.createHttpClient = createHttpClient;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/index.shared.js
var require_index_shared = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/index.shared.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports._plugJSBI = exports._ReadBuffer = exports._CodecsRegistry = exports.Range = exports.ConfigMemory = exports.DateDuration = exports.RelativeDuration = exports.Duration = exports.LocalTime = exports.LocalDate = exports.LocalDateTime = void 0;
    var datetime_1 = require_datetime();
    Object.defineProperty(exports, "LocalDateTime", { enumerable: true, get: function() {
      return datetime_1.LocalDateTime;
    } });
    Object.defineProperty(exports, "LocalDate", { enumerable: true, get: function() {
      return datetime_1.LocalDate;
    } });
    Object.defineProperty(exports, "LocalTime", { enumerable: true, get: function() {
      return datetime_1.LocalTime;
    } });
    Object.defineProperty(exports, "Duration", { enumerable: true, get: function() {
      return datetime_1.Duration;
    } });
    Object.defineProperty(exports, "RelativeDuration", { enumerable: true, get: function() {
      return datetime_1.RelativeDuration;
    } });
    Object.defineProperty(exports, "DateDuration", { enumerable: true, get: function() {
      return datetime_1.DateDuration;
    } });
    var memory_1 = require_memory();
    Object.defineProperty(exports, "ConfigMemory", { enumerable: true, get: function() {
      return memory_1.ConfigMemory;
    } });
    var range_1 = require_range();
    Object.defineProperty(exports, "Range", { enumerable: true, get: function() {
      return range_1.Range;
    } });
    __exportStar(require_errors(), exports);
    var reg = __importStar(require_registry());
    var buf = __importStar(require_buffer());
    exports._CodecsRegistry = reg.CodecsRegistry;
    exports._ReadBuffer = buf.ReadBuffer;
    var bigint_1 = require_bigint();
    exports._plugJSBI = bigint_1.plugJSBI;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/enums.js
var require_enums = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/enums.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OperatorKind = exports.SelectModifierKind = exports.ExpressionKind = exports.TypeKind = exports.Cardinality = void 0;
    var Cardinality;
    (function(Cardinality2) {
      Cardinality2["AtMostOne"] = "AtMostOne";
      Cardinality2["One"] = "One";
      Cardinality2["Many"] = "Many";
      Cardinality2["AtLeastOne"] = "AtLeastOne";
      Cardinality2["Empty"] = "Empty";
    })(Cardinality = exports.Cardinality || (exports.Cardinality = {}));
    var TypeKind;
    (function(TypeKind2) {
      TypeKind2["scalar"] = "scalar";
      TypeKind2["enum"] = "enum";
      TypeKind2["object"] = "object";
      TypeKind2["namedtuple"] = "namedtuple";
      TypeKind2["tuple"] = "tuple";
      TypeKind2["array"] = "array";
      TypeKind2["range"] = "range";
    })(TypeKind = exports.TypeKind || (exports.TypeKind = {}));
    var ExpressionKind;
    (function(ExpressionKind2) {
      ExpressionKind2["Set"] = "Set";
      ExpressionKind2["Array"] = "Array";
      ExpressionKind2["Tuple"] = "Tuple";
      ExpressionKind2["NamedTuple"] = "NamedTuple";
      ExpressionKind2["TuplePath"] = "TuplePath";
      ExpressionKind2["PathNode"] = "PathNode";
      ExpressionKind2["PathLeaf"] = "PathLeaf";
      ExpressionKind2["Literal"] = "Literal";
      ExpressionKind2["Cast"] = "Cast";
      ExpressionKind2["Select"] = "Select";
      ExpressionKind2["Update"] = "Update";
      ExpressionKind2["Delete"] = "Delete";
      ExpressionKind2["Insert"] = "Insert";
      ExpressionKind2["InsertUnlessConflict"] = "InsertUnlessConflict";
      ExpressionKind2["Function"] = "Function";
      ExpressionKind2["Operator"] = "Operator";
      ExpressionKind2["For"] = "For";
      ExpressionKind2["ForVar"] = "ForVar";
      ExpressionKind2["TypeIntersection"] = "TypeIntersection";
      ExpressionKind2["Alias"] = "Alias";
      ExpressionKind2["With"] = "With";
      ExpressionKind2["WithParams"] = "WithParams";
      ExpressionKind2["Param"] = "Param";
      ExpressionKind2["OptionalParam"] = "OptionalParam";
      ExpressionKind2["Detached"] = "Detached";
      ExpressionKind2["Global"] = "Global";
      ExpressionKind2["PolyShapeElement"] = "PolyShapeElement";
      ExpressionKind2["Group"] = "Group";
    })(ExpressionKind = exports.ExpressionKind || (exports.ExpressionKind = {}));
    var SelectModifierKind;
    (function(SelectModifierKind2) {
      SelectModifierKind2["filter"] = "filter";
      SelectModifierKind2["order_by"] = "order_by";
      SelectModifierKind2["offset"] = "offset";
      SelectModifierKind2["limit"] = "limit";
    })(SelectModifierKind = exports.SelectModifierKind || (exports.SelectModifierKind = {}));
    var OperatorKind;
    (function(OperatorKind2) {
      OperatorKind2["Infix"] = "Infix";
      OperatorKind2["Postfix"] = "Postfix";
      OperatorKind2["Prefix"] = "Prefix";
      OperatorKind2["Ternary"] = "Ternary";
    })(OperatorKind = exports.OperatorKind || (exports.OperatorKind = {}));
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/util.js
var require_util = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/util.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.util = void 0;
    var util;
    (function(util2) {
      function assertNever(arg, error) {
        throw error !== null && error !== void 0 ? error : new Error(`${arg} is supposed to be of "never" type`);
      }
      util2.assertNever = assertNever;
      function splitName(name) {
        if (!name.includes("::"))
          throw new Error(`Invalid FQN ${name}`);
        const parts = name.split("::");
        return {
          mod: parts.slice(0, -1).join("::"),
          name: parts[parts.length - 1]
        };
      }
      util2.splitName = splitName;
      function toIdent(name) {
        if (name.includes("::")) {
          throw new Error(`toIdent: invalid name ${name}`);
        }
        return name.replace(/([^a-zA-Z0-9_]+)/g, "_");
      }
      util2.toIdent = toIdent;
      util2.deduplicate = (args) => [...new Set(args)];
      util2.getFromArrayMap = (map, id) => {
        return map[id] || [];
      };
      util2.defineProperty = (obj, name, def) => {
        return Object.defineProperty(obj, name, def);
      };
      util2.defineGetter = (obj, name, getter) => {
        return Object.defineProperty(obj, name, {
          get: getter,
          enumerable: true
        });
      };
      util2.defineMethod = (obj, name, method) => {
        obj[name] = method.bind(obj);
        return obj;
      };
      function flatMap(array, callbackfn) {
        return Array.prototype.concat(...array.map(callbackfn));
      }
      util2.flatMap = flatMap;
      function omitDollarPrefixed(object) {
        const obj = {};
        for (const key of Object.keys(object)) {
          if (!key.startsWith("$")) {
            obj[key] = object[key];
          }
        }
        return obj;
      }
      util2.omitDollarPrefixed = omitDollarPrefixed;
    })(util = exports.util || (exports.util = {}));
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/typeutil.js
var require_typeutil = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/typeutil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/strictMap.js
var require_strictMap = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/strictMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.StrictMap = void 0;
    var StrictMap = class extends Map {
      get(key) {
        if (!this.has(key)) {
          throw new Error(`key "${key}" is not found`);
        }
        return super.get(key);
      }
    };
    exports.StrictMap = StrictMap;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/reservedKeywords.js
var require_reservedKeywords = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/reservedKeywords.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reservedKeywords = void 0;
    exports.reservedKeywords = /* @__PURE__ */ new Set([
      "__edgedbsys__",
      "__edgedbtpl__",
      "__source__",
      "__std__",
      "__subject__",
      "__type__",
      "abort",
      "alter",
      "analyze",
      "and",
      "anyarray",
      "anytuple",
      "anytype",
      "begin",
      "case",
      "check",
      "commit",
      "configure",
      "create",
      "deallocate",
      "declare",
      "delete",
      "describe",
      "detached",
      "discard",
      "distinct",
      "do",
      "drop",
      "else",
      "empty",
      "end",
      "execute",
      "exists",
      "explain",
      "extending",
      "fetch",
      "filter",
      "for",
      "get",
      "global",
      "grant",
      "group",
      "if",
      "ilike",
      "import",
      "in",
      "insert",
      "introspect",
      "is",
      "like",
      "limit",
      "listen",
      "load",
      "lock",
      "match",
      "module",
      "move",
      "not",
      "notify",
      "offset",
      "optional",
      "or",
      "order",
      "over",
      "partition",
      "policy",
      "populate",
      "prepare",
      "raise",
      "refresh",
      "reindex",
      "release",
      "reset",
      "revoke",
      "rollback",
      "select",
      "set",
      "single",
      "start",
      "typeof",
      "union",
      "update",
      "variadic",
      "when",
      "window",
      "with"
    ]);
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/types.js
var require_types = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.types = exports.topoSort = exports.getTypes = exports.typeMapping = void 0;
    var strictMap_1 = require_strictMap();
    var numberType = {
      id: "00000000-0000-0000-0000-0000000001ff",
      name: "std::number",
      is_abstract: false,
      is_seq: false,
      kind: "scalar",
      enum_values: null,
      material_id: null,
      bases: []
    };
    exports.typeMapping = /* @__PURE__ */ new Map([
      [
        "00000000-0000-0000-0000-000000000103",
        numberType
      ],
      [
        "00000000-0000-0000-0000-000000000104",
        numberType
      ],
      [
        "00000000-0000-0000-0000-000000000105",
        numberType
      ],
      [
        "00000000-0000-0000-0000-000000000106",
        numberType
      ],
      [
        "00000000-0000-0000-0000-000000000107",
        numberType
      ]
    ]);
    async function getTypes(cxn, params) {
      var _a, _b, _c, _d, _e;
      const debug = (params === null || params === void 0 ? void 0 : params.debug) === true;
      const version = await cxn.queryRequiredSingle(`select sys::get_version().major;`);
      const v2Plus = version >= 2;
      const QUERY = `
    WITH
      MODULE schema,

      material_scalars := (
        SELECT ScalarType
        FILTER NOT .abstract
           AND NOT EXISTS .enum_values
           AND NOT EXISTS (SELECT .ancestors FILTER NOT .abstract)
      )

    SELECT Type {
      id,
      name :=
        array_join(array_agg([IS ObjectType].union_of.name), ' | ')
        IF EXISTS [IS ObjectType].union_of
        ELSE .name,
      is_abstract := .abstract,

      kind := 'object' IF Type IS ObjectType ELSE
              'scalar' IF Type IS ScalarType ELSE
              'array' IF Type IS Array ELSE
              'tuple' IF Type IS Tuple ELSE
              ${v2Plus ? `'range' IF Type IS Range ELSE` : ``}
              'unknown',

      [IS ScalarType].enum_values,
      is_seq := 'std::sequence' in [IS ScalarType].ancestors.name,
      # for sequence (abstract type that has non-abstract ancestor)
      single material_id := (
        SELECT x := Type[IS ScalarType].ancestors
        FILTER x IN material_scalars
        LIMIT 1
      ).id,

      [IS InheritingObject].bases: {
        id
      } ORDER BY @index ASC,

      [IS ObjectType].union_of,
      [IS ObjectType].intersection_of,
      [IS ObjectType].pointers: {
        card := ("One" IF .required ELSE "AtMostOne") IF <str>.cardinality = "One" ELSE ("AtLeastOne" IF .required ELSE "Many"),
        name,
        target_id := .target.id,
        kind := 'link' IF .__type__.name = 'schema::Link' ELSE 'property',
        is_exclusive := exists (select .constraints filter .name = 'std::exclusive'),
        is_computed := len(.computed_fields) != 0,
        is_readonly := .readonly,
        has_default := EXISTS .default or ("std::sequence" in .target[IS ScalarType].ancestors.name),
        [IS Link].pointers: {
          card := ("One" IF .required ELSE "AtMostOne") IF <str>.cardinality = "One" ELSE ("AtLeastOne" IF .required ELSE "Many"),
          name := '@' ++ .name,
          target_id := .target.id,
          kind := 'link' IF .__type__.name = 'schema::Link' ELSE 'property',
          is_computed := len(.computed_fields) != 0,
          is_readonly := .readonly
        } filter .name != '@source' and .name != '@target',
      } FILTER @is_owned,
      exclusives := assert_distinct((
        [is schema::ObjectType].constraints
        union
        [is schema::ObjectType].pointers.constraints
      ) {
        target := (.subject[is schema::Property].name ?? .subject[is schema::Link].name ?? .subjectexpr)
      } filter .name = 'std::exclusive'),
      backlinks := (
         SELECT DETACHED Link
         FILTER .target = Type
           AND NOT EXISTS .source[IS ObjectType].union_of
        ) {
        card := "AtMostOne"
          IF
          EXISTS (select .constraints filter .name = 'std::exclusive')
          ELSE
          "Many",
        name := '<' ++ .name ++ '[is ' ++ assert_exists(.source.name) ++ ']',
        stub := .name,
        target_id := .source.id,
        kind := 'link',
        is_exclusive := (EXISTS (select .constraints filter .name = 'std::exclusive')) AND <str>.cardinality = "One",
      },
      backlink_stubs := array_agg((
        WITH
          stubs := DISTINCT (SELECT DETACHED Link FILTER .target = Type).name,
          baseObjectId := (SELECT DETACHED ObjectType FILTER .name = 'std::BaseObject' LIMIT 1).id
        FOR stub in { stubs }
        UNION (
          SELECT {
            card := "Many",
            name := '<' ++ stub,
            target_id := baseObjectId,
            kind := 'link',
            is_exclusive := false,
          }
        )
      )),
      array_element_id := [IS Array].element_type.id,

      tuple_elements := (SELECT [IS Tuple].element_types {
        target_id := .type.id,
        name
      } ORDER BY @index ASC),
      ${v2Plus ? `range_element_id := [IS Range].element_type.id,` : ``}
    }
    ORDER BY .name;
  `;
      const _types = JSON.parse(await cxn.queryJSON(QUERY));
      if (debug)
        console.log(JSON.stringify(_types, null, 2));
      for (const type of _types) {
        if (Array.isArray(type.backlinks)) {
          for (const backlink of type.backlinks) {
            const isName = backlink.name.match(/\[is (.+)\]/)[1];
            if (isName.split("::").length === 2 && isName.startsWith("default::")) {
              backlink.name = backlink.name.replace(/\[is (.+)\]/, `[is ${isName.slice(9)}]`);
            }
          }
        }
        switch (type.kind) {
          case "scalar":
            if (exports.typeMapping.has(type.id)) {
              type.cast_type = exports.typeMapping.get(type.id).id;
            }
            if (type.is_seq) {
              type.cast_type = numberType.id;
            }
            if (type.name !== "std::sequence" && ((_a = type.bases[0]) === null || _a === void 0 ? void 0 : _a.id) === type.material_id) {
              type.cast_type = (_c = (_b = exports.typeMapping.get(type.material_id)) === null || _b === void 0 ? void 0 : _b.id) !== null && _c !== void 0 ? _c : type.material_id;
            }
            break;
          case "range":
            type.range_element_id = (_e = (_d = exports.typeMapping.get(type.range_element_id)) === null || _d === void 0 ? void 0 : _d.id) !== null && _e !== void 0 ? _e : type.range_element_id;
            break;
          case "object":
            const ptrs = {};
            for (const ptr of type.pointers) {
              ptrs[ptr.name] = ptr;
            }
            const rawExclusives = type.exclusives;
            const exclusives = [];
            for (const ex of rawExclusives) {
              const target = ex.target;
              if (target in ptrs) {
                exclusives.push({ [ex.target]: ptrs[ex.target] });
              }
              if (target[0] === "(" && target[target.length - 1] === ")") {
                const targets = target.slice(1, -1).split(" ").map((t) => {
                  t = t.trim();
                  if (t[0] === ".")
                    t = t.slice(1);
                  if (t[t.length - 1] === ",")
                    t = t.slice(0, -1);
                  return t;
                });
                const newEx = {};
                if (!targets.every((t) => t in ptrs)) {
                  continue;
                }
                for (const t of targets) {
                  newEx[t] = ptrs[t];
                }
                exclusives.push(newEx);
              }
            }
            type.exclusives = exclusives;
            break;
        }
      }
      _types.push(numberType);
      const types = topoSort(_types);
      for (const [_, type] of types) {
        if (type.kind === "object" && type.union_of.length) {
          const unionTypes = type.union_of.map(({ id }) => {
            const t = types.get(id);
            if (t.kind !== "object") {
              throw new Error(`type '${t.name}' of union '${type.name}' is not an object type`);
            }
            return t;
          });
          const [first, ...rest] = unionTypes;
          const restPointerNames = rest.map((t) => new Set(t.pointers.map((p) => p.name)));
          for (const pointer of first.pointers) {
            if (restPointerNames.every((names) => names.has(pointer.name))) {
              type.pointers.push(pointer);
            }
          }
          type.backlinks = [];
          type.backlink_stubs = [];
        }
      }
      return types;
    }
    exports.getTypes = getTypes;
    exports.types = getTypes;
    function topoSort(types) {
      const graph = new strictMap_1.StrictMap();
      const adj = new strictMap_1.StrictMap();
      for (const type of types) {
        graph.set(type.id, type);
      }
      for (const type of types) {
        if (type.kind !== "object" && type.kind !== "scalar") {
          continue;
        }
        for (const { id: base } of type.bases) {
          if (!graph.has(base)) {
            throw new Error(`reference to an unknown object type: ${base}`);
          }
          if (!adj.has(type.id)) {
            adj.set(type.id, /* @__PURE__ */ new Set());
          }
          adj.get(type.id).add(base);
        }
      }
      const visiting = /* @__PURE__ */ new Set();
      const visited = /* @__PURE__ */ new Set();
      const sorted = new strictMap_1.StrictMap();
      const visit = (type) => {
        if (visiting.has(type.name)) {
          const last = Array.from(visiting).slice(1, 2);
          throw new Error(`dependency cycle between ${type.name} and ${last}`);
        }
        if (!visited.has(type.id)) {
          visiting.add(type.name);
          if (adj.has(type.id)) {
            for (const adjId of adj.get(type.id).values()) {
              visit(graph.get(adjId));
            }
          }
          sorted.set(type.id, type);
          visited.add(type.id);
          visiting.delete(type.name);
        }
      };
      for (const type of types) {
        visit(type);
      }
      return sorted;
    }
    exports.topoSort = topoSort;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/casts.js
var require_casts = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/casts.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.casts = void 0;
    var types_1 = require_types();
    var reachableFrom = (source, adj, seen = /* @__PURE__ */ new Set()) => {
      const reachable = /* @__PURE__ */ new Set();
      if (seen.has(source))
        return [];
      seen.add(source);
      (adj[source] || []).map((cast) => {
        reachable.add(cast);
        for (const item of reachableFrom(cast, adj, seen)) {
          reachable.add(item);
        }
      });
      return [...reachable];
    };
    var casts = async (cxn, params) => {
      var _a, _b, _c, _d;
      var _e, _f, _g, _h;
      const allCastsRaw = await cxn.queryJSON(`WITH MODULE schema
        SELECT Cast {
            id,
            source := .from_type { id, name },
            target := .to_type { id, name },
            allow_assignment,
            allow_implicit,
        }
        FILTER .from_type IS ScalarType
        AND .to_type IS ScalarType
        # AND .from_type.is_abstract = false
        # AND .to_type.is_abstract = false
        `);
      const allCasts = JSON.parse(allCastsRaw);
      const types = /* @__PURE__ */ new Set();
      const typesById = {};
      const castsById = {};
      const castsBySource = {};
      const implicitCastsBySource = {};
      const implicitCastsByTarget = {};
      const assignmentCastsBySource = {};
      const assignmentCastsByTarget = {};
      for (const cast of allCasts) {
        if (types_1.typeMapping.has(cast.source.id) || types_1.typeMapping.has(cast.target.id)) {
          cast.allow_implicit = false;
          cast.allow_assignment = false;
        }
        typesById[cast.source.id] = cast.source;
        typesById[cast.target.id] = cast.target;
        types.add(cast.source.id);
        types.add(cast.target.id);
        castsById[cast.id] = cast;
        castsBySource[cast.source.id] = castsBySource[cast.source.id] || [];
        castsBySource[cast.source.id].push(cast.target.id);
        if (cast.allow_assignment || cast.allow_implicit) {
          (_a = assignmentCastsBySource[_e = cast.source.id]) !== null && _a !== void 0 ? _a : assignmentCastsBySource[_e] = [];
          assignmentCastsBySource[cast.source.id].push(cast.target.id);
          (_b = assignmentCastsByTarget[_f = cast.target.id]) !== null && _b !== void 0 ? _b : assignmentCastsByTarget[_f] = [];
          assignmentCastsByTarget[cast.target.id].push(cast.source.id);
        }
        if (cast.allow_implicit) {
          (_c = implicitCastsBySource[_g = cast.source.id]) !== null && _c !== void 0 ? _c : implicitCastsBySource[_g] = [];
          implicitCastsBySource[cast.source.id].push(cast.target.id);
          (_d = implicitCastsByTarget[_h = cast.target.id]) !== null && _d !== void 0 ? _d : implicitCastsByTarget[_h] = [];
          implicitCastsByTarget[cast.target.id].push(cast.source.id);
        }
      }
      const castMap = {};
      const implicitCastMap = {};
      const implicitCastFromMap = {};
      const assignmentCastMap = {};
      const assignableByMap = {};
      for (const type of [...types]) {
        castMap[type] = castsBySource[type] || [];
        implicitCastMap[type] = reachableFrom(type, implicitCastsBySource);
        implicitCastFromMap[type] = reachableFrom(type, implicitCastsByTarget);
        assignmentCastMap[type] = reachableFrom(type, assignmentCastsBySource);
        assignableByMap[type] = reachableFrom(type, assignmentCastsByTarget);
      }
      if ((params === null || params === void 0 ? void 0 : params.debug) === true) {
        console.log(`
IMPLICIT`);
        for (const [fromId, castArr] of Object.entries(implicitCastMap)) {
          console.log(`${typesById[fromId].name} implicitly castable to: [${castArr.map((id) => typesById[id].name).join(", ")}]`);
        }
        console.log("");
        for (const [fromId, castArr] of Object.entries(implicitCastFromMap)) {
          console.log(`${typesById[fromId].name} implicitly castable from: [${castArr.map((id) => typesById[id].name).join(", ")}]`);
        }
        console.log(`
ASSIGNABLE TO`);
        for (const [fromId, castArr] of Object.entries(assignmentCastMap)) {
          console.log(`${typesById[fromId].name} assignable to: [${castArr.map((id) => typesById[id].name).join(", ")}]`);
        }
        console.log(`
ASSIGNABLE BY`);
        for (const [fromId, castArr] of Object.entries(assignableByMap)) {
          console.log(`${typesById[fromId].name} assignable by: [${castArr.map((id) => typesById[id].name).join(", ")}]`);
        }
        console.log(`
EXPLICIT`);
        for (const [fromId, castArr] of Object.entries(castMap)) {
          console.log(`${typesById[fromId].name} castable to: [${castArr.map((id) => {
            return typesById[id].name;
          }).join(", ")}]`);
        }
      }
      return {
        castsById,
        typesById,
        castMap,
        implicitCastMap,
        implicitCastFromMap,
        assignmentCastMap,
        assignableByMap
      };
    };
    exports.casts = casts;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/functions.js
var require_functions = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/functions.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.replaceNumberTypes = exports.functions = void 0;
    var strictMap_1 = require_strictMap();
    var types_1 = require_types();
    var functions = async (cxn) => {
      var _a;
      const functionsJson = await cxn.queryJSON(`
    with module schema
    select Function {
      id,
      name,
      annotations: {
        name,
        @value
      } filter .name = 'std::description',
      return_type: {id, name},
      return_typemod,
      params: {
        name,
        type: {id, name},
        kind,
        typemod,
        hasDefault := exists .default,
      } order by @index,
      preserves_optionality,
    } filter .internal = false
  `);
      const functionMap = new strictMap_1.StrictMap();
      const seenFuncDefHashes = /* @__PURE__ */ new Set();
      for (const func of JSON.parse(functionsJson)) {
        const { name } = func;
        if (!functionMap.has(name)) {
          functionMap.set(name, []);
        }
        const funcDef = {
          ...func,
          description: (_a = func.annotations[0]) === null || _a === void 0 ? void 0 : _a["@value"]
        };
        replaceNumberTypes(funcDef);
        const hash = hashFuncDef(funcDef);
        if (!seenFuncDefHashes.has(hash)) {
          functionMap.get(name).push(funcDef);
          seenFuncDefHashes.add(hash);
        }
      }
      return functionMap;
    };
    exports.functions = functions;
    function replaceNumberTypes(def) {
      if (types_1.typeMapping.has(def.return_type.id)) {
        const type = types_1.typeMapping.get(def.return_type.id);
        def.return_type = {
          id: type.id,
          name: type.name
        };
      }
      for (const param of def.params) {
        if (types_1.typeMapping.has(param.type.id)) {
          const type = types_1.typeMapping.get(param.type.id);
          param.type = {
            id: type.id,
            name: type.name
          };
        }
      }
    }
    exports.replaceNumberTypes = replaceNumberTypes;
    function hashFuncDef(def) {
      return JSON.stringify({
        name: def.name,
        return_type: def.return_type.id,
        return_typemod: def.return_typemod,
        params: def.params.map((param) => JSON.stringify({
          kind: param.kind,
          type: param.type.id,
          typemod: param.typemod,
          hasDefault: !!param.hasDefault
        })).sort(),
        preserves_optionality: def.preserves_optionality
      });
    }
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/globals.js
var require_globals = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/globals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.globals = void 0;
    async function globals(cxn) {
      const globalsMap = /* @__PURE__ */ new Map();
      const version = await cxn.queryRequiredSingle(`select sys::get_version().major;`);
      if (version === 1) {
        return globalsMap;
      }
      const QUERY = `
    WITH
      MODULE schema
    SELECT schema::Global {
      id,
      name,
      target_id := .target.id,
      card := ("One" IF .required ELSE "One" IF EXISTS .default ELSE "AtMostOne")
        IF <str>.cardinality = "One" ELSE
        ("AtLeastOne" IF .required ELSE "Many"),
      has_default := exists .default,
    }
    ORDER BY .name;
  `;
      const allGlobals = JSON.parse(await cxn.queryJSON(QUERY));
      for (const g of allGlobals) {
        globalsMap.set(g.id, g);
      }
      return globalsMap;
    }
    exports.globals = globals;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/operators.js
var require_operators = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/operators.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.operators = void 0;
    var strictMap_1 = require_strictMap();
    var functions_1 = require_functions();
    var util_1 = require_util();
    var _operators = async (cxn) => {
      var _a, _b;
      const operatorsJson = await cxn.queryJSON(`
    with module schema
    select Operator {
      id,
      name,
      annotations: {
        name,
        @value
      } filter .name in {'std::identifier', 'std::description'},
      operator_kind,
      return_type: {id, name},
      return_typemod,
      params: {
        name,
        type: {id, name},
        kind,
        typemod,
      } order by @index,
    } filter not .internal and not .abstract
  `);
      const operators = new strictMap_1.StrictMap();
      const seenOpDefHashes = /* @__PURE__ */ new Set();
      for (const op of JSON.parse(operatorsJson)) {
        const identifier = (_a = op.annotations.find((anno) => anno.name === "std::identifier")) === null || _a === void 0 ? void 0 : _a["@value"];
        if (!identifier) {
          continue;
        }
        const { mod } = util_1.util.splitName(op.name);
        const name = `${mod}::${identifier}`;
        if (!operators.has(name)) {
          operators.set(name, []);
        }
        const opDef = {
          ...op,
          name,
          kind: op.operator_kind,
          originalName: op.name,
          description: (_b = op.annotations.find((anno) => anno.name === "std::description")) === null || _b === void 0 ? void 0 : _b["@value"],
          annotations: void 0
        };
        (0, functions_1.replaceNumberTypes)(opDef);
        const hash = hashOpDef(opDef);
        if (!seenOpDefHashes.has(hash)) {
          operators.get(name).push(opDef);
          seenOpDefHashes.add(hash);
        }
      }
      return operators;
    };
    exports.operators = _operators;
    function hashOpDef(def) {
      return JSON.stringify({
        name: def.name,
        return_type: def.return_type.id,
        return_typemod: def.return_typemod,
        params: def.params.map((param) => JSON.stringify({
          kind: param.kind,
          type: param.type.id,
          typemod: param.typemod,
          hasDefault: !!param.hasDefault
        })).sort(),
        operator_kind: def.operator_kind
      });
    }
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/scalars.js
var require_scalars = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries/scalars.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scalars = void 0;
    var strictMap_1 = require_strictMap();
    var _scalars = async (cxn) => {
      const scalarArray = await cxn.queryJSON(`with module schema
select InheritingObject {
  id,
  name,
  is_abstract,
  bases: { id, name },
  ancestors: { id, name },
  children := .<bases[IS Type] { id, name },
  descendants := .<ancestors[IS Type] { id, name }
}
FILTER
  InheritingObject IS ScalarType OR
  InheritingObject IS ObjectType;
`);
      const scalars = new strictMap_1.StrictMap();
      for (const type of JSON.parse(scalarArray)) {
        scalars.set(type.id, type);
      }
      return scalars;
    };
    exports.scalars = _scalars;
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries.js
var require_queries = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/queries.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require_casts(), exports);
    __exportStar(require_functions(), exports);
    __exportStar(require_globals(), exports);
    __exportStar(require_operators(), exports);
    __exportStar(require_scalars(), exports);
    __exportStar(require_types(), exports);
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/analyzeQuery.js
var require_analyzeQuery = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/analyzeQuery.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.analyzeQuery = void 0;
    var array_1 = require_array();
    var consts_1 = require_consts();
    var enum_1 = require_enum();
    var ifaces_1 = require_ifaces2();
    var namedtuple_1 = require_namedtuple();
    var object_1 = require_object();
    var range_1 = require_range2();
    var codecs_1 = require_codecs();
    var set_1 = require_set();
    var tuple_1 = require_tuple();
    var ifaces_2 = require_ifaces();
    var options_1 = require_options();
    async function analyzeQuery(client, query) {
      let parseResult;
      const pool = client.pool;
      const holder = await pool.acquireHolder(options_1.Options.defaults());
      try {
        const cxn = await holder._getConnection();
        parseResult = await cxn._parse(query, ifaces_2.OutputFormat.BINARY, ifaces_2.Cardinality.MANY, options_1.Session.defaults());
      } finally {
        await holder.release();
      }
      const cardinality = parseResult[0];
      const inCodec = parseResult[1];
      const outCodec = parseResult[2];
      const imports = /* @__PURE__ */ new Set();
      const args = walkCodec(inCodec, {
        indent: "",
        optionalNulls: true,
        imports
      });
      const result = generateSetType(walkCodec(outCodec, {
        indent: "",
        optionalNulls: false,
        imports
      }), cardinality);
      return {
        result,
        args,
        cardinality,
        query,
        imports
      };
    }
    exports.analyzeQuery = analyzeQuery;
    function generateSetType(type, cardinality) {
      switch (cardinality) {
        case ifaces_2.Cardinality.MANY:
          return `${type}[]`;
        case ifaces_2.Cardinality.ONE:
          return type;
        case ifaces_2.Cardinality.AT_MOST_ONE:
          return `${type} | null`;
        case ifaces_2.Cardinality.AT_LEAST_ONE:
          return `[(${type}), ...(${type})[]]`;
      }
      throw Error(`unexpected cardinality: ${cardinality}`);
    }
    function walkCodec(codec, ctx) {
      if (codec instanceof codecs_1.NullCodec) {
        return "null";
      }
      if (codec instanceof ifaces_1.ScalarCodec) {
        if (codec instanceof enum_1.EnumCodec) {
          return `(${codec.values.map((val) => JSON.stringify(val)).join(" | ")})`;
        }
        if (codec.importedType) {
          ctx.imports.add(codec.tsType);
        }
        return codec.tsType;
      }
      if (codec instanceof object_1.ObjectCodec || codec instanceof namedtuple_1.NamedTupleCodec) {
        const fields = codec instanceof object_1.ObjectCodec ? codec.getFields() : codec.getNames().map((name) => ({ name, cardinality: consts_1.ONE }));
        const subCodecs = codec.getSubcodecs();
        return `{
${fields.map((field, i) => {
          let subCodec = subCodecs[i];
          if (subCodec instanceof set_1.SetCodec) {
            if (!(field.cardinality === consts_1.MANY || field.cardinality === consts_1.AT_LEAST_ONE)) {
              throw Error("subcodec is SetCodec, but upper cardinality is one");
            }
            subCodec = subCodec.getSubcodecs()[0];
          }
          return `${ctx.indent}  ${JSON.stringify(field.name)}${ctx.optionalNulls && field.cardinality === consts_1.AT_MOST_ONE ? "?" : ""}: ${generateSetType(walkCodec(subCodec, { ...ctx, indent: ctx.indent + "  " }), field.cardinality)};`;
        }).join("\n")}
${ctx.indent}}`;
      }
      if (codec instanceof array_1.ArrayCodec) {
        return `${walkCodec(codec.getSubcodecs()[0], ctx)}[]`;
      }
      if (codec instanceof tuple_1.TupleCodec) {
        return `[${codec.getSubcodecs().map((subCodec) => walkCodec(subCodec, ctx)).join(", ")}]`;
      }
      if (codec instanceof range_1.RangeCodec) {
        const subCodec = codec.getSubcodecs()[0];
        if (!(subCodec instanceof ifaces_1.ScalarCodec)) {
          throw Error("expected range subtype to be scalar type");
        }
        ctx.imports.add("Range");
        return `Range<${subCodec.tsType}>`;
      }
      throw Error(`Unexpected codec kind: ${codec.getKind()}`);
    }
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/index.js
var require_reflection = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/reflection/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.introspect = void 0;
    __exportStar(require_enums(), exports);
    __exportStar(require_util(), exports);
    __exportStar(require_typeutil(), exports);
    __exportStar(require_util(), exports);
    __exportStar(require_strictMap(), exports);
    __exportStar(require_reservedKeywords(), exports);
    exports.introspect = __importStar(require_queries());
    __exportStar(require_analyzeQuery(), exports);
  }
});

// node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/index.node.js
var require_index_node = __commonJS({
  "node_modules/.pnpm/edgedb@1.3.4/node_modules/edgedb/dist/index.node.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      var desc = Object.getOwnPropertyDescriptor(m, k);
      if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function() {
          return m[k];
        } };
      }
      Object.defineProperty(o, k2, desc);
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __setModuleDefault = exports && exports.__setModuleDefault || (Object.create ? function(o, v) {
      Object.defineProperty(o, "default", { enumerable: true, value: v });
    } : function(o, v) {
      o["default"] = v;
    });
    var __importStar = exports && exports.__importStar || function(mod) {
      if (mod && mod.__esModule)
        return mod;
      var result = {};
      if (mod != null) {
        for (var k in mod)
          if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
            __createBinding(result, mod, k);
      }
      __setModuleDefault(result, mod);
      return result;
    };
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.$ = exports.defaultBackoff = exports.Session = exports.RetryOptions = exports.RetryCondition = exports.IsolationLevel = exports._RawConnection = exports.adapter = exports.createHttpClient = exports.createClient = void 0;
    var nodeClient_1 = require_nodeClient();
    exports.default = nodeClient_1.createClient;
    var nodeClient_2 = require_nodeClient();
    Object.defineProperty(exports, "createClient", { enumerable: true, get: function() {
      return nodeClient_2.createClient;
    } });
    Object.defineProperty(exports, "createHttpClient", { enumerable: true, get: function() {
      return nodeClient_2.createHttpClient;
    } });
    var adapter = __importStar(require_adapter_node());
    exports.adapter = adapter;
    var rawConn_1 = require_rawConn();
    Object.defineProperty(exports, "_RawConnection", { enumerable: true, get: function() {
      return rawConn_1.RawConnection;
    } });
    var options_1 = require_options();
    Object.defineProperty(exports, "IsolationLevel", { enumerable: true, get: function() {
      return options_1.IsolationLevel;
    } });
    Object.defineProperty(exports, "RetryCondition", { enumerable: true, get: function() {
      return options_1.RetryCondition;
    } });
    Object.defineProperty(exports, "RetryOptions", { enumerable: true, get: function() {
      return options_1.RetryOptions;
    } });
    Object.defineProperty(exports, "Session", { enumerable: true, get: function() {
      return options_1.Session;
    } });
    var options_2 = require_options();
    Object.defineProperty(exports, "defaultBackoff", { enumerable: true, get: function() {
      return options_2.defaultBackoff;
    } });
    __exportStar(require_index_shared(), exports);
    exports.$ = __importStar(require_reflection());
  }
});

// src/crud-service.ts
var import_edgedb = __toESM(require_index_node(), 1);
var import_edgedb2 = __toESM(require_index_node(), 1);
var CRUDService = class {
  constructor(config) {
    this.config = config;
    this.create = async (data) => {
      return await this.client.transaction(async (tx) => {
        const { id: newId } = await this.e.insert(this.eType, data).run(tx);
        return await this.e.select(this.eType, () => ({
          ...this.eFields,
          filter_single: {
            id: newId
          }
        })).run(tx);
      });
    };
    this.updateById = async (id, data) => {
      const query = this.e.update(this.eType, () => ({
        set: data,
        filter_single: {
          id
        }
      }));
      return await query.run(this.client);
    };
    this.findAll = async () => {
      const query = this.e.select(this.eType, () => ({
        ...this.eFields
      }));
      return await query.run(this.client);
    };
    this.findById = async (id) => {
      const query = this.e.select(this.eType, () => ({
        ...this.eFields,
        filter_single: {
          id
        }
      }));
      return await query.run(this.client);
    };
    this.deleteById = async (id) => {
      const query = this.e.delete(this.eType, () => ({
        filter_single: {
          id
        }
      }));
      return await query.run(this.client);
    };
    this.findByField = async (field, value) => {
      const query = this.e.select(this.eType, (obj) => ({
        ...this.eFields,
        filter_single: this.e.op(obj[field], "=", this.e.uuid(value))
      }));
      return await query.run(this.client);
    };
    this.findAllByField = async (field, value) => {
      const query = this.e.select(this.eType, (obj) => ({
        ...this.eFields,
        filter: this.e.op(obj[field], "=", this.e.uuid(value))
      }));
      return await query.run(this.client);
    };
    this.findByFields = async (fields) => {
      const query = this.e.select(this.eType, () => ({
        ...this.eFields,
        filter_single: fields
      }));
      return await query.run(this.client);
    };
    if (config.client) {
      if (!("options" in config.client)) {
        this.client = (0, import_edgedb.default)(config.client);
      }
      this.client = this.client.withConfig({
        session_idle_transaction_timeout: import_edgedb.Duration.from({ seconds: 10 }),
        allow_bare_ddl: "AlwaysAllow"
      }).withRetryOptions({
        attempts: 3,
        backoff: (attemptNo) => {
          return 2 ** attemptNo * 100 + Math.random() * 100;
        }
      });
    }
    this.e = this.config.edgedb;
    this.typeName = this.config.type;
    this.eType = this.e[this.typeName];
    this.eFields = this.eType["*"];
  }
};
var export_createClient = import_edgedb2.createClient;
export {
  CRUDService,
  export_createClient as createClient
};
/*! Bundled license information:

edgedb/dist/primitives/chars.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/compat.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/ifaces.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2020-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/primitives/buffer.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/errors/index.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/primitives/lru.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/consts.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/ifaces.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/boolean.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/numbers.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/numerics.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/text.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/uuid.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/bytes.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/json.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/datatypes/dateutil.js:
  (*!
   * Portions Copyright (c) 2019 MagicStack Inc. and the EdgeDB authors.
   * Portions Copyright (c) 2001-2019 Python Software Foundation.
   * All rights reserved.
   * Licence: PSFL https://docs.python.org/3/license.html
   *)

edgedb/dist/datatypes/datetime.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/datetime.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/datatypes/memory.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/memory.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/pgvector.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/codecs.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/tuple.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/datatypes/range.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/range.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/namedtuple.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/array.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/enum.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/object.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/set.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/utils.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2020-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/sparseObject.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/codecs/registry.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/primitives/event.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2021-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/primitives/queues.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2020-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/retry.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/baseClient.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2020-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/conUtils.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/errors/map.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/errors/resolve.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/baseConn.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/scram.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/fetchConn.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2022-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/rawConn.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/index.shared.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/reflection/strictMap.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2020-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/reflection/index.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2020-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)

edgedb/dist/index.node.js:
  (*!
   * This source file is part of the EdgeDB open source project.
   *
   * Copyright 2019-present MagicStack Inc. and the EdgeDB authors.
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   *)
*/
