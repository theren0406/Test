import React, { Component } from 'react';

export default class DataList extends Component {

  listItems() {
    const { deleteUser } = this.props;

    return this.props.data.map((user, idx) => (
      <li key={idx} className="user myRow">
        <div className="small-col">{idx + 1}</div>
        <div>{user.name}</div>
        <div>{user.phone}</div>
        <div className="email">{user.email}</div>
        <div className="small-col">
          <img src="./assets/delete.png" title="刪除此列" alt="delete"
            style={{cursor: 'pointer'}}
            onClick={() => deleteUser(user)}
          />
        </div>
      </li>
    ))
  }

  render() {
    return (
      <ul>
        <li className="title myRow">
          <div className="small-col">編號</div>
          <div>姓名</div>
          <div>電話</div>
          <div className="email">電子信箱</div>
          <div className="small-col"></div>
        </li>
        {this.listItems()}
      </ul>
    );
  }
}