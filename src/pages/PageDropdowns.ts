import { CompanyInfo } from "../components/CompanyInfo";
import { Wrapper } from "../components/Wrapper";

export const PageDropdowns = () => {
	return /*html*/ `
	${Wrapper('Company Info', CompanyInfo())}
	`;
}