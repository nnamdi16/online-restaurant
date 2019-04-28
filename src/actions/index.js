import apiPlaceholder from '../apis/apiPlaceholder';

//Action creator
export const displayRecipes = () => async dispatch => {
	/**
	 *  With dispatch we can change any data that we want,
	 * with redux thunk we can manually dispatch an action 
	 * and with getState we can read or access any data that we want
	 * */
	try {
		const response = await apiPlaceholder.get('/posts');
		//Return an action
		console.log(response);
		dispatch({
			type: 'RECIPES_DISPLAYED',
			payload: response.data
		});
	} catch (error) {
		console.log(error);
	}
};

export const displaySingleRecipe = recipe => {
	return {
		type: 'SINGLE_RECIPE_DISPLAYED',
		payload: recipe
	};
};

// export const createRecipes = () => async dispatch => {
// 	const response = await apiPlaceholder;
// };
