import * as tools from './tools';
import { Page404 } from './pages/Page404';
import { PageConversion } from './pages/PageConversion';
import { PageSsltls } from './pages/PageSsltls';
import { PageToggle } from './pages/PageToggle';
import { PageTransition } from './pages/PageTransition';
import { PageDropdowns } from './pages/PageDropdowns';

const pageNames = ['Conversion', 'SSL/TLS', 'Toggle-Switch', 'Transition', 'Dropdowns'];

const currentPageIdCode = getSmartCurrentPageId();

export const getCurrentPage = () => {
	switch (currentPageIdCode) {
		case 'conversion':
			return PageConversion();
		case 'ssltls':
			return PageSsltls();
		case 'toggle-switch':
			return PageToggle();
		case 'transition':
			return PageTransition();
		case 'dropdowns':
			return PageDropdowns();
		default:
			return Page404();
	}
}

const getPageIdCode = (pageName: string) => {
	pageName = tools.cleanCharactersToAscii(pageName);
	return pageName.toLowerCase();
}

export const getMenu = () => {
	const getMenuClass = (pageName: string) => {
		const pageIdCode = tools.cleanCharactersToAscii(pageName.toLowerCase());
		if (pageIdCode === currentPageIdCode) {
			return ` class="active"`
		} else {
			return '';
		}
	}

	return /*html*/`
	<nav>
		<ul class="flex gap-3 mb-4 bg-slate-400 p-2">
			${pageNames.map(pageName => `<li><a href="${getPageIdCode(pageName)}"${getMenuClass(pageName)}>${pageName}</a></li>`).join('')}
		</ul>
	</nav>
`;
}


function getSmartCurrentPageId() {
	let currentPageIdCode = tools.getCurrentPageIdCode();
	currentPageIdCode = currentPageIdCode === '' ? tools.cleanCharactersToAscii(pageNames[0].toLowerCase()) : currentPageIdCode;
	return currentPageIdCode;
}
