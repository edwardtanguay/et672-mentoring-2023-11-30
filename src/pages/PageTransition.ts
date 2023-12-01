import { TransitionInputs } from "../components/TransitionInputs";
import { Wrapper } from "../components/Wrapper";

export const PageTransition = () => {
	return /*html*/`
	${Wrapper("Input field animation", TransitionInputs())}
`; 
}