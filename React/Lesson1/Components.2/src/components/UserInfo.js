import React from 'react';

export default function UserInfo(props) {
  return (
    <div className="UserInfo">
        <img className="Avatar"
          src={props.avatarUrl}
          alt={props.name}
        />
        <div className="UserInfo-name">
          {props.name}
        </div>
      </div>
  );
}
