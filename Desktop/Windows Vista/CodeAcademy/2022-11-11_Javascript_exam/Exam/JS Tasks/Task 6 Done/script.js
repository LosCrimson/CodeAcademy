/* ------------------------------ TASK 6 -----------------------------------
Turimas "users" masyvas. 

Parašykite funckijas, kurios atliks nurodytas užduotis:
1. funkcija "getUserAverageAge" - kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" amžiaus vidurkį kaip skaičių.
2. funkcija "getUsersNames" -  kaip argumentą priims masyvą ir duoto masyvo 
atveju grąžins visų "users" vardus naujame masyve pvz., ['John Smith', 'Ann Smith'..].
-------------------------------------------------------------------------- */

console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

const users = [
  { id: '1', name: 'John Smith', age: 20 },
  { id: '2', name: 'Ann Smith', age: 24 },
  { id: '3', name: 'Tom Jones', age: 31 },
  { id: '4', name: 'Rose Peterson', age: 17 },
  { id: '5', name: 'Alex John', age: 25 },
  { id: '6', name: 'Ronald Jones', age: 63 },
  { id: '7', name: 'Elton Smith', age: 16 },
  { id: '8', name: 'Simon Peterson', age: 30 },
  { id: '9', name: 'Daniel Cane', age: 51 },
];

function getUserAverageAge(arr)
{
  let sum = 0;
  let last_id = 0;                               //create some variable for usage in the loop
  for(let i in arr)
  {
    sum += arr[i].age;                           //Adds age to a sum variable so we would get all ages sum
    last_id++;                                   //There is probably a better solution to get the ammount of id's
  }
  sum = sum / last_id;                           //Divides the sum of all ages with the ammount of users
  console.log("The average age is: " + sum);  
  return sum;
}

function getUsersNames(arr)
{
  const name_array = [];                        //Makes a new array for later use
  for(let i in arr)
  {
    name_array.push(arr[i].name);               //Add name to the last position of the array
  }
  console.log("This is the new array for names: " + name_array);
  return name_array;
}

getUserAverageAge(users);
getUsersNames(users);

}