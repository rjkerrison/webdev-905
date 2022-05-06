class Vehicle {
  constructor(color) {
    this.color = color
    this.speedInKmph = 0
  }

  speedUp(increaseInSpeed) {
    this.speedInKmph += increaseInSpeed
  }
}

// Bike is a "subclass" of Vehicle
// Vehicle is the "superclass" of Bike
class Bike extends Vehicle {
  constructor(color, brand) {
    // super refers to the superclass's constructor
    super(color)
    // then we set Bike-specific stuff
    this.brand = brand
  }
  changeGearUp() {
    this.gear += 1
  }
}

const bike = new Bike('red', 'Canondale')
bike.speedUp(9)
console.log(bike)

// Car "inherits from" Vehicle
class Car extends Vehicle {
  constructor(color, manufacturer, model) {
    // always be the first line in a subclass constructor
    super(color)
    this.manufacturer = manufacturer
    this.model = model
    this.doors = ['front left', 'front right']
  }
}

const car = new Car('silver', 'Aston Martin', 'DB5')
car.speedUp(8)
console.log(car)

class Hatchback extends Car {
  constructor(color, manufacturer, model) {
    // always be the first line in a subclass constructor
    super(color, manufacturer, model)
    console.log('HELLO I AM CALLING THE CONSTRUCTOR FOR HATCHBACK')
    this.hasBoot = true
  }
}
const familyCar = new Hatchback('silver', 'Ford', 'Focus')
familyCar.speedUp(8)
console.log(familyCar)
