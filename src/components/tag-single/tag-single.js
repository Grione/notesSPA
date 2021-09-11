const TagSingle = ({ tag, onSort }) => {
	return (
		<label>
			<span className="tag">{tag}</span>
			<input type="checkbox" value={tag} onChange={(event) => onSort(event.target.checked, event.target.value)} />
		</label>
	);
};

export default TagSingle;
