// 변수 표현
const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const arr: string[] = ["123"];
const arr2: Array<Number> = [123];
const obj: { a: number; b: string } = { a: 123, b: "123" };
const arr3: [number, number, string] = [1, 2, "3"];

// 함수 표현
type Add = (x: number, y: number) => number;
interface Add2 {
  (x: number, y: number): number;
}
const add: Add2 = (x, y) => x + y;
