import Note from '../note/note';
import NoteEdit from '../note-edit/note-edit';

const NotesList = ({ notes }) => {
	return (
		<div className="block">
			{notes.map((it) => {
				if (it.editing) {
					return (
						<NoteEdit key={it.id.toString()} title={it.title} text={it.text} tags={it.tags} id={it.id} />
					);
				} else {
					return <Note key={it.id.toString()} title={it.title} text={it.text} tags={it.tags} id={it.id} />;
				}
			})}
		</div>
	);
};

export default NotesList;
