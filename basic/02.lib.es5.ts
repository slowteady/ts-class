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

// 03. forEach 직접 만들기
interface Arr<T> {
  forEach(callback: (value: T, index: number) => void): void;
}
const a1: Arr<number> = [1, 2, 3];
a1.forEach((item) => item);

// 04. map 직접 만들기
// T에 하나의 타입이 들어갈 수 있는 것이 아니기 때문에 U로 따로 뺌
interface Arr2<T> {
  map<U>(callback: (value: T) => U): U[];
}
const a2: Arr2<number> = [1, 2, 3];
a2.map((arr) => arr * 2);

// 05. filter 직접 만들기
interface Arr3<T> {
  filter<U extends T>(callback: (value: T) => value is U): U[];
}
const a3: Arr3<number | string> = ["1", 2, 3, "4"];
a3.filter((arr): arr is string => typeof arr === "string");