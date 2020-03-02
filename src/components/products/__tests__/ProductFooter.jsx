import React from "react";
import { render, fireEvent } from "@testing-library/react";
import ProductFooter from "../ProductFooter";
import { buildProduct } from "../../../__mocks__/product";

import AppWrapper, { store } from "../../../containers/AppWrapper";
import rootReducer from "../../../store/rootReducer";
import { addProductToCart } from "../../../store/cart/actions";

describe("<ProductFooter />", () => {
	let productMock;

	beforeEach(() => {
		productMock = buildProduct();
	});

	it("footer has product's price", () => {
		const renderResult = render(
			<ProductFooter price={productMock.price} />,
			{
				wrapper: AppWrapper
			}
		);

		const prodPriceEl = renderResult.getByText(
			`Price: ${productMock.price}$`
		);

		expect(prodPriceEl).not.toBeNull();
	});

	it("has 'Edit Product' button if 'isEditable' prop is true and call onClick with 'id' prop", () => {
		const setEditableIdMock = jest.fn();
		const toggleModalMockHandler = jest.fn();

		const renderResult = render(
			<ProductFooter
				isEditable={true}
				id={productMock.id}
				toggleProductModal={toggleModalMockHandler}
				setCurrentEditableProductId={setEditableIdMock}
			/>,
			{
				wrapper: AppWrapper
			}
		);

		const editButtonEl = renderResult.getByTestId("product-edit-button");

		expect(editButtonEl).not.toBeNull();

		expect(toggleModalMockHandler).toBeCalledTimes(0);
		expect(setEditableIdMock).toBeCalledTimes(0);

		fireEvent.click(editButtonEl);

		expect(toggleModalMockHandler).toBeCalledTimes(1);
		expect(setEditableIdMock).toBeCalledTimes(1);
		expect(setEditableIdMock).toBeCalledWith(productMock.id);
	});

	it("prop addProductToCart is called with id,price,name after click by corresponing button", () => {
		const addProductMockHandler = jest.fn();
		const toggleModalMockHandler = jest.fn();

		const renderResult = render(
			<ProductFooter
				id={productMock.id}
				name={productMock.name}
				price={productMock.price}
				addProductToCart={addProductMockHandler}
				toggleCartModal={toggleModalMockHandler}
			/>,
			{
				wrapper: AppWrapper
			}
		);

		const addProductButtonEl = renderResult.getByTestId(
			"add-product-button"
		);

		expect(addProductButtonEl).not.toBeNull();
		expect(addProductMockHandler).toBeCalledTimes(0);
		expect(toggleModalMockHandler).toBeCalledTimes(0);

		fireEvent.click(addProductButtonEl);

		expect(addProductMockHandler).toBeCalledTimes(1);
		expect(addProductMockHandler).toBeCalledWith(
			productMock.id,
			productMock.price,
			productMock.name
		);
		expect(toggleModalMockHandler).toBeCalledTimes(1);
	});

	it("has 'in-cart' button if item is already in cart", () => {
		const checkMark = "\u2713";

		store.dispatch(
			addProductToCart(
				productMock.id,
				productMock.price,
				productMock.name
			)
		);

		const renderResult = render(<ProductFooter id={productMock.id} />, {
			wrapper: AppWrapper
		});

		const inCartButtonEl = renderResult.getByText(`${checkMark}In Cart`);

		expect(inCartButtonEl).not.toBeNull();
	});
});
