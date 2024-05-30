// question -1 answer:
let carName = 'Volvo';
console.log(carName);

// question -2 answer:
let firstName = 'John';
let lastName = 'Doe';
let age = 35;
console.log(firstName, lastName, age);

// question -3 answer:
let x = 10;
let y = 5;
x = x * y;
console.log(x);

// question -4 answer:
let num = 16; // data type: Number
let name = 'Johnson'; // data type: String

const man = {
  firstName: 'John',
  lastName: 'Doe',
}; // data type: Object

// question -5 answer:
function myFunction() {
  alert('Hello World!');
}
myFunction();

// question -6 answer:
let person = {
  name: 'John',
  age: 50,
};
alert(person.name + ' is ' + person.age);

// question -7 answer:
function btnClicked() {
  alert('Button was clicked!');
}

// question -8 answer:
// 1 :
const cars = ['Volvo', 'Jeep', 'Mercedes'];
alert(cars.length);
// 2 :
const Brand = ['Volvo', 'Jeep', 'Mercedes'];
Brand.unshift('Ford');
console.log(Brand);

// question -9 answer:
// 1 :
let randomNumber = Math.random();
console.log(randomNumber);
// 2 :
let largestNumber = Math.max(10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
console.log(largestNumber);
// 3 :
let nineSquareRoot = Math.sqrt(9);
console.log(nineSquareRoot);

// question -10 answer:
// 1 :
let num1 = 10;
let num2 = 5;
alert(num1 > num2);
// 2 :
let age2 = 18;
let youngOrOld = age2 < 18 ? alert('Too young') : alert('Old enough');
