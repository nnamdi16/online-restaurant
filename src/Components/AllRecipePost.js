import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from './Post';

class AllRecipePost extends Component {
	render() {
		return (
			<div>
				<h1>All Posts</h1>
				{console.log(this.props.posts.post)}
				{this.props.posts.post.map(post => <Post key={post.id} post={post} />)}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		posts: state
	};
};

export default connect(mapStateToProps)(AllRecipePost);
