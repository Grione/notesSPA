export const fetchNotes = () => {
	return async (dispatch) => {
		fetch('http://localhost:5000/notes/').then((res) => res.json()).then((json) => {
			dispatch({
        type:'loadNotes',
        payload: json
      });
		});
	};
};

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

export const changeNote = (newNote) => {
	return (dispatch) => {
		dispatch({
			type: 'changeNote',
			payload: newNote
		});
	};
};
