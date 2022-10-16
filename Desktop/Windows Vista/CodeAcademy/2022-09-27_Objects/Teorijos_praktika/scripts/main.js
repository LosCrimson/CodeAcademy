console.log("Hullo");

window.onload=function(){

    // Here the function makeUser returns an object.

    // What is the result of accessing its ref? Why? 
    
    function makeUser() {
        return {
          name: "John",
          ref: this
        };
      }
      
      let user = makeUser();
      
      console.log( user.ref.name ); // What's the result?
      //undefined because it is being called as a method even though it is not this should never be used seems like.


//       Create an object calculator with three methods:

// read() prompts for two values and saves them as object properties with names a and b respectively.
// sum() returns the sum of saved values.
// mul() multiplies saved values and returns the result.

    let calculator = {
        read(){
            this.a= +prompt("PLease input value a: " , 5);
            this.b= +prompt("PLease input value b: " , 2);
        },
        sum(){
            let addition = this.a+this.b;
            return addition;
        },
        mul(){
            let multiplication = this.a*this.b;
            return multiplication;
        },
    };
    
    calculator.read();
    console.log( calculator.sum() );
    console.log( calculator.mul() );

// Modify the code of up, down and showStep to make the calls chainable, like this:

// ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0

    let ladder = {
        step: 0,
        up() {
        this.step++;
        return this;
        },
        down() {
        this.step--;
        return this;
        },
        showStep: function() { // shows the current step
        console.log( this.step );
        return this;
        }
    };

    ladder.up().up().down().showStep().down().showStep();

    // Create an empty object user.
    // Add the property name with the value John.
    // Add the property surname with the value Smith.
    // Change the value of the name to Pete.
    // Remove the property name from the object.

    let user1 = {
        name: "john",
        surname: "smith",
    };
    console.log(user1.name);
    user1.name = "Pete";
    console.log(user1.name);
    delete user1.name;
    console.log(user1.name);

    // Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

    // Should work like that:

    // let schedule = {};

    // alert( isEmpty(schedule) ); // true

    // schedule["8:30"] = "get up";

    // alert( isEmpty(schedule) ); // false

    let emptyness = {name: "jonas"};

    function isEmpty(obj){
        for (let key in obj){

            return false;
        }
        return true;
    }

    console.log(isEmpty(emptyness) + " empty");

    // We have an object storing salaries of our team:

    // let salaries = {
    // John: 100,
    // Ann: 160,
    // Pete: 130
    // }
    // Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

    // If salaries is empty, then the result must be 0.

    let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
    }

    function add_salaries(salaries){
        let sum = 0;
        if (isEmpty(salaries) == false) {
            for (let key in salaries){
               sum += salaries[key];
            }
            return sum;
        }
        else{
            return sum;
        }
    }

    console.log("Sum of salaries are: " + add_salaries(salaries));

    










}