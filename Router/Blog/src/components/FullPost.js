import React, { Component } from 'react';
import axios from '../axiosURL';
import { Link } from 'react-router-dom';
import withAuth from '../hoc/withAuth';
class FullPost extends Component {
	constructor(props) {
		super(props)
		console.log('constructor');
		this.state = {
			post: null
		}
	}

	componentDidMount() {
		console.log(this.props);
		const { id } = this.props.match.params;

		axios.get(`/posts/${id}.json`)
			.then(res => {
				this.setState({ post: res.data });
			});
	}

	getSnapshotBeforeUpdate(prevProps, prevState) {
    return "value from snapshot";
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		// console.log(snapshot);
		console.log('updated');

		if (this.props.match.params.id !== prevProps.match.params.id) {
			const newId = this.props.match.params.id;
			axios.get(`/posts/${newId}.json`)
			.then(res => {
				this.setState({ post: res.data });
			});
		}
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
					<p className="loader" /> :
					<article className="post">
						<Link to="/posts/-LUT1DyJazbfeUXVZyMJ">Click me</Link>
						{/* <a href="/posts/-LUT1DyJazbfeUXVZyMJ">Click me</a> */}
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