import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createRecipes } from '../../actions';
import '../../css/singleRecipe.css';
import { Link } from 'react-router-dom';
import { Grid, Button, Icon } from 'semantic-ui-react';

class RecipeDetails extends Component {
	componentDidMount() {
		const { id } = this.props.match.params;
		this.props.createRecipes(id);
	}

	render() {
		const { display } = this.props;
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
								<Button animated>
									<Button.Content visible>GO HOME</Button.Content>
									<Button.Content hidden>
										<Icon name="arrow right" />
									</Button.Content>
								</Button>
								<Button animated>
									<Button.Content visible>DELETE</Button.Content>
									<Button.Content hidden>
										<Icon name="arrow right" />
									</Button.Content>
								</Button>
								<Button animated>
									<Button.Content visible>UPDATE</Button.Content>
									<Button.Content hidden>
										<Icon name="arrow right" />
									</Button.Content>
								</Button>
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

export default connect(mapStateToProps, { createRecipes })(RecipeDetails);
