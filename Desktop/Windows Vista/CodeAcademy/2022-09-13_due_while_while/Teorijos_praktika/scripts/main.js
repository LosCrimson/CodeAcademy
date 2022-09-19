console.log("Hullo");

let text = "";
let text1 = "";

let i = 0;

do {

    text += i + "<br>";

    i++;

    console.log(text);
}

while (i < 5);


i = 0;
while(i<5){
    text1 += i + "<br>";

    i++;

    console.log(text1); 
}


// 1. Parašykite JavaScript loop kuri eis per skaičius nuo 0 
// iki 15. Kiekviename cikle, ji turėtų patikrinti, skaičius 
// lyginis ar ne
// ir išmes žinutę į ekraną, pvz.: "1 yra nelyginis, 2 yra 
// lyginis"

i=0;
while (i <= 15)
{
    i % 2 == 0 ? console.log(i + " Lyginis"): console.log(i + " Nelyginis");
    i++
}

// 2. Parašykite programą, kuri eis per skaičius nuo 1 iki 100.
//  Kai eina per skaičių, kuris dalinasi iš 3, į konsolę turėtų 
//  atspausdinti "Fizz",
// kuris dalinasi iš 5 - "Buzz", kuris dalinasi iš abiejų - 
// "FizzBuzz"

i = 1;
while(i <=100)
{
    if(i % 3 == 0 && i % 5 == 0)
    {
        console.log("FizzBuzz");
    }
    else
    {
        if(i % 5 == 0)
        {
            console.log("Buzz");
        }
        else
        {
            if(i % 3 == 0)
            {
                console.log("Fizz");
            } 
            else
            {
                console.log(i);
            }
        }
    }
    i++
}


// 3. Parašykite JavaScript loop, kuri suranda didžiausią 
// skaičių masyve

// var arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];

const arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];
i = 0;
let highest_number = 0;
while(i <= arr.length)
{
    if(arr[i] > highest_number)
    {
        highest_number = arr[i];
    }
    i++
}
console.log(highest_number);

// 1. Paspaudus mygtuką turetu pasikeisti šriftas, jo dydis ir paragrafo spalva.

function js_style(){
    let element = document.getElementById("text");
    element.style.fontFamily = "monospace";
    element.style.fontSize = "large";
    element.style.color = "blue";
}

// 2. Parašykite JavaScript funkciją, kuri iš formos ištrauks vardą ir pavardę.

function getFormvalue(){
    const form = document.getElementById("form1");
    const fname = form.elements["fname"];
    const lname = form.elements["lname"];
    let element1 = fname.value;
    let element2 = lname.value;
    alert(element1 + " " + element2);

    let table = document.querySelector("table tbody");
    table.innerHTML = "<tr><td>TOP</td><td>AA</td></tr>" + table.innerHTML;
    table.innerHTML += "<tr><td>BOTTOM</td><td>BB</td></tr>";
}

// 3. Parašykite JavaScript funkciją, kuri prideda eilutę į lentelę.
