const TagsList = ({ tags, onSort }) => {
	return (
		<div className="tags">
			{tags.map((tag) => {
				return <span className="tag" key={tag} onClick={()=> onSort(tag)}>{tag}</span>;
			})}
		</div>
	);
};

export default TagsList;
