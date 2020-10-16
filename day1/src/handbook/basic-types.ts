import { outputFormatter } from "../helpers/outputFormatter";

// boolean
let isDone: boolean = false;
console.log(isDone);

// number
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
// let big :bigint = 100n;

// string
let color: string = "blue";
color = "red";

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}
I'll be ${age + 1} years old next month.
`;

console.log(sentence);

// Array
let list: number[] = [1, 2, 3];

// generic array type
let list2: Array<number> = [1, 2, 3];
// outputFormatter(list, list2);
// tuple arrays
let tuple1: [string, number];
tuple1 = ["hello", 10];
console.log(tuple1);

// Enum
enum Color {
  Red,
  Green,
  Blue,
}

let c1: Color = Color.Green;

enum Color2 {
  Red = 1,
  Green = 2,
  Blue = 4,
}

let c2: Color = Color.Blue;

outputFormatter({ c1, c2, Color: Color[2] });
