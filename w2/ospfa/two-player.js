const healthBarSize = 20
const healthBarIndicators = ['🥰', '💞', '💗', '💖', '💕']
const randomHealthIndicator = () => {
  return healthBarIndicators[
    Math.floor(Math.random() * healthBarIndicators.length)
  ]
}

// This is a class
class OpenSourceValentine {
  // Classes always have constructors
  constructor(name, moves, affectionQuota) {
    this.name = name
    this.moves = moves
    this.affectionReceived = 0
    this.affectionQuota = affectionQuota
  }
  // Classes can have extra methods
  isSatisfied() {
    // we can refer to the instance of the class (the one we constructed) with the `this` keyword
    return this.affectionReceived >= this.affectionQuota
  }
  toString() {
    const heartCount = Math.floor(
      (healthBarSize * this.affectionReceived) / this.affectionQuota
    )
    const affectionIndicator = new Array(healthBarSize).fill('').map((_, i) => {
      if (i < heartCount) {
        return randomHealthIndicator()
      } else {
        return '⬜️'
      }
    })

    return `${this.name}: ${affectionIndicator.join('')}`
  }
  receiveAffection(points) {
    this.affectionReceived += points
  }
  useActOfAffection(index, opponent) {
    const move = this.moves[index]
    console.log(move.getMessage(this, opponent))
    opponent.receiveAffection(move.points)
    console.log(opponent.toString())
  }
  display(label) {
    const padLength = 20 - Math.floor(label.length / 2)

    console.log(
      ` ${label} `.padStart(padLength + label.length, '=').padEnd(40, '=')
    )
    console.log(this.name + ' can')
    this.moves.forEach((x) => console.log('--- ' + x.toString()))
  }
}

class ActOfAffection {
  constructor(points) {
    this.points = points
  }
  act(partner) {
    partner.receiveAffection(this.points)
  }
}

class Gift extends ActOfAffection {
  getMessage(player, partner) {
    return `${player.name} bought ${partner.name} a gift!`
  }
  toString() {
    return 'Buy a gift'
  }
}

class ActOfService extends ActOfAffection {
  constructor(points, description, pastTense) {
    super(points)
    this.description = description
    this.pastTense = pastTense
  }
  getMessage(player, partner) {
    return `${player.name} ${this.pastTense} for ${partner.name}!`
  }
  toString() {
    return this.description
  }
}

const ronnie = new OpenSourceValentine(
  'Ronnie',
  [new Gift(40), new ActOfService(20, 'Do the laundry', 'did laundry')],
  100
)
// or we can use the main class
const jordan = new OpenSourceValentine(
  'Jordan',
  [new Gift(40), new ActOfService(20, 'File their taxes', 'filed taxes')],
  100
)

const readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const sleep = (ms) => {
  return new Promise((res, rej) => {
    setTimeout(res, ms)
  })
}

class Game {
  constructor(playerOne, playerTwo) {
    if (!playerOne || !playerTwo) {
      throw new Exception('Game requires two players')
    }

    this.playerOne = playerOne
    this.playerTwo = playerTwo

    this.currentPlayer = 'playerOne'
    this.currentPartner = 'playerTwo'
  }

  get player() {
    return this[this.currentPlayer]
  }
  get opponent() {
    return this[this.currentPartner]
  }

  switchPlayerOpponent() {
    ;[this.currentPlayer, this.currentPartner] = [
      this.currentPartner,
      this.currentPlayer,
    ]
  }

  async handleMove(index) {
    await sleep(250)
    this.player.useActOfAffection(index, this.opponent)

    if (this.opponent.isSatisfied()) {
      console.log(
        `${this.player} gave sufficient affection to ${this.opponent}!`
      )
      console.log('💕💕💕💕💕 💕💕💕💕💕 💕💕💕💕💕 💕💕💕💕💕 💕💕💕💕💕')
      rl.close()
    } else {
      this.switchPlayerOpponent()
      await sleep(500)
      this.promptUserForMove()
    }
  }

  showStatus() {
    console.log(`
Current status:
  ${this.player}
  ${this.opponent}
`)
  }

  promptUserForMove() {
    this.showStatus()
    rl.question(
      `How would ${this.player.name} like to show ${
        this.opponent.name
      } their affection?

Options are:
  ${this.player.moves.map((move, i) => `${i}. ${move}`).join('\n  ')}

Indicate 0-${this.player.moves.length - 1}.
> `,
      (index) => this.handleMove(index)
    )
  }

  start() {
    console.log('💕💕💕💕💕 💕💕💕💕💕 💕💕💕💕💕 💕💕💕💕💕 💕💕💕💕💕')
    this.playerOne.display('Player One')
    this.playerTwo.display('Player Two')
    this.promptUserForMove()
  }
}

const game = new Game(ronnie, jordan)
game.start()
