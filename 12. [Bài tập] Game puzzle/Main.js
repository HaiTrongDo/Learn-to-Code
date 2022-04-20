const arrayColor = ['red','yellow','green','blue']
let squares = Array.from(document.getElementsByClassName('square'));
squares.map(function (square){
    square.addEventListener('click',function (change){
        let random = arrayColor[randomColor(arrayColor)]
        square.style.backgroundColor = random;
    })
    function randomColor(array){
        return Math.floor(Math.random()*array.length)
    }
})

let a = true;

for (let i in squares){
    if(squares[0].style.backgroundColor===squares[i].style.backgroundColor){
        a = true;
    }else{
        a = false;
    }
}
if (a){

}
