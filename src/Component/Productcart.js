import React from "react";
import './page.css';
import shirt from  "../assets/images/red-t-shirt.jpg"

const ProductCard = ()=>{
    return (
        <div className="productcard-container">
         <img className="cart-image" src={shirt}/>
         <h1 className="item"> item</h1>
         <div className="product-name">
            <p className="product-price">$80</p>
            <span className="addCart"></span>
         </div>
        </div>
    )
}

export default ProductCard

