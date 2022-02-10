class Product {

    productItems = [];

    constructor() {}

    addProduct(name, category, description, image, price) {
        const item = {
            name: name,
            category: category,
            description: description,
            image: image,
            price: price,
        };

        this.productItems.push(item);

    }   // end of addProduct()

    displayProduct() {
        console.log(this.productItems);

        let productDetails = "";

        let index = 0;
        let detailsBtnId = "";

        this.productItems.forEach (item => {
            detailsBtnId = "item" + index;

            productDetails += `
            <div class="col-lg-4  col-md-4 col-6">
                <div class="card" style="width: 15rem;">
                  <img src="${item.image}" class="card-img-top" alt="${item.name}">
                  <div class="card-body">
                    <h5 class="card-title">${item.name}</h5>
                    <h5>$${item.price}</h5>

                    <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cupcakeModal">Details</a>
                  </div>
                </div>

            </div>`;
            index++;
        })
    }   // end of displayProduct()
}   // end of class Product
