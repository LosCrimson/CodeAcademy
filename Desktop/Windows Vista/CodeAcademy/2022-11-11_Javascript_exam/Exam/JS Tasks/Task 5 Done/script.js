/* ------------------------------ TASK 5 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "filterDogOwners" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins "users", kurie turi augintinį.
2. funkcija "filterAdults" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins masyvą su "users", kurie yra pilnamečiai.
-------------------------------------------------------------------------- */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

const users = [
  { id: '1', name: 'John Smith', age: 20, hasDog: true },
  { id: '2', name: 'Ann Smith', age: 24, hasDog: false },
  { id: '3', name: 'Tom Jones', age: 31, hasDog: true },
  { id: '4', name: 'Rose Peterson', age: 17, hasDog: false },
  { id: '5', name: 'Alex John', age: 25, hasDog: true },
  { id: '6', name: 'Ronald Jones', age: 63, hasDog: true },
  { id: '7', name: 'Elton Smith', age: 16, hasDog: true },
  { id: '8', name: 'Simon Peterson', age: 30, hasDog: false },
  { id: '9', name: 'Daniel Cane', age: 51, hasDog: true },
];



function filterDogOwners(array)
{

  //---------------------------------------------------
  // array.forEach(() => {
  //   if (array.hasDog = true) 
  //   {
  //     console.log(array.name + " has dog.");
  //   }
  // });
  //--------------------------------------------------
  //first attempt returend undefined so scrapped it. Here only to show to myselg th thought process
  //--------------------------------------------------

  for(let i in array)
  {
    if(array[i].hasDog == true)
    {
      console.log(array[i].name + " has dog.");
    }
  }
  // Just loops the array and check if boolean has dog is true.
}

function filterAdults(array)
{
  for(let i in array)
  {
    if(array[i].age >= 21)
    {
      console.log(array[i].name + " is " + array[i].age + " hence hes is of legal drinking age.");
    }
    if (array[i].age >= 18 && array[i].age < 21) {
      console.log(array[i].name + " is " + array[i].age + " hence hes is of legal age but cannot consume alcohol.");
    }
  }
//Just loops the array and check if user is of age.
}

filterDogOwners(users);
filterAdults(users);

}