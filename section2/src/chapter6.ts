// any
// 특정 변수의 타입을 우리가 확실히 모를때
let anyVar: any = 10;
anyVar = true;
anyVar = {};
anyVar = () => { };
anyVar.toUpperCase();

let num: number = 10;
num = anyVar;

// unknown
let unknownVar: unknown;

unknownVar = "";
unknownVar = 1;
unknownVar = () => { };

// num = unknownVar; ->  오류 발생

// 타입 정제
if (typeof unknownVar === "number") {
  num = unknownVar;
}