const reducer = (state = [], action) => {
	switch (action.type) {
		case 'addNote':
			return [ ...state, action.payload ];
		case 'deleteNote':
			return state.filter((element) => element.id !== action.payload.id);
		default:
			return state;
	}
};

export default reducer;