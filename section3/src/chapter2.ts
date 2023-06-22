/**
 * Unknown 타입(전체 집합)
 */

function unknownExam() {
  // 업 캐스팅
  let a: unknown = 1;
  let b: unknown = true;
  let c: unknown = null;
  let d: unknown = undefined;
  let e: unknown = "hello";

  let unknownvar: unknown;
  // 다움 캐스팅
  // let num: number = unknownvar;
  // let str: string = unknownvar;
  // let bool: boolean = unknownvar;
}

/**
 * Never 타입
 */
function neverExam() {
  function neverFunc(): never {
    while (true) {}
  }

  let num: number = neverFunc();
  let str: string = neverFunc();
  let bool: boolean = neverFunc();

  // 다운 캐스팅이라 가능하지 않다!
  // let never1: never = 10;
  // let never2: never = "string";
  // let never3: never = true;
}

/**
 * Void 타입
 */
function voidExam() {
  function voidFunc(): void {
    console.log("hi");
    // 업 캐스팅
    return undefined;
  }

  let voidVar: void = undefined;
}

/**
 * any 타입(모든 타입의 슈퍼 타입이자 서브 타입이다. 타입 계층도를 모두 무시한다.)
 */
function anyExam() {
  let unknownVar: unknown;
  let anyVar: any;
  let undefinedVar: undefined;
  let neverVar: never;

  anyVar = unknownVar; // 다운 캐스팅이지만 가능하다!

  undefinedVar = anyVar;
  // neverVar = anyVar; // 이 다운 캐스팅은 불가능하다.
}
