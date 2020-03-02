import { connect } from "react-redux";
import { uniq } from "lodash";

import CartModal from "../../components/modal/CartModal.jsx";
import { toggleCartModal } from "../../store/modal/actions";

const mapStateToProps = ({ cart, modal }) => {
	return {
		cartIds: uniq(cart.allIds),
		isCartEmpty: cart.allIds.length === 0
	};
};

const mapDispatchToProps = {
	toggleCartModal
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
