import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Home from './Home';
import Posts from './Posts';
import FullPost from './FullPost';
import asyncComponent from '../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
	return import('./NewPost');
});

class Blog extends Component {
	state = {
		auth: true
	}

	render() {
		return (
			<div className="Blog">
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


				{/* 所有符合path條件的Route 都會顯示 */}
				{/* <Route path="/"  component={Home} />
				<Route path="/posts" component={Posts} />			 */}

				
				{/* Switch內的Route會由上至下做path條件判斷，顯示第一個符合條件的Route */}
				<Switch>
					<Route path="/" exact component={Home} />
					{this.state.auth && 
						<Route path="/newPost" component={AsyncNewPost} /> 
					}
					<Route path="/posts" exact component={Posts} />
					<Route path="/posts/:id" component={FullPost} />
					<Route render={() => <h5 className="notFound">404 Not found...</h5>} />

					{/* <Redirect from="/" to="/posts" /> */}
				</Switch>
			</div>
		);
	}
}

export default Blog;