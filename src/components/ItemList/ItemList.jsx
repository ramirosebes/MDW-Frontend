import React from "react";
import Item from "../Item/Item";
import "./itemList.css";

function ItemList( {products} ) {
    return (
        <div className="container">
            <div className="div-title">
                <h2 className="main-title">Products</h2>
            </div>
            <div className="products">
                {products.map((prod) => <Item products={prod} key={prod._id}/>)}
            </div>
        </div>
    )
}

export default ItemList