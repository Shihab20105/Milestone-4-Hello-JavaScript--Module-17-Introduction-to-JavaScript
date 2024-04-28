                                            /* Practice Problem 2

Write a programme to calculate the average marks of Mathematics, Biology, Chemistry, Physics and Bangla  of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

Sample input:
75.25, 65, 80, 35.45, 99.50

Output:
71.04 */


var Mathematics = 75.25;
console.log(Mathematics);
/* Output:
75.25 */
var Biology = 65;
console.log(Biology);
/* Output:
65 */
var Chemistry = 80;
console.log(Chemistry);
/* Output:
80 */
var Physics = 35.45;
console.log(Physics);
/* Output:
35.45 */
var Bangla = 99.50;
console.log(Bangla);
/* Output:
99.5 */

var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
console.log(totalMarks);
/* Output:
355.2 */

var averageMarks = totalMarks / 5;
averageMarks = averageMarks.toFixed(2);
averageMarks = parseFloat(averageMarks);
console.log(averageMarks);
/* Output:
71.04 */