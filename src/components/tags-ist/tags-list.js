const TagsList = ({ tags, onSort }) => {
	return (
		<div className="tags mt-5">
			{tags.map((tag) => {
				return <span className="tag" key={tag} onClick={()=> onSort(tag)}>{tag}</span>;
			})}
		</div>
	);
};

export default TagsList;
