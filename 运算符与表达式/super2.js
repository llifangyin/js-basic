class Rectangle {
    constructor() {}
    static logNbSides() {
      return 'I have 4 sides';
    }
  }
  
  class Square extends Rectangle {
    constructor() {}
    static logDescription() {
      return super.logNbSides() + ' which are all equal';
    }
  }
//   调用父类上的静态方法
  Square.logDescription(); // 'I have 4 sides which are all equal'
  