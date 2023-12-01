import companyItems from "../data/companies.json";

setTimeout(() => {
	const selectElem = document.querySelector<HTMLSelectElement>(".dropdown");
	const infoElem = document.querySelector<HTMLDivElement>(".info");

	if (selectElem && infoElem) {
		selectElem.addEventListener(
			"change",
			(e: Event) => {
				const elem = e.target as HTMLOptionElement;
				if (elem) {
					const id = elem.value as string;
					const company = companyItems.find(
						(m) => m.id === Number(id)
					);
					if (company) {
						infoElem.innerHTML = `
				<p class="font-semibold">${company.name}</p>	
				<p>Founded in ${company.foundingYear}</p>	
				<p>${company.headquarters}</p>	
				<p>${company.description}</p>	
					`;
					}
				}
			},
			false
		);
	}
}, 0);

export const CompanyInfo = () => {
	return /*html*/ `
		<section class="flex gap-4">
			<select class="dropdown p-1 h-fit rounded bg-slate-200">
		${companyItems
			.map((company) => {
				return `
  <option value="${company.id}">${company.name}</option>
			`;
			})
			.join("")}	
			</select>
			<div class="info"></div>
		</section>
	`;
};
