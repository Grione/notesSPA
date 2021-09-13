import { useEffect, useState } from 'react';
import AddNoteButton from './components/add-note-button/add-note-button';
import AddNote from './components/add-note/add-note';
import NotesList from './components/notes-list/notes-list';
import TagsList from './components/tags-ist/tags-list';
import { useSelector } from 'react-redux';

const App = () => {
	const state = useSelector((state) => state.notes);

	const [ showAddNote, setShowAddNote ] = useState(false);
	const [ tags, setTags ] = useState([]);

	// Get all tags
	const getAllTags = (notes) => {
		const newTags = new Set();
		notes.map((note) => {
			return note.tags.forEach((it) => newTags.add(it));
		});

		return [ ...newTags ];
	};

	//Sort notes
	const sortNotes = (checked, value) => {
		setTags(!tags.includes(value) && checked ? [ ...tags, value ] : tags.filter((n) => n !== value));
	};

	const filteredNotes = state.filter((note) => {
		return !tags.length || tags.find((item) => note.tags.includes(item));
	});

	return (
		<div className="wrapper has-background-dark">
			<div className="container is-fluid">
				<div className="columns has-text-light">
					<div className="column has-background-dark">
						<AddNoteButton onAdd={() => setShowAddNote(!showAddNote)} isDisabled={showAddNote} />
						<TagsList tags={getAllTags(state)} onSort={sortNotes} />
					</div>
					<div className="column has-background-dark is-three-quarters">
						{showAddNote ? <AddNote onHide={() => setShowAddNote(false)} /> : ''}
						<NotesList notes={filteredNotes} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
