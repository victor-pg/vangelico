import React, { useEffect } from 'react';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { connect } from "react-redux";
import { cerceiFetchData } from '../../redux/actions/cercei';
import { addToCart } from '../../utils/axios';
const CerceiPage = ({ cercei, fetchData }) => {

    useEffect(() => {
        fetchData();
    },[fetchData])
    return (
        <div className="content">
            <div className="cards">
            {cercei.map((cercel) => {
                    return <ProductItem item={cercel} addToCart={addToCart} key={cercel.id}/>
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        cercei: state.cercei
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(cerceiFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CerceiPage);