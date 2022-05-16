// a CLASS is a template for an object

// country class to reuse
// for our little eurovision thing

// classes are PascalCased, which is like camelCase but with
// a capital at the start
class Country {
  constructor(name, song) {
    // normal/best practice to assign the constructor arguments to instance fields
    this.name = name
    this.song = song
    // also normal to assign defaults/initial values for fields we will change later
    this.points = 0
  }

  // class methods
  assign(points) {
    console.log(this.name)
    this.points += points
  }
}

const stefania = {
  artist: 'Kalush Orchestra',
  name: 'Stefania',
}
const ukraine = new Country('Ukraine', stefania)
const uk = new Country('United Kingdom', {
  artist: 'Sam Ryder',
  name: 'SPACE MAN',
})

ukraine.assign(12)
uk.assign(10)

console.log(ukraine.points)
console.log(uk.points)
