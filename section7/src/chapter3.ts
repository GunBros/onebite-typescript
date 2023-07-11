/**
 * 제네릭 인터페이스
 */

// 타입 변수(공식문서) === 타입 파라미터 === 제네릭 타입 변수 === 제네릭 타입 파라미터
interface KeyPair<K, V> {
  key: K;
  value: V;
}

// 제네릭 인터페이스를 사용하기 위해서는 사용하고자 하는 타입을 꺽쇠에 넣어야한다.
let keyPair: KeyPair<string, number> = {
  key: "key",
  value: 0,
};

let keyPair2: KeyPair<boolean, string[]> = {
  key: true,
  value: ["1"],
};

/**
 * 인덱스 시그니쳐
 */

interface NumberMap {
  [key: string]: number;
}

let numberMap1: NumberMap = {
  key: -1231,
};

interface Map<V> {
  [key: string]: V;
}

let stringmap: Map<string> = {
  key: "value",
};

let booleanMap: Map<boolean> = {
  key: true,
};

/**
 *  제네릭 타입 별칭
 */

type Map2<V> = {
  [key: string]: V;
};

let sringMap2: Map2<string> = {
  key: "hello",
};

/**
 * 제네릭 인터페이스의 활용 예시
 * -> 유저 관리 프로그램
 * -> 유저 구분 : 학생 유저 / 개발자 유저
 */
interface Student {
  type: "student";
  school: string;
}

interface Developer {
  type: "developer";
  skill: string;
}

interface User<T> {
  name: string;
  profile: T;
}

function goToSchool(user: User<Student>) {
  // 제네릭 인터페이스를 활용하면 타입가드가 별도로 필요 없다.
  // if (user.profile.type !== "student") {
  //   console.log("잘 못 오셨습니다.");
  //   return;
  // }

  const school = user.profile.school;
  console.log(`${school}로 등교 완료`);
}

const developerUser: User<Developer> = {
  name: "이정환",
  profile: {
    type: "developer",
    skill: "Typescript",
  },
};

const studentUser: User<Student> = {
  name: "홍길동",
  profile: {
    type: "student",
    school: "가톨릭대학교",
  },
};
