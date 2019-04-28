import React from 'react';
import '../../css/banner.css';
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
			<div className="ui segment" style={divStyle}>
				<h1>Cool Taste, Quality.</h1>
			</div>
		</div>
	);
};

export default Banner;
