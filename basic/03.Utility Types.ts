// 01. Partial
// 프로퍼티들을 optional로 바꿔준다.
// 전체 프로퍼티를 optional로 바꾸기 때문에
// 프로퍼티 검증을 정확하게 하지 못한다는 단점 존재
interface Profile {
  name: string;
  age: number;
  married: boolean;
}

interface NewProfile {
  name: string;
  age: number;
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
