
class Product {




    productItems = [

    {
    id: 1,
    name: 'Tayto',
    category : 'bread',
    description: 'Cheese & Onion Chips',
    image: '/images/bread/bagel.jpg',
    price:5,
    createdAt: '2020-09-20'

},

 {
    id: 2,
    name: 'Tayto',
    category : 'bread',
    description: 'Cheese & Onion Chips',
    image: '/images/bread/baguette.jpg',
    price:5,
    createdAt: '2020-09-20'

},

 {
    id: 3,
    name: 'Tayto',
    category : 'bread',
    description: 'Cheese & Onion Chips',
    image: '/images/bread/brioche.jpg',
    price:5,
    createdAt: '2020-09-20'

},

 {
    id: 4,
    name: 'Tayto',
    category : 'bread',
    description: 'Cheese & Onion Chips',
    image: '/images/bread/croissant.jpg',
    price:5,
    createdAt: '2020-09-20'

}

    ];






    constructor(){}



    addProduct(name,category, description, image , price, createdAt){

        const item = {


             name: name,
            category : category,
            description: description,
            image: image,
            price: price,
            createdAt: createdAt

        }

     this.productItems.push(item);
    }


    // displayProduct(){

    //     console.log(this.productItems);

    //     let productDetails = "";
    //     let index = 0;
    //     let detailBtnId = "";

    //     this.productItems.forEach(item=>{

    //         detailBtnId = "item " + index;

    //         productDetails += `
    //         <div class="col-lg-4  col-md-4 col-6">
    //             <div class="card" style="width: 15rem;">
    //               <img src="images/cake/choc-cara-cupcakes.jpg" class="card-img-top" alt="bagel">
    //               <div class="card-body">
    //                 <h5 class="card-title">Chocolate Caramel Cupcakes</h5>
    //                 <h5>$3</h5>

    //                 <a class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#cupcakeModal">Details</a>
    //               </div>
    //             </div>

    //         </div>

    //         `







    //     })
    // }
}
const product = new Product();
product.addProduct('22222',
            'bread',
             'Cheese & Onion Chips',
            '/images/bread/bagel.jpg',
            5,
            '2020-09-20')
console.log(product.productItems);