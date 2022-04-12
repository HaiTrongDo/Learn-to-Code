/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    }

    this.moveRight = function (speed) {
        this.left += speed;
        console.log('ok: left ' + this.left);
    }
    this.moveDown = function (speed) {
        this.top += speed;
    }
    this.moveLeft = function (speed) {
        this.left -= speed
        console.log('ok: left ' + this.left);
    }

    this.moveUp = function (speed) {
        this.top -= speed;
        console.log('ok: top ' + this.top);
    }
}
let hero = new Hero('C2203H1.jpg', 0, 0, 400);


function start(){
    if(hero.left < window.innerWidth - hero.size && hero.top <=0){
        hero.moveRight(20);
    } else if (hero.top < window.innerHeight - hero.size && hero.left >= window.innerWidth - hero.size){
        hero.moveDown(20);
    } else if (hero.top >= window.innerHeight - hero.size && hero.left > 0 ){
        hero.moveLeft(20);
    } else if (hero.left <=0 && hero.top>0){
        hero.moveUp(20)
    }

    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();