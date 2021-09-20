import { useState } from 'react';
const NoteEdit = ({ id, title, text, tags }) => {
	const [ editTitle, setEditTitle ] = useState(title);
	const [ editText, setEditText ] = useState(text);
	const [ editTags, setEditTags ] = useState(tags.join(' '));

	return (
		<div className="box">
			<form>
				<div className="content">
					<div className="columns">
						<div className="column">
							<input
								type="text"
								className="input"
								value={editTitle}
								onChange={(e) => {
									setEditTitle(e.target.value);
								}}
							/>
						</div>
					</div>
					<textarea
						className="textarea"
						value={editText}
						onChange={(e) => {
							setEditText(e.target.value);
						}}
					/>
					<input
						type="text"
						className="input"
						value={editTags.toLowerCase()}
						onChange={(e) => setEditTags(e.target.value)}
					/>
				</div>
				<button className="button is-link">OK</button>
			</form>
		</div>
	);
};

export default NoteEdit;
