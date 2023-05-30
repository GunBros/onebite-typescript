// enum 타입
// 열거형 타입
// 여러가지 값들에 각각 이름을 부여해 열거해두고 사용하는 타입

enum Role {
  ADMIN = 0,  // 숫자를 지정해주지 않아도 자동으로 순서대로 0, 1, 2, 3이 들어간다. 시작을 10으로 잡으면 자동으로 + 1이 된다. 숫자형 enum
  USER = 1,
  GUEST = 2
}

enum Language {
  korean = "ko",
  english = "en",
}

const user1= {
  name: "이정환",
  role: Role.ADMIN // 관리자
};

const user2 = {
  name: "홍길동",
  role: Role.USER, // 일반유저
  language: Language.korean
};

const user3 = {
  name: "아무개",
  role: Role.GUEST // 게스트
};

console.log(user1, user2, user3);