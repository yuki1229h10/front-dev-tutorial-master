const obj = {
  first_name: 'Neo',
  last_name: 'Code',
  printFullName: function () {
    console.log('hello');
  }
}

class MyObject {
  constructor() {
    this.first_name = 'Neo';
    this.last_name = 'Code';
  }

  printFullName() {
    console.log('hello');
  }
}

const obj2 = new MyObject();

obj.printFullName();
obj2.printFullName();
