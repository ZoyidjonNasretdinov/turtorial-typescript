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



// array type

const cars : string[] = ["BMW", "Mercedes", "Audi"];
const number : number[] = [1, 2, 3, 4, 5];
const bools : boolean[] = [true, false, true, false];

const upperCaseCars = cars
  .filter((car: string) => car.startsWith("B"))
  .map((car: string) => car.toUpperCase());

console.log(upperCaseCars); // This is a string



const result = number.map((num: number) => num * 2);


// union type

const unionType: (string | number)[] = [1, 'hello']; // This is a union type array