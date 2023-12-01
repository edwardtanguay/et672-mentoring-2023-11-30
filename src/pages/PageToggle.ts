import { Toggle } from "../components/Toggle";
import { Wrapper } from "../components/Wrapper";

export const PageToggle = () => {
	return /*html*/ `
<div>
	${Wrapper(
		"Default Toggle",
		Toggle("001")
	)}
	${Wrapper(
		"Square Toggle",
		Toggle("002", 'on', 'off', 'square')
	)}
	${Wrapper(
		"Custom Toggle #1",
		Toggle("003", "online", "offline", "square") 
	)}
	${Wrapper(
		"Custom Toggle #2",
		Toggle("004", "I accept the terms of the contract.", "I do not accept the terms of the contract.", "round") 
	)}
</div>


<div class="flex gap-3 mt-3 justify-between w-1/2 items-center">
<p class="text-red-500 text-3xl bg-yellow-300 rounded-lg p-3">Test</p>
<p class="font-bold">Test</p>
<p>Test</p>
<p>Test</p>
<p>Test</p>
<p>Test</p>
</div>
`;
};
