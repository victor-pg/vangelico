import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { ineleFetchData } from '../../redux/actions/inele';

const InelePage = ({ inele, fetchData }) => {

    useEffect(() => {
        fetchData();
    })
    return (
        <div className="content">
            <div className="cards">
                {inele.map((inel) => {
                    return (
                        <div className='card' key={inel.id}>
                            <img className='standart-img-size' src={process.env.PUBLIC_URL + inel.imgurl} alt="img" />
                            <div className='card-text-block'>
                                <div className='text'>
                                    <h3>{inel.nume}</h3>
                                    <p>${inel.pret}</p>
                                </div>
                                <a href='#'><span></span><img src={process.env.PUBLIC_URL+'/img/icons/addToCart.png'} alt="cart-icon" /></a>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        inele: state.inele
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(ineleFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(InelePage);