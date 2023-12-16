
debugger
let lines = [];

function printText() {
    let textInput = document.getElementById("textInput").value;
    let repeatInput = document.getElementById("repeatInput").value;
    let result = document.getElementById("result");
    let repeatCount = parseInt(repeatInput);

    if (!isNaN(repeatCount)) {
        for (let i = 0; i < repeatCount; i++) {
            result.innerHTML += textInput + "<br>";
            lines.push(textInput);
        }
    } else {
        result.innerHTML = "Please enter a valid number.";
    }
}

function addLine() {
        let result = textInput.value;
        lines.push(result);
        updateresult();
    }


function subtractLine() {
    let result = textInput.value;
        lines.pop(result);
        updateresult();
}

function updateresult() {
    let result = document.getElementById("result");
    result.innerHTML = lines.join("<br>") + "<br>";

}