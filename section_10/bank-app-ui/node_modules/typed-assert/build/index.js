"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = exports.isPromise = exports.isInstanceOf = exports.isOneOfType = exports.isOneOf = exports.isOptionOfType = exports.isArrayOfType = exports.isRecordOfType = exports.isArray = exports.isRecordWithKeys = exports.isRecord = exports.isDate = exports.isString = exports.isNumber = exports.isBoolean = exports.isExactly = exports.isNotVoid = exports.isNotUndefined = exports.isNotNull = exports.isNever = exports.isUnknown = exports.safeJsonParse = exports.setBaseAssert = exports.assert = exports.defaultAssert = void 0;
const expectedToBe = (type) => `expected to be ${type}`;
const defaultAssert = (condition, message) => {
    if (!condition) {
        throw new TypeError(message);
    }
};
exports.defaultAssert = defaultAssert;
let baseAssert = exports.defaultAssert;
const assert = (condition, message) => baseAssert(condition, message);
exports.assert = assert;
function setBaseAssert(assert) {
    if (assert) {
        baseAssert = assert;
    }
}
exports.setBaseAssert = setBaseAssert;
const safeJsonParse = (json) => JSON.parse(json);
exports.safeJsonParse = safeJsonParse;
function isUnknown(_input) {
    return true;
}
exports.isUnknown = isUnknown;
function isNever(_input, message = expectedToBe("unreachable")) {
    throw new TypeError(message);
}
exports.isNever = isNever;
function isNotNull(input, message = expectedToBe("not null")) {
    (0, exports.assert)(input !== null, message);
}
exports.isNotNull = isNotNull;
function isNotUndefined(input, message = expectedToBe("not undefined")) {
    (0, exports.assert)(input !== undefined, message);
}
exports.isNotUndefined = isNotUndefined;
function isNotVoid(input, message = expectedToBe("neither null nor undefined")) {
    (0, exports.assert)(input !== null && input !== undefined, message);
}
exports.isNotVoid = isNotVoid;
function isExactly(input, value, message = expectedToBe(`exactly ${value}`)) {
    (0, exports.assert)(input === value, message);
}
exports.isExactly = isExactly;
function isBoolean(input, message = expectedToBe("a boolean")) {
    (0, exports.assert)(typeof input === "boolean", message);
}
exports.isBoolean = isBoolean;
function isNumber(input, message = expectedToBe("a number")) {
    (0, exports.assert)(typeof input === "number", message);
}
exports.isNumber = isNumber;
function isString(input, message = expectedToBe("a string")) {
    (0, exports.assert)(typeof input === "string", message);
}
exports.isString = isString;
function isDate(input, message = expectedToBe("a Date")) {
    (0, exports.assert)(input instanceof Date, message);
}
exports.isDate = isDate;
function isRecord(input, message = expectedToBe("a record")) {
    (0, exports.assert)(typeof input === "object", message);
    isNotNull(input, message);
    for (const key of Object.keys(input)) {
        isString(key, message);
    }
}
exports.isRecord = isRecord;
function isRecordWithKeys(input, keys, message = expectedToBe(`a record with keys ${keys.join(", ")}`)) {
    isRecord(input, message);
    for (const key of keys) {
        isNotUndefined(input[key]);
    }
}
exports.isRecordWithKeys = isRecordWithKeys;
function isArray(input, message = expectedToBe("an array")) {
    (0, exports.assert)(Array.isArray(input), message);
}
exports.isArray = isArray;
function isRecordOfType(input, assertT, message = expectedToBe("a record of given type"), itemMessage = expectedToBe("of given type")) {
    isRecord(input, message);
    for (const item of Object.values(input)) {
        assertT(item, itemMessage);
    }
}
exports.isRecordOfType = isRecordOfType;
function isArrayOfType(input, assertT, message = expectedToBe("an array of given type"), itemMessage = expectedToBe("of given type")) {
    isArray(input, message);
    for (const item of input) {
        assertT(item, itemMessage);
    }
}
exports.isArrayOfType = isArrayOfType;
function isOptionOfType(input, assertT, message = expectedToBe("option of given type")) {
    if (input === undefined) {
        return;
    }
    assertT(input, message);
}
exports.isOptionOfType = isOptionOfType;
function isOneOf(input, values, message = expectedToBe(`one of ${values.join(", ")}`)) {
    (0, exports.assert)(values.includes(input), message);
}
exports.isOneOf = isOneOf;
function isOneOfType(input, assertT, message = expectedToBe(`one of type`), itemMessage) {
    for (const assert of assertT) {
        try {
            assert(input, itemMessage);
            return;
        }
        catch (_) { }
    }
    throw new TypeError(message);
}
exports.isOneOfType = isOneOfType;
function isInstanceOf(input, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
constructor, message = expectedToBe("an instance of given constructor")) {
    (0, exports.assert)(input instanceof constructor, message);
}
exports.isInstanceOf = isInstanceOf;
function isPromise(input, message = expectedToBe("a promise")) {
    isInstanceOf(input, Promise, message);
}
exports.isPromise = isPromise;
function check(assertT) {
    return (input) => {
        try {
            assertT(input);
            return true;
        }
        catch (_) {
            return false;
        }
    };
}
exports.check = check;
//# sourceMappingURL=index.js.map