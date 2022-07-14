const API_URL = `https://venia-shopping-site-default-rtdb.firebaseio.com`;

export async function getAllCategories() {
	const data = await getAllProductsData();
	return new Set(data.map((item, i, arr) => item.category));
}

async function getAllProductsData() {
	const response = await fetch(`${API_URL}/prod-ecomm/products.json`);
	return await response.json();
}

export async function getProductFromCategory(categoryName) {
	const data = await getAllProductsData();
	return data.filter(
		(item, i, arr) => item.category.replace(/ /g, "-") === categoryName
	);
}

export async function getSingleProduct(prodObj) {
	const { prodId, prodCategory } = prodObj;
	// console.log(prodId, prodCategory);
	const data = await getAllProductsData();

	const prodArray = data.filter((item, i, arr) => {
		return item.id === +prodId && item.category === prodCategory;
	});

	const [prod] = prodArray;
	return prod;
}
