let initialState = [];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'loadNotes':
			return action.payload;
		case 'addNote':
			return [ ...state, action.payload ];
		case 'deleteNote':
			return state.filter((element) => element.id !== action.payload);
		case 'editNote':
			return state.map((element) => {
				if (element.id == action.payload) {
					element.editing = !element.editing;
				}
				return element;
			});
		case 'changeNote':
			return state.map((element) => {
				if (element.id === action.payload.id) {
					element.title = action.payload.title;
					element.text = action.payload.text;
					element.tags = action.payload.tags;
					element.editing = false;
				}
				return element;
			});
		default:
			return state;
	}
};

export default reducer;
