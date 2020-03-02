import { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");
const element = document.createElement("div");

const Modal = ({ children, isAnyModalOpen }) => {
	element.className = isAnyModalOpen ? "modal-container" : " modal-closed";

	useEffect(() => {
		modalRoot.appendChild(element);
	}, []);

	return createPortal(children, element);
};

Modal.propTypes = {
	children: PropTypes.array,
	isAnyModalOpen: PropTypes.bool
};

export default Modal;
