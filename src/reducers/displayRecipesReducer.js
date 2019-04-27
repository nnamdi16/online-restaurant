export default (state = [], action) => {
	switch (action.type) {
		case 'RECIPES_DISPLAYED':
			return action.payload;
		default:
			return state;
	}
};
