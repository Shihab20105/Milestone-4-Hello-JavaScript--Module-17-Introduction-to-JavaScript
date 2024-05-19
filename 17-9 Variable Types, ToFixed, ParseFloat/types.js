/*                          Variable Types */

var price = 100;
console.log(price);
/* Output:
100 */

console.log(typeof price);
/* Output:
number */

var price = '100';
console.log(typeof price);
/* Output:
string */

var isHappy = true;
console.log(typeof isHappy);
/* Output:
boolean */

var romantic;
console.log(typeof romantic);
/* Output:
undefined */


/*                          Advanced  */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.30000000000000004 */

var num1 = 0.5;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.7 */

var num1 = 0.1;
var num2 = 0.3;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.4 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
console.log(sum);
/* Output:
0.30000000000000004 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(2);
console.log(sum);
/* Output:
0.30 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(4);
console.log(sum);
/* Output:
0.3000 */

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
console.log(sum);
/* Output:
0.3 (String)*/

var num1 = 0.1;
var num2 = 0.2;
var sum = num1 + num2;
sum = sum.toFixed(1);
sum = parseFloat(sum);
console.log(sum);
/* Output:
0.3 (Number)*/