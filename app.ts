let fullName: string = "John Doe"; // This is a string
let age: number = 30; // This is a number
let isEmployed: boolean = true; // This is a boolean


const salary: number = 50000; // This is a constant number
const bonus : number = 5000; // This is a constant number
const totalSalary: number = salary + bonus; // This is a constant number

console.log(totalSalary); // This is a string


function loading(): void {
    console.log("Loading...");
}

loading(); // This is a string


function getName(firstName : string, lastName: string): void {
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
    totalSalary: function() {

        return this.salary + this.bonus;
    }
}

function getFullName (person: { firstName: string, lastName: string }): string {
    return `${person.firstName} ${person.lastName}`;
}

console.log(getFullName(person)); // This is a string