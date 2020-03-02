import normalize from "../utils/normalize";
import httpClient from "./httpClient";

export const postOrder = valuesToPost =>
	httpClient.request({
		method: "post",
		url: "/orders",
		data: { ...valuesToPost }
	});

export const getOrdersHistory = () =>
	httpClient
		.request({
			method: "get",
			url: "/orders"
		})
		.then(({ data }) => normalize(data.items));
