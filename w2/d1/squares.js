class Rectangle {
  // Create a class Rectangle with:
  //     A method constructor(width,height)
  constructor(width, height) {
    //     A property width
    this.width = width
    //     A property height
    this.height = height
  }
  //     A method calculatePerimeter()
  calculatePerimeter() {
    return 2 * (this.width + this.height)
  }
  //     A method calculateArea()
  calculateArea() {
    return this.width * this.height
  }
}

class Square extends Rectangle {
  // Create a class Square that extends Rectangle add with:
  //     A property side (equals to the width and height)
  //     A method constructor(side)
  constructor(side) {
    super(side, side)
  }
}

const r1 = new Rectangle(6, 7)
console.log('Perimeter of r1 =', r1.calculatePerimeter()) // 26
console.log('Area of r1 =', r1.calculateArea()) // 42

const s1 = new Square(5)
console.log('Perimeter of s1 =', s1.calculatePerimeter()) // 20
console.log('Area of s1 =', s1.calculateArea()) // 25

const s2 = new Square(10)
console.log('Perimeter of s2 =', s2.calculatePerimeter()) // 40
console.log('Area of s2 =', s2.calculateArea()) // 100
