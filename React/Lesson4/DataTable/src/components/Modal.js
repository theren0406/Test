import React from 'react';

export default function Modal(props) {

	const display = props.isShowed ? 'block' : 'none';

	return (
		<div>
			<div className="modal show" role="dialog" style={{ display: display }}>
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<p className="modalTitle">{props.title}</p>
							<button className="close" onClick={props.closeModal} aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div className="modal-body">
							{props.children}
						</div>
					</div>
				</div>
			</div>
			{props.isShowed && (
				<div className="modal-backdrop show"></div>
			)}
		</div>
	);
}