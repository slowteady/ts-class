interface Array<T> {
  // 01. forEach. map 제네릭 분석
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  // 콜백 함수 리턴값의 타입에 주목
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[];

  // 02. filter 제네릭 분석
  filter<S extends T>(
    predicate: (value: T, index: number, array: T[]) => value is S,
    thisArg?: any
  ): S[];
  filter(
    predicate: (value: T, index: number, array: T[]) => unknown,
    thisArg?: any
  ): T[];
}

// 02.
// const filtered = ['1', 2, '3', 4, '5'].filter((value) => typeof value === 'string');
// => const filtered: (string | number)[] 로 추론 정상적으로 하지 못함
// value is string 을 통해 S가 string 값을 알려서 사용할 수 있음
const predicate = (value: string | number): value is string =>
  typeof value === "string";
const filtered = ["1", 2, "3", 4, "5"].filter(predicate);
