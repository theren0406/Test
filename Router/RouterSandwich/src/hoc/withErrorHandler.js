import React, { Component, Fragment } from 'react';

const withErrorHandler = (WrappedComponent, axios) => {
	return class extends Component {
		constructor(props) {
			super(props)

			this.state = {
				error: null
			}
			this.reqInterceptor = axios.interceptors.request.use(req => {
				this.setState({ error: null });
				return req;
			});
			this.resInterceptor = axios.interceptors.response.use(res => res, error => {
				// console.log(error);
				this.setState({ error: error });
				return Promise.reject(error);
			});
		}	

		componentWillUnmount() {
			axios.interceptors.request.eject(this.reqInterceptor);
			axios.interceptors.response.eject(this.resInterceptor);
		}

		errorConfirmed = () => {
			this.setState({ error: null });
		}

		render() {
			const { error } = this.state;
			return (
				<Fragment>
					<WrappedComponent {...this.props} />
					{error &&
					<div>
						<div className="errorModal modal show" tabIndex="-1" 
							style={{ display: 'block' }} onClick={this.errorConfirmed}
						>
							<div className="modal-dialog">
								<div className="modal-content">
									<div className="modal-header">
										<button className="close">
											<span>&times;</span>
										</button>
									</div>
									<div className="modal-body">
										{error ? error.message : null}
									</div>
								</div>
							</div>
						</div>
						<div className="modal-backdrop show" />
					</div>
					}
				</Fragment>
			);
		}
	}
}

export default withErrorHandler;