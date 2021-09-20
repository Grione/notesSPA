export const addNote = (note) => {
	return (dispatch) => {
		dispatch({
			type: 'addNote',
			payload: note
		});
	};
};

export const deleteNote = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'deleteNote',
			payload: id
		});
	};
};

export const editNote = (id) => {
	return (dispatch) => {
		dispatch({
			type: 'editNote',
			payload: id
		});
	};
};
