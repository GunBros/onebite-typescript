/**
 * 제네릭
 */

// 제네릭 함수
// T는 타입 변수
function func<T>(value: T): T {
  return value;
}

// 함수를 호출할 때 타입이 결정된다.
let num = func(10);

let bool = func(true);

let str = func("string");

let arr = func([1, 2, 3] as [number, number, number]);

let arr1 = func<[number, number, number]>([1, 2, 3]);
