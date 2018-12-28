import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Home from '../../components/Home';
import Posts from './Posts';
import asyncComponent from '../../hoc/asyncComponent';

// import NewPost from './NewPost/NewPost';
const AsyncNewPost = asyncComponent(() => {
	return import('../NewPost');
});

class Blog extends Component {
	state = {
		auth: true
	}

	render() {
		return (
			<div className="app">
				<header>
					<nav>
						<NavLink to="/" exact>首頁</NavLink>
						{/* <NavLink to="/posts" exact/> */}
						<NavLink to="/posts" activeClassName="my-active"
							activeStyle={{ color: '#fa923f' }}
						>
							所有網誌
						</NavLink>
						<NavLink to={{ 
							pathname: '/newPost', 
							hash: '#submit', 
							search: '?quick-submit=true'}}
						>
							新增網誌
						</NavLink>
					</nav>
				</header>

				<Route path="/" exact component={Home} />
				{/* <Route path="/"  component={Home} /> */}
			
				<Switch>
					{this.state.auth && 
						<Route path="/newPost" component={AsyncNewPost} /> 
					}
					<Route path="/posts" component={Posts} />
					<Route render={() => <h5 className="notFound">404 Not found...</h5>} />
					{/* <Redirect from="/" to="/posts" /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;