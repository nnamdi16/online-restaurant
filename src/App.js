import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Card from './Components/Card';
import RecipeDetails from './Components/banner/RecipeDetails';
import PostRecipeForm from './Components/PostRecipeForm';
import UpdateRecipeForm from './Components/UpdateRecipeForm';

const App = () => {
	return (
		<div>
			{/* Hi there here! */}
			<BrowserRouter>
				<Switch>
					<Route path="/update/:id" component={UpdateRecipeForm} />
					<Route path="/posts/:id" component={RecipeDetails} />
					<Route path="/new" component={PostRecipeForm} />
					<Route path="/" component={Card} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;

//To change port for json server - json-server --watch db.json --port 4000

//json-server --watch db.json --port 4000
