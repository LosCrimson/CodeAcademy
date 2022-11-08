/* ------------------------------ TASK 7 -----------------------------------
Turimas "audi" objektas.

Parašykite funkciją "showObjectKeys", kuri kaip argumentą priims objektą 
ir grąžins visus jo "key" masyve.
-------------------------------------------------------------------------- */
console.log("Hej"); // Programmer signature :P

window.onload=function(){ //onload function so that would not encounter issues with laoding script before the page loads

const audi = {
  make: 'audi',
  model: 'A6',
  year: 2005,
  color: 'white',
};

function showObjectKeys(obj)
{
  const key_array = Object.keys(obj);                     // Returns the keys as ann array only thing that was done was that it's value was assigned to new array.  
  console.log("All the keys in an array: " + key_array);
  return key_array;
}

showObjectKeys(audi)

}