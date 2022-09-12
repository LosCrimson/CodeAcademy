console.log("Hello");


function add(date){
    
    // alert(date);
    let day = date.substring(8);
    let month = date.substring(5, 7);
    let year = date.substring(0, 4);
    // alert("day= " + day + " month= " + month + " year= " + year);

    let selected_date = new Date(month + "/" + day + "/" + year);
    // alert(selected_date);

    let Christmas = new Date("12/24/" + year);

    const days_until_christmas = (Christmas, selected_date) =>{
        let difference = selected_date.getTime() - Christmas.getTime();
        let TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
        return TotalDays;
    }
    alert(
        date + "\n" +
        "day= " + day + " month= " + month + " year= " + year + "\n" + 
        selected_date + "\n" +
        Christmas + "\n" +
        "Christmas is in " + days_until_christmas(selected_date, Christmas) + " days"
    );

}

// function add(IsitString){
//     alert(IsitString);
//     if(isNaN(IsitString) === true)
//     {
//     alert("true")
//     }
//     else{
//         alert("not string")
//     }
// }