import "./itemDetail.css"

const ItemDetail = ( {item} )  => {
    return (
        <div className='product-detail'>
            <div className="div-left">
                <img src={item.image} alt={item.name} />
            </div>
            <div className="div-right">
                <h3 className='title'>{item.name}</h3>
                <p className="description">{item.description}</p>
                <p className="price">${item.price}</p>
            </div>
        </div>
    )
}

export default ItemDetail