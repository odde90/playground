
function myLigma() {
    var style = document.body.style;
    
    if (document.body.style.backgroundColor =="green"){
       document.body.style.backgroundColor = "lightblue";
    } else {
        document.body.style.backgroundColor = "green";
    }
    }

    function changeBackground(){
        if (document.body.style.backgroundColor == "blue") {
            document.body.style.backgroundColor = "yellow";
        } else {
        document.body.style.backgroundColor = "dark";
    }
    }

    function randomizeBackground(){
    var randomValue = Math.random();
        console.log(randomValue);
    if (randomValue < 0.2){
        document.body.style.backgroundColor = "green";
    } else if (randomValue < 0.4){
        document.body.style.backgroundColor = "white";
    } else if (randomValue < 0.6){
        document.body.style.backgroundColor = "pink";
    }
    }
    /*     var style = document.body.style;

    function randomizeBackground() {
        var randomValue = math.random();
        console.log(randomValue); */

/*  function myButton(){
        var x = math.floor((math.random() * 10) + 1 );
        document.getElementById("demo").innerHTML = x; */

//pass by value
//string, number, boolean

//pass by reference
// array, object (läs mer om detta på google)
