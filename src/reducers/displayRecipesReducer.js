const initialState = {
	recipe: {},
	recipes: []
};
// import {}
export default (state = {}, action) => {
	switch (action.type) {
		case 'SINGLE_RECIPE_DISPLAY':
			return { ...state, recipe: action.payload };
		case 'RECIPES_DISPLAYED':
			return { ...state, recipes: action.payload };
		default:
			return state;
	}
};
