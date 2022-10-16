console.log("Hullo");

window.onload=function(){
{
        document.getElementById("demo").style.color = "blue";
        document.getElementById("demo").style.backgroundColor = "yellow";
        document.getElementById("demo").style.textAlign = "center";
        document.getElementById("demo").style.fontSize = "40px";
        document.getElementById("demo").style.display = "none";
    }

    function convert(hours, minutes) {
        hours = hours * 3600;
        minutes = minutes * 60;
        let sum = 0;
        return sum = hours + minutes;
    }
    alert(convert(5, 15));
}