// 01. 변수 표현
const a: string = "5";
const b: number = 5;
const c: boolean = true;
const d: undefined = undefined;
const e: null = null;
const arr: string[] = ["123"];
const arr2: Array<Number> = [123];
const obj: { a: number; b: string } = { a: 123, b: "123" };
const arr3: [number, number, string] = [1, 2, "3"];

// -----------------------------------------------------------------------

// 02. 함수 표현
type Add = (x: number, y: number) => number;
interface Add2 {
  (x: number, y: number): number;
}
const add: Add2 = (x, y) => x + y;

// -----------------------------------------------------------------------

// 03. 빈 배열을 선언할 때는 타입을 꼭 지정할 것 => never 타입이 추론되기 때문
// * tsconfig.json의 noImplicitAny: false 로 설정했을 때
const array: string[] = [];
array.push("hello");

// -----------------------------------------------------------------------

// 04. ! 대신 if 문을 활용할 것
const head = document.querySelector("#head");
if (head) {
  head.innerHTML = "Hello World";
}

// -----------------------------------------------------------------------

// 05. rest
function rest(a: number, ...args: string[]) {
  console.log(a, args); // 1, ['2', '3'];
}
rest(1, "2", "3");

// -----------------------------------------------------------------------

// 06. 객체에 as const 를 붙여 상수로 활용 가능
const ODirection = {
  Up: 0,
  Down: 1,
  Left: 2,
  Right: 3,
} as const;

const obj2 = { a: "123", b: "hello", c: "world" } as const;
type key = (typeof obj2)[keyof typeof obj2];

// -----------------------------------------------------------------------

// 07. 잉여 속성 검사 : 타입 부여를 하고 객체를 바로 할당할 시, 잉여 속성 검사가 진행된다.
interface A {
  a: string;
}
const obj3 = { a: "hello", b: "world" };
// const obj4: A = { a: "hello", b: "world" } // error

// -----------------------------------------------------------------------

// 08. void
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

// -----------------------------------------------------------------------

// 09. unknown
// any 타입은 이후 타입 검사를 하지 않아버리기 때문에
// 당장 타입을 잘 모르겠을 땐 unknown을 사용
// ** 다른 사람이 만든 타입이 틀렸거나, unknown 타입이 아닐 경우 as 사용 지양해야함 **
try {
} catch (error) {
  // error.message => 'error' is of type 'unknown' 에러 출력
  (error as Error).message;
}

// -----------------------------------------------------------------------

// 10. 타입 좁히기
function numOrStr(a: number | string) {
  if (typeof a === "number") {
    a.toFixed(1);
  } else {
    a.charAt(3);
  }
  if (typeof a === "string") {
    a.charAt(3);
  }
  if (typeof a === "boolean") {
    // 절대 실행될 수 없는 코드기 때문에 never 타입으로 타입 추론을 해준다.
    // a.toString(); => property 'toString' does not exist on type 'never'
  }
}

// 배열 구분
function numOrNumArray(a: number | number[]) {
  // Array.isArray 문법을 통해 배열 여부를 판단 가능
  if (Array.isArray(a)) {
    a.concat(4);
  } else {
    a.toFixed(3);
  }
}

// 객체 구분
type B = { type: "b"; bbb: string };
type C = { type: "c"; ccc: string };
type D = { type: "d"; ddd: string };

function typeCheck(a: B | C | D) {
  // 객체의 값으로 타입 좁히기 가능
  if (a.type === "b") {
    a.bbb;
  }
  // 객체의 프로퍼티로 타입 좁히기 가능
  if ("bbb" in a) {
    a.bbb;
  }
}

// -----------------------------------------------------------------------

// 11. 커스텀 타입 가드
// 타입을 구분해주는 커스텀 함수를 만들 수 있다.
interface Cat {
  meow: number;
}
interface Dog {
  bow: number;
}
function catOrDog(a: Cat | Dog): a is Dog {
  if ((a as Cat).meow) {
    return false;
  }
  return true;
}

// -----------------------------------------------------------------------

// 11. 인덱스드 시그니쳐
// 객체의 프로퍼티가 많을 때
// 인덱스드 시그니쳐를 사용하면 간단하게 타입을 지정할 수 있다.
type E = { [key: string]: string };
const aaa: E = { a: "a", b: "b", c: "c" };

// -----------------------------------------------------------------------

// 12. 제네릭
// 사용할 떄 타입이 정해짐
// extends 키워드를 사용하여 타입 제한 가능
function q<T extends number | string>(x: T, y: T): T {
  return x;
}
