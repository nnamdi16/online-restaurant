import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/postRecipe.css';
import { postRecipe } from '../actions';

class PostRecipeForm extends Component {
	state = {
		publisher: '',
		title: '',
		recipe_id: '',
		image_url: '',
		social_rank: '',
		publisher_url: ''
	};
	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const recipes = {
			publisher: this.state.publisher,
			title: this.state.title,
			recipe_id: this.state.recipe_id,
			image_url: this.state.image_url,
			social_rank: this.state.social_rank,
			publisher_url: this.state.publisher_url
		};
		//console.log(recipes);
		this.props.postRecipe(recipes);

		this.setState({
			publisher: '',
			title: '',
			recipe_id: '',
			image_url: '',
			social_rank: '',
			publisher_url: ''
		});
	};

	render() {
		return (
			<div className="ui container">
				<h4>Create Recipe</h4>
				<form onSubmit={this.handleSubmit}>
					<input
						required
						name="publisher"
						onChange={this.handleInputChange}
						type="text"
						value={this.state.publisher}
						placeholder="Enter Publisher"
					/>{' '}
					<br />
					<br />
					<input
						required
						name="title"
						onChange={this.handleInputChange}
						type="text"
						value={this.state.title}
						placeholder="Enter Title"
					/>{' '}
					<br />
					<br />
					<input
						required
						name="recipe_id"
						onChange={this.handleInputChange}
						type="text"
						value={this.state.recipe_id}
						placeholder="Enter Recipe_ID"
					/>{' '}
					<br />
					<br />
					<input
						required
						name="image_url"
						onChange={this.handleInputChange}
						type="text"
						value={this.state.image_url}
						placeholder="Enter Image Url"
					/>
					<br />
					<br />
					<input
						required
						name="social_rank"
						onChange={this.handleInputChange}
						type="text"
						value={this.state.social_rank}
						placeholder="Enter Social Rank"
					/>
					<br />
					<br />
					<input
						required
						name="publisher_url"
						onChange={this.handleInputChange}
						type="text"
						value={this.state.publisher_url}
						placeholder="Enter Publisher Url"
					/>
					<br />
					<br />
					<button>Add Recipe</button>
				</form>
			</div>
		);
	}
}

export default connect(null, { postRecipe })(PostRecipeForm);
