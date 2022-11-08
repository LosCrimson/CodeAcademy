/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads


    document.getElementById("btn__element").addEventListener("click", raise_number); //Listens for "button" click on click does the function.

    function raise_number()
    {
        console.log("Hello");
        let button_value = document.getElementById("btn__state").textContent;
        button_value++;
        document.getElementById("btn__state").innerHTML = button_value;
    } //has a log for testing in the terminal. Just takes the content of the div and adds 1.


}