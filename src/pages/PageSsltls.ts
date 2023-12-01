import { getPrice } from "../apiModule";
import { addTax } from "../taxModule";

export const PageSsltls = () => {

	// const total = getPrice();
	// const total = parseFloat(getPrice());
	const total = Number(getPrice());

	let output = '';
	if (typeof total === 'number' && !isNaN(total)) {
		output = `<p>total (${total}) price = ${addTax(total)} €</p>`;
	} else {
		output = 'Sorry, not possible to purchase at the moment.';
	}

	return /*html*/`
<div>
	<p>total price = ${addTax(1)} €</p>
	${output}
	<p>total price = ${addTax(3)} €</p>
	<p>total price = ${addTax(200.99)} €</p>
</div>
`; 
}