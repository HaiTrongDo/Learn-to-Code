let display = "";

function pressKey(key) {
    display += key
    document.getElementById("display-el").innerText = display
}


function equal(key) {
    result = eval(display)
    document.getElementById("display-el").innerText = result
}

function clearAll() {
    display = ""
    document.getElementById("display-el").innerText = display
}


function undo() {
    display = display.slice(0, -1)
    document.getElementById("display-el").innerText = display
}

window.addEventListener("keydown",function (evt) {
    let c = evt.keyCode;
    if(c >= 48 && c <= 57)
        pressKey(evt.key)
        // document.getElementById("display-el").innerText += evt.key
})
