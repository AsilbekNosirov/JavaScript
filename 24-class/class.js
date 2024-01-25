// Class

class Product {
    constructor(name, price) {
        this.name = name,
        this.price = price
    }

    dislplayProduct() {
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax) {
        return this.price + (this.price * salesTax);
    }
}

const salesTax = 0.05;

const product1 = new Product("Shirt", 19.90);
const product2 = new Product("Pants", 24.90);
const product3 = new Product("Shoe", 100.00);

product3.dislplayProduct();

const total = product3.calculateTotal(salesTax)
    console.log(`This product (with Tax): ${total.toFixed(2)}`);





