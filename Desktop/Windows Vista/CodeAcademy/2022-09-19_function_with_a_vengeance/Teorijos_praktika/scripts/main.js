console.log("Hullo");

window.onload=function()
{

    //Check if removing else changes anythign. Hint it does not.

    document.getElementById("Presser0").addEventListener("click", checkAgea);
    document.getElementById("Presser1").addEventListener("click", checkAge1);
    document.getElementById("Presser2").addEventListener("click", checkAge2);
    document.getElementById("Presser3").addEventListener("click", min);
    document.getElementById("Presser4").addEventListener("click", pow);
    // document.addEventListener("click", checkAge3);
    // document.addEventListener("click", checkAge4);

    function checkAgea(age) {
        if (age > 18) {
        return true;
        } else {
        // ...
        return confirm('Did parents allow you?');
        }
    }

    //The following function returns true if the parameter age is greater than 18.
    //Otherwise it asks for a confirmation and returns its result.

    // function checkAge1(age) {
    //     if (age > 18) {
    //       return true;
    //     } else {
    //       return confirm('Did parents allow you?');
    //     }
    //   }

    // Rewrite it, to perform the same, but without if, in a single line.
    // Make two variants of checkAge:
    // Using a question mark operator ?
    // Using OR ||

    function checkAge1(age) {
        let result = age > 18 ? true : console.log("Yea a young fellow");
        alert(result);
    }

    function checkAge2(age) {
        return (age > 18) || confirm('Did parents allow you?');
    }

    // Write a function min(a,b) which returns the least of two numbers a and b.

    // For instance:

    // min(2, 5) == 2
    // min(3, -1) == -1
    // min(1, 1) == 1

    function min(a,b){
        a = document.getElementById("a").value;
        b = document.getElementById("b").value;
        parseInt(a);
        parseInt(b);
        let result = a < b ? a : b;
        return console.log(result);
    }

    // Write a function pow(x,n) that returns x in power n. Or, in other words,
    //  multiplies x by itself n times and returns the result.

    // pow(3, 2) = 3 * 3 = 9
    // pow(3, 3) = 3 * 3 * 3 = 27
    // pow(1, 100) = 1 * 1 * ...* 1 = 1
    // Create a web-page that prompts for x and n, and then shows the result of 
    // pow(x,n).
    
    // Run the demo
    
    // P.S. In this task the function should support only natural values of 
    // n: integers up from 1.

    function pow(x,n){
        x = document.getElementById("a").value;
        n = document.getElementById("b").value;
        parseInt(x);
        parseInt(n);
        console.log(n);
        if(a < 0 || n < 0)
        {
            alert("invalid numbers cannot be negative");
        }
        else
        {
            if(n == 0)
            {
                return alert("1");
            }
            else
            {
                    multiplication = x;
                    for (let index = 1; index < n; index++) 
                    {
                        multiplication = multiplication * x;                
                    }
                    return alert(multiplication);
            }
        }
    }

}