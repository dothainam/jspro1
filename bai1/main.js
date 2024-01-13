
//Bài 1
//Log number
// Ghi số
//console.log(100);

//Log string
//console.log('Hello World');

//Log multiple values
// Ghi nhiều giá trị
//console.log(20, 'Hello', true);

//Log a variable
//Ghi lại biến
//const x = 100;
//console.log(x);

//Console error & warning
// Ghi lỗi và cảnh báo
//console.error('Alert');
//console.warn('Warning');

//Log object as table
//Ghi lại đói tượng theo bảng
//console.table({ name: 'Brad', email: 'brad@gmail.com' });

//Group console commands
// Ghi lại các lệnh
//console.group('simple');
//console.log(x);
//console.error('Alert');
//console.warn('Warning');
//console.groupEnd();

//Add CSS to logs
// thêm css
//const styles = 'padding: 10px; background-color: white; color: green';
//console.log('%cHello World', styles);

//Bài 3: Variables
//Ways to declare a variable
//`var`, `let`, & `const`

//let firstName = 'John';
//const lastName = 'Doe';
//let age = 30;
//console.log(lastName);
//console.log(age);

//Cách đặt tên
//Naming Conventions
//- Only letters, numbers, underscores and dollar signs
//- Can't start with a number
//Multi-Word Formatting
//firstName = camelCase
//first_name = underscore
//FirstName = PascalCase
//firstname = lowercase

//We can re-assign `let` variables. If you change `age` to use `const`, you will get an error
// Không thể gán lại biến const
//age = 31;
//console.log(age);

//With let, we can declare a value without assigning a value
//Chúng ta có thể khai báo không cần gán giá trị với let
//let score;
//score = 1;
//console.log(score);

// if (true) {
//   score = score + 1;
// }
//console.log(score);
//const x = 100;

//We can still manipulate arrays and objects using const
// Thao tác với mảng và đối tượng = const
//const arr = [1, 2, 3, 4];
//arr.push(5);
//arr.push(6,7);
//console.log(arr);

// const person = {
//   name: 'Brad',
// };

// person.name = 'Nam Thai Do';
// person.email = 'dothainama3@gmail.com';
// console.log(person);
// Declare multiple values at once
// Khai báo nhiều giá trị cùng 1 lúc
//let a, b, c;

//const d = 10,
  //e = 20,
  //f = 30;

//console.log(d);
//console.log(a);
//Bai 4 datatype
// const FirstName = "Nam"; //string
// const Age = 19 // number
// const School = null //null
// const maried = undefined // underfined

// const numbers = [1,2,3,4,5]; // object

// const In4 = {
//     name : "Nam",
//     age : "19"
// }

// function say(){
//     console.log("Hello everyone!!!");
// }

// console.log(say());
//Bài 5
// const name = 'John';
// const age = 30;

// // Reference is stored in the heap
// const person = {
//   name: 'Brad',
//   age: 40,
// };

// let newName = name;
// newName = 'Jonathan';

// let newPerson = person;
// newPerson.name = 'Bradley';

// console.log(name, newName); // John, Jonathan
// console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }
//bài 6
// let amount = 'hello';

// // Convert string to number
// // Chuỗi -> số
// amount = parseInt(amount);
// amount = +amount;
// amount = Number(amount);

// // Convert number to string
// // Số -> chuỗi
// amount = amount.toString();
// amount = String(amount);

// // Convert string to decimal
// // Chuỗi -> số thập phân
// amount = parseFloat(amount);

// // Convert number to boolean
// // Đổi số -> kiểu boolean
// amount = Boolean(amount);

// // Ways to get NaN
// // Không phải số
// console.log(Math.sqrt(-1));
// console.log(1 + NaN);
// console.log(undefined + undefined);
// console.log('foo' / 3);

// console.log(amount, typeof amount);
//bài 7
//Toán tử
// 1. Arithmetic Operators

// let x;

// x = 5 + 5;
// x = 5 - 5;
// x = 5 * 5;
// x = 5 / 5;
// x = 7 % 5;

// // Concatenation
// //Nối
// x = 'Hello' + ' ' + 'World';

// // Exponent
// x = 2 ** 3;

// // Increment
// x = 1;
// // x = x + 1;
// x++;

// // Decrement
// // x = x - 1;
// x--;

// // 2. Assignment Operators

// x = 10;

// x += 5;
// x -= 5;
// x *= 5;
// x /= 5;
// x %= 5;
// x **= 5;

// // 3. Comparison Operators

// // Equal to (Just the value, not the type)
// x = 2 == '2';

// // Equal to (Type and value)
// x = 2 === '2';

// // Not equal to (Just the value, not the type)
// x = 2 != '2';

// // Not equal to (Type and value)
// x = 2 !== 2;

// // Greater than and less than
// x = 10 > 5;
// x = 10 < 5;
// x = 10 <= 5;
// x = 10 >= 5;

// console.log(x);
//Bài 8
// let x;

// // Coerced to a string
// x = 5 + '5';

// x = 5 + Number('5');

// // Coerced to a number
// x = 5 * '5';

// // null is coerced to 0 as it is a `falsy` value
// x = 5 + null;

// x = Number(null);

// x = Number(true);
// x = Number(false);

// // true is coerced to a 1
// x = 5 + true;

// // false is coerced to 0 (falsy)
// x = 5 + false;

// // Undefined is coerced to 0 (falsy)
// x = 5 + undefined;

// console.log(x, typeof x);
//Bài 9
// let x;

// const name = 'Do Thai Nam';
// const age = 19;

// // Concatenation
// x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';

// // Template Literals
// x = `Hello, my name is ${name} and I am ${age} years old`;

// // String Properties and Methods

// // Creating a "string object" (JS does this automatically when using a propery or method on a primitive string)
// const s = new String('Hello World');

// x = typeof s;

// x = s.length;

// // Access value by key
// x = s[0];

// // Shows the prototype of the string object. Shows the properties and methods
// x = s.__proto__;

// // Change case
// x = s.toUpperCase();
// x = s.toLowerCase();

// // charAt() - returns the character at the specified index
// x = s.charAt(0);

// // indexOf - returns the index of the first occurrence of a specified value in a string
// x = s.indexOf('d');

// // substring() - search a string for a specified value
// x = s.substring(2, 5);
// x = s.substring(7);

// // slice() - extracts a part of a string and returns a new string
// x = s.slice(-11, -6);

// // trim() - remove whitespace from beginning and end of string
// x = '         Hello World';
// x = x.trim();

// // replace() - replace all instances of a string
// x = s.replace('Do', 'Nam');

// // includes() - returns true if the string is found
// x = s.includes('Hell');

// // valueOf() - returns the primitive value of a variable
// x = s.valueOf();

// // split() - returns an array of strings
// x = s.split('');

// console.log(x);
