import React from 'react';
import '../../css/landing-page.css';
import '../../img/banner-Image.jpg';
const Banner = () => {
	const divStyle = {
		margin: '0px'
	};
	return (
		<div>
			<div className="banner-Image">
				<p>Cool Taste, Quality.</p>
			</div>
			<div class="ui segment" style={divStyle}>
				<h1>Cool Taste, Quality.</h1>
			</div>
		</div>
	);
};

export default Banner;
