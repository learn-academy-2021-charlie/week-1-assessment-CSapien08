// ASSESSMENT 1: Coding conceptual questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

var cohort = "Charlie 2021"
console.log(cohort.length)

// a) Your answer: The answer should be 12.
// b) Verify and explain: The answer was 12 and the reason it is 12 is because the console.log is using the built in length method on the variable cohort.


// --------------------2) What will this log?

var greeting = "Hello World!"
console.log(greeting[3])

// a) Your answer: The answer should be "l."
// b) Verify and explain: The reason the answer is "l" is because we are using the square brackets to access the 3 index on the greetings string.


// --------------------3) What will this log?

var languages = ["JavaScript", "Ruby", "Python", "C++"]
var index = 1
console.log(languages[index])

// a) Your answer: The answer should be 'Ruby.'
// b) Verify and explain: The reason the answer is "Ruby" is because we are using the square brackets and the index variable to access the 1st index on the languages array.


// --------------------4) What will this log?

var weekendDays = ["saturday", "sunday"]
//kept it commented since it throws a TypeError
//console.log(weekendDays.toUpperCase())

// a) Your answer: I believe this will not run because the built in method toUpperCase() is used on Strings not arrays.
// b) Verify and explain: 'TypeError: weekendDays.toUpperCase is not a function,' as explained arrays do not have the toUpperCase() fucntion. In order to use the built in function we would have to loop through all of the values and then call toUpperCase() on each individual value.


// --------------------5) What will this log?

var dataTypes = ["number", "string", "Boolean"]
console.log(typeof dataTypes.length)

// a) Your answer: I believe it would be number since its calling typeof .length
// b) Verify and explain: The answer was 'number.' The reason the it returns number is because .length function returns the length which will always be a number so when it asks for the typeof length it will return the typeof the length which is a number. 
