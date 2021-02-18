import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { coliereFetchData } from '../../redux/actions/coliere';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { addToCart } from '../../utils/axios';
const ColierePage = ({ coliere, fetchData }) => {

    useEffect(() => {
        fetchData();
    },[fetchData])
    return (
        <div className="content">
            <div className="cards">
            {coliere.map((colier) => {
                    return <ProductItem item={colier} addToCart={addToCart} key={colier.id}/>
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        coliere: state.coliere
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(coliereFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ColierePage);