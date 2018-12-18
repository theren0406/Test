import React, { Component } from 'react';
import { connect } from 'react-redux';

// import axios from '../axiosURL';
import { getPostList } from '../actions/post';

class Posts extends Component {
	state = {
		posts: null
	}

	componentDidMount() {
		this.props.getPostList();
		// axios.get('/posts.json')
		// 	.then(res => {
		// 		const fetchedPosts = [];

		// 		for (let key in res.data) {
		// 			fetchedPosts.push({
		// 				id: key,
		// 				...res.data[key]
		// 			});
		// 		}
		// 		// 使用reverse 將最新網誌放最上面
		// 		this.setState({ posts: fetchedPosts.reverse() });
		// 	})
		// 	.catch(err => {
		// 		console.log(err);
		// 	});
	}

	componentDidUpdate() {
		console.log(this.props)
	}

	handlePostSelected = (id) => {
		this.props.history.push('/posts/' + id);
	}

	render() {
		const { posts } = this.props;
		return (
			<div>
				{!posts ?
					<p className="loader" /> :
					<section>
						{posts.map(post => (
							// <Link to={'/posts/' + post.id} key={post.id}>
							<article className="post" key={post.id} onClick={() => this.handlePostSelected(post.id)}>
								<h5>{post.title}</h5>
								<div>作者 : {post.author}</div>
							</article>
						))}
					</section>
				}
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