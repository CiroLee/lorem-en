# lorem-en

lorem-en maybe the tiniest Javascript module to generate lorem English text. It's written by Typescript, compatible with browser and nodejs.

## Install

```shell
npm install lorem-en
```

## Use

```typescript
// ESM
import LoremEn from 'lorem-en';
// CommonJS
const LoremEn = require('lorem-en');
```

```typescript
const loremEn = new LoremEn();

// e.g. return a random word
loremEn.word();
```

## Params

```typescript
const loremEn = new LoremEn({
  random: 10,
});

// index.d.ts
interface ILoremEnConfig {
  random: number; // base random number, default is 10
}
```

## API

| 名称                                                     | 描述                                                                                                                                                                                                                                                                                                                       |
| -------------------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| letter(): string                                         | Return a random letter                                                                                                                                                                                                                                                                                                     |
| word(range?: number \| [IRange](./src/types.ts)): string | [range: Optional] Return a random word. When range is number, the word consists of range letters; range is a range array ([min, max]), and the number of words is randomly between [min, max]. When no parameter is passed, the number of words will be randomly determined based on the global parameter random           |
| sentence(range?: number \| [IRange](./src/types.ts)) )   | [range: Optional] returns a random sentence. When range is number, the sentence consists of range words; range is a range array ([min, max]), and the number of words is randomly between [min, max]. When no parameters are passed, the number will be randomly determined based on the global parameter random           |
| paragraph(range: number \| [IRange](./src/types.ts) )    | [range: Optional] Returns a random paragraph. When range is number, the paragraph consists of range sentences; range is a range array ([min, max]), and the number of sentences is randomly between [min, max]. When no parameters are passed, the number will be randomly determined based on the global parameter random |
| num(range: [IRange](./src/types.ts)): number             | Returns a random number between [min,max], inclusive of min and max. Note: min and max can be any number (except Infinity and -Infinity), the absolute value of min and max will be compared during calculation, so the position of min and max is not important                                                           |
| randomArrayItem<T>(arr: T[]): T                          | Randomly returns an element in an array                                                                                                                                                                                                                                                                                    |
