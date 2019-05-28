import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipes, deleteRecipe } from '../../actions';
import '../../css/singleRecipe.css';
import { Link } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import '../../css/card.css';
import { white } from 'ansi-colors';

class RecipeDetails extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.createRecipes(id);
	}

	deleteRecipeDetails = () => {
		const { id } = this.props.match.params;
		this.props.deleteRecipe(id, () => {
			this.props.history.push('/');
		});
	};

	render() {
		const { display } = this.props;
		const { id } = this.props.match.params;
		if (!display) {
			return <div>Loading</div>;
		}
		console.log(display);
		return (
			<div className="ui container singleCard">
				<Grid centered columns={2}>
					<Grid.Column width={2}>
						<div className="card">
							<div className="card-image">
								<img className="card-layout" src={display.image_url} alt="food recipes" />
								<span className="card-title">{display.title}</span>
							</div>

							<div className="card-content">
								<p>{display.publisher}</p>
							</div>
							<div className="card-action">
								<button className="btn">
									<Link style={{ textDecoration: 'none', color: 'white', textAlign: 'right' }} to="/">
										{' '}
										GO HOME
									</Link>
								</button>
								<button className="btn" onClick={this.deleteRecipeDetails}>
									DELETE
								</button>
								<button className="btn">
									<Link style={{ textDecoration: 'none', color: 'white', textAlign: 'right' }} to={`/update/${id}`}>
										UPDATE
									</Link>
								</button>
							</div>
						</div>
					</Grid.Column>
				</Grid>
				{/* <div className="ui container">
					<p>Recipe Shows!{display.id}</p>
				</div> */}
			</div>
		);
	}
}

const mapStateToProps = ({ display }, ownProps) => {
	console.log(display);
	return { display: display.recipe };
};

export default connect(mapStateToProps, { createRecipes, deleteRecipe })(RecipeDetails);
