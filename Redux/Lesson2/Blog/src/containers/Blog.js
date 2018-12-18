import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Posts from './Posts';
import FullPost from './FullPost';
import asyncComponent from '../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost');
});

class Blog extends Component {

	render() {
		return (
			<div className="Blog">
				<header>
					<nav>
						<NavLink to="/" exact>首頁</NavLink>
						<NavLink to="/posts">所有網誌</NavLink>
						<NavLink to={{ pathname: '/newPost' }}>新增網誌</NavLink>
					</nav>
				</header>

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/newPost" component={AsyncNewPost} /> 
					<Route path="/posts" exact component={Posts} />
					<Route path="/posts/:id" component={FullPost} />
					<Route render={() => <h5 className="notFound">404 Not found...</h5>} />
				</Switch>
			</div>
		);
	}
}

export default Blog;