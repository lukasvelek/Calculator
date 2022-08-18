function buttonClick(value) {
    var display = document.getElementById("display");
    var bank1 = document.getElementById("bank1");
    var bank2 = document.getElementById("bank2");
    var op = document.getElementById("operation");

    if(document.getElementById("done").value == "true") {
        display.value = "";
        bank1.value = "";
        bank2.value = "";
        op.value = "";

        document.getElementById("done").value = "";
    }

    if(value == "+" || value == "-" || value == "x" || value == "/") {
        op.value = value;

        display.value = "";
    } else {
        if(op.value == null || op.value == "") {
            bank1.value += String(value);
            console.log(bank1.value);
        } else {
            bank2.value += String(value);
            console.log(bank2.value);
        }

        display.value += String(value);
    }
}

function calculate() {
    var display = document.getElementById("display");
    var bank1 = document.getElementById("bank1");
    var bank2 = document.getElementById("bank2");
    var op = document.getElementById("operation");

    display.value = "";

    var result;

    var a = parseInt(bank1.value);
    var b = parseInt(bank2.value);

    switch(op.value) {
        case "+":
            result = a + b;
            console.log(a + "+" + b + "=" + result);

            break;
        case "-":
            result = a - b;
            console.log(a + "-" + b + "=" + result);

            break;
        case "x":
            result = a * b;
            console.log(a + "x" + b + "=" + result);

            break;
        case "/":
            if(b > 0) {
                result = a / b;
                console.log(a + "/" + b + "=" + result);
            } else {
                result = "Dividing by zero!";
            }

            break;
    }

    document.getElementById("done").value = "true";

    display.value = String(result);
}

function clearClick() {
    var display = document.getElementById("display");
    var bank1 = document.getElementById("bank1");
    var bank2 = document.getElementById("bank2");
    var op = document.getElementById("operation");

    display.value = "";
    bank1.value = "";
    bank2.value = "";
    op.value = "";
}

function setPreset(presetName) {
    var buttons = document.getElementsByTagName('button');
    var input = document.getElementsByTagName('input');

    var designButton = "";
    var designInput = "";
    
    switch(presetName) {
        case "blue":
            designButton = "color: blue; background-color: lightblue;";
            designInput = "color: blue; border: 1px solid lightblue;";

            break;
        
        case "green":
            designButton = "color: green; background-color: lightgreen;";
            designInput = "color: green; border: 1px solid lightgreen;";

            break;
        
        case "red":
            designButton = "color: #8b0000; background-color: #fa8072";
            designInput = "color: #8b0000; border: 1px solid #fa8072";

            break;

        case "purple":
            designButton = "color: purple; background-color: #dda0dd";
            designInput = "color: purple; border: 1px solid #dda0dd";

            break;

        case "black":
            designButton = "color: black; background-color: lightgrey";
            designInput = "color: black; border: 1px solid lightgrey";

            break;

        case "white":
            designButton = "color: white; background-color: black";
            designInput = "color: white; background-color: black; border: 1px solid black";

            break;
    }

    for(var i = 0; i < buttons.length; i++) {
        buttons[i].style.cssText = designButton;
    }

    for(var i = 0; i < input.length; i++) {
        input[i].style.cssText = designInput;
    }

    var bP = document.getElementById("blue-preset");
    bP.style.cssText = "color: blue; background-color: lightblue;";

    var gP = document.getElementById("green-preset");
    gP.style.cssText = "color: darkgreen; background-color: lightgreen;";

    var rP = document.getElementById("red-preset");
    rP.style.cssText = "color: #8b0000; background-color: #fa8072";

    var pP = document.getElementById("purple-preset");
    pP.style.cssText = "color: purple; background-color: #dda0dd";

    var blP = document.getElementById("black-preset");
    blP.style.cssText = "color: black; background-color: lightgrey";

    var wP = document.getElementById("white-preset");
    wP.style.cssText = "color: white; background-color: black";
}