import { stringify } from "qs";

import normalize from "../utils/normalize";
import httpClient from "./httpClient";

export const fetchProducts = params =>
	httpClient
		.request({
			method: "get",
			url: "/products",
			params,
			paramsSerializer: params =>
				stringify(params, { arrayFormat: "comma", encode: false })
		})
		.then(({ data }) => ({
			items: normalize(data.items),
			totalItems: data.totalItems
		}));

export const fetchOrigins = () =>
	httpClient
		.request({
			method: "get",
			url: "/products-origins"
		})
		.then(({ data }) => data.items);

export const fetchProductDetails = productId =>
	httpClient
		.request({
			method: "get",
			url: `/products/${productId}`
		})
		.then(({ data }) => data);
