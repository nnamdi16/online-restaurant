export default (selectedRecipe = null, action) => {
	switch (action.type) {
		case 'SINGLE_RECIPE_DISPLAYED':
			return action.payload;

		default:
			return selectedRecipe;
	}
};
