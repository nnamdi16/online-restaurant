const initialState = {
	recipe: {},
	recipes: []
};
// import {}
export default (state, action) => {
	state = initialState;
	switch (action.type) {
		case 'SINGLE_RECIPE_DISPLAY':
			return { ...state, recipe: action.payload };
		case 'RECIPES_DISPLAYED':
			return { ...state, recipes: action.payload };
		case 'ADD_RECIPE':
			return {
				...state,
				recipe: action.payload
			};
		case 'DELETE_RECIPE':
			return {
				...state,
				recipes: state.recipes.filter(recipe => recipe.id !== action.payload)
			};
		case 'UPDATE_RECIPE':
			return {
				...state,
				recipe: state.recipes.map(recipe => (recipe.id === action.payload.id ? (recipe = action.payload) : recipe))
			};
		default:
			return state;
	}
};
