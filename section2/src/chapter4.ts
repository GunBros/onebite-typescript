// 타입 별칭
// 증복된 스코프내에서는 중복되면 안된다.
// 자바스크립트로 컴파일시 타입과 관련된 코드들은 제거되므로 해당 코드도 사라진다.
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
}

let user: User = {
  id: 1,
  name: "이정현",
  nickname: "winterlood",
  birth: "1997.01.07",
  bio: "안녕하세요",
  location: "부천시"
}
// 인덱스 시그니처
// 키 밸류가 규칙을 가질 때 사용한다.
type CountryCodes = {
  [key : string]: string,
}

let countryCodes: CountryCodes = {
  Korea: 'ko',
  UnitedState: 'us',
  UnitedKingdom: 'uk',
}

//규칙을 위반하지만 않으면된다.
type CountryNumberCodes = {
  [key: string]: number;
  // Korea: string; -> 인덱스 시그니처의 규칙을 따라가야한다.
}

// let countryNumberCodes: CountryNumberCodes = {
//   Korea: 410,
//   UnitedState: 840,
//   UnitedKingdom: 826,
// }

let countryNumberCodes: CountryCodes = {

}