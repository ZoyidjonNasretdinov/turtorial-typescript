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



// tuple type
const tuple: [string, number] = ['John', 30]; // This is a tuple type
const tupleArray: [string, number][] = [
    ['John', 30],
    ['Jane', 25],
    ['Doe', 40]


];

// enum type
enum Color {
    Red = "RED",
    Green = "GREEN",
    Blue = "BLUE"
}
const color: Color = Color.Red; // This is an enum type
const color2: Color = Color.Green; // This is an enum type
const color3: Color = Color.Blue; // This is an enum type
const color4: Color = Color.Red; // This is an enum type
const color5: Color = Color.Green; // This is an enum type


// readonly property

let admins: readonly string[] = ["John", "Jane", "Doe"]; // This is a readonly property
// admins.push("Smith"); // This will give an error
// admins[0] = "Smith"; // This will give an error
// admins.pop(); // This will give an error
// admins.shift(); // This will give an error
// admins.unshift("Smith"); // This will give an error
// admins.splice(0, 1); // This will give an error
// admins.sort(); // This will give an error
// admins.reverse(); // This will give an error
// admins.fill("Smith"); // This will give an error
const admin: Readonly<{ name: string, age: number }> = { name: "John", age: 30 }; // This is a readonly property


enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

const direction: Direction = Direction.Up; // This is an enum type
const direction2: Direction = Direction.Down; // This is an enum type
const direction3: Direction = Direction.Left; // This is an enum type
const direction4: Direction = Direction.Right; // This is an enum type