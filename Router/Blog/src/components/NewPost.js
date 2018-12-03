import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from '../axiosURL';

import Input from './Input';

class NewPost extends Component {
	state = {
		title: '',
		content: '',
		author: 'Max',
		submitted: false
	}

	componentDidMount() {
		// If unauth => this.props.history.replace('/posts');
	}

	handleInputChange = (e, input) => {
		this.setState({ [input]: e.target.value });
	}

	handleSendPost = () => {
		const { submitted, ...data } = this.state;
	
		axios.post(`/posts.json`, data)
			.then(response => {
				this.props.history.replace('/posts');
				// this.setState( { submitted: true } );
			});
	}

	render() {
		const { title, content, author, submitted } = this.state;

		return (
			<div>
				{submitted &&
					<Redirect to="/posts" />
				}
				<Input label="標題" inputType="input" value={title} 
					onChange={(e) => this.handleInputChange(e, 'title')} 
				/>
				<Input label="內容" inputType="textarea" value={content} rows="6"
					onChange={(e) => this.handleInputChange(e, 'content')} 
				/>
				<Input label="作者" inputType="select" value={author} 
					onChange={(e) => this.handleInputChange(e, 'author')} options={['Max', 'Lily', 'Joe', 'Wendy']}
				/>
				<button className="myBtn addBtn" onClick={this.handleSendPost}>新增</button>
			</div>
		);
	}
}

export default NewPost;