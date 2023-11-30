import { IToggleConfig } from "../interfaces";

export const Toggle001 = (_toggleConfig: IToggleConfig) => {
	const defaultToggleConfig = {
		round: false
	}
	const toggleConfig = { ...defaultToggleConfig, ..._toggleConfig };

	return /*html*/ `
	<div class="toggleSwitch mb-3">
		<label class="switch">
			<input type="checkbox">
			<span class="slider ${toggleConfig.round ? 'round' : ''}"></span>
		</label>
	</div>
	`;
};
