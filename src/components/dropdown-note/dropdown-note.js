import { useState } from 'react';
import { fetchDelete } from '../../state/action-creators';

const DropdownNote = ({ onDelete, onEdit, id }) => {
	const [ openDropdown, setOpenDropdown ] = useState(false);

	return (
		<div className={`dropdown is-right ${openDropdown ? 'is-active' : ''}`}>
			<div className="dropdown-trigger" onClick={() => setOpenDropdown(!openDropdown)}>
				<button className="button" aria-haspopup="true" aria-controls="dropdown-menu">
					<span>Edit</span>
					<span className="icon is-small">
						<i className="far fa-caret-square-down" />
					</span>
				</button>
			</div>
			<div className="dropdown-menu" id="dropdown-menu" role="menu">
				<div className="dropdown-content">
					<a href="#" className="dropdown-item" onClick={() => onEdit(id)}>
						Edit note
					</a>
					<a
						href="#"
						className="dropdown-item"
						onClick={() => {
							fetchDelete(id);
              onDelete(id);
						}}
					>
						Delete note
					</a>
				</div>
			</div>
		</div>
	);
};

export default DropdownNote;
