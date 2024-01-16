const productsList=[ ];

const productImage=document.getElementById("product-image");

for(const product of productsList){
    productImage.src += `${product}`;
                        
}

function addToCart(item){
    const addedToCart=document.getElementById("product-image");
    if(item1){
        productImage.push("../images/cart-images/xbox-controller.jpg");
    }
    else if(item2){
        productImage.push("../images/cart-images/boat-airdopes.jpg");
    }
    else{
        alert("Cart is empty");
    }
}