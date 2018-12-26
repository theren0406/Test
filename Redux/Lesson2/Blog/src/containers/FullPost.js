import React, { Component } from 'react';
import { connect } from 'react-redux';

import Loader from '../components/Loader';
import { deletePost, getPost } from '../actions/post';

class FullPost extends Component {
	state = {
		post: null
	}

	componentDidMount() {
		// window.scroll(0, 0);

		// console.log(this.props);
		// const { id } = this.props.match.params;

		// axios.get(`/posts/${id}.json`)
		// 	.then(res => {
		// 		this.setState({ post: res.data });
		// 	});

		const { post, match } = this.props;

		if (!post) {
			this.props.getPost(match.params.id);
			// axios.get(`/posts/${match.params.id}.json`)
			// 	.then(res => {
			// 		this.setState({ post: res.data });
			// 	});
		}
	}

	handleDeletePost = () => {
		const { id } = this.props.match.params;
		
		this.props.deletePost(id);

		// axios.delete(`/posts/${this.props.match.params.id}.json`)
		// 	.then(res => {
		// 		console.log(res);
		// 		this.props.history.push('/posts');
		// 	});
	}

	render() {
		const { post } = this.props;
		return (
			<div>
				{!post ?
					<Loader /> :
					<article className="post">
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
	// console.log(ownProps);
	return {
		post: state.posts.find(post => post.id === ownProps.match.params.id),
		isLoading: state.isLoading
	};
}

const mapDispatchToProps = dispatch => {
	// return bindActionCreators({ deleteList }, dispatch);
	return {
		deletePost: (payload) => dispatch(deletePost(payload)),
		getPost: (payload) => dispatch(getPost(payload))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(FullPost);