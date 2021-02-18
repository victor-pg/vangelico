import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { broseFetchData } from '../../redux/actions/brose';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { addToCart } from '../../utils/axios';
const BrosePage = ({ brose, fetchData }) => {

    useEffect(() => {
        fetchData();
    },[fetchData])
    return (
        <div className="content">
            <div className="cards">
            {brose.map((brosa) => {
                    return <ProductItem item={brosa} addToCart={addToCart} key={brosa.id}/>
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        brose: state.brose
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(broseFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BrosePage);