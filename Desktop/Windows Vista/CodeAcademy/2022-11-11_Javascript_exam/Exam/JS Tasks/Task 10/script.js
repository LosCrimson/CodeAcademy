/* ------------------------------ TASK 10 ---------------------------------------------------
Sutvarkykite užduoties "Task 10" esančius failus taip, kad veiktų žemiau pateiktos funkcijos.
-------------------------------------------------------------------------------------------- */

import {composition} from "./modules/math/composition.js";
import {division} from "./modules/math/division.js";
import {multiplication} from "./modules/math/multiplication.js";
import {substraction} from "./modules/math/subtraction.js";
import {one, two, three, four, five} from "./modules/numbers/numbers.js";
//In other related files made export on all variables and functions and here i just import them declaring varbiales, functions and file location.

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

let a = composition(one, four);
let b = division(four, two);
let c = substraction(three, two);
let d = multiplication(five, two);

console.log(a);
console.log(b);
console.log(c);
console.log(d);

}
