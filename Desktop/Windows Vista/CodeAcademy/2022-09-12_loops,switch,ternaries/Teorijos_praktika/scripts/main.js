console.log("Hullo");

let Weekday = prompt("Enter week day in number", "No day");
switch (Weekday) 
{
    case "1":
        console.log("It is Monday");
        break;
    case "2":
        console.log("It is Tuesday");
        break;
    case "3":
        console.log("It is Wednesday");
        break;
    case "4":
        console.log("It is Thursday");
        break;
    case "5":
        console.log("It is Friday");
        break;
    case "6":
        console.log("It is Saturday");
        break;
    case "7":
        console.log("It is Sunday");
        break;
    default:
        console.log("no option was coorect");
}


let Month = prompt("Enter month in number", "No month");
let year = prompt("Enter year in number", "No year");
let Febdays;
if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
    Febdays = "28";
} else {
    Febdays = "29";
}
switch (Month) 
{
    case "1":
        console.log("January has 31 days");
        break;
    case "2":
        console.log("February has " + Febdays + " days in" + year);
        break;
    case "3":
        console.log("March has 31 days");
        break;
    case "4":
        console.log("April has 30 days");
        break;
    case "5":
        console.log("May has 31 days");
        break;
    case "6":
        console.log("June has 30 days");
        break;
    case "7":
        console.log("July has 31 days");
        break;
    case "8":
        console.log("August has 31 days");
        break;
    case "9":
        console.log("September has 30 days");
        break;
    case "10":
        console.log("October has 31 days");
        break;
    case "11":
        console.log("November has 30 days");
        break;
    case "12":
        console.log("December has 31 days");
        break;
    default:
        console.log("no option was coorect");
}

let age = 18;
age >= 18 ? console.log("Adult") : console.log("Not adult");

let normalprice = 5;
let cardownerprice = 2;
let cardowner = true;
cardowner == true ? console.log(cardownerprice): console.log(normalprice);

let Any_Number = 0;
Any_Number = prompt("Enter any number", "0");
for (let i = 0; i < Any_Number; i++)
{
    let sum = parseInt(Any_Number) + parseInt(i);
    console.log("Sum is for loop:" + i + " is " + sum);
}