import React, { Component } from 'react';
import { Button, Icon } from 'semantic-ui-react';
import 'materialize-css/dist/css/materialize.min.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayRecipes } from '../actions';
import Banner from '../Components/banner/Banner';
import '../css/card.css';
import '../css/banner.css';
import '../img/banner-Image.jpg';

class Cards extends Component {
	// console.log(props.items);
	componentDidMount() {
		this.props.displayRecipes();
	}

	renderList() {
		const display = this.props.display || [];
		return display.map(recipe => {
			// console.log(recipe);
			return (
				<div key={recipe.id}>
					<div className="col s12 m4 l3 card-single">
						<div className="card">
							<div className="card-image">
								<img className="card-layout" src={recipe.image_url} alt="food recipes" />
								<span className="card-title">{recipe.title}</span>
							</div>

							<div className="card-content">
								<p>{recipe.publisher}</p>
							</div>
							<div className="card-action">
								<Link className="ui animated button" to={`/posts/${recipe.id}`}>
									<Button animated className='btn'>
										<Button.Content visible>View</Button.Content>
										<Button.Content hidden>
											<Icon name="arrow right" />
										</Button.Content>
									</Button>
								</Link>
							</div>
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		return (
			<div>
				<Banner />
				<div className="ui container ">
					<div className="row">{this.renderList()}</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		display: state.display.recipes
	};
};

export default connect(mapStateToProps, { displayRecipes })(Cards);
