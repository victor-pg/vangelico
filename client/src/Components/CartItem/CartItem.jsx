import React from 'react';

const CartItem = ({item}) => {
    return (
        <div className=''>
            <img className='standart-img-size' src={process.env.PUBLIC_URL + item.imgurl} alt="img" />
            <div className='card-text-block'>
                <div className='text'>
                    <h3>{item.nume}</h3>
                    <p>${item.pret}</p>
                </div>
                <img src={process.env.PUBLIC_URL + '/img/icons/delete.png'} alt="delete-icon" />
            </div>
        </div>
    );
}

export default CartItem;