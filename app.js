"use strict";
let fullName = "John Doe"; // This is a string
let age = 30; // This is a number
let isEmployed = true; // This is a boolean
const salary = 50000; // This is a constant number
const bonus = 5000; // This is a constant number
const totalSalary = salary + bonus; // This is a constant number
console.log(totalSalary); // This is a string
function loading() {
    console.log("Loading...");
}
loading(); // This is a string
function getName(firstName, lastName) {
    console.log(`Hello ${firstName} ${lastName}`);
}
getName("John", "Doe"); // This is a string
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    salary: 50000,
    bonus: 5000,
    totalSalary: function () {
        return this.salary + this.bonus;
    }
};
function getFullName(person) {
    return `${person.firstName} ${person.lastName}`;
}
console.log(getFullName(person)); // This is a string
// array type
const cars = ["BMW", "Mercedes", "Audi"];
const number = [1, 2, 3, 4, 5];
const bools = [true, false, true, false];
const upperCaseCars = cars
    .filter((car) => car.startsWith("B"))
    .map((car) => car.toUpperCase());
console.log(upperCaseCars); // This is a string
const result = number.map((num) => num * 2);
// union type
const unionType = [1, 'hello']; // This is a union type array
// tuple type
const tuple = ['John', 30]; // This is a tuple type
const tupleArray = [
    ['John', 30],
    ['Jane', 25],
    ['Doe', 40]
];
// enum type
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
const color = Color.Red; // This is an enum type
const color2 = Color.Green; // This is an enum type
const color3 = Color.Blue; // This is an enum type
const color4 = Color.Red; // This is an enum type
const color5 = Color.Green; // This is an enum type
// readonly property
let admins = ["John", "Jane", "Doe"]; // This is a readonly property
// admins.push("Smith"); // This will give an error
// admins[0] = "Smith"; // This will give an error
// admins.pop(); // This will give an error
// admins.shift(); // This will give an error
// admins.unshift("Smith"); // This will give an error
// admins.splice(0, 1); // This will give an error
// admins.sort(); // This will give an error
// admins.reverse(); // This will give an error
// admins.fill("Smith"); // This will give an error
const admin = { name: "John", age: 30 }; // This is a readonly property
var Direction;
(function (Direction) {
    Direction["Up"] = "UP";
    Direction["Down"] = "DOWN";
    Direction["Left"] = "LEFT";
    Direction["Right"] = "RIGHT";
})(Direction || (Direction = {}));
const direction = Direction.Up; // This is an enum type
const direction2 = Direction.Down; // This is an enum type
const direction3 = Direction.Left; // This is an enum type
const direction4 = Direction.Right; // This is an enum type
