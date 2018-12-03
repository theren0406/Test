import React, { Component } from 'react';
import axios from '../axiosURL';

class Posts extends Component {
	state = {
		posts: null,
	}

	componentDidMount() {
		console.log(this.props);

		axios.get('/posts.json')
			.then(res => {
				const fetchedPosts = [];

				for (let key in res.data) {
					fetchedPosts.push({
						id: key,
						...res.data[key]
					});
				}
				// 使用reverse 將最新網誌放最上面
				this.setState({ posts: fetchedPosts.reverse() });
			})
			.catch(err => {
				console.log(err);
			});
	}

	handlePostSelected = (id) => {
		// this.props.history.push({pathname: '/posts/' + id});
		this.props.history.push('/posts/' + id);
	}

	render() {
		const { posts } = this.state;
		return (
			<div>
				<section>
					{!posts ?
						<p className="loader" /> :
						posts.map(post => (
							// <Link to={'/posts/' + post.id} key={post.id}>
							<article className="post" key={post.id} onClick={() => this.handlePostSelected(post.id)}>
								<h5>{post.title}</h5>
								<div>作者 : {post.author}</div>
							</article>
						))
					}
				</section>
			</div>
		);
	}
}

export default Posts;