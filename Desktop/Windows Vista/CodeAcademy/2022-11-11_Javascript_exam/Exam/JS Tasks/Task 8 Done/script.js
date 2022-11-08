/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

    class Calculator
    {
        constructor(a, b)
        {
        this.a = a;
        this.b = b;
        }

        sum()
        {
            return this.a+this.b
        }

        subtraction()
        {
            return this.a-this.b
        }

        multiplication(a, b)
        {
            return this.a*this.b
        }

        division(a, b)
        {
            return this.a/this.b
        }
    }

    const object_1 = new Calculator(5,354);
    const object_2 = new Calculator(6,54);
    const object_3 = new Calculator(8,2);
    const object_4 = new Calculator(15,65);

    console.log("Let's see if the class works!");
    console.log("");
    console.log("Sum: " + "object_1: " + object_1.sum() + " object_2: " + object_2.sum() + " object_3: " + object_3.sum() +" object_4: " + object_4.sum());
    console.log("Subtarcion: " + "object_1: " + object_1.subtraction() + " object_2: " + object_2.subtraction() + " object_3: " + object_3.subtraction() +" object_4: " + object_4.subtraction());
    console.log("Multiplication: " + "object_1: " + object_1.multiplication() + " object_2: " + object_2.multiplication() + " object_3: " + object_3.multiplication() +" object_4: " + object_4.multiplication());
    console.log("Divisions: " + "object_1: " + object_1.division() + " object_2: " + object_2.division() + " object_3: " + object_3.division() +" object_4: " + object_4.division());
    console.log("");
    console.log("This is the values of each obejct: " + "object_1: " + Object.entries(object_1) + " object_2: " + Object.entries(object_2) + " object_3: " + Object.entries(object_3) +" object_4: " + Object.entries(object_4));

}