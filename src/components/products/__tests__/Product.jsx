import React from "react";
import { render } from "@testing-library/react";

import AppWrapper, { store } from "../../../containers/AppWrapper";
import Product from "../Product";
import { buildProduct } from "../../../__mocks__/product";
import { getDetailsSuccess } from "../../../store/products/actions";

it("renders right product by received id", () => {
	const productMock = buildProduct();

	store.dispatch(getDetailsSuccess(productMock));

	const rr = render(<Product productId={productMock.id} />, {
		wrapper: AppWrapper
	});

	const nameEl = rr.getByText(productMock.name);
	const priceEl = rr.getByText(`Origin: ${productMock.origin}`);

	expect(nameEl).not.toBeNull();
	expect(priceEl).not.toBeNull();
});
