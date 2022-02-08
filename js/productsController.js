class Product {
    constructor() {
        let currentId = 1;
        this.items = [];
        this.currentId = currentId;
    }
    addProduct(name, category, description, image, price, createdAt)
    {
        const item = {
            id: this.currentId++,
            name: name,
            category: category,
            description: description,
            image: image,
            price: price,
            createdAt: createdAt
        };

        this.items.push(item);
    }
}


const product1 = new Product();
product1.addProduct("Baguette", "Bread", "This is a baguette", "images/bread/baguette.jpg", 6.00, "2022-02-08");
console.log(product1.items);

const product2 = new Product();
product2.addProduct("Bagel", "Bread", "This is a bagel", "images/bread/bagel.jpg", 5.00, "2022-02-08");
console.log(product2.items);

const product3 = new Product();
product3.addProduct("Brioche", "Bread", "This is a brioche", "images/bread/brioche.jpg", 3.00, "2022-02-08");
console.log(product3.items);

const product4 = new Product();
product4.addProduct("Croissant", "Bread", "This is a croissant", "images/bread/croissant.jpg", 4.00, "2022-02-08");
console.log(product4.items);
