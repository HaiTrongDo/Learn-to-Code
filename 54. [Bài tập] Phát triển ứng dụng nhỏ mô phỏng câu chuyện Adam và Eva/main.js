class Apple {
    constructor() {
        this._weight = 10
        this.isEmpty = true
    }

    apple() {
    }

    decrease() {
        this._weight--
    }

    isEmpty() {
        if (this._weight < 0) {
            this.isEmpty = false
            return "The Apple is empty"
        } else {
            this.isEmpty = true
        }
    }

    getWeight() {
        return this._weight
    }
}


class Human {
    constructor(name, gender, weight){
        this._name = name
        this._gender = gender
        this._weight = weight
    }
    Human() {
        if(this._name !=="" && this._gender!=="" && this._weight !==""){
            this._human = true;
        } else {
            this._human = false;
        }
    } //boolean

    isMale() {
        if(this._gender === "Male"){
            return true;
        } else {return false}
    } //boolean

    setGender(gender){
        this._gender = gender;
    }

    checkApple(Apple){
        return Apple._weight;
    }//boolean

    eat(Apple){
        Apple._weight--;
        this._weight++
    }//
    say(String) {
        alert("say something here")
    } //string
    setName(String){
        return this._name = String;
    }//String

    getWeight(){
        return this._weight
    }//
    setWeight(Weight){
        this._weight = Weight
    }

}