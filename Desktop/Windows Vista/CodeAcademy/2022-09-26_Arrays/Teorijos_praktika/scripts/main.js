console.log("Hullo");

window.onload=function(){

    let arr = [];
    
//---------------------------------------------------------------------------------

    document.getElementById("Add_number_to_array").addEventListener("click", on_new_array_number_submit);

    function on_new_array_number_submit(){
        add_number_to_array();
        print_array_to_span();
    }
    function add_number_to_array(){
        let new_array_number = document.getElementById("array_number").value;
        arr.push(new_array_number);
    }
    function print_array_to_span(){
        document.getElementById("current_array").innerHTML = arr;
    }
    
//------------------------------------------------------------------------------------

    document.getElementById("Reset_array").addEventListener("click", reset_arr_click);

    function reset_arr(){
        arr = [];
    }
    function reset_arr_click(){
        reset_arr();
        print_array_to_span();
    }

//----------------------------------------------------------------------------------

    document.getElementById("Calculate_maximal_subarray").addEventListener("click", Calculate_maximal_subarray);

    function Calculate_maximal_subarray(){
        Print_maximal_subarray_to_span(Calculate_maximal_subarray_algorithm());
    }

    function Print_maximal_subarray_to_span(Maximum){
        document.getElementById("Maximal_subarray").innerHTML = Maximum;
    }

    function Calculate_maximal_subarray_algorithm(){
        let maxSum = 0;
        let partialSum = 0;

        for(let item of arr){
        partialSum += Number(item);
        maxSum = Math.max(maxSum, partialSum);
        if(partialSum < 0) partialSum = 0;
        }
        return maxSum;
    }

}