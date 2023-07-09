/**
 * 접근 제어자
 * access modifier
 * -> public private protected
 */

class Employee {
  //필드(기본은 public)
  // private name: string;
  // protected age: number;
  // public position: string;

  // 생성자에 접근 제어자를 달면 필드를 자동으로 생성한다.
  // 그리고 필드의 자동으로 초기화도 진행한다.
  constructor(
    private name: string,
    protected age: number,
    public position: string
  ) {}

  work() {
    console.log("일함");
  }
}

class ExecutiveOfficer extends Employee {
  // 필드
  officeNumber: number;

  //생성자
  // 반드시 super를 사용해야한다.
  constructor(
    name: string,
    age: number,
    position: string,
    officeNumber: number
  ) {
    super(name, age, position);
    this.officeNumber = officeNumber;
  }

  //메서드
  // func() {
  //   this.name = "";
  //   this.age = 10;
  // }
}

const employee = new Employee("이정환", 27, "개발자");
// employee.name = "홍길동";
// employee.age = 30;
employee.position = "디자이너";

console.log(employee);
