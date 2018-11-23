import React, { Component } from 'react';

export default function UserList(props) {
  return (
    <ul>
      {props.list.map((user, idx) => {
        return <li key={idx}>{user.name} is {user.gender}, {user.age} years old</li>
        }) 
      }
    </ul>
  );
}