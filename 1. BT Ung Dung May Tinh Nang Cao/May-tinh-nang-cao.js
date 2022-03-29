
let display = "";

function pressKey(key) {
    display += key
    document.getElementById("display-el").innerText = display
}


function equal(key) {
    result = eval(display)
    document.getElementById("display-el").innerText = result
}

function clearAll () {
    display = ""
    document.getElementById("display-el").innerText = display
    }


function undo() {
    display = display.slice(display.length - 1 ,1)
    document.getElementById("display-el").innerText = display
    }

