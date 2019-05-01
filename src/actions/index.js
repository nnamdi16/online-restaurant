import apiPlaceholder from '../apis/apiPlaceholder';
// import axios from 'axios';

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

export const createRecipes = id => async dispatch => {
	try {
		const response = await apiPlaceholder.get(`/posts/${id}`);
		console.log(response);
		dispatch({
			type: 'SINGLE_RECIPE_DISPLAY',
			payload: response.data
		});
	} catch (error) {
		console.log(error);
	}
};

export const deleteRecipe = (id, callback) => async dispatch => {
	try {
		await apiPlaceholder.delete(`/posts/${id}`);
		dispatch({
			type: 'DELETE_RECIPE',
			payload: id
		});
		callback();
	} catch (error) {
		dispatch({
			type: 'DELETE_RECIPE',
			payload: id
		});
	}
};
export const postRecipe = recipe => async dispatch => {
	try {
		const response = await apiPlaceholder.post('/posts', recipe);
		console.log(response.data);
		dispatch({
			type: 'ADD_RECIPE',
			payload: response.data
		});
	} catch (error) {
		console.log(error);
	}
};

// const recipeUrl = 'http://localhost:4000/posts';
