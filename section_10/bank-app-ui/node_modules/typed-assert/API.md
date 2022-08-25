typed-assert

# typed-assert

## Table of contents

### Type aliases

- [Assert](API.md#assert)
- [Check](API.md#check)
- [SubType](API.md#subtype)
- [WeakAssert](API.md#weakassert)

### Functions

- [assert](API.md#assert)
- [check](API.md#check)
- [defaultAssert](API.md#defaultassert)
- [isArray](API.md#isarray)
- [isArrayOfType](API.md#isarrayoftype)
- [isBoolean](API.md#isboolean)
- [isDate](API.md#isdate)
- [isExactly](API.md#isexactly)
- [isInstanceOf](API.md#isinstanceof)
- [isNever](API.md#isnever)
- [isNotNull](API.md#isnotnull)
- [isNotUndefined](API.md#isnotundefined)
- [isNotVoid](API.md#isnotvoid)
- [isNumber](API.md#isnumber)
- [isOneOf](API.md#isoneof)
- [isOneOfType](API.md#isoneoftype)
- [isOptionOfType](API.md#isoptionoftype)
- [isPromise](API.md#ispromise)
- [isRecord](API.md#isrecord)
- [isRecordOfType](API.md#isrecordoftype)
- [isRecordWithKeys](API.md#isrecordwithkeys)
- [isString](API.md#isstring)
- [isUnknown](API.md#isunknown)
- [safeJsonParse](API.md#safejsonparse)
- [setBaseAssert](API.md#setbaseassert)

## Type aliases

### Assert

Ƭ **Assert**<`Input`, `Output`\>: (`input`: `Input`, `message?`: `string`) => asserts input is SubType<Input, Output\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `unknown` |
| `Output` | `Input` |

#### Type declaration

▸ (`input`, `message?`): asserts input is SubType<Input, Output\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |
| `message?` | `string` |

##### Returns

asserts input is SubType<Input, Output\>

#### Defined in

[index.ts:7](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L7)

___

### Check

Ƭ **Check**<`Input`, `Output`\>: (`input`: `Input`) => input is SubType<Input, Output\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Input` | `unknown` |
| `Output` | `Input` |

#### Type declaration

▸ (`input`): input is SubType<Input, Output\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |

##### Returns

input is SubType<Input, Output\>

#### Defined in

[index.ts:12](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L12)

___

### SubType

Ƭ **SubType**<`Input`, `Output`\>: `Output` extends `Input` ? `Output` : `never`

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Defined in

[index.ts:5](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L5)

___

### WeakAssert

Ƭ **WeakAssert**: (`input`: `unknown`, `message?`: `string`) => `void`

#### Type declaration

▸ (`input`, `message?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message?` | `string` |

##### Returns

`void`

#### Defined in

[index.ts:3](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L3)

## Functions

### assert

▸ `Const` **assert**(`input`, `message?`): asserts input is true

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `boolean` |
| `message?` | `string` |

#### Returns

asserts input is true

#### Defined in

[index.ts:24](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L24)

___

### check

▸ **check**<`Input`, `Output`\>(`assertT`): [`Check`](API.md#check)<`Input`, `Output`\>

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `assertT` | [`Assert`](API.md#assert)<`Input`, `Output`\> |

#### Returns

[`Check`](API.md#check)<`Input`, `Output`\>

#### Defined in

[index.ts:209](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L209)

___

### defaultAssert

▸ `Const` **defaultAssert**(`input`, `message?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message?` | `string` |

#### Returns

`void`

#### Defined in

[index.ts:16](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L16)

___

### isArray

▸ **isArray**(`input`, `message?`): asserts input is unknown[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message` | `string` |

#### Returns

asserts input is unknown[]

#### Defined in

[index.ts:128](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L128)

___

### isArrayOfType

▸ **isArrayOfType**<`T`\>(`input`, `assertT`, `message?`, `itemMessage?`): asserts input is T[]

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `assertT` | [`Assert`](API.md#assert)<`unknown`, `T`\> |
| `message` | `string` |
| `itemMessage` | `string` |

#### Returns

asserts input is T[]

#### Defined in

[index.ts:147](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L147)

___

### isBoolean

▸ **isBoolean**(`input`, `message?`): asserts input is boolean

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message` | `string` |

#### Returns

asserts input is boolean

#### Defined in

[index.ts:76](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L76)

___

### isDate

▸ **isDate**(`input`, `message?`): asserts input is Date

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message` | `string` |

#### Returns

asserts input is Date

#### Defined in

[index.ts:97](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L97)

___

### isExactly

▸ **isExactly**<`Input`, `Output`\>(`input`, `value`, `message?`): asserts input is SubType<Input, Output\>

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |
| `value` | `Output` |
| `message` | `string` |

#### Returns

asserts input is SubType<Input, Output\>

#### Defined in

[index.ts:68](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L68)

___

### isInstanceOf

▸ **isInstanceOf**<`T`\>(`input`, `constructor`, `message?`): asserts input is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `constructor` | (...`args`: `any`[]) => `T` |
| `message` | `string` |

#### Returns

asserts input is T

#### Defined in

[index.ts:193](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L193)

___

### isNever

▸ **isNever**(`_input`, `message?`): `never`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_input` | `never` |
| `message` | `string` |

#### Returns

`never`

#### Defined in

[index.ts:40](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L40)

___

### isNotNull

▸ **isNotNull**<`T`\>(`input`, `message?`): asserts input is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | ``null`` \| `T` |
| `message` | `string` |

#### Returns

asserts input is T

#### Defined in

[index.ts:47](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L47)

___

### isNotUndefined

▸ **isNotUndefined**<`T`\>(`input`, `message?`): asserts input is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| `T` |
| `message` | `string` |

#### Returns

asserts input is T

#### Defined in

[index.ts:54](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L54)

___

### isNotVoid

▸ **isNotVoid**<`T`\>(`input`, `message?`): asserts input is Exclude<T, undefined \| null \| void\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `T` |
| `message` | `string` |

#### Returns

asserts input is Exclude<T, undefined \| null \| void\>

#### Defined in

[index.ts:61](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L61)

___

### isNumber

▸ **isNumber**(`input`, `message?`): asserts input is number

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message` | `string` |

#### Returns

asserts input is number

#### Defined in

[index.ts:83](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L83)

___

### isOneOf

▸ **isOneOf**<`Input`, `Output`\>(`input`, `values`, `message?`): asserts input is SubType<Input, Output\>

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `Input` |
| `values` | readonly `Output`[] |
| `message` | `string` |

#### Returns

asserts input is SubType<Input, Output\>

#### Defined in

[index.ts:170](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L170)

___

### isOneOfType

▸ **isOneOfType**<`T`\>(`input`, `assertT`, `message?`, `itemMessage?`): asserts input is T

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `assertT` | [`Assert`](API.md#assert)<`unknown`, `T`\>[] |
| `message` | `string` |
| `itemMessage?` | `string` |

#### Returns

asserts input is T

#### Defined in

[index.ts:178](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L178)

___

### isOptionOfType

▸ **isOptionOfType**<`Input`, `Output`\>(`input`, `assertT`, `message?`): asserts input is SubType<Input, undefined\> \| SubType<Input, Output\>

#### Type parameters

| Name |
| :------ |
| `Input` |
| `Output` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `undefined` \| `Input` |
| `assertT` | [`Assert`](API.md#assert)<`Input`, `Output`\> |
| `message` | `string` |

#### Returns

asserts input is SubType<Input, undefined\> \| SubType<Input, Output\>

#### Defined in

[index.ts:159](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L159)

___

### isPromise

▸ **isPromise**(`input`, `message?`): asserts input is Promise<unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message` | `string` |

#### Returns

asserts input is Promise<unknown\>

#### Defined in

[index.ts:202](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L202)

___

### isRecord

▸ **isRecord**(`input`, `message?`): asserts input is Record<string, unknown\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message` | `string` |

#### Returns

asserts input is Record<string, unknown\>

#### Defined in

[index.ts:104](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L104)

___

### isRecordOfType

▸ **isRecordOfType**<`T`\>(`input`, `assertT`, `message?`, `itemMessage?`): asserts input is Record<string, T\>

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `assertT` | [`Assert`](API.md#assert)<`unknown`, `T`\> |
| `message` | `string` |
| `itemMessage` | `string` |

#### Returns

asserts input is Record<string, T\>

#### Defined in

[index.ts:135](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L135)

___

### isRecordWithKeys

▸ **isRecordWithKeys**<`K`\>(`input`, `keys`, `message?`): asserts input is { readonly [Key in string]: unknown }

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends `string` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `keys` | `K`[] |
| `message` | `string` |

#### Returns

asserts input is { readonly [Key in string]: unknown }

#### Defined in

[index.ts:115](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L115)

___

### isString

▸ **isString**(`input`, `message?`): asserts input is string

#### Parameters

| Name | Type |
| :------ | :------ |
| `input` | `unknown` |
| `message` | `string` |

#### Returns

asserts input is string

#### Defined in

[index.ts:90](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L90)

___

### isUnknown

▸ **isUnknown**(`_input`): \_input is unknown

#### Parameters

| Name | Type |
| :------ | :------ |
| `_input` | `unknown` |

#### Returns

\_input is unknown

#### Defined in

[index.ts:36](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L36)

___

### safeJsonParse

▸ `Const` **safeJsonParse**(`json`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `json` | `string` |

#### Returns

`unknown`

#### Defined in

[index.ts:33](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L33)

___

### setBaseAssert

▸ **setBaseAssert**(`assert?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `assert?` | [`WeakAssert`](API.md#weakassert) |

#### Returns

`void`

#### Defined in

[index.ts:27](https://github.com/elierotenberg/typed-assert/blob/master/src/index.ts#L27)
