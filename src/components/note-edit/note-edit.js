import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';
const NoteEdit = ({ id, title, text, tags }) => {
	const [ editTitle, setEditTitle ] = useState(title);
	const [ editText, setEditText ] = useState(text);
	const [ editTags, setEditTags ] = useState(tags.join(' '));

	const dispatch = useDispatch();
	const { editNote, changeNote } = bindActionCreators(actionCreators, dispatch);

	const submitHandler = (newTitle, newText, newTags) => {
		if (newTitle !== title || newText !== text || newTags !== tags.join(' ')) {
			const tags = newTags.split(' ');
			changeNote({ id, title: newTitle, text: newText, tags });
		} else {
			editNote(id);
		}
	};

	return (
		<div className="box">
			<form
				onSubmit={(e) => {
					e.preventDefault();
					submitHandler(editTitle, editText, editTags);
				}}
			>
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
