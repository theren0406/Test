import React, { PureComponent, Fragment } from 'react';

export default class Modal extends PureComponent {
  render() {
    const { ingreds, closeModal, isShowed, price } = this.props;

    const display =  isShowed ? 'block' : 'none';
    return (
      <Fragment>
        <div className="modal show" tabIndex="-1" role="dialog" style={{ display: display }}>
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">三明治明細</h5>
                <button className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {ingreds.map((ingred) => (
                  <p className="ingredName" key={ingred.id}>{ingred.name}
                    <span> (${ingred.price}) </span>
                    &nbsp; x {ingred.amount}
                  </p>
                ))}
                <p className="totalPrice">總金額 : {price} NTD</p>
              </div>
              <div className="modal-footer">
                <button className="myBtn cancalBtn" onClick={closeModal}>取消</button>
                <button className="myBtn confirmBtn">確認</button>
              </div>
            </div>
          </div>
        </div>
        {isShowed && (
          <div className="modal-backdrop show"></div>
        )}
      </Fragment>
    );
  }
}