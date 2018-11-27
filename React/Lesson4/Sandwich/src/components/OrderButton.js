import React from 'react';

export default function OrderButton(props) {
  const { name, id, amount, price } = props
  return (
    <div className="orderAmount">
      <p className="orderName">{name}
        <span> (${price}) </span> 
        &nbsp; x {amount}
      </p>
      <button className="myBtn" onClick={props.addIngred.bind(this, id)}>+</button>
      <button className="myBtn" onClick={() => props.subtractIngred(id)}>-</button>
    </div>
  );
}