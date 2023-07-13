/**
 * infer
 * inference -> 추론하다.
 */
type FuncA = () => string;

type FuncB = () => number;

// 조건식을 참으로 만들 수 있는 타입을 찾을 수 있으면 찾아서 리턴해준다.
type ReturnType<T> = T extends () => infer R ? R : never;

type A = ReturnType<FuncA>;

type B = ReturnType<FuncB>;

type C = ReturnType<number>;

/**
 * 예제
 */

type PromiseUnpack<T> = T extends Promise<infer R> ? R : never;
// 1. T는 프로미스 타입이어야한다.
// 2. 프로미스 타입의 결과값 타입을 반환해야한다.

type PromiseA = PromiseUnpack<Promise<number>>;
// number

type PromiseB = PromiseUnpack<Promise<string>>;
