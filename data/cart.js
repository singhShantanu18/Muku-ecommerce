export let cart = []

export function addToCart(productId){
    cart.push(productId)
    console.log(cart)
}

export function cartQuantity(){
    let cartWeight = 0 ;
    for(let i = 0; i < cart.length; i++){
         cartWeight++;
    }
    return cartWeight
}