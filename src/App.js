import React from 'react';
import './App.css';
import Banner from './Components/banner/Banner';
import Card from './Components/Card';
import 'semantic-ui-css/semantic.min.css';
// import 'materialize-css/dist/css/materialize.min.css';
import { BrowserRouter, Route } from 'react-router-dom';
import PlatformRoute from './routes/PlatformRoute';
import RecipeRoute from './routes/RecipeRoute';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<PlatformRoute />
			</BrowserRouter>
		</div>
	);
};

export default App;

//To change port for json server - json-server --watch db.json --port 4000
