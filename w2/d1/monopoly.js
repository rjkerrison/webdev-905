// Example of a VERY simple Monopoly game simulation

let squares = [
  100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10,
]

// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name, color) {
    // the variable/field goes on the left
    // the value goes on the right
    this.name = name
    this.color = color
    this.position = 0
    this.cash = 1000
  }

  // getter
  getName() {
    const name = this.name
    return name
  }

  // setter
  setName(name) {
    this.name = name
  }

  // Method move
  move() {
    const dice = 1 + Math.floor(6 * Math.random())
    this.position = (this.position + dice) % squares.length
    this.cash += squares[this.position]
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`)
    }
  }

  // Method displayInfo
  displayInfo() {
    console.log(
      `${this.name} is at position ${this.position} and has ${this.cash}€`
    )
  }
}

// --- Initialization of players ---
let player1 = new Player('Joaquim', 'red')
let player2 = new Player('Maxence', 'blue')
let player3 = new Player('Mostafa', 'black')

// --- Turn 1  ---
player1.move()
player2.move()
player3.move()

// --- Turn 2  ---
player1.move()
player2.move()
player3.move()

player1.displayInfo()
player2.displayInfo()
player3.displayInfo()
