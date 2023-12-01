import './styles/main.scss';
import { getMenu, getCurrentPage } from './Router';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = /*html*/`
<header>
	<h1 class="text-4xl mb-8">Mentoring 2023-12-01</h1>
	${getMenu()}
</header>
<main>
	${getCurrentPage()}
</main>
`;