import { useEffect, useState } from 'react';
import AddNoteButton from './components/add-note-button/add-note-button';
import AddNote from './components/add-note/add-note';
import NotesList from './components/notes-list/notes-list';
import TagsList from './components/tags-ist/tags-list';
import { useSelector } from 'react-redux';

const App = () => {
	const [ notes, setNotes ] = useState([
		{
			id: 1,
			title: 'First note',
			text: 'first text',
			tags: [ 'movies', 'books', 'thoughts' ]
		},
		{
			id: 2,
			title: 'Second note',
			text: 'Second text',
			tags: [ 'goals' ]
		},
		{
			id: 3,
			title: 'Third note',
			text: 'Another one text',
			tags: []
		},
		{
			id: 4,
			title: 'Dostoevskii. Demons',
			text: 'Perfect book about revolutions ideas',
			tags: [ 'russian', 'books' ]
		}
	]);

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

	// Add note
	const addNote = (note, tags) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		let newTags = [];
		if (tags !== '') {
			newTags = [ ...new Set(tags.split(' ')) ];
		}

		const newNote = { id, tags: newTags, ...note };

		setNotes([ ...notes, newNote ]);
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
						{showAddNote ? <AddNote onAdd={addNote} onHide={() => setShowAddNote(false)} /> : ''}
						<NotesList notes={filteredNotes} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
