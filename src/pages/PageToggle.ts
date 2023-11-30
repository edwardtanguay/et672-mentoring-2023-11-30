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
`;
};
