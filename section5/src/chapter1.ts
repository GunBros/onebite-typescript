/**
 * 인터페이스의 확장
 */

type Animal = {
  name: string;
  color: string;
};
// 아무 타입으로만 정의할 수 있는 것이 아닌
// 부모에서 정의된 타입의 서브타입이여야한다.
// 왜냐하면 부모의 타입을 확장하고 있는 것이기 때문이다.
// interface는 객체 타입이면 다 확장이 가능하다.
interface Dog extends Animal {
  isBark: boolean;
}

const dog: Dog = {
  name: "",
  color: "",
  isBark: true,
};

interface Cat extends Animal {
  isScratch: boolean;
}

interface Chiken extends Animal {
  isFly: boolean;
}

// 다중 확장이 가능하다.
interface DogCat extends Dog, Cat {}

const dogCat: DogCat = {
  name: "",
  color: "",
  isBark: true,
  isScratch: true,
};
