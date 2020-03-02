import React from "react";
import { Dropdown, Pagination } from "semantic-ui-react";
import PropTypes from "prop-types";

import usePageParamsChange from "../../hooks/usePageParamsChange";
import perPageOptions from "../../constants/perPageOptions";

const PaginationComponent = ({
	productsPerPage,
	totalPages,
	currentPage,
	isBelowProdList = false
}) => {
	const pageParamsChangeHandler = usePageParamsChange();

	const downArrowheadSymbol = "\u2304";

	return (
		<div className="pagination-container">
			<Pagination
				activePage={currentPage}
				boundaryRange={2}
				onPageChange={(event, { activePage }) =>
					pageParamsChangeHandler(activePage, productsPerPage)
				}
				siblingRange={2}
				totalPages={totalPages}
				ellipsisItem="..."
				firstItem={{
					content: "<<"
				}}
				lastItem={{
					content: ">>"
				}}
				prevItem={{ content: "<" }}
				nextItem={{ content: ">" }}
			/>
			{!isBelowProdList && (
				<Dropdown
					text={`Products Per Page: ${productsPerPage}  ${downArrowheadSymbol}`}
					icon=""
					button
					className="icon"
				>
					<Dropdown.Menu>
						{perPageOptions.map(option => (
							<Dropdown.Item
								key={option.key}
								text={option.text}
								value={option.value}
								onClick={() =>
									pageParamsChangeHandler(
										currentPage,
										option.value
									)
								}
							/>
						))}
					</Dropdown.Menu>
				</Dropdown>
			)}
		</div>
	);
};

PaginationComponent.propTypes = {
	productsPerPage: PropTypes.number,
	totalPages: PropTypes.number,
	currentPage: PropTypes.number,
	isBelowProdList: PropTypes.bool
};

export default PaginationComponent;
