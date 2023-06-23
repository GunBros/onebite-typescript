/**
 * 타입 단언 (type assertion)
 */

type Person = {
  name: string;
  age: number;
};

let person = {} as Person;
person.name = "이정환";
person.age = 27;

type Dog = {
  name: string;
  color: string;
};

let dog = {
  name: "돌돌이",
  color: "bronw",
  breed: "진도",
} as Dog;

/**
 * 타입 단언의 규칙
 * 값 as 단언 <- 단언식
 * A as B
 * A가 B의 슈퍼타입이거나
 * A가 B의 서브타입이어야 함
 */

let num1 = 10 as never; // 슈퍼타입인 경우
let num2 = 10 as unknown; // 서브타입인 경우

let num3 = 10 as unknown as string; // 다중 단언(꼼수;; 좋은 방법이 절대 아니다.)

/**
 * const 단언
 */

let num4 = 10 as const;

// 모든 property가 readonly가 된다.
let cat = {
  name: "야옹이",
  color: "yellow",
} as const;

/**
 * Non Null 단언
 */
type Post = {
  title: string;
  author?: string;
};

let post: Post = {
  title: "게시글1",
  author: "이정환",
};

// author가 null이나 undefined가 아니라고 단언한다.
const len: number = post.author!.length;
