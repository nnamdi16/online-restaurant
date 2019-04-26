import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Banner from './Components/banner/Banner';
import Card from './Components/Card';
import 'semantic-ui-css/semantic.min.css';
// import 'materialize-css/dist/css/materialize.min.css';
import './css/landing-page.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Modal from './Components/banner/Modal';

class App extends Component {
	state = {
		items: []
	};

	componentDidMount() {
		axios
			.get(' http://localhost:4000/posts')
			.then(res => {
				let data = res.data;
				console.log(data);
				this.setState({
					items: data
				});
			})
			.catch(err => console.log(err));
	}
	render() {
		const { items } = this.state;
		console.log(items);
		return (
			<div>
				<Banner />
				<Card items={items} />
			</div>
		);
	}
}

export default App;

//To change port for json server - json-server --watch db.json --port 4000
