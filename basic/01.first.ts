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

// 빈 배열을 선언할 때는 타입을 꼭 지정할 것 => never 타입이 추론되기 때문
// * tsconfig.json의 noImplicitAny: false 로 설정했을 때
const array: string[] = [];
array.push("hello");

// ! 대신 if 문을 활용할 것
const head = document.querySelector("#head");
if (head) {
  head.innerHTML = "Hello World";
}

// rest
function rest(a: number, ...args: string[]) {
  console.log(a, args); // 1, ['2', '3'];
}
rest(1, "2", "3");

// 객체에 as const 를 붙여 상수로 활용 가능
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const obj2 = { a: "123", b: "hello", c: "world" } as const;
type key = (typeof obj2)[keyof typeof obj2];

// 잉여 속성 검사 : 타입 부여를 하고 객체를 바로 할당할 시, 잉여 속성 검사가 진행된다.
interface A {
  a: string;
}
const obj3 = { a: "hello", b: "world" };
// const obj4: A = { a: "hello", b: "world" } // error

// void
// 직접 return 값에 void 할당 시 return 값이 없다는 것을 의미
function aa(callback: () => void): void {}

// 매개변수와 메소드로 사용했을 때의 void는 리턴값이 뭐든 상관 않겠다는 의미,
// 이용하게 되면 타입이 꼬이게 되므로 원칙적으로는 리턴을 사용하지 않하는 것을 지향
aa(() => {
  return "3";
});
interface Human {
  talk: () => void;
}
const human: Human = {
  talk() {
    return 123;
  },
};
