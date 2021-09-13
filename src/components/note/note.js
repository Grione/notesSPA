import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../../state';

const Note = ({ id, title, text, tags, onDelete }) => {
	const dispatch = useDispatch();
	const { deleteNote } = bindActionCreators(actionCreators, dispatch);

	return (
		<div className="box">
			<div className="content">
				<button className="delete is-pulled-right" onClick={() => deleteNote(id)} />
				<h4>{title}</h4>
				<p>{text}</p>
				<div className="tags">
					{tags ? (
						tags.map((element) => {
							return (
								<span className="tag" key={element}>
									{element}
								</span>
							);
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
