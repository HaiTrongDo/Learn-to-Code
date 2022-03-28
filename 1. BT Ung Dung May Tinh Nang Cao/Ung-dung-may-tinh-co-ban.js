
let num2 = Number(document.getElementById("num2").value)
console.log(num2);
let result = 0;

function addition() {
    let num1 = Number(document.getElementById("num1").value)
    console.log(num1);
    let num2 = Number(document.getElementById("num2").value)
    console.log(num2);

    result = num1 + num2;
    document.getElementById("result").innerHTML = result
}

function Subtraction() {
    let num1 = Number(document.getElementById("num1").value)
    console.log(num1);
    let num2 = Number(document.getElementById("num2").value)
    console.log(num2);

    result = num1 - num2;
    document.getElementById("result").innerHTML = result
}

function Multiplication() {
    let num1 = Number(document.getElementById("num1").value)
    console.log(num1);
    let num2 = Number(document.getElementById("num2").value)
    console.log(num2);

    result = num1 * num2;
    document.getElementById("result").innerHTML = result
}

function Division() {
    let num1 = Number(document.getElementById("num1").value)
    console.log(num1);
    let num2 = Number(document.getElementById("num2").value)
    console.log(num2);

    result = num1 / num2;
    document.getElementById("result").innerHTML = result
}