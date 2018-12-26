import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
// import axios from '../axiosURL';

import Input from '../components/Input';
import { addPost } from '../actions/post';

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Max'
	}

	handleInputChange = (e, input) => {
		this.setState({ [input]: e.target.value });
	}

	handleSendPost = () => {
		const { submitted, ...data } = this.state;
	
		// this.props.addPost(data, () => this.props.history.push('/posts'));
		this.props.addPost(data);

		// axios.post(`/posts.json`, data)
		// 	.then(response => {
		// 		console.log(response);
		// 		this.props.history.replace('/posts');
		// 	});
	}

	render() {
		const { title, content, author } = this.state;
		return (
			<div>
				<Input label="標題" inputType="input" value={title} 
					onChange={(e) => this.handleInputChange(e, 'title')} 
				/>
				<Input label="內容" inputType="textarea" value={content} rows="6"
					onChange={(e) => this.handleInputChange(e, 'content')} 
				/>
				<Input label="作者" inputType="select" value={author} 
					onChange={(e) => this.handleInputChange(e, 'author')} options={['Max', 'Lily', 'Joe', 'Wendy', 'Cindy']}
				/>
				<button className="myBtn addBtn" onClick={this.handleSendPost}>新增</button>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return bindActionCreators({ addPost }, dispatch);
  // return {
  //     addPost: (payload, history) => dispatch(addPost(payload, history)),
  // }
}

export default connect(null, mapDispatchToProps)(NewPost);