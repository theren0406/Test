import React, { Component } from 'react';

export default function asyncComponent(importFunc) {
	return class extends Component {
		state = {
			component: null
		}

		componentDidMount() {
			importFunc()
				.then(myModule => {
					console.log(myModule);
					this.setState({ component: myModule.default });
				});
		}

		render() {
			const ImportedCompo = this.state.component;

			return ImportedCompo ? <ImportedCompo{...this.props} /> : null;
		}
	}
}