export const Wrapper = (title: string, html: string) => {
	return /*html*/ `
	<fieldset class="border border-slate-400 rounded py-4 px-6">
		<legend class="smallcaps text-slate-700">${title}</legend>		
		${html}
	</fieldset>
	`;
};
