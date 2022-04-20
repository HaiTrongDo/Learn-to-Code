class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    meowing() {
        alert("moew moew!");
    }

    catchTheRat(rat) {
        if (this.maxSpeed > rat.speed) {
            // alert("Caught");
            return true;
        } else {
            // alert("Too slow");
            return false;
        }
    }

    eatTheRat(rat) {
        if (this.catchTheRat(rat)) {
            alert(this.name + " is ate " + rat.getName());
            this.weight += rat.getWeight();
        } else {
            alert(this.name + " have no caught " + rat.getName() + " yet!");
        }
    }
}


let tom = new Cat("Tom", 60, 30);
let jerry = new Rat("Jerry", 15, 35);
let mickey = new Rat("Mickey", 20, 25);

tom.eatTheRat(jerry);
tom.eatTheRat(mickey);


class Rat {
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status; // true === alive, false === dead;
    }

    squeaking() {
        alert("chít chít!");
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }
}
