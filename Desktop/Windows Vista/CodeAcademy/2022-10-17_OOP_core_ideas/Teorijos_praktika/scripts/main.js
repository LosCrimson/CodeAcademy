console.log("Hullo");

window.onload=function(){

//-------------------------------------------------------------------------------
//Presentation

let car = 
{
    name : "foat",
    model: "500",
    weight: "850",
    color: "white",
    starts : function(){},
    drive : function(){},
    stop : function (){},
}

//-------------------------------------------------------------------------------
//Is it possible to create functions A and B so that new A() == new B()?

let obj = {};

function A() { return obj; }
function B() { return obj; }

let a = new A();
let b = new B();

alert( a == b ); // true

//-------------------------------------------------------------------------------
// Create a constructor function Accumulator(startingValue).

// Object that it creates should:

// Store the “current value” in the property value. The starting value is set to 
// the argument of the constructor startingValue.
// The read() method should use prompt to read a new number and add it to value.
// In other words, the value property is the sum of all user-entered values with 
// the initial value startingValue.

// Here’s the demo of the code:

function Accumulator(startingValue)
{
    this.value = startingValue;
    this.read = function() 
    {
       this.value += +prompt("Enter number please: ", 0);
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

//-------------------------------------------------------------------------------
// Create a constructor function Calculator that creates objects with 3 methods:

// read() prompts for two values and saves them as object properties with names a 
//and b respectively.
// sum() returns the sum of these properties.
// mul() returns the multiplication product of these properties.
// For instance:

function Calculator()
{
    this.a = a;
    this.b = b;
    this.read = function()
    {
        this.a = +prompt("a value", 0);
        this.b = +prompt("b value", 0);
    };
    this.sum = function()
    {
        let sum = this.a + this.b;
        return sum;
    };
    this.mul = function()
    {
        let mul = this.a * this.b;
        return mul;
    };
}

let calculator = new Calculator();
calculator.read();

alert( "Sum=" + calculator.sum() );
alert( "Mul=" + calculator.mul() );

//-------------------------------------------------------------------------------

    class Movie
    {
        constructor(name, year, director, budget, income)
        {
            this.name = name;
            this.year = year;
            this.director = director;
            this.budget = budget;
            this.income = income;
        }

        getIntroduction()
        {
            return this.name + " " + this.year + " " + this.director;
        }
        getProfit()
        {
            return this.budget -= this.income;
        }
    }

    const Movie1 = new Movie("John die at the end", 2008, "unknown", 50000, 500000);
    const Movie2 = new Movie("Scary movie", 2001, "unknown", 515600, 90125160);

    console.log(Movie1.getIntroduction());
    console.log(Movie1.getProfit());

    console.log(Movie2.getIntroduction());
    console.log(Movie2.getProfit());
}