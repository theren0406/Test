import React from 'react';

import UserInfo from './UserInfo';

function formatDate() {
  return '2018/11/20'
}

export default function Comment(props) {

  return (
    <div className="Comment">
      {/* <UserInfo { ...props.author } /> */}
      <div className="UserInfo">
          <img className="Avatar"
            src={props.author.avatarUrl}
            alt={props.author.name}
          />
          <div className="UserInfo-name">
           {props.author.name}
          </div>
        </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}