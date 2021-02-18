import React from 'react';

const ProductItem = ({item,addToCart}) => {
    return (
        <div className='card'>
            <img className='standart-img-size' src={process.env.PUBLIC_URL + item.imgurl} alt="img" />
            <div className='card-text-block'>
                <div className='text'>
                    <h3>{item.nume}</h3>
                    <p>${item.pret}</p>
                </div>
                <img onClick={() => addToCart(item)} src={process.env.PUBLIC_URL + '/img/icons/addToCart.png'} alt="cart-icon" />
            </div>
        </div>
    );
}

export default ProductItem;