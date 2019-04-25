import React from 'react';
import '../css/landing-page.css';

const Cards = props => {
	console.log(props.items);

	return (
		<div>
			{props.items.map(food => {
				return (
					<div className="col s12 m4 l3 card-single">
						<div className="card">
							<div className="card-image">
								<img
									className="card-layout"
									src={food.image_url}
									// src="http://static.food2fork.com/Buffalo2BChicken2BGrilled2BCheese2BSandwich2B5002B4983f2702fe4.jpg"
									alt="food recipes"
								/>
								<span className="card-title">{food.title}</span>
							</div>

							<div className="card-content">
								<p>{food.publisher}</p>
							</div>
							<div className="card-action">
								<a href="#">This is a link</a>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default Cards;
