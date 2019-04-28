import React, { Component } from 'react';
import '../css/card.css';
import { Button, Icon } from 'semantic-ui-react';
import 'materialize-css/dist/css/materialize.min.css';
import { NavLink, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { displayRecipes } from '../actions';
import { displaySingleRecipe } from '../actions';

class Cards extends Component {
	// console.log(props.items);
	componentDidMount() {
		this.props.displayRecipes();
	}
	renderList() {
		return this.props.display.map(food => {
			return (
				<div className="col s12 m4 l3 card-single" key={food.id}>
					<div className="card">
						<div className="card-image">
							<img className="card-layout" src={food.image_url} alt="food recipes" />
							<span className="card-title">{food.title}</span>
						</div>

						<div className="card-content">
							<p>{food.publisher}</p>
						</div>
						<div className="card-action">
							<Link to={`/recipe/${food.id}`}>
								<Button animated onClick={() => this.props.displaySingleRecipe(food)}>
									<Button.Content visible>View</Button.Content>
									<Button.Content hidden>
										<Icon name="arrow right" />
									</Button.Content>
								</Button>
							</Link>

							{/* <a href="#">This is a link</a> */}
						</div>
					</div>
				</div>
			);
		});
	}

	render() {
		console.log(this.props);
		console.log(this.props.display);

		return (
			<div className=" ui container menu-display card-render">
				<div className="row"> {this.renderList()}</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	console.log(state);
	return {
		display: state.display
	};
};

// export default Cards;
export default connect(mapStateToProps, { displayRecipes, displaySingleRecipe })(Cards);
