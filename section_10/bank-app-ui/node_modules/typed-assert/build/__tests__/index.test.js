"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const assert_1 = (0, tslib_1.__importDefault)(require("assert"));
const t = (0, tslib_1.__importStar)(require(".."));
class C {
}
const fixtures = {
    null: null,
    undefined: undefined,
    string: "",
    number: 0,
    boolean: true,
    date: new Date(),
    promise: Promise.resolve(null),
    record: {},
    array: [],
    recordWithKeys: {
        a: {
            b: {
                c: "d",
            },
            e: null,
        },
        f: "g",
    },
    recordOfStrings: {
        a: "",
        b: "",
    },
    recordOfNumbers: {
        a: 0,
        b: 1,
    },
    strings: ["a", "b", "c"],
    numbers: [0, 1, 2],
    c: new C(),
};
const entries = Object.entries(fixtures);
const orNull = (t) => t;
const orUndefined = (t) => t;
const baseAsserts = [
    ["default", t.defaultAssert],
    ["node", assert_1.default],
];
describe("typed-assert", () => {
    for (const [label, baseAssert] of baseAsserts) {
        describe(label, () => {
            t.setBaseAssert(baseAssert);
            test("isUnknown", () => {
                for (const value of Object.values(fixtures)) {
                    expect(() => t.isUnknown(value)).not.toThrow();
                }
            });
            test("isNever", () => {
                expect(() => {
                    const value = "a";
                    switch (value) {
                        case "a":
                        case "b":
                            return;
                    }
                    t.isNever(value);
                }).not.toThrow();
            });
            test("isNotNull", () => {
                const v = orNull(fixtures.string);
                t.isNotNull(v);
                // v is "string"
                for (const [key, value] of entries) {
                    if (key === "null") {
                        expect(() => t.isNotNull(value)).toThrow();
                    }
                    else {
                        expect(() => t.isNotNull(value)).not.toThrow();
                    }
                }
            });
            test("isNotUndefined", () => {
                const v = orUndefined(fixtures.string);
                t.isNotUndefined(v);
                // v is "string"
                for (const [key, value] of entries) {
                    if (key === "undefined") {
                        expect(() => t.isNotUndefined(value)).toThrow();
                    }
                    else {
                        expect(() => t.isNotUndefined(value)).not.toThrow();
                    }
                }
            });
            test("isNotVoid", () => {
                const v = orNull(orUndefined(fixtures.string));
                t.isNotVoid(v);
                // v is "string"
                for (const [key, value] of entries) {
                    if (key === "null" || key === "undefined") {
                        expect(() => t.isNotVoid(value)).toThrow();
                    }
                    else {
                        expect(() => t.isNotVoid(value)).not.toThrow();
                    }
                }
            });
            test("isExactly", () => {
                const v = orUndefined("value");
                t.isExactly(v, "value");
                // v is "value"
                for (const [, value] of entries) {
                    expect(() => t.isExactly(value, value)).not.toThrow();
                    for (const [, otherValue] of entries) {
                        if (otherValue !== value) {
                            expect(() => t.isExactly(value, otherValue)).toThrow();
                            expect(() => t.isExactly(otherValue, value)).toThrow();
                        }
                    }
                }
            });
            test("isBoolean", () => {
                const v = orNull(fixtures.boolean);
                t.isBoolean(v);
                // v is "boolean"
                for (const [key, value] of entries) {
                    if (key === "boolean") {
                        expect(() => t.isBoolean(value)).not.toThrow();
                    }
                    else {
                        expect(() => t.isBoolean(value)).toThrow();
                    }
                }
            });
            test("isNumber", () => {
                const v = orNull(fixtures.number);
                t.isNumber(v);
                // v is "number"
                for (const [key, value] of entries) {
                    if (key === "string") {
                        expect(() => t.isString(value)).not.toThrow();
                    }
                    else {
                        expect(() => t.isString(value)).toThrow();
                    }
                }
            });
            test("isString", () => {
                const v = orNull(fixtures.string);
                t.isString(v);
                // v is "string"
                for (const [key, value] of entries) {
                    if (key === "string") {
                        expect(() => t.isString(value)).not.toThrow();
                    }
                    else {
                        expect(() => t.isString(value)).toThrow();
                    }
                }
            });
            test("isDate", () => {
                const v = orNull(fixtures.date);
                t.isDate(v);
                // v is "Date"
                for (const [key, value] of entries) {
                    if (key === "date") {
                        expect(() => t.isDate(value)).not.toThrow();
                    }
                    else {
                        expect(() => t.isDate(value)).toThrow();
                    }
                }
            });
            test("isPromise", () => {
                const v = orNull(fixtures.promise);
                t.isPromise(v);
                // v is "Promise<null>"
                for (const [key, value] of entries) {
                    if (key === "promise") {
                        expect(() => t.isPromise(value)).not.toThrow();
                    }
                    else {
                        expect(() => t.isPromise(value)).toThrow();
                    }
                }
            });
            test("isRecord", () => {
                const v = orNull(fixtures.record);
                t.isRecord(v);
                // v is "Record<string, unkown>"
                for (const [key, value] of entries) {
                    if ([
                        "record",
                        "recordOfStrings",
                        "recordOfNumbers",
                        "recordWithKeys",
                        "date",
                        "promise",
                        "array",
                        "strings",
                        "numbers",
                        "c",
                    ].includes(key)) {
                        expect(() => t.isRecord(value)).not.toThrow();
                    }
                    else {
                        expect(() => t.isRecord(value)).toThrow();
                    }
                }
            });
            test("isArray", () => {
                const v = orNull(fixtures.array);
                t.isArray(v);
                // v is unknown[]
                for (const [key, value] of entries) {
                    if (["array", "strings", "numbers"].includes(key)) {
                        expect(() => t.isArray(value)).not.toThrow();
                    }
                    else {
                        expect(() => t.isArray(value)).toThrow();
                    }
                }
            });
            test("isRecordWithKeys", () => {
                const keys = Object.keys(fixtures.recordWithKeys);
                const v = orNull(fixtures.recordWithKeys);
                t.isRecordWithKeys(v, keys);
                // v is typeof fixtures.recordWithKeys
                for (const [key, value] of entries) {
                    if (key === "recordWithKeys") {
                        expect(() => t.isRecordWithKeys(value, keys)).not.toThrow();
                    }
                    else {
                        expect(() => t.isRecordWithKeys(value, keys)).toThrow();
                    }
                }
                expect(() => t.isRecordWithKeys(fixtures.recordWithKeys, ["a"])).not.toThrow();
                expect(() => t.isRecordWithKeys(fixtures.recordWithKeys, ["b"])).toThrow();
                expect(() => t.isRecordWithKeys(fixtures.recordWithKeys, ["f"])).not.toThrow();
                expect(() => t.isRecordWithKeys(fixtures.recordWithKeys.a, ["b", "e"])).not.toThrow();
                expect(() => t.isRecordWithKeys(fixtures.recordWithKeys, ["a", "b"])).toThrow();
            });
            test("isRecordOfType", () => {
                const v = orNull(fixtures.recordOfNumbers);
                t.isRecordOfType(v, t.isNumber);
                // v is Record<string, number>
                for (const [key, value] of entries) {
                    if ([
                        "record",
                        "recordOfNumbers",
                        "array",
                        "numbers",
                        "date",
                        "promise",
                        "c",
                    ].includes(key)) {
                        expect(() => t.isRecordOfType(value, t.isNumber)).not.toThrow();
                    }
                    else {
                        expect(() => t.isRecordOfType(value, t.isNumber)).toThrow();
                    }
                }
            });
            test("isArrayOfType", () => {
                const v = orNull(fixtures.numbers);
                t.isArrayOfType(v, t.isNumber);
                // v is number[]
                for (const [key, value] of entries) {
                    if (["array", "numbers"].includes(key)) {
                        expect(() => t.isArrayOfType(value, t.isNumber)).not.toThrow();
                    }
                    else {
                        expect(() => t.isArrayOfType(value, t.isNumber)).toThrow();
                    }
                }
            });
            test("isOptionOfType", () => {
                const v = orNull(fixtures.number);
                t.isOptionOfType(v, t.isNumber);
                // v is "number"
                for (const [key, value] of entries) {
                    if (["undefined", "number"].includes(key)) {
                        expect(() => t.isOptionOfType(value, t.isNumber)).not.toThrow();
                    }
                    else {
                        expect(() => t.isOptionOfType(value, t.isNumber)).toThrow();
                    }
                }
            });
            test("isOneOf", () => {
                const v = orNull("a");
                t.isOneOf(v, ["a", "b"]);
                // v is "a"
                for (const [key, value] of entries) {
                    if (key === "number") {
                        expect(() => t.isOneOf(value, [fixtures.number, fixtures.number + 1])).not.toThrow();
                    }
                    else {
                        expect(() => t.isOneOf(value, [fixtures.number, fixtures.number + 1])).toThrow();
                    }
                }
            });
            test("isOneOfType", () => {
                const v = orNull(fixtures.string);
                t.isOneOfType(v, [t.isString, t.isNumber]);
                // v is "string"
                for (const [key, value] of entries) {
                    if (["string", "number"].includes(key)) {
                        expect(() => t.isOneOfType(value, [t.isString, t.isNumber])).not.toThrow();
                    }
                    else {
                        expect(() => t.isOneOfType(value, [t.isString, t.isNumber])).toThrow();
                    }
                }
            });
            test("isInstanceOf", () => {
                const v = orNull(fixtures.date);
                t.isInstanceOf(v, Date);
                // v is Date
                for (const [key, value] of entries) {
                    if (key === "c") {
                        expect(() => t.isInstanceOf(value, C)).not.toThrow();
                    }
                    else {
                        expect(() => t.isInstanceOf(value, C)).toThrow();
                    }
                }
            });
            test("safeJsonParse", () => {
                const input = {
                    a: {
                        b: {
                            c: "d",
                        },
                        e: null,
                    },
                    f: "g",
                };
                function assertIsInput(input) {
                    t.isRecordWithKeys(input, ["a", "f"]);
                    t.isRecordWithKeys(input.a, ["b", "e"]);
                    t.isRecordWithKeys(input.a.b, ["c"]);
                    t.isExactly(input.a.b.c, "d");
                    t.isExactly(input.a.e, null);
                    t.isExactly(input.f, "g");
                }
                const json = JSON.stringify(input);
                const output = t.safeJsonParse(json);
                assertIsInput(output);
                const typedOutput = output;
                expect(typedOutput).toEqual(input);
            });
            test("check filter", () => {
                const a = entries
                    .map(([, value]) => value)
                    .filter(t.check(t.isNumber))
                    .map((value) => (value % 0 === 0 ? value : null))
                    .filter(t.check(t.isNotNull));
                for (const item of a) {
                    expect(() => t.isNumber(item)).not.toThrow();
                }
            });
        });
    }
});
//# sourceMappingURL=index.test.js.map