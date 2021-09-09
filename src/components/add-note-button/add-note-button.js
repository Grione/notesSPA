const AddNoteButton = ({ onAdd, isDisabled }) => {
	return (
		<button onClick={onAdd} className="button is-link" disabled={isDisabled}>
			Add note
		</button>
	);
};

export default AddNoteButton;
