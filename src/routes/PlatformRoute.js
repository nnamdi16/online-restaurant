import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from '../Components/HomPage';
import RecipeRoute from './RecipeRoute';

export default () => {
	return (
		<Switch>
			<Route exact path="/" component={HomePage} />
			<RecipeRoute />
		</Switch>
	);
};
