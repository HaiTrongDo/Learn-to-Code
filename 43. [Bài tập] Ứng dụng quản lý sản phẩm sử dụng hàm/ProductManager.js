class ProductManager {
    constructor() {
        this._products = [];
    }

    showListProduct() {
        let html = '';
        if (this._products.length === 0) {
            html += '<tr>';
            html += '<td colspan="5"> No Data</td>';
            html += '</tr>';
        } else {
            for (let i = 0; i < this._products.length; i++) {
                html += '<tr>'
                html += `<td>${i+1}</td>`
                html += `<td>${this._products[i].getName()}</td>`
                html += `<td>${this._products[i].getPrice()}</td>`
                html += `<td>${this._products[i].getAuthor()}</td>`
                html += `<td><button onclick="deleteProduct(${i})">Delete</button></td>`
                html += '</tr>'
            }
        }

        document.getElementById("list-product").innerHTML = html;
    }
    add(name, price, author) {
        let product = new Product(name,price,author);
        this._products.push(product);
// gọi lại ham showListProduct()
        this.showListProduct();
        this.clearInput();
    }
    clearInput(){
        document.getElementById('name').value = '';
        document.getElementById('price').value = '';
        document.getElementById('author').value = '';
    }
    destroy(index){
        this._products.splice(index,1);
        this.showListProduct();
    }
}
