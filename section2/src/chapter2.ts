//배열
let numArr: number[] = [1, 2, 3];

let strArr: string[] = ["hello", "im", "winterlood"];

// 제네릭 문법
let boolArr: Array<boolean> = [true, false, false]

// 배열에 들어가는 요소들의 타입이 다양한 경우
let multiA: (number | string)[] = [1, "hello"];

// 다차원 배열의 타입을 정의하는 방법
let doubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// 튜플(타입스크립트에서 제공)
// 길이와 타입이 고정된 배열
let tup1: [number, number] = [1, 2];

let tup2: [number, string, boolean] = [1, "2", true];

tup1.push(1); // 기본적으로 배열로 인식을 하기 때문에 배열 메소드를 통해 변경이 일어나도 인식하지 못한다.

// 튜플을 사용하면 인덱스의 위치를 정해주어서 오류를 방지할 수 있다.
const users: [string, number][] = [
  ["이정환", 1],
  ["이아무개", 2],
  ["김아무개", 3],
  ["박아무개", 4],
  // [5, "최아무개"]
]