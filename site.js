
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

    function randomizeBackgroundPro() {
        var red = Math.round(Math.random() * 255);
        var green = Math.round(Math.random() * 255);
        var blue = Math.round(Math.random() * 255);

        var rgbValue = "rgb(" + red +"," + green + "," + blue + ")";
        document.body.style.backgroundColor = rgbValue;

        console.log(red);
        setInterval (randomizeBackgroundPro, 1500);
    }



    function hexColorBoi(){
        var red1 = converToHex(Math.round(Math.random() * 15));
        var red2 = converToHex(Math.round(Math.random() * 15));
        var green1 = converToHex(Math.round(Math.random() * 15));
        var green2 = converToHex(Math.round(Math.random() * 15));
        var blue1 = converToHex(Math.round(Math.random() * 15));
        var blue2 = converToHex(Math.round(Math.random() * 15));

        var rgbValue = "#"+red1+red2+green1+green2+blue1+blue2;
        document.body.style.backgroundColor = rgbValue;
        console.log(rgbValue);
    }

    function converToHex (value) {
        if (value == 10) {
            return "A";
        } if (value == 11) {
            return "B";
        } if (value == 12) {
            return "C";
        } if (value == 13) {
            return "D";
        } if (value == 14){
            return "E";
        } if (value == 15) {
            return "F";
        }
        else {
            return value;
        }
    }

    myLibary
//pass by value
//string, number, boolean

//pass by reference
// array, object (läs mer om detta på google)
