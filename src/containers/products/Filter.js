import { connect } from "react-redux";

import Filter from "../../components/products/Filter.jsx";
import { setMin, setMax, setFilterByOrigin } from "../../store/filter/actions";
import { queryParamsChanged } from "../../store/products/actions";

const mapStateToProps = ({ filter, products }) => ({
	price: filter.price,
	filterOrigins: filter.origins,
	productsOrigins: products.origins
});

const mapDispatchToProps = {
	setMin,
	setMax,
	setFilterByOrigin,
	queryParamsChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
