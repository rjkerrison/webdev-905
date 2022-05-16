class Country {
  constructor(name) {
    this.name = name
  }
  isEuMember() {
    return false
  }
  getName() {
    return this.name
  }
}

// EuMember is a subclass of Country
// Country is the super class of EuMember
class EuMember extends Country {
  constructor(name, joiningDate) {
    // first line of a subclass constructor has to be a call to super()
    super(name)

    this.name += ', EU Member State'
    // we only need to specify behaviour specific to this subclass
    this.joiningDate = joiningDate
  }
  // anything here extends (if it's new) or overrides (if it exists on super)
  // overrides – because it exists on super
  isEuMember() {
    return true
  }
  // extends – because it's new
  getEuJoiningDate() {
    return this.joiningDate
  }
}

const france = new EuMember('France', new Date(1958, 0, 1))
const uk = new Country('United Kingdom')

console.log(france.isEuMember(), france.getName(), france.getEuJoiningDate())

console.log(uk.getName === france.getName)
console.log(uk.isEuMember === france.isEuMember)

console.log(uk.isEuMember(), uk.getName(), uk.getEuJoiningDate())
