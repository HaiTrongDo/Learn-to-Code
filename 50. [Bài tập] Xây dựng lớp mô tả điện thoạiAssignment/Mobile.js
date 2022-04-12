function Mobile(battery) {
    this._battery = battery;
    //Có một thông số về trạng thái pin tính bằng đơn vị số nguyên (tối đa 100 đv)
    this._writingMessage = "";
    //Có một vùng nhớ dùng để lưu tin nhắn đang soạn thảo.
    this._incomeMessage = [];
    //Có một vùng nhớ dùng để lưu tin nhắn trong hộp thư đến.
    this._sentMessage = [];
    //Có một vùng nhớ dùng để lưu tin nhắn đã gửi.

    this.CheckPhoneStatus = function () {
        //Có chức năng kiểm tra trạng thái điện thoại bật hay tắt.
        this._phoneStatus = this._battery > 0 && this._battery < 100;
    }
    //Có chức năng bật và tắt điện thoại.
    this.turnOnPhone = function () {
        this._phoneStatus = true;
    }
    this.turnOffPhone = function () {
        this._phoneStatus = false;
    }

    //Có chức năng xạc pin điện thoại.
    this.ChargePhone = function (batteryAdded){
        if(this._phoneStatus === true){
        this._battery+= batteryAdded;
        }
    }
    //Có chức năng soạn tin nhắn.
    this.writingMessage = function (writingMessage) {
        if(this._phoneStatus === true){
        this._writingMessage = writingMessage;
        this._battery--;
        }
    }
    //Có chức năng nhận tin nhắn từ một chiếc mobile khác.
    this.receivingMessage = function (receivingMessage) {
        if(this._phoneStatus === true){
            alert(`you have received message: ${receivingMessage}`)
        this._incomeMessage.push(receivingMessage);
        this._battery--;
        }
    }
    //Có chức năng gửi tin nhắn tới một chiếc mobile khác.
    this.sendingMessage = function(toPhone){
        if(this._phoneStatus === true){
        this._sentMessage.push(this._writingMessage);
        toPhone._incomeMessage.push(this._writingMessage);
        this._battery--;
        } else {
            alert("Điện thoại đang off")
        }
    }
    //Có chức năng xem tin trong hộp thư đến.
    this.get_incomeMessage =function (){
        if(this._phoneStatus === true){
        this._battery--;
        return this._incomeMessage;
        }
    }
    //Có chức năng xem tin đã gửi.
    this.get_sentMessage = function (){
        if(this._phoneStatus === true){
        this._battery--;
        return this._sentMessage;
        }
    }
    //Sau mỗi lần sử dụng một chức năng, năng lượng pin sẽ giảm đi một đơn vị.
    //Các chức năng không thể hoạt động nếu điện thoại chưa bật.
}
let iPhone = new Mobile(50)
let Samsung = new Mobile(90)
iPhone.turnOnPhone()
iPhone._writingMessage = "This is the message from iphone user";
iPhone.sendingMessage(Samsung)
// console.log(Samsung._incomeMessage);
iPhone._writingMessage = "This is the second message from iphone user";
iPhone.sendingMessage(Samsung)
console.log(iPhone._sentMessage);