import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Home from '../components/Home';
import Posts from './Posts';
import Test from './Test';
import FullPost from './FullPost';
import asyncComponent from '../hoc/asyncComponent';
import ScrollToTopRoute from '../hoc/ScrollToTopRoute';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost');
});

class Blog extends Component {

	render() {
		return (
			<div className="app">
				<header>
					<nav>
						<NavLink to="/" exact>首頁</NavLink>
						<NavLink to="/posts">所有網誌</NavLink>
						<NavLink to={{ pathname: '/newPost' }}>新增網誌</NavLink>
						<NavLink to="/test">登入測試</NavLink>						
					</nav>
				</header>

				<Switch>
					<Route path="/" exact component={Home} />
					<Route path="/test" component={Test} />
					<Route path="/newPost" component={AsyncNewPost} /> 
					<Route path="/posts" exact component={Posts} />
					{/* <ScrollToTopRoute path="/posts/:id" component={FullPost} /> */}
					<Route path="/posts/:id" component={FullPost} />
					<Route render={() => <h5 className="notFound">404 Not found...</h5>} />
				</Switch>
			</div>
		);
	}
}

export default Blog;