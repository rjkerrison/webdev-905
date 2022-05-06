class Bike {
  constructor(color, brand, owner) {
    this.color = color
    this.brand = brand
    this.owner = owner
    this.speedInKmph = 0
    this.tyres = []
  }

  // class method syntax
  speedUp(increaseInSpeed) {
    this.speedInKmph += increaseInSpeed
  }

  getDescription() {
    return `A ${this.color} ${this.brand} bike owned by ${this.owner} moving at ${this.speedInKmph} km/h.`
  }

  slowDown(decreaseInSpeed) {
    this.speedInKmph -= decreaseInSpeed
  }

  getOwnerName() {
    return this.owner
  }

  attachTyre(tyre) {
    this.tyres.push(tyre)
  }
}

// the 'new' keyword
// create an object based on the class
// - "instantiation"
// - "bike is an instance of Bike"
const bikes = [
  new Bike('red', 'Canondale', 'Abdou'),
  new Bike('blue', 'unknown', 'Robin'),
  new Bike('yellow', 'unknown', 'Alex'),
  new Bike('green', 'unknown', 'Brian'),
  new Bike('pink', 'unknown', 'Laurie'),
]

bikes.forEach((bike) => {
  bike.speedUp(10)
  console.log(bike.getDescription())
})

class Tyre {
  constructor(position, status = 'inflated') {
    this.position = position
    this.status = status
  }

  repair() {
    this.status = 'inflated'
  }
}

const frontTyre = new Tyre('front')
const backTyre = new Tyre('back', 'punctured')
bikes[0].attachTyre(frontTyre)
bikes[0].attachTyre(backTyre)

console.log(bikes[0])
bikes[0].tyres[1].repair()
console.log(bikes[0])
