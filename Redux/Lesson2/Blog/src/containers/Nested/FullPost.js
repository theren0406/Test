import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deletePost } from '../../actions/post';

class FullPost extends Component {
	state = {
		post: null,
		error: false
	}

	// componentDidMount() {
	// 	this.getPost();
	// }

	// componentDidUpdate() {
	// 	this.getPost();
	// }

	// getPost() {
	// 	const { id } = this.props.match.params;
	// 	const { post } = this.state;

	// 	if (!post || (post && post.id !== id)) {
	// 		axios.get(`/posts/${id}.json`)
	// 			.then(res => {
	// 				this.setState({ post: { id, ...res.data } });
	// 			});
	// 	}
	// }

	handleDeletePost = () => {
		const { id } = this.props.match.params;
		this.props.deletePost(id);

		// axios.delete(`/posts/${this.props.match.params.id}.json`)
		// 	.then(res => {
		// 		console.log(res);
		// 		this.props.history.push({
		// 			pathname: '/posts',
		// 			state: { fromDeletePost: true }
		// 		});
		// 	});
	}

	render() {
		const { post, error } = this.props;
		return (
			<div className="col-7">
				{post &&
					<article>
						<h5>{post.title}</h5>
						<div>作者 : {post.author}</div>
						<p className="content">{post.content}</p>
						<button onClick={this.handleDeletePost} className="myBtn">Delete</button>
					</article>
				}
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		post: state.posts.find(post => post.id === ownProps.match.params.id),
		isLoading: state.isLoading
	};
}

const mapDispatchToProps = dispatch => {
	// return bindActionCreators({ deleteList }, dispatch);
	return {
		deletePost: (payload) => dispatch(deletePost(payload))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);