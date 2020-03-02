import React from "react";
import { render } from "@testing-library/react";
import Filter from "../Filter";
import { originsMock } from "../../../__mocks__/product";

import AppWrapper from "../../../containers/AppWrapper";

it("displays right values from props and checkboxes represent right state", () => {
	const rr = render(
		<Filter
			price={{ min: 50, max: 750 }}
			productsOrigins={originsMock}
			filterOrigins={["usa", "europe"]}
		/>,
		{
			wrapper: AppWrapper
		}
	);
	const { getByDisplayValue } = rr;

	const minInputEl = rr.getByTestId("filter-min-input");
	const maxInputEl = rr.getByTestId("filter-max-input");
	const europeCheckboxEl = rr.getByTestId("filter-origins-europe-checkbox");
	const usaCheckboxEl = rr.getByTestId("filter-origins-usa-checkbox");
	const asiaCheckboxEl = rr.getByTestId("filter-origins-asia-checkbox");
	const africaCheckboxEl = rr.getByTestId("filter-origins-africa-checkbox");

	expect(minInputEl.children[0].value).toBe("50");
	expect(maxInputEl.children[0].value).toBe("750");
	expect(europeCheckboxEl.children[0].checked).toBe(true);
	expect(usaCheckboxEl.children[0].checked).toBe(true);
	expect(asiaCheckboxEl.children[0].checked).toBe(false);
	expect(africaCheckboxEl.children[0].checked).toBe(false);
});
