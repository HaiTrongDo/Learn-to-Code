let moveBy = 10;
let paper = document.getElementById("Canvas");
let pen = paper.getContext("2d")


class ObjectInCanvas {
    constructor(x, y, size) {
        this.x = x
        this.y = y
        this.size = size
    }

    render(canvas) {
        let pen = canvas.getContext("2d");
        pen.beginPath();
        pen.arc(circle.x, circle.y, circle.size, 0, 2 * Math.PI);
        pen.stroke();
        pen.fillStyle = "red"
        pen.fill()
    }
}

let circle = new ObjectInCanvas(50, 50, 50)
console.log(circle)
circle.render(paper)

window.addEventListener("keydown", moveObject)

function moveObject(e) {
    pen.clearRect(0, 0, paper.width, paper.height)
    switch (e.key) {
        case 'ArrowLeft':
            circle.x -= moveBy
            break;

        case 'ArrowRight':
            circle.x += moveBy

            break;
        case 'ArrowUp':
            circle.y -= moveBy

            break;
        case 'ArrowDown':
            circle.y += moveBy
            break;
    }
    circle.render(paper)
    requestAnimationFrame(moveObject)
}