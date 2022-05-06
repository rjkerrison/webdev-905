let city = 'miami'
console.log(city) // <== miami

// we CAN re-assign our variable to another value
city = 'berlin'
console.log(city) // <== berlin

// but still CAN NOT change the value "berlin"
city[0] = 'B'
console.log(city) // <== berlin

const a = city.slice(1, 5)
console.log(a)
console.log(city)
