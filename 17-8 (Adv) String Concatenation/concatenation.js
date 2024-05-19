/*                                             Concatenation  */
var price1 = 31;
var price2 = 10;

var price1 = '31';
var price2 = '10';
var totalPrice = price1 + price2;
console.log(totalPrice);
/* Output:
3110 */
var price1 = 31;
var price2 = '10';
var totalPrice = price1 + price2;
console.log(totalPrice);
/* Output:
3110 */
var price1 = '31';
var price2 = 10;
var totalPrice = price1 + price2;
console.log(totalPrice);
/* Output:
3110 */

/* Convert string to number */

var price1 = '31';
var price2 = 10;
var totalPrice = price1 + price2;
console.log(price1);
/* Output:
31 (String) */
console.log(price2);
/* Output:
10 (Number) */
var price1Number = parseInt(price1);
console.log(price1Number);
/* Output:
31 (Number) */

var gpa = '3.41';
var gpaNumber = parseInt(gpa);
console.log(gpaNumber);
/* Output:
3 (Number) */

var gpa = '3.41';
var gpaNumber = parseFloat(gpa);
console.log(gpaNumber);
/* Output:
3.41 (Number) */
