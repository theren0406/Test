import React, { Component } from 'react';

export default function asyncComponent(importFunc) {
	return class extends Component {
		state = {
			component: null
		}

		componentDidMount() {
			importFunc()
				.then(cmp => {
					console.log(cmp);
					this.setState({ component: cmp.default });
				});
		}

		render() {
			const ImportedCompo = this.state.component;

			return ImportedCompo ? <ImportedCompo{...this.props} /> : null;
		}
	}
}