function TemperatureConverter(C){
    this.Ctemp = C;
    this.fromCtoF = function(){
    return this.Ctemp*1.8 +32
    }
    this.CtoKenvin= function() {
    return this.Ctemp + 273.15
    }
}

let tempAt25 = new TemperatureConverter(25)

alert(`At the C = ${tempAt25.Ctemp} \nTempeture in F is: ${tempAt25.fromCtoF()} \nTempeture in Kenbin is: ${tempAt25.CtoKenvin()}`)
