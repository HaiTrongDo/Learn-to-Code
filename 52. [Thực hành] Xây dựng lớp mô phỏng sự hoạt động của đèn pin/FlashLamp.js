function Battery(energy) {
    this.energy = energy;

    this.setEnergy = function (energy) {
        return this.energy = energy;
    }
    this.getEnergy = function () {
        return this.energy;
    }
    this.decreaseEnergy = function () {
        if (energy > 0) {
            this.energy--;
        }
    }
}


function FlashLamp(status, battery) {
    this.status = status
    this.battery = battery
    this.setBattery = function (battery) {
        this.battery = battery;
    }
    this.getBatteryInfo = function () {
        return this.battery.getEnergy();
    }
    this.light = function () {
        if (this.status) {
            alert("lighting");
        } else {
            alert("Not lighting");
        }
    };
    this.turnOn = function () {
        this.status = true;
    }
    this.turnOff = function () {
        this.status = false;
    }
}


let battery = new Battery(10)
battery.setEnergy(20);


let flashLamp = new FlashLamp(false, 50)
flashLamp.setBattery(battery)

document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");
flashLamp.light();

document.write("Turn on<br/>")
flashLamp.turnOn();
flashLamp.light();
document.write("Battery info:" + flashLamp.getBatteryInfo() + "<br/>");

document.write("Turn off<br/>")
flashLamp.turnOff();
flashLamp.light();