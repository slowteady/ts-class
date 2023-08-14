// 01. Partial
// 프로퍼티들을 optional로 바꿔준다.
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
