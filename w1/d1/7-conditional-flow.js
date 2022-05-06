// Conditional

const isTodayMonday = true
const isItSnowing = true

if (isTodayMonday) {
  console.log('How was your weekend?')
}

if (isItSnowing) {
  console.log("Let's build a snowman!")
} else {
  console.log('No snowmen today!')
}

// We call these "if-else" blocks

// if (condition) {
//   ...statements to run when the condition is true
// }
if (isItSnowing) {
  console.log('SNOW')
} else if (isTodayMonday) {
  console.log('MONDAY')
} else {
  console.log('NEITHER')
}

const dayOfWeek = 'Monday'

switch (dayOfWeek) {
  case 'Monday':
    console.log('It is very early!')
  case 'Tuesday':
    console.log('There are at least four more days of class this week, yay!')
    break
  case 'Wednesday':
    console.log('halfway')
    break
  default:
    // like the else in an if-else block
    console.log('oh no it is not early in the week now')
    break
}
