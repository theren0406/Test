import React, { Fragment } from 'react';

import Loading from './Loading';

export default function Modal(props) {
  const { ingredients, closeModal, modalIsShowed, totalPrice, isLoading, sendOrder
  } = props;
  const display = modalIsShowed ? 'block' : 'none';
  
  return (
    <Fragment>
      <div className="modal show" tabIndex="-1" role="dialog" style={{ display: display }}>
        <div className="modal-dialog" role="document">
          {isLoading ?
            <Loading /> :
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">三明治購買明細</h5>
                <button className="close" onClick={closeModal}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                {ingredients.map((ingre) => (
                  <p className="ingredName" key={ingre.id}>{ingre.name}
                    <span> (${ingre.price}) </span>
                    &nbsp; x {ingre.amount}
                  </p>
                ))}
                <p className="totalPrice">總金額 : {totalPrice} NTD</p>
              </div>
              <div className="modal-footer">
                <button className="myBtn cancalBtn" onClick={closeModal}>取消</button>
                <button className="myBtn confirmBtn" onClick={sendOrder}>確認</button>
              </div>
            </div>
          }
        </div>
      </div>
      {modalIsShowed && (
        <div className="modal-backdrop show"></div>
      )}
    </Fragment>
  );
}