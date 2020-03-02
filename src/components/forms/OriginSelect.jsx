import React from "react";
import Select from "react-select";
import PropTypes from "prop-types";

export const OriginSelect = ({
	input,
	options,
	meta,
	isSubmitting,
	initialValue
}) => {
	const isError = meta => !meta.active && meta.touched && meta.error;

	const displayInitialValue = options.reduce(
		(acc, option) =>
			initialValue === option.value ? (acc += option.label) : (acc += ""),
		""
	);

	return (
		<>
			<Select
				className={isError(meta) ? "error" : ""}
				{...input}
				onChange={value => input.onChange(value)}
				onBlur={() => input.onBlur(input.value)}
				options={options}
				placeholder={
					initialValue === "" ? "Select Origin" : displayInitialValue
				}
				isDisabled={isSubmitting}
			/>
			{isError(meta) && <span>Origin is required</span>}
		</>
	);
};

OriginSelect.propTypes = {
	input: PropTypes.object,
	options: PropTypes.arrayOf(PropTypes.object),
	meta: PropTypes.object,
	isSubmitting: PropTypes.bool,
	initialValue: PropTypes.string
};

export default OriginSelect;
