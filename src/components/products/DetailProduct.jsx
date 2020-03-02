import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Image, Button, Loader } from "semantic-ui-react";
import PropTypes from "prop-types";

import ProductFooter from "../../containers/products/ProductFooter";
import { useInjectSaga } from "../../hooks/useInjectSaga";
import fetchDetailsWatcher from "../../sagas/productDetailsSaga";

const DetailProduct = ({
    selectedProduct,
    isLoading,
    setCurrentDetailProductId,
    clearCurrentDetailProductId,
    getDetailsRequest,
    allIds
}) => {
    const { productId } = useParams();

    useInjectSaga("productDetailsSaga", fetchDetailsWatcher, productId);

    useEffect(() => {
        setCurrentDetailProductId(productId);
        if (!allIds.includes(productId)) getDetailsRequest();

        return () => clearCurrentDetailProductId();
    }, [
        allIds,
        productId,
        setCurrentDetailProductId,
        clearCurrentDetailProductId,
        getDetailsRequest
    ]);

    if (!selectedProduct || isLoading)
        return (
            <Loader active size="massive">
                Loading
            </Loader>
        );

    const { id, name, origin, price, isEditable } = selectedProduct;

    return (
        <div>
            <div className="details-container">
                <div className="img-container">
                    <Image
                        className="details-image"
                        src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
                        wrapped
                        ui={false}
                    />
                </div>
                <div className="info-container">
                    <h2>Name: {name}</h2>
                    <h2>Origin: {origin}</h2>
                    <ProductFooter
                        id={id}
                        price={price}
                        name={name}
                        isEditable={isEditable}
                    />
                    <Link to={isEditable ? "/myProducts" : "/products"}>
                        <Button className="details-back-button">
                            Back to Store
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

DetailProduct.propTypes = {
    selectedProduct: PropTypes.object,
    isLoading: PropTypes.bool,
    setCurrentDetailProductId: PropTypes.func,
    clearCurrentDetailProductId: PropTypes.func,
    getDetailsRequest: PropTypes.func,
    allIds: PropTypes.arrayOf(PropTypes.string)
};

export default DetailProduct;
