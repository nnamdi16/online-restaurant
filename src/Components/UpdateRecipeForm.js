import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Field, reduxForm } from 'redux-form';
import 'materialize-css/dist/css/materialize.min.css';
import '../css/postRecipe.css';
import { createRecipes, updateRecipe } from '../actions';

class UpdateRecipeForm extends Component {
	state = {
		publisher: '',
		title: '',
		recipe_id: '',
		image_url: '',
		social_rank: '',
		publisher_url: ''
	};

	componentWillReceiveProps(nextProps, nextState) {
		const { publisher, title, recipe_id, image_url, social_rank, publisher_url } = nextProps.display;

		this.setState({
			publisher,
			title,
			recipe_id,
			image_url,
			social_rank,
			publisher_url
		});
	}
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.createRecipes(id);
	}

	handleInputChange = e => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	handleSubmit = e => {
		e.preventDefault();
		const { publisher, title, recipe_id, image_url, social_rank, publisher_url } = this.state;
		const { id } = this.props.match.params;

		const recipes = {
			id,
			publisher,
			title,
			recipe_id,
			image_url,
			social_rank,
			publisher_url
		};
		//console.log(recipes);
		this.props.updateRecipe(recipes);

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
		const { display } = this.props;
		if (!display) {
			return <div>Loading...</div>;
		}
		console.log(display);
		return (
			<div className="ui container">
				<h4>Create Recipe</h4>
				<form onSubmit={this.handleSubmit}>
					<div>
						<input
							required
							name="publisher"
							onChange={this.handleInputChange}
							type="text"
							value={this.state.publisher}
							placeholder="Enter Publisher"
						/>
					</div>

					<br />
					<br />
					<div>
						<input
							required
							name="title"
							onChange={this.handleInputChange}
							type="text"
							value={this.state.title}
							placeholder="Enter Title"
						/>
					</div>

					<br />
					<br />
					<div>
						<input
							required
							name="recipe_id"
							onChange={this.handleInputChange}
							type="text"
							value={this.state.recipe_id}
							placeholder="Enter Recipe_ID"
						/>
					</div>

					<br />
					<br />
					<div>
						<input
							required
							name="image_url"
							onChange={this.handleInputChange}
							type="text"
							value={this.state.image_url}
							placeholder="Enter Image Url"
						/>
					</div>
					<br />
					<br />
					<div>
						<input
							required
							name="social_rank"
							onChange={this.handleInputChange}
							type="text"
							value={this.state.social_rank}
							placeholder="Enter Social Rank"
						/>
					</div>
					<br />
					<br />
					<div>
						<input
							required
							name="publisher_url"
							onChange={this.handleInputChange}
							type="text"
							value={this.state.publisher_url}
							placeholder="Enter Publisher Url"
						/>
					</div>

					<br />
					<br />
					<button>Update Recipe</button>
				</form>
			</div>
		);
	}
}
const mapStateToProps = ({ display }) => {
	return {
		display: display.recipe
	};
};

export default connect(mapStateToProps, { createRecipes, updateRecipe })(UpdateRecipeForm);
