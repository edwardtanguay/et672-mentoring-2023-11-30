export const addTax = (productPrice: number) => {
	const total = productPrice + (productPrice * .06);
	return total.toFixed(2)
}
