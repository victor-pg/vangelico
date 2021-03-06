import React, { useEffect } from 'react';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { connect } from "react-redux";
import { ineleFetchData } from '../../redux/actions/inele';
import { addToCart } from '../../utils/axios';
const InelePage = ({ inele, fetchData }) => {

    useEffect(() => {
        fetchData();
    },[fetchData])
    return (
        <div className="content">
            <div className="cards">
                {inele.map((inel) => {
                    return <ProductItem item={inel} addToCart={addToCart} key={inel.id}/>
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