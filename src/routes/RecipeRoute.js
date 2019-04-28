import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import RecipeDetails from '../Components/banner/RecipeDetails';
import HomePage from '../Components/HomPage';
import { displayRecipes } from '../actions';
import { displaySingleRecipe } from '../actions';

const RecipeRouter = ({ recipe = '' }) => {
	if (!recipe) return recipe;
	return (
		<div>
			<Route path={`/recipe/${recipe.id}`} component={RecipeDetails} />
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return {
		recipe: state.selectedRecipe
	};
};

export default connect(mapStateToProps, { displayRecipes, displaySingleRecipe })(RecipeRouter);
