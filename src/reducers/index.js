import { combineReducers } from 'redux';
// import { reducer as formReducer } from 'redux-form';
import displayRecipesReducer from './displayRecipesReducer';

export default combineReducers({
	display: displayRecipesReducer
	// post: postReducer
});

/**
 * Safe state Updates in Reducers Chart
 * Removing an element from an array -> state.pop()  => state.filter(e => e !== 'hi');
 * Adding an element to an array -> stat.push() =>  [...state,'hi'];
 * Replacing an element in array -> state[0] = 'hi' => state.map(el=>el === 'hi' ? 'bye' : el)
 * Updating a property in an object -> state.name = 'Sam' => {...state,name: 'Sam'}
 * Adding a property to an object -> state.age = 30  {...state, age:30}
 * Removing a property from an object -> delete state.name  {...state,age:undefined} _.omit(state,'age')
 */
