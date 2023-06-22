/**
 * 기본 타입간의 호환성
 */

let num1: number = 10;
let num2: 10 = 10;

num1 = num2; // 업 캐스팅

/**
 * 객체 타입 간의 호환성
 * -> 어떤 객체타입을 다른 객체 타입으로 취급해도 괜찮은가?
 */

type Animal = {
  name: string;
  color: string;
};

type Dog = {
  name: string;
  color: string;
  breed: string;
};

let animal: Animal = {
  name: "기린",
  color: "yellow",
};

let dog: Dog = {
  name: "돌",
  color: "brown",
  breed: "진도",
};

// 객체 타입들도 슈퍼, 서브 타입 관계를 가진다.
animal = dog;
// dog = animal;

type Book = {
  name: string;
  price: number;
};

type ProgrammingBook = {
  name: string;
  price: number;
  skill: string;
};

let book: Book;
let programmingBook: ProgrammingBook = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  skill: "reactjs",
};

book = programmingBook;
// programmingBook = book;

/**
 * 초과 프로퍼티 검사
 * 객체 리터럴로 객체를 할당하는 경우에 동작하게 된다. 타입에 정의된 프로퍼티만 사용가능하다
 */
let book2: Book = {
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
};

let book3: Book = programmingBook;
function func(book: Book) {}

func({
  name: "한 입 크기로 잘라먹는 리액트",
  price: 33000,
  // skill: "reactjs",
});

func(programmingBook);
