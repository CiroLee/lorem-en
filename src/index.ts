import { ILoremEnConfig, IRange } from './types';
import { ALPHABET, ENGLISH_NAMES } from './constant';
const MAX_LENGTH = ALPHABET.length;
class LoremEn {
  public random: number;
  constructor(
    config: ILoremEnConfig = {
      random: 10,
    }
  ) {
    if (typeof config.random !== 'number' || !this.validNumber(config.random)) {
      throw Error('config.ramdom must be a number or it is invalid');
    }
    this.random = config.random;
  }
  private validNumber(num: number): boolean {
    if (isNaN(num)) {
      console.warn(`num: ${num}, it is not a number`);
      return false;
    }
    if (num === Infinity || num === -Infinity) {
      console.warn('num should not be Infinity. please check!');
      return false;
    }
    return true;
  }
  private randomLength(range?: number | IRange, min?: number): number {
    if (!range || (typeof range === 'number' && this.validNumber(range))) {
      return range ? Math.floor(range) : this.num([min ?? 1, this.random]);
    }
    return this.num(range as IRange);
  }
  /**
   * @desc return a random number that between min and max
   */
  num(range: [number, number]): number {
    const _min = Math.abs(Math.ceil(Math.min(...range)));
    const _max = Math.abs(Math.floor(Math.max(...range)));
    return Math.floor(Math.random() * (_max - _min + 1) + _min);
  }
  /**
   * @desc return a random element of the array
   */
  randomArrayItem<T>(arr: T[]): T {
    return arr[this.num([0, arr.length - 1])];
  }
  /**
   * @desc return a random letter
   */
  letter(): string {
    return ALPHABET[this.num([0, MAX_LENGTH - 1])];
  }
  /**
   * @desc return a word with random letters
   */
  word(range?: number | IRange): string {
    const len = this.randomLength(range);
    let word = '';
    for (let i = 0; i < len; i++) {
      word += this.letter();
    }
    return word;
  }
  sentence(range?: number | IRange): string {
    let scentence = '';
    const len = this.randomLength(range);
    for (let i = 0; i < len; i = i + 1) {
      const wordNum = this.num([2, this.random]);
      scentence += `${this.word(wordNum)} `;
    }
    return scentence.replace(/^\S/, L => L.toUpperCase()).trim() + '.';
  }
  paragraph(range?: number | IRange): string {
    let paragraph = '';
    const len = this.randomLength(range);
    for (let i = 0; i < len; i = i + 1) {
      paragraph += this.sentence(this.randomLength(0, 2));
    }
    return paragraph;
  }
  name() {
    return ENGLISH_NAMES[this.num([0, ENGLISH_NAMES.length - 1])];
  }
}

export default LoremEn;

export * from './types';
