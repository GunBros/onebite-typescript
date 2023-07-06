/**
 * 선언 합침
 */

interface Person {
  name: string;
}

// 같은 프로퍼티를 다른 타입으로 재정의 하는 것을 충돌이라고 하는데
// 인터페이스에서는 충돌이 허락되지 않는다.
// 서브 타입도 안되고 반드시 같아야한다.
// 모듈의 보강이 필요할때 선언 합침을 사용
interface Person {
  // name: number;
  age: number;
}

interface Developer extends Person {
  name: "hello";
}

// 중복 선언이 가능하고 합쳐지게 된다. ㄷㄷ
const person: Person = {
  name: "",
  age: 27,
};

/**
 * 모듈 보강
 */

interface Lib {
  a: number;
  b: number;
}

// 사용자가 재정의한다..
interface Lib {
  c: string;
}

const lib: Lib = {
  a: 1,
  b: 2,
  c: "",
};
