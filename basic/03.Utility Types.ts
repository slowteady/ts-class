// 01. Partial
// 프로퍼티들을 optional로 바꿔준다.
// 전체 프로퍼티를 optional로 바꾸기 때문에
// 프로퍼티 검증을 정확하게 하지 못한다는 단점 존재
interface Profile {
  name?: string;
  age: number;
  married: boolean;
}

type P<T> = {
  [key in keyof T]?: T[key];
};

const sample: P<Profile> = {
  name: "a",
  age: 30,
};

// 02. Omit
// 재사용할 인터페이스의 특정 프로퍼티를 제외하여 사용
// 전체에서 특정 프로퍼티 제외
// Pick과 Exclude를 합쳐서 만들어진 타입
const sample2: Omit<Profile, "married"> = {
  name: "Lee",
  age: 28,
};

// 03. Pick
// 재사용할 인터페이스의 특정 프로퍼티를 추가하여 사용
// 전체를 기준으로 사용할 프로퍼티 명시
type P3<T, S extends keyof T> = {
  [Key in S]: T[Key];
};
const sample3: P3<Profile, "name" | "age"> = {
  name: "Lee",
  age: 28,
};

// 04. Required
// Optional을 필수로 만들 때 사용
// - 기호를 통해 옵셔널을 제거하여 만들어짐
type R<T> = {
  [Key in keyof T]-?: T[Key];
};
const sample4: R<Profile> = {
  name: "Lee",
  age: 28,
  married: false,
};

// 05. Readonly
// 수정을 못하도록 설정해주는 타입
type R2<T> = {
  readonly [Key in keyof T]: T[Key];
};
const sample5: R2<Profile> = {
  name: "Lee",
  age: 28,
  married: false,
};
// sample5.age = 'Kim'; -> Cannot assign to 'age' because it is a read-only property

// 06. Record
// [key: string]: number 형태로 사용하던 것을 Record<string, number>로 간단하게 사용 가능
interface Obj {
  [key: string]: number;
}
type R3<T extends keyof any, S> = {
  [Key in T]: S;
};
const a4: R3<string, number> = { a: 3, b: 5, c: 7 };

// 07. NonNullable
// null과 undefined를 허용하기 싫을 때 사용
type N<T> = T extends null | undefined ? never : T;
type A2 = string | null | undefined | boolean | number;
type B2 = N<A2>;

// 08. Parameters
// 함수의 매개변수의 타입을 재활용 할 수 있게 해줌
const zip = (x: number, y: string, z: boolean) => {
  return { x, y, z };
};

// 09. infer
// infer는 extends에서만 사용 가능
// 매개변수 자리를 추론하도록 하는 키워드
type P2<T extends (...args: any) => any> = T extends (...args: infer A) => any
  ? A
  : never;
type Params = P2<typeof zip>;
type First = Params[0];
