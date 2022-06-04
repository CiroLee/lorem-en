export interface ILoremEnConfig {
  random?: number;
}

export interface INames {
  range?: number | IRange;
  upper?: boolean;
}

export type IRange = [number, number];
