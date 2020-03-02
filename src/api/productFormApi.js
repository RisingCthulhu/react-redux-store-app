import httpClient from "./httpClient";

export const postProduct = valuesToSend =>
	httpClient
		.request({
			method: "post",
			url: "/products",
			data: { ...valuesToSend }
		})
		.then(response => response);

export const patchProduct = (productId, valuesToSend) =>
	httpClient
		.request({
			method: "patch",
			url: `/products/${productId}`,
			data: { ...valuesToSend }
		})
		.then(response => response);
