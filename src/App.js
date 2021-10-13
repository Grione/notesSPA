import { useState, useEffect } from 'react';
import AddNoteButton from './components/add-note-button/add-note-button';
import AddNote from './components/add-note/add-note';
import NotesList from './components/notes-list/notes-list';
import TagsList from './components/tags-ist/tags-list';
import { useSelector, useDispatch } from 'react-redux';
import { fetchNotes } from './state/action-creators';

const App = () => {
	const state = useSelector((state) => state.notes);

	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchNotes());
	}, []);

	const [ showAddNote, setShowAddNote ] = useState(false);
	const [ tags, setTags ] = useState([]);

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

	const filteredNotes = state.filter((note) => {
		return !tags.length || tags.find((item) => note.tags.includes(item));
	});

	//Sort notes
	const sortNotes = (checked, value) => {
		setTags(!tags.includes(value) && checked ? [ ...tags, value ] : tags.filter((n) => n !== value));
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

export default App;
