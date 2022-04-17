let productManager = new ProductManager();
productManager.showListProduct();


function save() {
    //b1; lấy gia trị từ 3 input
    let name = document.getElementById("name").value
    let price = document.getElementById("price").value
    let author = document.getElementById("author").value

    productManager.add(name, price, author);
}

function deleteProduct(index) {
    if (confirm('Are you sure?')) {
        productManager.destroy(index);

    }
}