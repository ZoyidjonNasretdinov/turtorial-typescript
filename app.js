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
