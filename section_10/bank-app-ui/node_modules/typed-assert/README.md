# `typed-assert`

`typed-assert` is a typesafe assertion library implementing the [TS 3.7 Assertion Functions](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) API, without external dependencies.

See the [documentation](API.md).

### Consider using [`zod`](https://github.com/colinhacks/zod)

While this library does a fine job for most simple use cases, please consider using [`zod`](https://github.com/colinhacks/zod) if you need more complex assertions.

### Install

```npm install typed-assert```

or

```yarn add typed-assert```

### Why is it useful?

`typed-assert` promotes using `unknown` instead of `any` for "untrusted" values, e.g. user input, while still benefiting from incremental typing.

For example, `JSON.stringify` returns `any`, which is not typesafe. With `typed-assert`, we can instead treat the result as `unknown` and gradually check the contents at runtime and still get correct type inference:

```ts
import * as t from "typed-assert";

const parseConfigFile = (file: string): { readonly a: string, readonly b: number } => {
  const contents = JSON.parse(fs.readFileSync(file, { encoding: 'utf8'})) as unknown;
  // contents is "unknown" instead of any, because we don't trust the input yet
  t.isRecord(contents);
  // contents is "Record<string, unknown>"
  t.isString(contents.a);
  // contents.a is "string"
  t.isNumber(contents.b):
  // contents.b is "number";
  return {
    a: contents.a,
    b: contents.b,
  }; // correctly typed
}
```

### How is it different from chai, jest.expect, etc?

`typed-assert` is both a compile-time and runtime assert library. It leverages the `assertion function` feature of TypeScript to help the typechecker narrow the inferred types. In many cases, this significantly reduces the need to use `any`, and promotes using `unknown` instead.

For example:

```ts
const u: unknown = {
  a: "value",
  b: 12,
};

chai.assert.typeOf(u, "object");
// u is still "unknown"
chai.assert.isNotNull(u);
// u is still "unknown"
chai.assert.typeof(u.a, "string");
// TS Error (ts2571): u is "unknown"

import * as t from "typed-assert";

t.isRecord(u);
// u is Record<string, unknown>
t.isString(u.a);
// u.a is string
t.isNumber(u.b);
// u.b is number

const v: { a: string; b: number } = u;
// no need to us `as ...`
```

### Usage

`typed-assert` comes with a set of common assertions, as well as assertion combinators and utilities.

See [the documentation](./API.md) for a full reference.

```ts
import * as t from "typed-assert";

// Base asserts
t.isExactly("a", "a");
t.isNotUndefined(null);
t.isNotNull(undefined);

// Asserts combinators
t.isOneOf("b", ["a", "b", "c"]);
t.isArrayOf([2, 3, 4], t.isNumber);

// Custom composite checks
interface ICustomType {
  readonly a: {
    readonly b: "c";
    readonly d: string;
  };
  readonly f?: number;
}

function assertCustomType(input: unknown): asserts input is ICustomType {
  t.isRecordWithKeys(input, ["a", "f"]);
  t.isRecordWithKeys(input.a, ["b", "d"]);
  t.isExactly(input.a.b, "c");
  t.isString(input.a.d);
  t.isOption(input.f, t.isNumber);
}

const v = {
  a: {
    b: "c",
    d: "",
  },
};
assertCustomType(v);
```

This library also comes with a combinator to transform an assertion functions into a [type guard function](https://www.typescriptlang.org/docs/handbook/advanced-types.html#user-defined-type-guards):
```ts
const checkNumber = t.check(t.isNumber);
checkNumber(1) === true;
checkNumber("") === false;
```

It is especially convenient when combined with functional operations such as `Array#filter`:
```ts
const t = ["a", 3, "c", 4, null, 2]
  .filter(t.check(t.isNumber))
  .map(x => x % 2 === 0 ? x : null) // x: number
  .filter(t.check(t.isNotNull));
// t: number[] = [4, 2]
```

To encourage using asserts when dealing with untrusted JSON input, the following function is also exported:
```ts
export const safeJsonParse = (json: string): unknown =>
  JSON.parse(json) as unknown;
```

### Configuration

This library is designed to work in the browser as well as in Node without external dependencies, and by default does not use the `assert` module from the Node stdlib, so it ships with a very basic `assert` implementation:
```ts
export type WeakAssert = (input: unknown, message?: string) => void;

export const defaultAssert: WeakAssert = (condition, message) => {
  if (!condition) {
    throw new TypeError(message);
  }
};

```

It is however possible to configure the library to use a provided base `assert` function, such as the native `assert` module:
```ts
import * as t from "typed-assert";
import nodeAssert from "assert";

t.setBaseAssert(nodeAssert);
```

### Caveats

Due to limitations in the typechecker, there are syntactic restrictions in how to define and use type assertion functions. For example, you can not dynamically define an assertion function, even if it looks like a static definition.

Thus the following code won't compile:
```ts
function createIsExactly<T>(value: T): (input: unknown) => asserts input is T {
  return function isExactly(input: unknown): asserts input is T {
    t.isExactly(input, value);
  };
}
// No problem so far

createIsExactly("a")(null);
// Won't compile:
// Assertions require the call target to be an
//  identifier or qualified name.ts(2776)
```

For similar reasons, it is not possible to use type-inferred arrow functions to define assertion functions:
```ts
const isExactlyNull = (input: unknown): asserts input is null => assert(input === value);
// No problem so far

isExactlyNull("a", null):
// Won't compile:
// Assertions require the call target to be an
//  identifier or qualified name.ts(2776)
```

It is however possible to use arrow function with explicit typing of the left-hand operand:
```ts
const isExactlyNull: (input: unknown) => asserts input is null = (input) =>
  assert(input === null);

isExactlyNull("a");
// No problem
```

To simplify the implementation,

To simplify this pattern, this library also exports the `Assert<Input, Output>` type as defined below:
```ts
export type Assert<T> = (
  input: unknown,
  message?: string,
) => asserts input is T;

const isExactlyNull: Assert<null> = (input) => assert(input === null);

isExactlyNull("a");
// No problem
```

For convenience, this library also exports the following types, used internally:

```ts
export type WeakAssert = (input: unknown, message?: string) => void;

export type SubType<Input, Output> = Output extends Input ? Output : never;

export type Assert<Input = unknown, Output = Input> = (
  input: Input,
  message?: string,
) => asserts input is SubType<Input, Output>;

export type Check<Input = unknown, Output = Input> = (
  input: Input,
) => input is SubType<Input, Output>;
```

This way we can write:
```ts
const isExactlyNull: Assert<unknown, null> = (input) =>
  assert(input === null);

isExactlyNull("a");
```
