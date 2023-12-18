import React from 'react'
import './adminProducts.css'

const AdminProducts = ( { products } ) => {
    return (
        <div className="adminProductContainer">
            <div className="adminProduct">
                <img src={products.image} alt={products.name} className="adminProductImg"/>
                <div className="adminProductNameDescription">
                    <p className="adminProductName">{products.name}</p>
                    <p className="adminProductDescription">{products.description}</p>
                </div>
                <div className="adminProductPriceStock">
                    <p className="adminProductPrice">${products.price}</p>
                    <p className="adminProdcutStock">{products.stock}</p>
                </div>
            </div>
            <div className="adminButtons">
                <button className="btnEdit">Edit</button>
                <button className="btnDelete">Delete</button>
            </div>
        </div>
    )
}

export default AdminProducts