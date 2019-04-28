import React from 'react';
import { connect } from 'react-redux';

const RecipeDetails = ({ recipe = '' }) => {
	if (!recipe) {
		return recipe;
	}
	return (
		<div>
			<h1>{recipe.title}</h1>
			<h4>{recipe.publisher}</h4>
			<h4>{recipe.social_rank} Reviews</h4>
			<h4>Price:${recipe.id}</h4>
			<p>{recipe.description}</p>
		</div>
	);
};

const mapStateToProps = (state, ownProps) => {
	return { recipe: state.selectedRecipe };
};

export default connect(mapStateToProps)(RecipeDetails);
