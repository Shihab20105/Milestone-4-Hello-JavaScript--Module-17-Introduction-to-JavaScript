/* Practice Problem 1

Harry's mum gave him money and asked him to buy some oranges and apples. Write a programme to help harry to calculate how much money the shopkeeper will return.

Input:
The first line of the input is the taka Harry's mum gave him.
The second line is the cost of 1kg of oranges and 1kg of apples.

Output:
Print the result.

Sample input:
1000
700

Output:
300 */


var totalMoney = 1000;
console.log(totalMoney);
/* Output:
1000 */

var orangesPrice = 400;
var applesPrice = 300;
var totalPrice = orangesPrice + applesPrice;
console.log(totalPrice);
/* Output:
700 */

var returnMoney = totalMoney - totalPrice;
console.log(returnMoney);
/* Output:
300 */