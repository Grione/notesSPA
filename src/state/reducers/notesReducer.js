const initialState = [
	{
		id: 1,
		title: 'First note',
		text: 'first text',
		tags: [ 'movies', 'books', 'thoughts' ],
    editing: true
	},
	{
		id: 2,
		title: 'Second note',
		text: 'Second text',
		tags: [ 'goals' ],
    editing: false
	},
  {
		id: 3,
		title: 'Third note',
		text: 'Another one text',
		tags: [ 'goals', 'soccer', 'poker' ],
    editing: false
	}
];

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'addNote':
			return [ ...state, action.payload ];
		case 'deleteNote':
			return state.filter((element) => element.id !== action.payload);
		default:
			return state;
	}
};

export default reducer;
