import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { bratariFetchData } from '../../redux/actions/bratari';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { addToCart } from '../../utils/axios';
const BratariPage = ({ bratari, fetchData }) => {

    useEffect(() => {
        fetchData();
    },[fetchData])
    return (
        <div className="content">
            <div className="cards">
            {bratari.map((bratara) => {
                    return <ProductItem item={bratara} addToCart={addToCart} key={bratara.id}/>
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        bratari: state.bratari
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(bratariFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BratariPage);