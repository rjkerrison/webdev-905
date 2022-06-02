const bear = {
  name: 'Paddington',
  favouriteFood: 'marmalade',
  family: {
    adoptedMother: 'Mrs Brown',
    adoptedFather: 'Mr Brown',
    adoptedSister: 'Lucy',
    adoptedBrother: 'No idea',
  },
}

// shorthand object field assignments
const characters = {
  // last one wins
  bear: 'something else',
  bear: bear,
  bear,
}

console.log(characters.bear)

// DESTRUCTURING
// assign to the object { favouriteFood } from the object bear
const { favouriteFood, name } = bear

const {
  // only assigns the leaves
  family: bearFamily,
  // anything before a colon doesn't get assigned, but is used to get values
  family: { adoptedFather },
} = bear

console.log('adoptedFather', adoptedFather) // Mr Brown
console.log('family', bearFamily) // an object with all the family
console.log('favouriteFood', favouriteFood) // marmalade

// If in doubt, go back to basics.
const family = bear.family
const adoptedDad = family.adoptedFather

// ARRAYs

const favouriteNumbers = [4, 8, 15, 16, 23, 42]

const [num1, num2, num3] = favouriteNumbers

const getCar = () => 'car'
const getHouse = () => 'house'

function returnsTwoValues() {
  const car = getCar()
  const house = getHouse()
  return [car, house]
}

function returnsObj() {
  const car = getCar()
  const house = getHouse()
  return { car, house }
}

const [myCar, myHouse] = returnsTwoValues()
const { car: hisCar, house: hisHouse } = returnsObj()

console.log(num1, num2, num3)

// function parameters

function getDetailsForUser(user, callback) {
  return fetchUserDetails(user.id, user.username)
}
// optional parameters are really easy
// with destructured params
function getDetailsForUserDestructured(
  { id, username, lastLoginDate, isPremium },
  callback
) {
  return fetchUserDetails(id, username)
}

getDetailsForUserDestructured({ username: 'harry', id: 4, isPremium: true })
getDetailsForUserDestructured({
  username: 'harry',
  id: 4,
  lastLoginDate: new Date(),
})
