import React, { Component } from 'react';
import axios from '../../axiosURL';
import { Route } from 'react-router-dom';

import FullPost from './FullPost';


class Posts extends Component {
	state = {
		posts: null,
	}

	componentDidUpdate() {
		const { history, location } = this.props;
		if (history.action === 'PUSH' &&  location.pathname === '/posts') {
			this.getPostList();
		}
	}

	componentDidMount() {
		console.log(this.props);
		this.getPostList();
	}

	getPostList() {
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
		const { url } = this.props.match;
		return (
			<div className="row">
				<section className="col-5">
					{!posts ?
						<p className="loader" /> :
						posts.map(post => (
							// <Link to={'/posts/' + post.id} key={post.id}>
							<article className="post" key={post.id} onClick={() => this.handlePostSelected(post.id)}>
								<h5 className="title">{post.title}</h5>
								<div>作者 : {post.author}</div>
							</article>
						))
					}
				</section>
				<Route path={`${url}/:id`} component={FullPost} />
				<Route path={url} exact render={() => <p className="notice">請點選欲閱讀的網誌</p>}
      />
			</div>
		);
	}
}

export default Posts;