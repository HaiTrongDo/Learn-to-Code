class RemoteControl {
    constructor(TVcode) {
        this.TVcode = TVcode;
        this._currentChannel = 1;
        this._currentVolnume = 10;
    }

    changeChannel(channelSignal) {
        this._currentChannel = channelSignal;
    }

    increaseVolume() {
        this._currentVolnume++;
    }

    decreaseVolume() {
        this._currentVolnume--;
    }
}


class Television {
    constructor() {
        this._currentStatus = false
    }

    checkCurrentStatus() {
        return this._currentStatus;
    }



}


let SamsungTv = new Television()
let SamsungRemote = new RemoteControl()

SamsungTv.currentChannelDescription = function() {
    return SamsungRemote._currentChannel;
}
SamsungTv.currentVolumeDescription = function (){
    return SamsungRemote._currentVolnume;
}
SamsungTv.changeCurrentChannel= function (value) {
    SamsungRemote._currentChannel = value;
}
SamsungRemote.TurnOnOrOffTelevision = function (){
    SamsungTv._currentStatus = !SamsungTv._currentStatus
}

SamsungRemote.TurnOnOrOffTelevision()
console.log(SamsungTv._currentStatus);
SamsungTv.changeCurrentChannel(7)
console.log(SamsungRemote._currentChannel);
SamsungTv.changeCurrentChannel(3)
console.log(SamsungRemote._currentChannel);
SamsungRemote.increaseVolume()
SamsungRemote.increaseVolume()
console.log(SamsungRemote._currentVolnume);
SamsungRemote.TurnOnOrOffTelevision()
