class Bear {
  constructor(name, species, favouriteFood) {
    // 'this' refers to the current instance/object of the class
    this.name = name
    this.species = species
    this.favouriteFood = favouriteFood
  }
}

// INSTANTIATION
// 'new' keyword is for creating a new instance of the class
const paddington = new Bear('Paddington', 'cuddly bear', 'marmalade')
console.log(paddington)

// Date is a built-in class
const now = new Date()
console.log(now)

// Array is a built-in class
const array = new Array('goodbye', 'hello')
console.log(array)
