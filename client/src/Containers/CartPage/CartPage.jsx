import React, { useEffect,useState } from 'react';
import { connect } from "react-redux";
import { cartFetchData } from '../../redux/actions/cart';
import "./CartPage.scss";

let total=0;

const CartPage = ({ cart, fetchData }) => {
    const [totalPrice,setTotalPrice]=useState(0);

    
    useEffect(() => {
        fetchData();
        console.log("render");
    },[fetchData])
    
   
    
    return (
        <div className="cart-content">
            <div className="cart">
                {cart ? cart.map((item) => {
                    total+=Number(item.pret);
                    return (
                        <div className="cart-item">
                            <img src={process.env.PUBLIC_URL + item.imgurl} alt="cart-item-image"/>
                            <div className="cart-info">
                                <h3>{item.nume}</h3>
                                <p>${item.pret}</p>
                            </div>
                        </div>    
                    );
                }) : <h1>Cosul este gol</h1>}
                <h1>Pret total : {total}</h1>
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cart: state.cart
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(cartFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartPage);