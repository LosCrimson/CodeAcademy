console.log("Hullo");

// 1. Parašykite funkciją, kuri suskaičiuos ir išspausdins balses žodyje.

let word = "something"
console.log(word.length);
function vowels_counter(input) {
    let vowel_count = 0;
    for(let i = 0; i < input.length; i++)
    {
        if(input.charAt(i) == "a" || input.charAt(i) == "e" || input.charAt(i) == "i" || input.charAt(i) == "o" || input.charAt(i) == "u"  || input.charAt(i) == "y")
        {
            vowel_count++
        }
    }
    return vowel_count;
}

let value = vowels_counter(word);
console.log(value);

// 2. Parašykite 2 funkcijas, viena turi konvertuoti celsijų į farenheitą, kita farenheitą į celsijų.

window.onload=function(){
        document.getElementById("C_convert").addEventListener("click", myFunction_Celcius);

        function myFunction_Celcius() {                     // changes h1 to reflect farenheith
            const Celcius = document.getElementById("C_input").value;
            document.getElementById("F_value").innerHTML = Celcius_converter(Celcius);
          }

        function Celcius_converter(Celcius){        //Converts Celcius to Farenheith
            let Converted = (Celcius * 9/5) +32;
            return Converted
        }

        document.getElementById("F_convert").addEventListener("click", myFunction);

        function myFunction() {                     // changes h1 to reflect farenheith
            const Farenheith = document.getElementById("F_input").value;
            document.getElementById("C_value").innerHTML = Farenheith_converter(Farenheith);
          }

        function Farenheith_converter(Farenheith){
            let Converted = (Farenheith - 32) * 5/9;
            return Converted
        }
}