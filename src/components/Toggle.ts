export const Toggle = (idCode: string, onText = 'on', offText = 'off', shape = "round") => {
	setTimeout(() => {
		const checkboxElem = document.querySelector<HTMLDivElement>(
			`.toggle_${idCode} input`
		);
		const messageElem = document.querySelector<HTMLDivElement>(
			`.toggle_${idCode} p`
		);

		if (checkboxElem && messageElem) {
			checkboxElem.addEventListener("change", (e: Event) => {
				const elem = e.target as HTMLInputElement;
				if (elem.checked) {
					messageElem.innerText = onText;
				} else {
					messageElem.innerText = offText;
				}
			})
		}
	}, 0);

	return /*html*/ `
	<div class="toggleSwitch mb-3 toggle_${idCode} flex gap-4">
		<label class="switch">
			<input type="checkbox">
			<span class="slider ${shape === "round" ? "round" : ""}"></span>
		</label>
		<p class="text-3xl -mt-1 message">${offText}</p>
	</div>
	`;
};
