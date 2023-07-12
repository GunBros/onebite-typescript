/**
 * 맵드 타입(실무에서 자주 쓰인다!)
 */

interface User {
  id: number;
  name: string;
  age: number;
}

type PartialUser = {
  [key in keyof User]?: User[key];
};

type BooleanUser = {
  [key in keyof User]?: boolean;
};

type ReadonlyUser = {
  readonly [key in keyof User]: User[key];
};

// 한명의 유저 정보를 불러오는 기능
function fetchUser(): User {
  return {
    id: 1,
    name: "이정환",
    age: 27,
  };
}

// 한명의 유저 정보를 수정하는 기능
function updateUser(user: PartialUser) {}

updateUser({
  // id: 1,
  // name: "이정환",
  age: 27,
});
