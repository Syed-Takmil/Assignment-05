Q1. What is the difference between var, let, and const?
ANS: var is function scoped,and let,const are block scoped .Function scoped means the variable can only be accessed inside 
a function.And the block scope means the variable is only accessed by {}.
let variable can be reassigned /given new value inside same block.
But it cannot be declared again inside the same block.
And in case of var,it can be redeclared and reassigned inside same function.
But const ccannot be reassigned and redeclared.

Q2.What is the spread operator (...)?
ANS:The spread operator (...) is used to expand elements of an array, object  into individual elements.
For Example:
const add=(num1,num2,num3)=>{
return num1+num2+num3;
}
const numbers=[1,2,3];
add(...numbers); //this will return 6 .adding all individual elements of the array

Q3. What is the difference between map(), filter(), and forEach()?

ANS:Map,Filter and ForEach are array Methods.
i)Map changes the values of an array according to a given condition and then resturns it to another array.
Example:
const numbers = [1,2,3];
const result = numbers.map(n => n * 2);//The result array will be [2,4,6]

ii)Filter also is an array method which returns an array but which is a sub-set of the given array.
Basically it filters out data from an array as per a condition.For Example:
const numbers=[1,2,3];
numbers.filter(number=>number>1);//[2,3]

iii) ForEach doesn't return an array but it runs a function over all elements of an array.
Example-
const numbers = [1,2,3];
numbers.forEach(n => console.log(n));


Q4)What is an arrow function?

ANS:
Arrow Function is a shorter way to write Functions in Ecmascript6.
Insted of Writing 
function add(a,b){
return a+b;}
We write const add=(a,b)=>{a+b}
Makes the Code cleaner and also compact.

Q5) What are template literals?
ANS:
This is a way of writing string in ES6 by which directly variables can be inserted here by ${} Even inside innerHTML method we 
use template literals.These are written inside backticks (``).
For Example-
console.log(`There were ${count} errors`);//count is a variable here storing number of errors
This makes code cleaner and easily readable.And Easy to insert Variables and write Multiline Strings




