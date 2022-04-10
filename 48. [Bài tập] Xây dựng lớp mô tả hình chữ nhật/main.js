function Rectangle (length,width) {
    this._length=length;
    this._width=width;
    this.square = function (){
        return length*width;
    }
    this.perimeter = function(){
        return 2*(length+width)
    }
}



function createRectangle(){
let ctx= document.getElementById("myCanvas").getContext("2d");
let length = Math.random()*150;
let width = Math.random()*100;
let rectangle = new Rectangle(length,width)
ctx.beginPath();
ctx.rect(100,100,rectangle._length,rectangle._width)
    //context.rect(x,y,width,height);
    //Tip: Use the stroke() or the fill() method to actually draw the rectangle on the canvas.
ctx.stroke();
ctx.fillStyle = "grey";
ctx.fill()
    alert(`Diện tích hình chữ nhật ${rectangle.square()} \n Chu vi hình chữ nhật là ${rectangle.perimeter()}`)
}
createRectangle()

