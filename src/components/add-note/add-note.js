import { useState } from 'react';

const AddNote = ({ onAdd, onHide }) => {
	const [ title, setTitle ] = useState('');
	const [ text, setText ] = useState('');
	const [ tags, setTags ] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();

		onAdd({ title, text }, tags);

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
						<input type="text" className="input" value={title} onChange={(e) => setTitle(e.target.value)} />
					</div>
				</div>
				<div className="field">
					<label className="label">Text</label>
					<div className="control">
						<textarea className="textarea" value={text} onChange={(e) => setText(e.target.value)} />
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
			</form>
		</div>
	);
};

export default AddNote;
