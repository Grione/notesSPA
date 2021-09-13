import Note from '../note/note';

const NotesList = ({ notes }) => {
	return (
		<div className="block">
			{notes.map((it) => {
				return (
					<Note
						key={it.id.toString()}
						title={it.title}
						text={it.text}
						tags={it.tags}
						id={it.id}
					/>
				);
			})}
		</div>
	);
};

export default NotesList;
