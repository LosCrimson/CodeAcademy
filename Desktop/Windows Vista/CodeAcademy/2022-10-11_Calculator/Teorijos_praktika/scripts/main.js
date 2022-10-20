console.log("Hullo");

window.onload=function(){

// document.querySelectorAll("button").forEach(occurence => 
//     {
//         let id = occurence.getAttribute("id");
//         let content = document.getElementById(id).innerHTML;
//         occurence.addEventlistenter("click", function() 
//             {
//                 console.log("was clicked " + content);
//             }
//         );
//     }
// );


    // document.querySelectorAll("button").onclick = function() {myFunction()};

    //Tried to make it smart to not overspam code but time is limited 
    //so wasted to much time will do dumb way.

    // document.getElementById("One").addEventListener("click", Send_to_Input);
    // function Send_to_Input()
    // {
    //     document.getElementById("Input").value += document.getElementById("One").innerText;
    // }

    //some testing that was done.

    class Calculator
    {
        constructor()
        {
            this.equation = "";
            // this.plus = "+";
            // this.minus = "-";
            // this.division = "/";
            // this.multiplication = "*";
            //Was testing if this would work but created an object inside calculate instead.
            this.value1;
            this.value2;
            this.sign;
        }

        // still learning, most likely this will not be used.

        Listen_to_input()
        {
            document.querySelectorAll("button").forEach(el => el.addEventListener("click", this.Change_equation_variable));
            document.getElementById("Input").addEventListener("input", this.Change_equation_variable);
        }
        Change_equation_variable()
        {
            this.equation = document.getElementById("Input").value;
            return this.equation;
            // console.log(this.equation + " this");
            // was used for testing the code if it works and write correct format form input element.
        }
        //Forgot to add this to method so kept getting reference errors

        Insert_zero()
        {
            document.getElementById("Input").value += document.getElementById("Zero").innerText;
        }
        Insert_one()
        {
            document.getElementById("Input").value += document.getElementById("One").innerText;
        }
        Insert_two()
        {
            document.getElementById("Input").value += document.getElementById("Two").innerText;
        }
        Insert_three()
        {
            document.getElementById("Input").value += document.getElementById("Three").innerText;
        }
        Insert_four()
        {
            document.getElementById("Input").value += document.getElementById("Four").innerText;
        }
        Insert_five()
        {
            document.getElementById("Input").value += document.getElementById("Five").innerText;
        }
        Insert_six()
        {
            document.getElementById("Input").value += document.getElementById("Six").innerText;
        }
        Insert_seven()
        {
            document.getElementById("Input").value += document.getElementById("Seven").innerText;
        }
        Insert_eigth()
        {
            document.getElementById("Input").value += document.getElementById("Eight").innerText;
        }
        Insert_nine()
        {
            document.getElementById("Input").value += document.getElementById("Nine").innerText;
        }


        Listen_to_zero()
        {
            document.getElementById("Zero").addEventListener("click", this.Insert_zero);
        }
        Listen_to_one()
        {
            document.getElementById("One").addEventListener("click", this.Insert_one);
        }
        Listen_to_two()
        {
            document.getElementById("Two").addEventListener("click", this.Insert_two);
        }
        Listen_to_three()
        {
            document.getElementById("Three").addEventListener("click", this.Insert_three);
        }
        Listen_to_four()
        {
            document.getElementById("Four").addEventListener("click", this.Insert_four);
        }
        Listen_to_five()
        {
            document.getElementById("Five").addEventListener("click", this.Insert_five);
        }
        Listen_to_six()
        {
            document.getElementById("Six").addEventListener("click", this.Insert_six);
        }
        Listen_to_seven()
        {
            document.getElementById("Seven").addEventListener("click", this.Insert_seven);
        }
        Listen_to_eight()
        {
            document.getElementById("Eight").addEventListener("click", this.Insert_eigth);
        }
        Listen_to_nine()
        {
            document.getElementById("Nine").addEventListener("click", this.Insert_nine);
        }



        Insert_division()
        {
            // console.log(this.equation.charAt(this.equation.length - 2) + " what char is it?");
            //chart at is working but if is not working?
            // console.log(typeof this.equation + " what is this?");
            //so it is string why is charat not working?
            if (this.equation.charAt[this.equation.length - 2] === '/') 
                {
                console.log("return nothing");
                }
            else
            {
            document.getElementById("Input").value += " " + document.getElementById("Division").innerText + " ";
            }
            // console.log(this.equation + " is it working");
            //Problem i had here was the reading of object calculator_test methods was in the wrong order input reading was lest so i kept getting errors
        }
        Listen_to_division()
        {
            document.getElementById("Division").addEventListener("click", this.Insert_division);
        }
        Multiply_numbers()
        {

        }
        Add_numbers()
        {
            
        }
        Subtract_numbers()
        {
            
        }
        Equals()
        {
            let equation_array = this.equation.split(" ");
            console.log(equation_array[0]);
            console.log(equation_array[1]);
            console.log(equation_array[2]);
            this.value1 = equation_array[0];
            this.sign = equation_array[1];
            this.value2 = equation_array[2];
            // let answer = this.Calculate;
            console.log(this.Calculate);
            console.log("equation_array[2]");
            // return answer;
        }
        Calculate()
        {
            console.log("hello?");
            // let operators = 
            // {
            //     "/" : function(a,b){return a/b}
            // }
            // console.log(operators[this.sign](this.value1, this.value2));
            // return operators[this.sign](this.value1, this.value2);
        }
        Listen_to_equals()
        {
            document.getElementById("Equals").addEventListener("click", this.Equals);
            //Listens to button and the performs a method.
        }
        Display_result()
        {
            document.getElementById("Result").value = this.Equals;
            //Displays result in Result div element this is mostly for equals.
        }
        Positive_Negative()
        {

        }
        
    }

    const calculator_test = new Calculator();

    calculator_test.Listen_to_input();
    calculator_test.Listen_to_zero();
    calculator_test.Listen_to_one();
    calculator_test.Listen_to_two();
    calculator_test.Listen_to_three();
    calculator_test.Listen_to_four();
    calculator_test.Listen_to_five();
    calculator_test.Listen_to_six();
    calculator_test.Listen_to_seven();
    calculator_test.Listen_to_eight();
    calculator_test.Listen_to_nine();
    calculator_test.Listen_to_division();
    calculator_test.Listen_to_equals();


}