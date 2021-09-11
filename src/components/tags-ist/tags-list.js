import TagSingle from '../tag-single/tag-single';

const TagsList = ({ tags, onSort }) => {
	return (
		<div className="tags mt-5">
			{tags.map((tag) => {
				return <TagSingle tag={tag} key={tag} onSort={onSort}/>;
			})}
		</div>
	);
};

export default TagsList;
