/**
 * 제네릭 클래스
 */

class List<T> {
  constructor(private list: T[]) {}

  push(data: T) {
    this.list.push(data);
  }

  pop() {
    return this.list.pop();
  }

  print() {
    console.log(this.list);
  }
}

// 생성자의 인수를 통해서 타입을 추론한다.
// 제네릭 인터페이스나 제네릭 타입 변수와는 다르게 타입을 명사하지 않아도 된다.
const numberList = new List([1, 2, 3]);
numberList.pop();
numberList.push(4);
numberList.print();

const stringList = new List(["1", "2"]);
stringList.push("asdf");
