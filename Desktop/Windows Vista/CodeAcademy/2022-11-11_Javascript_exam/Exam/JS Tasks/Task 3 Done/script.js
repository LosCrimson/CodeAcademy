/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
-------------------------------------------------------------------------- */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

const ENDPOINT = 'https://api.github.com/users';

document.getElementById("btn").addEventListener("click", show_users);                   //Listening for "button" click and the call function

function show_users()
{
    document.getElementById("output").innerHTML = "";                                   //Clear the div of any text that's not supposed to be there
    fetch(ENDPOINT).then((response) => {                                                //fetch the data from the url
        return response.json()                                                          //get response in JSON format
     }).then((data) => {                                                                //convert the JSON data into JAVASCRIPT format
        data.forEach(user => {                                                          //cycle through all the data so basically a for loop
            const markup = `<div>${user.login} " " ${user.avatar_url}</div>`;           //make a variable and setup the formating for the info for later on when we insert the data into the div
            document.getElementById("output").insertAdjacentHTML("beforeend",markup);   //call the div and insert one of the array elements to the end of the div
        });
        console.log(data)                                                               //log the API data to terminal just for myself
     })
}

}