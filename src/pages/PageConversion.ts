export const PageConversion = () => {
	const addPrices = (a: number, b: number) => {
		return a + b;
		// return Number(a) + Number(b);
	};

	const getSafeTotal = (a: any, b: any) => {
		
		if (!isNaN(a) && !isNaN(b) && typeof a === 'number' && typeof b === 'number') {
			return String(addPrices(a, b));
		} else {
			return "<span class=\"text-red-600\">(bad input)</span>";
		}
	}

	return /*html*/ `
<div>
	<p>001. total = ${addPrices(1, 2)}</p>
	<p>002. total = ${addPrices("1", 2)}</p>
	<p>003. total = ${addPrices(1, undefined)}</p>
	<p>004. total = ${getSafeTotal(1, NaN)}</p>
	<p>005. total = ${getSafeTotal(5, true)}</p>
	<p class="mt-3">explore more examples at <a href="https://www.w3schools.com/js/js_type_conversion.asp">w3schools</p>
</div>
`;
};
