import {
	combineValidators,
	composeValidators,
	isRequired,
	hasLengthBetween
} from "revalidate";

export const isGreaterThan = minValue => value => {
	if (+value <= minValue && value !== "")
		return `Field's value must be greater than ${minValue}`;
};

export const isLowerThan = maxValue => value => {
	if (+value > maxValue)
		return `Field's value must be lower than ${maxValue}`;
};

export const isConsistOfSpaces = value => {
	if (value && value.replace(/\s+/g, "") === "")
		return "Field must not consist of only spaces";
};

export const formValidator = combineValidators({
	name: composeValidators(isRequired, hasLengthBetween(2, 21))("Name"),
	price: isRequired("Price"),
	origin: isRequired("Origin")
});
