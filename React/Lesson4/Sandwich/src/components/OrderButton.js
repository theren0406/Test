import React from 'react';

export default function OrderButton(props) {
  const { name, id } = props
  // 加上數量
  return (
    <div>
      <p className="btnName">{name}</p>
      <button className="myBtn" onClick={props.addIngred.bind(this, id)}>+</button>
      <button className="myBtn" onClick={() => props.subtractIngred(id)}>-</button>
    </div>
  );
}