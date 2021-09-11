import PropTypes from 'prop-types';

const Note = ({ id, title, text, tags, onDelete }) => {
	return (
		<div className="box">
			<div className="content">
				<button className="delete is-pulled-right" onClick={()=>onDelete(id)}/>
				<h4>{title}</h4>
				<p>{text}</p>
				<div className="tags">
					{tags ? (
						tags.map((element) => {
							return <span className="tag" key={element}>{element}</span>;
						})
					) : (
						''
					)}
				</div>
			</div>
		</div>
	);
};

Note.propTypes = {
	title: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default Note;
