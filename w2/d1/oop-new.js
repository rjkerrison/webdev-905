// Object Oriented Programming

// OOP is all about basing our programming around Objects
// It's different from functional programming, where functions are most important

const ukraine = {
  name: 'Ukraine',
  song: {
    artist: 'Kalush Orchestra',
    song: 'Stefania',
  },
  points: 0,
  getDescription() {
    // the getDescription method should return the string:
    // "Ukraine's song is Stefania by Kalush Orchestra"

    // HINT:
    return ``
  },

  // object method syntax
  assign(points) {
    console.log('this artist is', this.song.artist)
    // the 'this' keyword refers to the current object
    this.points += points
  },
  //   assign: (points) => {
  //     // 'this' is not affected for an arrow function
  //     console.log(this.name)
  //     this.points += points
  //   },
}

// functional programming
function assignPoints(points, country) {
  // the assignPoints function is aware of country's 'points' field
  // and is directly manipulating it
  // even though it doesn't OWN country
  country.points += points
}

assignPoints(12, ukraine)
console.log(ukraine.points)
// calling the method
ukraine.assign(12)
console.log(ukraine.points)

// ARROW FUNCTIONS do not behave the same with 'this'
// we use a function expression instead
// we generally don't declare object methods to be reused like this
const assign = function (points) {
  console.log(this.name)
  this.points += points
}

const uk = {
  name: 'United Kingdom',
  song: {
    artist: 'Sam Ryder',
    song: 'SPACE MAN',
  },
  points: 0,
  // object method syntax
  //   assign(points) {
  //     console.log('this artist is', this.song.artist)
  //     // the 'this' keyword refers to the current object
  //     this.points += points
  //   },
  assign: assign,
}

uk.assign(10)
console.log(uk.points)
