import api from '../../api';

export const fetchNotes = () => {
	return async (dispatch) => {
		api.get(`/notes`).then((response) => {
			dispatch({
				type: 'loadNotes',
				payload: response.data
			});
		});
	};
};

export const fetchChange = async (id, task) => {
	await api.put(`/notes/${id}`, task);
};

export const fetchDelete = async (id) => {
	await api.delete(`/notes/${id}`);
};

export const fetchAdd = async (note) => {
	await api.post(`/notes/`, note);
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
