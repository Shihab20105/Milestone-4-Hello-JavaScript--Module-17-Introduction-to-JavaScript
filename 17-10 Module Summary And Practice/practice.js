//* Practice Problem 1 *//

// Harry's mum gave him money and asked him to buy some oranges and apples. Write a programme to help harry to calculate how much money the shopkeeper will return.

// Input:
// The first line of the input is the taka Harry's mum gave him.
// The second line is the cost of 1kg of oranges and 1kg of apples.

// Output:
// Print the result.

// Sample input:
// 1000
// 700

// Output:
// 300

// ------------------------------------------------------- //

var totalMoney = 1000;
// console.log(totalMoney);

var orangesPrice = 400;
var applesPrice = 300;
var totalPrice = orangesPrice + applesPrice;
// console.log(totalPrice);

var returnMoney = totalMoney - totalPrice;
// console.log(returnMoney);

//* Practice Problem 2 *//

// Write a programme to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla  of a student.

// Input:
// The first line of the input is the marks of the five subjects mentioned above, respectively.

// Output:
// Print the result in 2 decimal places.

// Sample input:
// 75.25, 65, 80, 35.45, 99.50

// Output:
// 71.04

// ---------------------------------------------------------------------------- //

var Mathematics = 75.25;
// console.log(Mathematics);
var Biology = 65;
// console.log(Biology);
var Chemistry = 80;
// console.log(Chemistry);
var Physics = 35.45;
// console.log(Physics);
var Bangla = 99.50;
// console.log(Bangla);

var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
// console.log(totalMarks);

var averageMarks = totalMarks / 5;
averageMarks = averageMarks.toFixed(2);
averageMarks = parseFloat(averageMarks);
// console.log(averageMarks);

//* Practice Problem 3 *//

// John's teacher gave him two variables. Each variable contains a string. John's teacher asked him to combine this two strings and print them in one line. Help John write the Program.

// Input:
// The first and the second lines of the input contain the strings.

// Output:
// Print the result in one line.

// Sample input:
// I am going to be
// an awesome web developer

// Output:
// I am going to be an awesome web developer
// ------------------------------------------------------------------------------------------------------------- //

var ambition = 'I am going to be';
// console.log(ambition);

var aim = 'an awesome wed developer';

// var plan = ambition + aim;
// console.log(plan); 

var plan = 'I am going to be'+ ' ' +'an awesome wed developer';
// console.log(plan)
// Output: I am going to be an awesome wed developer

//* Practice Problem 4 *//

// Sarah's mother teaching her mathematics. She gave Sarah a number and asked her what the remainder would be if she divided the number by 5. Help Sarah write the program.

// Input:
// The first line of the input contains the number.

// Output:
// Print the remainder.

// Sample input:
// 119

// Output:
// 4
// ------------------------------------------------------------------------------------------------ //

var totalNumber = 119;
// console.log(totalNumber)

remainder = totalNumber % 5;
console.log(remainder);
// Output: 4




