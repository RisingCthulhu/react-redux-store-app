import React from "react";
import PropTypes from "prop-types";

const isError = meta => !meta.active && !!meta.touched && !!meta.error;

const errorClassName = isError => (isError ? "error" : "");

const withInputRender = Wrapper => ({
	input,
	label,
	meta,
	children,
	options,
	...props
}) => {
	return (
		<label>
			{label}
			<Wrapper
				className={errorClassName(isError(meta))}
				{...input}
				{...props}
				options={options}
			>
				{children}
			</Wrapper>
			{isError(meta) && <span>{meta.error}</span>}
		</label>
	);
};

export default withInputRender;

withInputRender.propTypes = {
	Wrapper: PropTypes.node
};
