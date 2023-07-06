/**
 * 인터페이스
 */

// 메소드는 이름을 반드시 붙혀줘야한다.
// 메소드의 오버로딩을 사용하고 싶으면 호출 시그니쳐를 사용해야한다.
// 유니온 인터섹션 불가능
interface Person {
  readonly name: string;
  age?: number;
  sayHi(): void;
  sayHi(a: number, b: number): void;
}

type Func = {
  (): void;
};

const func: Func = () => {};

type Type1 = number | string | Person;
type Type2 = number & string & Person;

const person: Person = {
  name: "이정환",
  sayHi: function () {
    console.log("Hi");
  },
};

// person.name = "홍길동";
person.sayHi();
person.sayHi(1, 2);
