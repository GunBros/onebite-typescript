// object
// 객체 리터럴 타입
// 구조를 기준으로 타입을 결정 -> 구조적 타입 시스템 -> Property Typed System
// 이름을 기준으로 타입을 결정 -> 명목적 타입 시스템 
let user: {
  id?: number,  // 선택적 속성, Optional Property
  name: string
} = {
  id: 1,
  name: "이정환"
}

let config: {
  readonly apiKey: string;
} =  {
  apiKey: "MY API KEY"
}

// config.apiKey = "hacked";