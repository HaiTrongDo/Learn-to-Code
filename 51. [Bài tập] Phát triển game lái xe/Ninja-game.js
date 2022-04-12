document.getElementById("Canvas").addEventListener("keydown", moveOnject)

let moveBy = 10


class ObjectInCanvas {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
    }
}


function render() {
    let ctx = document.getElementById("Canvas").getContext("2d");
    let circle = new ObjectInCanvas(50, 50, 50)
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.fillStyle = "red"
    ctx.fill()
}

render()


function moveOnject(e.key) {
switch (e.key) {
    case 'ArrowLeft':
        ObjectInCanvas.x -= moveBy
        break;

    case 'ArrowRight':
        ObjectInCanvas.x += moveBy

        break;
    case 'ArrowUp':
        ObjectInCanvas.y -= moveBy

        break;
    case 'ArrowDown':
        ObjectInCanvas.y += moveBy
        break;


}

}