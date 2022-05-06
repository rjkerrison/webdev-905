// current time represented as milliseconds
const now = Date.now()

console.log(now)

const currentDatetime = new Date(now)

console.log(currentDatetime)

// Unix epoch
// - Dates are represented as milliseconds
// since 1st January 1970 at Midnight
const zeroTime = new Date(0)

console.log(zeroTime)

// How long until the end of the course?
const endCourseDate = new Date('10 Dec 2021 17:00 +00:00')
console.log(endCourseDate)

// find the difference: late - current
const millisecondsUntilEndCourse = endCourseDate - currentDatetime
console.log(millisecondsUntilEndCourse)

// A CAUTIONARY TALE
// dates don't behave nicely because of Pope Gregory
// months are not all the same size, making date calculations complicated
const dateUntilEndCourse = new Date(millisecondsUntilEndCourse)
console.log(dateUntilEndCourse)

const diffInYears = dateUntilEndCourse.getFullYear() - 1970
const diffInMonths = dateUntilEndCourse.getMonth() // this will include Jan, Feb, etc - 31 + 28 + ...
const diffInDays = dateUntilEndCourse.getDate() // 8 days ?
// total of days is 67 and 8 hours
// however, currently we are 2 months and 5 days away: 31 + 30 + 5 = 68

console.log(`${diffInYears} years, ${diffInMonths} months, ${diffInDays} days`)

// Keep It Simple, Stupid (KISS)
// stay with milliseconds in our calculations for as long as possible
const daysUntilEndCourse = millisecondsUntilEndCourse / (1000 * 60 * 60 * 24)
console.log(`There are ${daysUntilEndCourse} days until the end of the course`)

// TIME ZONE ZONE
// should use local time, i.e. your computer's timezone
// this is based on the difference I will have with UTC on that date, i.e. CET (non-summer)
const endCourseDateLocal = new Date('10 Dec 2021 17:00')
// specify a time zone
const endCourseDateUtc = new Date('10 Dec 2021 17:00 +00:00')
const endCourseDateUtcPlus8 = new Date('10 Dec 2021 17:00 +08:00')
const endCourseDateUtcMinus8 = new Date('10 Dec 2021 17:00 -08:00')

// when not specifying a timezone when creating a date,
// local timezone is assumed
// this should be local, should be in CEST (UTC+2)
const today = new Date('Tue 5 Oct 2021 11:00')

// number of hours difference
console.log((endCourseDateUtc - endCourseDateUtcPlus8) / (1000 * 3600))

console.log(endCourseDateUtc, endCourseDateUtc.toLocaleTimeString())
console.log(endCourseDateLocal, endCourseDateLocal.toLocaleTimeString())
console.log(endCourseDateUtcPlus8, endCourseDateUtcPlus8.toLocaleTimeString())
console.log(endCourseDateUtcMinus8, endCourseDateUtcMinus8.toLocaleString())

console.log(today, today.toLocaleTimeString(), today.toLocaleString())

// Unix epoch crisis: 2038
const max32bitInt = 0b1111111111111111111111111111111
console.log(max32bitInt)

const maxMilliseconds = 1000 * max32bitInt
const date = new Date(maxMilliseconds)
console.log(maxMilliseconds, date)
