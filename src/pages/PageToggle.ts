import { Toggle } from "../components/Toggle";
import { Wrapper } from "../components/Wrapper";

export const PageToggle = () => {
	return /*html*/`
<div>
	${Wrapper('First toggle', Toggle('001', 'square') + Toggle('002'))}
</div>
`;
}