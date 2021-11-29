import { useState } from 'react';
import AddNoteButton from '../add-note-button/add-note-button';
import TagsList from '../tags-ist/tags-list';
import NotesList from '../notes-list/notes-list';
import AddNote from '../add-note/add-note';

const Dashboard = ({ state }) => {
	const [ showAddNote, setShowAddNote ] = useState(false);
	const [ tags, setTags ] = useState([]);

	const sortNotes = (checked, value) => {
		setTags(!tags.includes(value) && checked ? [ ...tags, value ] : tags.filter((n) => n !== value));
	};

	const filteredNotes = state.filter((note) => {
		return !tags.length || tags.find((item) => note.tags.includes(item));
	});

	// Get all tags
	const getAllTags = (notes) => {
		const newTags = new Set();
		if (notes.length) {
			notes.map((it) => {
				return it.tags.forEach((it) => newTags.add(it));
			});
		}

		return [ ...newTags ];
	};

	return (
		<div className="wrapper has-background-dark">
			<div className="container is-fluid">
				<div className="columns has-text-light">
					<div className="wrapper-column column has-background-dark">
						<AddNoteButton onAdd={() => setShowAddNote(!showAddNote)} isDisabled={showAddNote} />
						<TagsList tags={getAllTags(state)} onSort={sortNotes} />
					</div>
					<div className="wrapper-column column has-background-dark is-three-quarters">
						{showAddNote ? <AddNote onHide={() => setShowAddNote(false)} /> : ''}
						<NotesList notes={filteredNotes} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
