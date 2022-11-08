/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, kuris vartotojui atėjus į tinklapį kreipsis į cars.json failą ir 
atvaizduos visus automobilių gamintojus bei pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.

Pastaba: Sukurta kortelė, kurioje yra informacija apie automobilį (brand), turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

const ENDPOINT = 'cars.json';


function show_cars()
{
    fetch
    (
        ENDPOINT, {method: "GET", headers: { 'Accept': 'application/json',}}        //Get the data from the JSON file
    )
    .then(response => response.json())                                              //Get the data in JSON format
    // .then(response => console.log(JSON.stringify(response)))
    .then((data) => {
        data.forEach(brand => {                                                     //loop all the data
        const markup = `<div><b>${brand.brand}:</b>  ${brand.models}</div> <br>`;   //make a variable and setup the formating for the info for later on when we insert the data into the div
        document.getElementById("output").insertAdjacentHTML("beforeend",markup);   //call the div and insert one of the array elements to the end of the div
        });
    })
}

show_cars();

}