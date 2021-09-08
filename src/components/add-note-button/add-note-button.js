const AddNoteButton = ({ onAdd, isDisabled }) => {
	return (
		<button onClick={onAdd} className="button is-info is-light" disabled={isDisabled}>
			+
		</button>
	);
};

export default AddNoteButton;
