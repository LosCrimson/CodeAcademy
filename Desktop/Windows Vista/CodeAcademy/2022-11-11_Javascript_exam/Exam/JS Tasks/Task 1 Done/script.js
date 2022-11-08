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

    function get_kilograms()
    {
    let kilograms = document.getElementById("search").value;
    console.log(kilograms);
    return kilograms
    }

    function convert_to_lb(kilos)
    {
        let lb = +kilos * 2.2046;
        return lb;
    }
    function convert_to_g(kilos)
    {
        let g = +kilos * 0.001;
        return g;
    }
    function convert_to_oz(kilos)
    {
        let oz = +kilos * 35.274;
        return oz;
    }

    function convert_all()
    {
        console.log(convert_to_lb(get_kilograms()));
        console.log(convert_to_g(get_kilograms()));
        console.log(convert_to_oz(get_kilograms()));
    }
    
    function logSubmit(event) 
    {
        log.textContent = "Kilograms to pounds: " + convert_to_lb(get_kilograms()) + " Kilograms to grams: " + convert_to_g(get_kilograms()) + " Kilograms to ounces: " + convert_to_oz(get_kilograms());
        convert_all();
        event.preventDefault();
    }

    const form = document.querySelector('form');
    const log = document.getElementById('output');
    form.addEventListener('submit', logSubmit);

    // document.querySelector("form").addEventListener("submit", convert_all());
    // document.getElementById("search").addEventListener("input", get_kilograms); 

}