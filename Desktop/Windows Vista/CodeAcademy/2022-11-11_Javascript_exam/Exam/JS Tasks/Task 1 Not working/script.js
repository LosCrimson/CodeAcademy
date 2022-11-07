/* ------------------------------ TASK 1 ----------------------------
Parašykite JS kodą, kuris leis vartotojui įvesti svorį kilogramais ir
pamatyti jo pateikto svorio kovertavimą į:
1. Svarus (lb) | Formulė: lb = kg * 2.2046
2. Gramus (g) | Formulė: g = kg / 0.0010000
3. Uncijos (oz) | Formulė: oz = kg * 35.274

Pastaba: rezultatas turi būti matomas pateikus formą ir atvaizduojamas
<div id="output"></div> viduje. Gautus atsakymus stilizuokite naudojant CSS;
------------------------------------------------------------------- */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

    class Converter 
    {
        constructor(kilos)
        {
            this.kilos = kilos;
        }

        convert_to_lb()
        {
            let lb = +this.kilos * 2.2046;
            return lb;
        }
        convert_to_g()
        {
            let g = +this.kilos * 0.0010000;
            return g;
        }
        convert_to_oz()
        {
            let oz = +this.kilos * 35.274;
            return oz;
        }

        read_out()
        {
            console.log("Pounds value is = ", this.convert_to_lb());
            console.log("Pounds value is = ", this.convert_to_g());
            console.log("Pounds value is = ", this.convert_to_oz());
        }
    }

    // document.getElementById("submit-btn").addEventListener("click", create_object()) //listens to button click
    
    // function create_object()
    // {
    // console.log(document.getElementById("search").value);
    // const converter_1 = new Converter
    // (
    //     document.getElementById("search").value,
    // )
    // converter_1.read_out;
    // }

    document.getElementById("search").addEventListener("input", (event) => {
        
        const converter_1 = new Converter(document.getElementById("search").value,);
        console.log(document.getElementById("search").value)
        document.getElementById("submit-btn").addEventListener("click", converter_1.read_out);
    });
    
  

}