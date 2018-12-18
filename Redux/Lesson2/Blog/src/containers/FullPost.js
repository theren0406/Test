import React, { Component } from 'react';
import axios from '../axiosURL';

import Loader from '../components/Loader';

class FullPost extends Component {
	state = {
		post: null
	}

	componentDidMount() {
		console.log(this.props);
		const { id } = this.props.match.params;

		axios.get(`/posts/${id}.json`)
			.then(res => {
				this.setState({ post: res.data });
			});
	}

	handleDeletePost = () => {
		axios.delete(`/posts/${this.props.match.params.id}.json`)
			.then(res => {
				console.log(res);
				this.props.history.push('/posts');
			});
	}

	render() {
		const { post } = this.state;
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

export default FullPost;