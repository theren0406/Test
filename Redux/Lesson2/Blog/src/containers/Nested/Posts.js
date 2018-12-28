import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import FullPost from './FullPost';
import { getPostList } from '../../actions/post';

class Posts extends Component {
	state = {
		posts: null
	}

	componentDidUpdate() {
		const { history, location } = this.props;
		
		if (location.state && location.state.fromDeletePost) {
			this.props.getPostList();
			history.replace({
				pathname: '/posts',
				state: { fromDeletePost: false }
			})
		}
	}

	componentDidMount() {
		this.props.getPostList();
	}

	// getPostList() {
	// 	axios.get('/posts.json')
	// 		.then(res => {
	// 			const fetchedPosts = [];

	// 			for (let key in res.data) {
	// 				fetchedPosts.push({
	// 					id: key,
	// 					...res.data[key]
	// 				});
	// 			}
	// 			// 使用reverse 將最新網誌放最上面
	// 			this.setState({ posts: fetchedPosts.reverse() });
	// 		})
	// 		.catch(err => {
	// 			console.log(err);
	// 		});
	// }

	handlePostSelected = (id) => {
		this.props.history.push('/posts/' + id);
	}

	render() {
		const { posts } = this.props;
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

const mapStateToProps = state => {
	return {
		posts: state.posts,
		isLoading: state.isLoading
	};
}

const mapDispatchToProps = dispatch => {
	// return bindActionCreators({ getPostList }, dispatch);
	return {
		getPostList: (payload) => dispatch(getPostList(payload)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Posts);