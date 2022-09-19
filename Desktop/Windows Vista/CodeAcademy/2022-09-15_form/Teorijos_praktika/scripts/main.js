console.log("Hullo");

window.onload=function()
{
     // 1)
  let selectedOption = genres.options[genres.selectedIndex];
  alert( selectedOption.value );

  // 2)
  let newOption = new Option("Classic", "classic");
  genres.append(newOption);

  // 3)
  newOption.selected = true;

// Create a <div> that turns into <textarea> when clicked.

// The textarea allows to edit the HTML in the <div>.

// When the user presses Enter or it loses focus, the <textarea> 
// turns back into <div>, and its content becomes HTML in <div>.

    let div_item_to_be_transformed = document.getElementById("transform_textarea");

    let textarea_to_be_replaced = document.createElement("TEXTAREA");
    textarea_to_be_replaced.innerHTML = "bumkin" ;

    div_item_to_be_transformed.addEventListener("click", div_transform_to_textarea);

    textarea_to_be_replaced.addEventListener("blur", run_both_transform_and_add_input_to_div_functions); //Transform to div on loosing focus
    textarea_to_be_replaced.addEventListener("keypress", function(event) {  //Transfrom to div on enter press
        if (event.key === "Enter") {
          event.preventDefault();
          applying_inputs_from_text_area_to_div();
          textarea_transform_to_div();
        }
    });

    function div_transform_to_textarea(){ //Is used to transform div to textarea
      console.log("Transform autobots");
      div_item_to_be_transformed.parentNode.replaceChild(textarea_to_be_replaced, div_item_to_be_transformed);
      textarea_to_be_replaced.focus();
    }

    function textarea_transform_to_div(){ //Is used to transform textarea to div
      console.log("Vile deceptincons");
      textarea_to_be_replaced.parentNode.replaceChild(div_item_to_be_transformed, textarea_to_be_replaced);
    }

    function applying_inputs_from_text_area_to_div(){
      div_item_to_be_transformed.innerHTML = textarea_to_be_replaced.value;
    }

    function run_both_transform_and_add_input_to_div_functions(){
      textarea_transform_to_div();
      applying_inputs_from_text_area_to_div();
    }

// Create a function showPrompt(html, callback) that shows a form with the message html, an 
// input field and buttons OK/CANCEL.

// A user should type something into a text field and press Enter or the OK button, then 
// callback(value) is called with the value they entered.
// Otherwise if the user presses Esc or CANCEL, then callback(null) is called.
// In both cases that ends the input process and removes the form.

// Requirements:

// The form should be in the center of the window.
// The form is modal. In other words, no interaction with the rest of the page is possible 
// until the user closes it.
// When the form is shown, the focus should be inside the <input> for the user.
// Keys Tab/Shift+Tab should shift the focus between form fields, don’t allow it to leave 
// for other page elements.

}