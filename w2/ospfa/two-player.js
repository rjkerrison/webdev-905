// This is a class
class OpenSourcePocketFightingAnimal {
  // Classes always have constructors
  constructor(name, moves, maxHitPoints) {
    this.name = name
    this.moves = moves
    this.hitPoints = maxHitPoints
    this.maxHitPoints = maxHitPoints
  }
  // Classes can have extra methods
  isFainted() {
    // we can refer to the instance of the class (the one we constructed) with the `this` keyword
    return this.hitPoints <= 0
  }
  toString() {
    return `${this.name} (${this.hitPoints}/${this.maxHitPoints})`
  }
  takeDamage(hit) {
    this.hitPoints -= hit
  }
  useMoveAgainstOpponent(index, opponent) {
    const move = this.moves[index]
    console.log(
      `${this.name} used ${move.name.toUpperCase()} against ${opponent.name}!`
    )
    opponent.takeDamage(move.hit)
    console.log(opponent.toString())
  }
  display(label) {
    const padLength = 20 - Math.floor(label.length / 2)

    console.log(
      ` ${label} `.padStart(padLength + label.length, '=').padEnd(40, '=')
    )
    console.log(this)
  }
}

// We can extend OpenSourcePocketFightingAnimal with a specific species
class Thundermouse extends OpenSourcePocketFightingAnimal {
  constructor(moves, maxHitPoints) {
    super('Thundermouse', moves, maxHitPoints)
  }
}

const myOspfa = new Thundermouse(
  [
    { name: 'Electrocute', hit: 25 },
    { name: 'Fist assault', hit: 15 },
    { name: 'Blunt instrument', hit: 23 },
  ],
  50
)
// or we can use the main class
const theirOspfa = new OpenSourcePocketFightingAnimal(
  'Firelizard',
  [
    { name: 'Stab', hit: 20 },
    { name: 'Immolate', hit: 35 },
    { name: 'Slap', hit: 5 },
  ],
  60
)

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

class Game {
  constructor(playerOne, playerTwo) {
    if (!playerOne || !playerTwo) {
      throw new Exception('Game requires two players')
    }

    this.playerOne = playerOne
    this.playerTwo = playerTwo

    this.currentPlayer = 'playerOne'
    this.currentOpponent = 'playerTwo'
  }

  get player() {
    return this[this.currentPlayer]
  }
  get opponent() {
    return this[this.currentOpponent]
  }

  switchPlayerOpponent() {
    ;[this.currentPlayer, this.currentOpponent] = [
      this.currentOpponent,
      this.currentPlayer,
    ]
  }

  handleMove(index) {
    this.player.useMoveAgainstOpponent(index, this.opponent)

    if (this.opponent.isFainted()) {
      console.log(`${this.player} sufficiently injured ${this.opponent}!`)
      rl.close()
    } else {
      this.switchPlayerOpponent()
      this.promptUserForMove()
    }
  }

  promptUserForMove() {
    rl.question(
      `Which move would you like ${this.player} to use against ${this.opponent}?

Options are:
  ${this.player.moves.map(({ name }, i) => `${i}. ${name}`).join('\n  ')}

Indicate 0-${this.player.moves.length - 1}.
> `,
      (index) => this.handleMove(index)
    )
  }

  start() {
    this.playerOne.display('Player One')
    this.playerTwo.display('Player Two')
    this.promptUserForMove()
  }
}

const game = new Game(myOspfa, theirOspfa)
game.start()
