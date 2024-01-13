//Bài 1

// // let x;
// // const arr = [1,2,3,4,5,6];

// //shift() - remove first value

// //arr.shift()

// //x = arr.slice()

// let x;

// const fruits = ['apple', 'pear', 'orange'];
// const berries = ['strawberry', 'blueberry', 'rasberry'];

// //noi mang bang concat
// // x = fruits.concat(berries);


// x = [...fruits , ...berries];
// console.log(x);
//Bài 2
// let x;

// const arr = [28, 38, 44, 29, 109];

// // push() - Push a value on to the end of the array
// //Thêm 1 giá trị vào cuối mảng
// arr.push(100);

// // pop() - Take the last value off
// //Bỏ giá trị cuối mảng
// arr.pop();

// // unshift() - Add a value to the beginning of the array
// //Thêm giá trị vào đầu mảng
// arr.unshift(99);

// // shift() - Remove first value
// //Bỏ giá trị đầu tiên
// arr.shift();

// // reverse() - Reverse an array
// //Đảo ngược mảng
// arr.reverse();

// // includes() - Check to see if something is in the array
// //Kiểm tra mảng
// x = arr.includes(445);

// // indexOf() - Return the index of the first match
// x = arr.indexOf(28);

// // Return array as a string
// //Trả về chuỗi
// x = arr.toString();
// x = arr.join();

// // slice() returns selected elements in an array, as a new array. Slice takes in the index of the first element and the index of the last element to be included in the new array.
// x = arr.slice(1, 4);

// // splice() works like slice() except it takes the index of the first element and the number of elements after that as a second argument. it also mutates the original array where slice() does not
// x = arr.splice(1, 4);

// // Remove a single element/value - The following will mutate the original array by taking out the element with the index of 4. x will be equal to a new array with that plucked out value.
// x = arr.splice(4, 1);

// // Chaining methods - Some methods can be chained depending on the return value.
// x = arr.slice(1, 4).reverse().toString().charAt(0);

// console.log(x);
//bài 3
// let x;

// const arrnum1 = ['1', '2', '3'];
// const arrnum2 = ['4', '5', '6'];

// // Nesting arrays

// // Nesting berries inside of fruits
// fruits.push(arrnum1);

// // Now we can access 'blueberry' with the following
// x = arrnum1[3][1];

// // Create a new variable and nest both arrays
// const allnum = [arrnum1, arrnum2];

// x = allnum[1][2];

// // concat() - Concatenate arrays
// x = arrnum1.concat(arrnum2);

// // spread operator (...) - Concatenate with
// x = [...arrnum1, ...arrnum2];

// // flat() - Flatten an array
// const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
// x = arr.flat();

// // Static methods of Array object

// // isArray() - Check is is an array
// x = Array.isArray(fruits);

// // from() - Create an array from an array like value
// x = Array.from('12345');

// // of() - Create an array from a set of values
// const a = 1;
// const b = 2;
// const c = 3;

// x = Array.of(a, b, c);

// console.log(x);
//Bài 4
// const arr = [1, 2, 3, 4, 5];

//   arr.unshift(0);
//   arr.push(6);
//   arr.reverse();

//   console.log(arr);
// const arr1 = [1, 2, 3, 4, 5];
// const arr2 = [5, 6, 7, 8, 9, 10];


// const arr3 = arr1.slice(0, 4).concat(arr2);

// console.log(arr3); 


// const arr4 = [...arr1, ...arr2];
// arr4.splice(4, 1);

// console.log(arr4); 
//Bài 5
// let x;

// // Creating an object
// tạo đối tượng
// const person = {
//   name: 'John Doe',
//   age: 30,
//   isAdmin: true,
//   address: {
//     street: '123 Main st',
//     city: 'Boston',
//     state: 'MA',
//   },
//   hobbies: ['music', 'sports'],
// };

// // Accessing object properties
//truy cập vào thuộc tính đối tượng
// x = person.name;
// x = person['age']; 
// x = person.address.state;
// x = person.hobbies[0];

// // Updating properties
//Câpj nhật thuộc tính
// person.name = 'Do Thai Nam';
// person['isAdmin'] = false;

// // Deleting properties
//Xóa thuộc tính
// delete person.age;

// // Create new properties
// person.hasChildren = true;

// // Add functions
// thêm func
// person.greet = function () {
//   console.log(`Hello, my name is ${this.name}`);
// };

// person.greet();

// // Keys with multiple words
// const person2 = {
//   'first name': 'Do',
//   'last name': 'Nam',
// };

// x = person2['first name'];

// console.log(x);
//bài 7
// Setting object properties with the same name as a variable
const firstName = 'John';
const lastName = 'Doe';
const age = 30;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.age);

// Destructuring object properties

const todo = {
  id: 1,
  title: 'Take out trash',
  user: {
    name: 'John',
  },
};

const {
  id: todoId, // rename id to todoId
  title,
  user: { name }, // destructuring multiple levels
} = todo;

console.log(todoId);

// Destructuring arrays & using the rest/spread operator
const numbers = [23, 67, 33, 49, 52];

const [first, second, ...rest] = numbers;

console.log(first, second, rest);