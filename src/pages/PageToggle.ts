import { Toggle001 } from "../components/Toggle001";
import { Wrapper } from "../components/Wrapper";

export const PageToggle = () => {
	return /*html*/`
<div>
${Wrapper('First toggle', Toggle001())}
</div>
`;
}