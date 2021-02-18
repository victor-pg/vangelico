import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { pandantiveFetchData } from '../../redux/actions/pandantive';
import ProductItem from '../../Components/ProductItem/ProductItem';
import { addToCart } from '../../utils/axios';

const PandantivePage = ({ pandantive, fetchData }) => {

    useEffect(() => {
        fetchData();
    }, [fetchData])
    return (
        <div className="content">
            <div className="cards">
                {pandantive.map((pandantiv) => {
                    return <ProductItem item={pandantiv} addToCart={addToCart} key={pandantiv.id} />
                })}
            </div>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        pandantive: state.pandantive
    };
}
const mapDispatchToProps = dispatch => {
    return {
        fetchData: () => dispatch(pandantiveFetchData())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PandantivePage);