import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Card from './Components/Card';
import RecipeDetails from './Components/banner/RecipeDetails';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Switch>
					<Route path="/posts/:id" component={RecipeDetails} />
					<Route path="/" component={Card} />
				</Switch>
			</BrowserRouter>
		</div>
	);
};

export default App;

//To change port for json server - json-server --watch db.json --port 4000

//json-server --watch db.json --routes routes.json --port 4000
