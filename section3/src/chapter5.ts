/**
 * 타입 추론 -> 자동으로 변수의 타입을 추론한다.
 */

// 타입 넓히기(범용적으로 사용할 수 있도록)
let a = 10;
let b = "hello";
let c = {
  id: 1,
  name: "이정환",
  profile: {
    nickname: "winterlood",
  },
  url: ["https://winterlood.com"],
};

let { id, name, profile } = c;

let [one, two, three] = [1, "hello", true];

function func(message = "hello") {
  return "hell";
}

// const는 리터럴 타입으로 추론된다.
const num = 10;
const str = "hello";

// any 타입의 진화
let d; // 암묵적으로 any라고 할게
d = 10; // any -> number로 진화
d.toFixed();

d = "hello"; // string으로 진화
d.toUpperCase();
// d.toFixed();

// 타입스크립트가 모든 요소를 비교해서 최적의 타입으로 추론해준다.
let arr = [1, "string"];
