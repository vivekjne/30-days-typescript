"use strict";
exports.__esModule = true;
var outputFormatter_1 = require("../helpers/outputFormatter");
var isDone = false;
console.log(isDone);
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
var color = "blue";
color = "red";
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + "\nI'll be " + (age + 1) + " years old next month.\n";
console.log(sentence);
var list = [1, 2, 3];
var list2 = [1, 2, 3];
var tuple1;
tuple1 = ["hello", 10];
console.log(tuple1);
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c1 = Color.Green;
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
var c2 = Color.Blue;
outputFormatter_1.outputFormatter({ c1: c1, c2: c2, Color: Color[2] });
//# sourceMappingURL=basic-types.js.map