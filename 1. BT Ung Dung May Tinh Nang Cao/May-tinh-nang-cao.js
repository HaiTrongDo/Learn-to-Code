
let display = "";

function pressKey(key) {
    display += key
    document.getElementById("display-el").innerText = display
}


function equal() {
    result = eval(display)
    document.getElementById("display-el").innerText = result
}

function clearAll () {
    display = ""
    document.getElementById("display-el").innerText = display
    }


function undo() {
    display = display.slice(0, -1)
    document.getElementById("display-el").innerText = display
    }

