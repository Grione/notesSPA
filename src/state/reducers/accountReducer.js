const initialState = [
	{
		id: 1,
		title: 'First note',
		text: 'first text',
		tags: [ 'movies', 'books', 'thoughts' ]
	},
	{
		id: 2,
		title: 'Second note',
		text: 'Second text',
		tags: [ 'goals' ]
	}
];

const reducer = (state = initialState, action) => {
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
