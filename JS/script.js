/* FUNCIONES */
function Product(name, price) {
    this.name = name;
    this.price = price;

    this.iva = function () {
        this.price = this.price * 1.21;
        alert('Producto: ' + this.name + "\nPrecio total con impuestos: " + this.price);
    }
}

function enterProduct() {
    let price;
    let userProduct = prompt("Elija el opción númerica de acuerdo al producto que desea comprar: \n1 = SHAMPOO $200\n2 = ACONDICIONADOR $200\n3 = JABÓN $100");
    while (userProduct != "1" && userProduct != "2" && userProduct != "3") {
        userProduct = prompt("OPCIÓN INCORRECTA. Elija el opción númerica de acuerdo al producto que desea comprar: \n1 = SHAMPOO $200\n2 = ACONDICIONADOR $200\n3 = JABÓN $100");
    }
    switch (userProduct) {
        case "1":
            userProduct = "SHAMPOO";
            price = 200;
            break;
        case "2":
            userProduct = "ACONDICIONADOR";
            price = 200;
            break;
        case "3":
            userProduct = "JABÓN";
            price = 100;
            break;
    }
    return [userProduct, price];
}

/* PROGRAMA */
const products = [];
let [userProduct, price] = enterProduct();

products.push(new Product(userProduct, price));

for (const product of products) {
    product.iva();
}