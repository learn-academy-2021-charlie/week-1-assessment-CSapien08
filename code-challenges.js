// ASSESSMENT 1: Coding practical questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Please read all questions thoroughly
// All problems can be solved with concepts covered in class or in the syllabus
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// --------------------1) Create a function that takes in a number and determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Fahrenheit.
// Use the test variables provided below. Expected output: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"

console.log("Problem 1: Boiling Point")
console.log("------------------------------------")

//function Determines Temperature:
//  parameters -> number
//  var boiling point = 212 degrees
//  if number is above boiling point 
//     return number + is above boiling point
//  elseif number is below boling point
//     return  number + is below boiling point
//  elseif number is at boiling point
//     return number + is at boiling point
//  else
//     return invaild selection
//end

const determineTemperature = (temp) => {
    const boilingPoint = 212;
    if(temp > boilingPoint){
        return `${temp} is above boiling point.`;
    }
    else if(temp < boilingPoint){
        return `${temp} is below boiling point.`;
    }
    else if(temp === boilingPoint){
        return `${temp} is at boiling point.`;
    }
    else{
        return 'Invaild selection, please try again!';
    }
}

var temp1 = 35
var temp2 = 350
var temp3 = 212

console.log(determineTemperature(temp1));
console.log(determineTemperature(temp2));
console.log(determineTemperature(temp3));
console.log(determineTemperature("hi"));


console.log("------------------------------------")


// --------------------2) Create a function that takes in two arrays of numbers and returns a single array with all the values sorted least to greatest.
// Use the test variables provided below. Expected output: [-9, -7, 0, 3, 7, 8, 9, 13, 22, 36]

console.log("Problem 2: Join Two Arrays")
console.log("------------------------------------")

// function join arrays:
//     parameters -> 2 arrays of numbers, array1 & array2
//     var array3 = arrary1 concatenate array2
//     sort array3
//     return array3
// end

const joinArrays = (array1, array2) => {
    var array3 = array1.concat(array2);
    array3.sort((a, b) => a - b);
    return array3;
}

var myNumbers1 = [3, 7, 0, 36, -9]
var myNumbers2 = [8, -7, 22, 9, 13]

console.log(joinArrays(myNumbers1, myNumbers2));
console.log("------------------------------------")


// --------------------3) Create a function that takes in a string of a single word and returns the string with all letters reversed.
// Use the test variables provided below. Expected output: "ovarb", "eilrahc"

console.log("Problem 3: Reverse String")
console.log("------------------------------------")

// function Reverse String
//     parameters -> String
//     split the String into an array by characters by using string.spilt()
//     call array.reverse() to reverse the String
//     call array.join() to return it back as a String
//     return String
// end

const reverseString = (string) => {
    return string.split('').reverse().join("")
}

var myString1 = "bravo"
var myString2 = "charlie"

console.log(reverseString(myString1));
console.log(reverseString(myString2));

console.log("------------------------------------")

// --------------------4) Create a function that takes in two numbers and subtracts the smaller number from the larger number.
// Use the two sets of test variables provided below. Expected output: 15, 12

console.log("Problem 4: Subtract From the Larger Number")
console.log("------------------------------------")

// function subtract from larger
//     parameters -> 2 numbers, num1 & num2
//     if num1 is > num2 
//         subtract num2 from num1
//     elseif num2 > num1
//         subtract num1 from num2
//     else
//         invalid arguement
// end

const subtractFromLarger = (num1, num2) => {
    if(num1 > num2){
        return num1 - num2;
    }
    else if(num2 > num1){
        return num2 - num1;
    }
    else{
        return 'invaild arguements';
    }
}

var numberExample1 = 42
var numberExample2 = 27

var numberExample3 = 7
var numberExample4 = 19

console.log(subtractFromLarger(numberExample1, numberExample2))
console.log(subtractFromLarger(numberExample3, numberExample4))
console.log(subtractFromLarger('hi', 4))

console.log("------------------------------------")

// --------------------5) Copy/paste your code from #4. Refactor your code to also accept non-number edge cases. Inform your user if the variable passed into the subtraction function is not a number.
// Use the two sets of test variables provided below. Expected output: "Your input is not a number", 3
// Hint: There is an operator in JavaScript called typeof :)

console.log("Problem 5: Subtract From the Larger Number Refactor")
console.log("------------------------------------")

// function subtract from larger Refactor
//     parameters -> 2 numbers, num1 & num2
//     check if the arguements are numbers
//            if not, return "your input is not a number"
//     if num1 is > num2 
//         subtract num2 from num1
//     elseif num2 > num1
//         subtract num1 from num2
//     else
//         invalid arguement
// end

const subtractFromLargerRefactor = (num1, num2) => {
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "Your input is not a number"
    }
    else if(num1 > num2){
        return num1 - num2;
    }
    else if(num2 > num1){
        return num2 - num1;
    }
    else{
        return 'invaild arguements';
    }
}

var numberExampleRefactor1 = 42
var numberExampleRefactor2 = "hello"

var numberExampleRefactor3 = 27
var numberExampleRefactor4 = 24

console.log(subtractFromLargerRefactor(numberExampleRefactor1, numberExampleRefactor2));
console.log(subtractFromLargerRefactor(numberExampleRefactor3, numberExampleRefactor4));

console.log("------------------------------------")