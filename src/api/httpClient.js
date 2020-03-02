import axios from "axios";

const httpClient = axios.create({
	baseURL: process.env.REACT_APP_API_BASE,
	timeout: 5000,
	headers: { Authorization: process.env.REACT_APP_API_KEY }
});

export default httpClient;
