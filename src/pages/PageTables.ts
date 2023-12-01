import { CompanyTable } from "../components/CompanyTable";
import { Wrapper } from "../components/Wrapper";

export const PageTables = () => {
	return /*html*/ `
	<div class="pageTables">

	${Wrapper('Company Table', CompanyTable())}
</div>
	`;
};
