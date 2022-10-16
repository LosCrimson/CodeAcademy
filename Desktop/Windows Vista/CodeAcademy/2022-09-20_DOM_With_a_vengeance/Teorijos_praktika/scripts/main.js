console.log("Hullo");

window.onload=function()
{
//     We have an empty DOM element elem and a string text.

// Which of these 3 commands will do exactly the same?

// elem.append(document.createTextNode(text))
// elem.innerHTML = text
// elem.textContent = text

// all of them do the same but innerHTML does text inside an element.
// example

//<div id="elem1"></div>
//<div id="elem2"></div>
//<div id="elem3"></div>
//<script>
//  let text = '<b>text</b>';

//  elem1.append(document.createTextNode(text));
//  elem2.innerHTML = text;
//  elem3.textContent = text;
//</script>

//<b>text</b>
//text
//<b>text</b>

//-----------------------------------------------------------------------------

// Create a function clear(elem) that removes everything from the element.

function clear(elem) { 
    const to_be_removed = document.getElementById("elem");
    while (to_be_removed.firstChild){
        to_be_removed.removeChild(to_be_removed.lastChild);
    }
 }

clear(); 

//----------------------------------------------------------------------------

// In the example below, the call table.remove() removes the table from the document.

// But if you run it, you can see that the text "aaa" is still visible.

// Why does that happen?

alert(table); // the table, as it should be

table.remove();

document.getElementById("remove").replaceChildren(); //this removes the aaa

// why there's still "aaa" in the document?

// The HTML in the task is incorrect. That’s the reason of the odd thing.

// The browser has to fix it automatically. But there may be no text inside 
// the <table>: according to the spec only table-specific tags are allowed. 
// So the browser shows "aaa" before the <table>.

// Now it’s obvious that when we remove the table, it remains.

// The question can be easily answered by exploring the DOM using the browser tools. 
// You’ll see "aaa" before the <table>.

// The HTML standard specifies in detail how to process bad HTML, 
// and such behavior of the browser is correct.

//--------------------------------------------------------------------------

// Write an interface to create a list from user input.

// For every list item:

// Ask a user about its content using prompt.
// Create the <li> with it and add it to <ul>.
// Continue until the user cancels the input (by pressing Esc or via an empty entry).
// All elements should be created dynamically.

// If a user types HTML-tags, they should be treated like a text.

document.getElementById("text_adder").addEventListener("click", add_list_item);

 function add_list_item()
 {
    let ordered_list = document.querySelector("ul");
    console.log(ordered_list);
    // if()
    // {

    // }
 }



}