import Note from '../note/note';

const NotesList = ({ notes, onDelete }) => {
	return (
		<div className="block">
			{notes.map((it, index) => {
				return (
					<Note
						key={it.id.toString()}
						title={it.title}
						text={it.text}
						tags={it.tags}
						id={it.id}
						onDelete={onDelete}
					/>
				);
			})}
		</div>
	);
};

export default NotesList;
