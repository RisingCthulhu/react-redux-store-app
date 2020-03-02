import { connect } from "react-redux";

import NothingFound from "../../components/products/NothingFound.jsx";
import { resetFilters } from "../../store/filter/actions";
import { queryParamsChanged } from "../../store/products/actions";

const mapStateToProps = ({ products }) => ({
	isLoading: products.isLoading,
	isWaitingTillSelectionEnd: products.isWaitingTillSelectionEnd
});

const mapDispatchToProps = {
	resetFilters,
	queryParamsChanged
};

export default connect(mapStateToProps, mapDispatchToProps)(NothingFound);
