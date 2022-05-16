// Object Oriented Programming

// OOP is all about basing our programming around Objects
// It's different from functional programming, where functions are most important

const country = {
  name: 'Ukraine',
  song: {
    artist: 'Kalush Orchestra',
    song: 'Stefania',
  },
  points: 0,
}

// functional programming
function assignPoints(points, country) {
  country.points += points
}
