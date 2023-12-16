class ParentsClass {
  number = 500;
  func1() {
    console.log("부모 클래스 1번");
  }
}

class ChildClass {
  childfunc1() {
    console.log("자식 클래스1번");
  }

  func1() {
    console.log("부모클래스에 오버라이딩");
  }
}

const test = new ChildClass();
test.func1();
