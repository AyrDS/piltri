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
    let product = prompt("Elija el opción númerica de acuerdo al producto que desea comprar: \n1 = SHAMPOO $200\n2 = ACONDICIONADOR $200\n3 = JABÓN $100");
    while (product != "1" && product != "2" && product != "3") {
        product = prompt("OPCIÓN INCORRECTA. Elija el opción númerica de acuerdo al producto que desea comprar: \n1 = SHAMPOO $200\n2 = ACONDICIONADOR $200\n3 = JABÓN $100");
    }
    switch (product) {
        case "1":
            product = "SHAMPOO";
            price = 200;
            break;
        case "2":
            product = "ACONDICIONADOR";
            price = 200;
            break;
        case "3":
            product = "JABÓN";
            price = 100;
            break;
    }
    return [product, price];
}

/* PROGRAMA */
const products = [];
let [product, price] = enterProduct();
products.push(new Product(product, price));

for (const product of products) {
    product.iva();
}
