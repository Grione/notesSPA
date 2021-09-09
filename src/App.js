import { useEffect, useState } from 'react';
import AddNoteButton from './components/add-note-button/add-note-button';
import AddNote from './components/add-note/add-note';
import NotesList from './components/notes-list/notes-list';
import TagsList from './components/tags-ist/tags-list';

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
			tags: [ 'books', 'russian' ]
		}
	]);

	const [ showAddNote, setShowAddNote ] = useState(false);
	const [ tags, setTags ] = useState('');

	// Get all tags
	const getAllTags = (notes) => {
		const newTags = [];
		notes.map((note) => {
			return note.tags.forEach((it) => newTags.push(it));
		});

		return newTags;
	};

	// Add note
	const addNote = (task, tags) => {
		const id = Math.floor(Math.random() * 10000) + 1;
		const arr = tags.split(' ');
		const newTags = [ ...new Set(arr) ];
		const newNote = { id, tags: newTags, ...task };

		setNotes([ ...notes, newNote ]);
	};

	// Delete note
	const deleteNote = (id) => {
		setNotes(notes.filter((element) => element.id !== id));
	};

	//Sort notes
	const sortNotes = (tag) => {
		setTags(tag);
	};

	const filteredNotes = notes.filter((note) => {
		return !tags || note.tags.includes(tags);
	});

	return (
		<div className="wrapper has-background-dark">
			<div className="container is-fluid">
				<div className="columns has-text-light">
					<div className="column has-background-dark">
						<AddNoteButton onAdd={() => setShowAddNote(!showAddNote)} isDisabled={showAddNote} />
						<TagsList tags={getAllTags(notes)} onSort={sortNotes} />
					</div>
					<div className="column has-background-dark is-three-quarters">
						{showAddNote ? <AddNote onAdd={addNote} onHide={() => setShowAddNote(false)} /> : ''}
						<NotesList notes={filteredNotes} onDelete={deleteNote} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default App;
