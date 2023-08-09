// 01. forEach. map 제네릭 분석
interface Array<T> {
  forEach(
    callbackfn: (value: T, index: number, array: T[]) => void,
    thisArg?: any
  ): void;

  // 콜백 함수 리턴값의 타입에 주목
  map<U>(
    callbackfn: (value: T, index: number, array: T[]) => U,
    thisArg?: any
  ): U[]; 
}
