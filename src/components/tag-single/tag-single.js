import { useState } from "react";

const TagSingle = ({ tag, onSort }) => {
	const [checked, setChecked] = useState(false);
	let className = 'tag custom-checkbox';
	if (checked) {
		className += ' checked is-success';
	}
	return (
		<label className={className}>
			<span>{tag}</span>
			<input
				type="checkbox"
				value={tag}
				onChange={(event) => {
					setChecked(!checked);
					onSort(event.target.checked, event.target.value);
				}}
			/>
		</label>
	);
};

export default TagSingle;
