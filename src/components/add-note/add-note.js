import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const AddNote = ({ onHide }) => {
	const dispatch = useDispatch();
	const { addNote } = bindActionCreators(actionCreators, dispatch);

	// Add note
	const createNote = (note, tags) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		let newTags = [];
		if (tags !== '') {
			newTags = [ ...new Set(tags.split(' ')) ].filter((el)=> el !== ``);
      console.log(newTags);
		}

		const newNote = { id, tags: newTags, ...note };

		addNote(newNote);
	};

	const [ title, setTitle ] = useState('');
	const [ text, setText ] = useState('');
	const [ tags, setTags ] = useState('');
	const [ validate, setValidate ] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!title && !text) {
			setValidate(true);
			return;
		}

		createNote({ title, text }, tags);

		setTitle('');
		setText('');
		setTags('');

		onHide();
	};

	return (
		<div className="box">
			<form onSubmit={onSubmit}>
				<div className="field">
					<label className="label">Title</label>
					<div className="control">
						<input
							type="text"
							className="input"
							value={title}
							onChange={(e) => {
								setTitle(e.target.value);
								setValidate(false);
							}}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Text</label>
					<div className="control">
						<textarea
							className="textarea"
							value={text}
							onChange={(e) => {
								setText(e.target.value);
								setValidate(false);
							}}
						/>
					</div>
				</div>
				<div className="field">
					<label className="label">Tags</label>
					<div className="control">
						<input
							type="text"
							className="input"
							value={tags.toLowerCase()}
							onChange={(e) => setTags(e.target.value)}
						/>
					</div>
				</div>
				<button className="button is-link">Add</button>
				{validate ? (
					<div className="notification is-warning mt-1">
						<strong>Please fill in at least one text field</strong>
					</div>
				) : (
					''
				)}
			</form>
		</div>
	);
};

export default AddNote;
