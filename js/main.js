// Uyga vazifa ////

// String //
// N1 //
// String.prototype.trm = function () {
//   let start = 0,
//     end = this.length - 1;
//   while (start <= end && this[start] === " ") start++;
//   while (end >= start && this[end] === " ") end--;
//   return this.substring(start, end + 1);
// };
// let greeting = "   Hello world!  ";
// console.log(greeting.trm());

// N2 //
// String.prototype.upperCase = function () {
//   let str = "";
//   for (let i = 0; i < this.length; i++) {
//     let code = this[i].codePointAt();
//     if (code >= 97 && code <= 122) {
//       str += String.fromCharCode(code - 32);
//     } else {
//       str += this[i];
//     }
//   }
//   return str;
// };

// let greeting = "hello world! A new world!";
// console.log(greeting.upperCase());

// N3 //
// String.prototype.has = function (substring) {
//   for (let i = 0; i <= this.length - substring.length; i++) {
//     let match = true;
//     for (let j = 0; j < substring.length; j++) {
//       if (this[i + j] !== substring[j]) {
//         match = false;
//         break;
//       }
//     }
//     if (match) return true;
//   }
//   return false;
// };
// let greeting = "Hello world!";
// console.log(greeting.has("ell"));

// N4 //
// String.prototype.cut = function (start, end) {
//   if (end === undefined || end > this.length) {
//     end = this.length;
//   }
//   let result = "";
//   for (let i = start; i < end; i++) {
//     result += this[i];
//   }
//   return result;
// };
// let greeting = "Hello world!";
// console.log(greeting.cut(2, 7));

// N5 //
// String.prototype.rpt = function (count) {
//   let str = "";
//   for (let i = 0; i < count; i++) {
//     str += this;
//   }
//   return str;
// };
// let greeting = "Hello world!";
// console.log(greeting.rpt(3));

// Number //

// N1 //
// Number.prototype.fixed = function (digits) {
//   let factor = Math.pow(10, digits);
//   return Math.round(this * factor) / factor;
// };
// let num1 = 4.567;
// console.log(num1.fixed(1));

// N2 //
// Number.prototype.r = function () {
//   return Math.round(this);
// };
// let num1 = 10.492;
// console.log(num1.r());

// N3 //
// Number.prototype.i = function () {
//   let sqrt = Math.sqrt(this);
//   return sqrt === Math.floor(sqrt);
// };
// let num1 = 25;
// console.log(num1.i());

// N4 //
// Number.prototype.count = function () {
//   let n = Math.abs(this);
//   return n.toString().length;
// };
// let num1 = 12345;
// console.log(num1.count());

// N5 //
// Number.prototype.sum = function () {
//   let n = Math.abs(this);
//   let sum = 0;
//   while (n > 0) {
//     sum += n % 10;
//     n = Math.floor(n / 10);
//   }
//   return sum;
// };
// let num5 = 123;
// console.log(num5.sum());

// Array //

// N1 //
// Array.prototype.customMap = function (callback) {
//   let result = [];
//   for (let i = 0; i < this.length; i++) {
//     result.push(callback(this[i], i, this));
//   }
//   return result;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.customMap((x) => x * 2));

// N2 //
// Array.prototype.customEvery = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (!callback(this[i], i, this)) {
//       return false;
//     }
//   }
//   return true;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.customEvery((x) => x > 0));

// N3 //
// Array.prototype.customReduce = function (callback, initialValue) {
//   let accumulator = initialValue !== undefined ? initialValue : this[0];
//   let startIndex = initialValue !== undefined ? 0 : 1;
//   for (let i = startIndex; i < this.length; i++) {
//     accumulator = callback(accumulator, this[i], i, this);
//   }
//   return accumulator;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.customReduce((acc, x) => acc + x, 0));

// N4 //
// Array.prototype.customFindIndex = function (callback) {
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i], i, this)) {
//       return i;
//     }
//   }
//   return -1;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.customFindIndex((x) => x === 3));

// N5 //
// Array.prototype.customSplice = function (start, deleteCount, ...items) {
//   let removed = [];
//   let remaining = [];

//   for (let i = 0; i < this.length; i++) {
//     if (i >= start && i < start + deleteCount) {
//       removed.push(this[i]);
//     } else {
//       remaining.push(this[i]);
//     }
//   }

//   this.length = start;

//   for (let i = 0; i < items.length; i++) {
//     this.push(items[i]);
//   }

//   for (let i = start; i < remaining.length + start; i++) {
//     this.push(remaining[i - start]);
//   }

//   return removed;
// };
// let arr = [1, 2, 3, 4, 5];
// console.log(arr.customSplice(1, 2, 6, 7));

// Constructorlar //

// N1 //
// function Animal(name, speed, limitAge) {
//   this.name = name;
//   this.speed = speed;
//   this.limitAge = limitAge;
// }

// Animal.prototype.info = function () {
//   return `Name: ${this.name}, Speed: ${this.speed}, Limit Age: ${this.limitAge}`;
// };

// let animal = new Animal("Tom", 10, 6);
// console.log(animal.info());

// N2 //
// function Student(name, course, years, university) {
//   this.name = name;
//   this.course = course;
//   this.years = years;
//   this.university = university;
// }

// Student.prototype.leftYears = function () {
//   return `Years left: ${4 - this.years}`;
// };

// let student = new Student("Jahongir", "Computer Science", 2, "TATU");
// console.log(student.leftYears());

// N3 //
// function Person(name, age, currentYear) {
//   this.name = name;
//   this.age = age;
//   this.currentYear = currentYear;
// }

// Person.prototype.getBirthYear = function () {
//   return this.currentYear - this.age;
// };

// let person = new Person("Bahodir", 30, 2024);
// console.log(person.getBirthYear());

// N4 //
// function Employee(name, salary, workName) {
//   this.name = name;
//   this.salary = salary;
//   this.workName = workName;
// }

// Employee.prototype.increaseSalary = function (percent) {
//   return this.salary + (this.salary * percent) / 100;
// };

// let employee = new Employee("Abdusamad", 5000000, "IT programmer");
// console.log(employee.increaseSalary(10));

// N5 //
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
}

Rectangle.prototype.getArea = function () {
  return this.width * this.height;
};

Rectangle.prototype.getPerimeter = function () {
  return 2 * (this.width + this.height);
};

let rectangle = new Rectangle(10, 5);
console.log(rectangle.getArea());
console.log(rectangle.getPerimeter());
