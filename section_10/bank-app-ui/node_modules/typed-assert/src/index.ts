const expectedToBe = (type: string): string => `expected to be ${type}`;

export type WeakAssert = (input: unknown, message?: string) => void;

export type SubType<Input, Output> = Output extends Input ? Output : never;

export type Assert<Input = unknown, Output = Input> = (
  input: Input,
  message?: string,
) => asserts input is SubType<Input, Output>;

export type Check<Input = unknown, Output = Input> = (
  input: Input,
) => input is SubType<Input, Output>;

export const defaultAssert: WeakAssert = (condition, message) => {
  if (!condition) {
    throw new TypeError(message);
  }
};

let baseAssert = defaultAssert;

export const assert: Assert<boolean, true> = (condition, message) =>
  baseAssert(condition, message);

export function setBaseAssert(assert?: WeakAssert): void {
  if (assert) {
    baseAssert = assert;
  }
}

export const safeJsonParse = (json: string): unknown =>
  JSON.parse(json) as unknown;

export function isUnknown(_input: unknown): _input is unknown {
  return true;
}

export function isNever(
  _input: never,
  message: string = expectedToBe("unreachable"),
): never {
  throw new TypeError(message)
}

export function isNotNull<T>(
  input: null | T,
  message: string = expectedToBe("not null"),
): asserts input is T {
  assert(input !== null, message);
}

export function isNotUndefined<T>(
  input: undefined | T,
  message: string = expectedToBe("not undefined"),
): asserts input is T {
  assert(input !== undefined, message);
}

export function isNotVoid<T>(
  input: T,
  message: string = expectedToBe("neither null nor undefined"),
): asserts input is Exclude<T, undefined | null | void> {
  assert(input !== null && input !== undefined, message);
}

export function isExactly<Input, Output>(
  input: Input,
  value: Output,
  message = expectedToBe(`exactly ${value}`),
): asserts input is SubType<Input, Output> {
  assert((input as unknown) === (value as unknown), message);
}

export function isBoolean(
  input: unknown,
  message: string = expectedToBe("a boolean"),
): asserts input is boolean {
  assert(typeof input === "boolean", message);
}

export function isNumber(
  input: unknown,
  message: string = expectedToBe("a number"),
): asserts input is number {
  assert(typeof input === "number", message);
}

export function isString(
  input: unknown,
  message: string = expectedToBe("a string"),
): asserts input is string {
  assert(typeof input === "string", message);
}

export function isDate(
  input: unknown,
  message: string = expectedToBe("a Date"),
): asserts input is Date {
  assert(input instanceof Date, message);
}

export function isRecord(
  input: unknown,
  message: string = expectedToBe("a record"),
): asserts input is Record<string, unknown> {
  assert(typeof input === "object", message);
  isNotNull(input, message);
  for (const key of Object.keys(input as Record<string, unknown>)) {
    isString(key, message);
  }
}

export function isRecordWithKeys<K extends string>(
  input: unknown,
  keys: K[],
  message = expectedToBe(`a record with keys ${keys.join(", ")}`),
): asserts input is {
  readonly [Key in K]: unknown;
} {
  isRecord(input, message);
  for (const key of keys) {
    isNotUndefined(input[key]);
  }
}

export function isArray(
  input: unknown,
  message: string = expectedToBe("an array"),
): asserts input is unknown[] {
  assert(Array.isArray(input), message);
}

export function isRecordOfType<T>(
  input: unknown,
  assertT: Assert<unknown, T>,
  message = expectedToBe("a record of given type"),
  itemMessage = expectedToBe("of given type"),
): asserts input is Record<string, T> {
  isRecord(input, message);
  for (const item of Object.values(input)) {
    assertT(item, itemMessage);
  }
}

export function isArrayOfType<T>(
  input: unknown,
  assertT: Assert<unknown, T>,
  message = expectedToBe("an array of given type"),
  itemMessage = expectedToBe("of given type"),
): asserts input is T[] {
  isArray(input, message);
  for (const item of input) {
    assertT(item, itemMessage);
  }
}

export function isOptionOfType<Input, Output>(
  input: Input | undefined,
  assertT: Assert<Input, Output>,
  message = expectedToBe("option of given type"),
): asserts input is SubType<Input, Output | undefined> {
  if (input === undefined) {
    return;
  }
  assertT(input, message);
}

export function isOneOf<Input, Output>(
  input: Input,
  values: readonly Output[],
  message: string = expectedToBe(`one of ${values.join(", ")}`),
): asserts input is SubType<Input, Output> {
  assert(values.includes(input as SubType<Input, Output>), message);
}

export function isOneOfType<T>(
  input: unknown,
  assertT: Assert<unknown, T>[],
  message: string = expectedToBe(`one of type`),
  itemMessage?: string,
): asserts input is T {
  for (const assert of assertT) {
    try {
      (assert as WeakAssert)(input as T, itemMessage);
      return;
    } catch (_) {}
  }
  throw new TypeError(message);
}

export function isInstanceOf<T>(
  input: unknown,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  constructor: new (...args: any[]) => T,
  message = expectedToBe("an instance of given constructor"),
): asserts input is T {
  assert(input instanceof constructor, message);
}

export function isPromise(
  input: unknown,
  message = expectedToBe("a promise"),
): asserts input is Promise<unknown> {
  isInstanceOf(input, Promise, message);
}

export function check<Input, Output>(
  assertT: Assert<Input, Output>,
): Check<Input, Output> {
  return (input: Input): input is SubType<Input, Output> => {
    try {
      assertT(input);
      return true;
    } catch (_) {
      return false;
    }
  };
}
