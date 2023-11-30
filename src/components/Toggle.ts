export const Toggle = (idCode: string, shape = 'round') => {
	return /*html*/ `
	<div class="toggleSwitch mb-3">
		<label class="switch">
			<input type="checkbox">
			<span class="slider ${shape === 'round' ? 'round' : ''}"></span>
		</label>
	</div>
	`;
};
