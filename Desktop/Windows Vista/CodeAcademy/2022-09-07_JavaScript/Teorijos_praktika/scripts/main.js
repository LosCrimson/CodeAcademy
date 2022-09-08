console.log("Priviet Warld");

function myFunction() {
    let number;
    alert("Ready to learn more?");
    let person = prompt("Enter a number:", "5");
    if (person == null || person == "") {
      text = "User cancelled the prompt.";
    } else {
      number = person ;
    }
    document.getElementById("demo").innerHTML = number;
}

let name = "";
let birthDay = "geguzes 12";

name = prompt("Ivesk varda auksini karda:");
console.log(name + " Yra gimes " + birthDay);

let alga;
let Darbingizmones = 1761463;
let Lietuvosbiudzetas = 8487300000;
let procentai;

alga = prompt("Bazinis užmokescio dydis");
procentai =  (alga * Darbingizmones) / (Lietuvosbiudzetas / 100);
document.write(procentai + "%");