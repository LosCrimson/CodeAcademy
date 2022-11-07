console.log("Hullo");

window.onload=function(){

//-----------------------------------------------------------------------------------
// What’s the output of the code below?

// let promise = new Promise(function(resolve, reject) {
//     resolve(1);
  
//     setTimeout(() => resolve(2), 1000);
//   });
  
//   promise.then(alert);

//Amswer is one.
//-----------------------------------------------------------------------------------
// The built-in function setTimeout uses callbacks. Create a promise-based alternative.

// The function delay(ms) should return a promise. That promise should resolve after ms 
// milliseconds, so that we can add .then to it, like this:

// function delay(ms) {
//     // your code
//     return new Promise(resolve => setTimeout(resolve, ms))
//   }
  
//   delay(3000).then(() => alert('runs after 3 seconds'));

//-----------------------------------------------------------------------------------
// Rewrite this example code from the chapter Promises chaining using async/await 
// instead of .then/catch:

// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       });
//   }
  
//   loadJson('https://javascript.info/no-such-user.json')
//     .catch(alert); // Error: 404

async function loadJson(url) 
{
    let response = await fetch(url);
    if (response.status == 200) {
        let json = await response.json(); // (3)
        return json;
      }
    
      throw new Error(response.status);
}

loadJson('https://javascript.info/no-such-user.json')
.catch(alert); // Error: 404

}

