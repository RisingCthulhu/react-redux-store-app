import React from "react";
import { Button, Loader } from "semantic-ui-react";
import PropTypes from "prop-types";

const NothingFound = ({
	resetFilters,
	queryParamsChanged,
	isLoading,
	isWaitingTillSelectionEnd
}) => {
	const onClickHandler = () => {
		resetFilters();
		queryParamsChanged();
	};

	return (
		<div className="nothing-found-container">
			<Loader
				active={isWaitingTillSelectionEnd || isLoading}
				size="massive"
			/>
			<h1>Nothing Found</h1>
			<Button onClick={onClickHandler}>Reset filters</Button>
		</div>
	);
};

NothingFound.propTypes = {
	resetFilters: PropTypes.func,
	queryParamsChanged: PropTypes.func,
	isLoading: PropTypes.bool,
	isWaitingTillSelectionEnd: PropTypes.bool
};

export default NothingFound;
