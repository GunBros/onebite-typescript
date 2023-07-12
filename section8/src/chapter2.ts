/**
 * keyof 연산자
 */

// interface Person {
//   name: string;
//   age: number;
// }

// typeof 연산자를 타입을 정의하는데 사용하면 변수의 타입을 뽑아내는 용도로 활용된다.
type Person = typeof person;

// key는 "name" | "age"으로 유니온 타입으로 추출해준다.
// keyof 연산자는 타입에만 사용이 가능하다.
function getPropertyKey(person: Person, key: keyof typeof person) {
  return person[key];
}

// const person: Person = {
//   name: "이정환",
//   age: 27,
// };

const person = {
  name: "이정환",
  age: 27,
};

getPropertyKey(person, "name");
