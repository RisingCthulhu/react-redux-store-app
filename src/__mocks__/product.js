import faker from "faker";

export const buildProduct = () => ({
	id: faker.random.uuid(),
	name: faker.commerce.productName(10),
	price: faker.random.number({
		min: 1,
		max: 1000
	}),
	createdAt: faker.date.past().toISOString(),
	updatedAt: faker.date.past().toISOString(),
	origin: faker.helpers.randomize(["europe", "usa", "asia", "africa"]),
	isEditable: faker.random.boolean()
});

export const originsMock = [
	{
		value: "europe",
		displayName: "Europe"
	},
	{
		value: "usa",
		displayName: "USA"
	},
	{
		value: "asia",
		displayName: "Asia"
	},
	{
		value: "africa",
		displayName: "Africa"
	}
];

export const buildProductDTO = () => ({
	id: faker.random.uuid(),
	price: faker.random
		.number({
			min: 1,
			max: 1000
		})
		.toString(),
	origin: faker.helpers.randomize(["europe", "usa", "asia", "africa"])
});
