import React, { Component } from 'react';

import { checkError } from './validate';
import DataList from './DataList';
import Modal from './Modal';
import Input from './Input';

export default class DataTable extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    error: { name: '', phone: '', email: '' },
    userData: [
    	{ name: 'Lily Wang', phone:'0920-832123', email: 'happy@gmail.com' }
    ],
    modalIsShowed: false
  }

  onAddUser = () => {
    const { name, phone, email, userData } = this.state;

    if (this.validate()) {
      const newUser = { name, phone, email };
      this.setState({
        name: '',
        phone: '',
        email: '',
        error: { name: '', phone: '', email: '' },
        userData: [ ...userData, newUser],
        modalIsShowed: false
      });
    }
  }

  onDeleteUser = (inputUser) => {
    const { userData } = this.state;
    const newData = [ ...userData ].filter(user => user.name !== inputUser.name );
    this.setState({
      userData: newData
    })
  }

  closeAddModal = () => {
    this.setState({ modalIsShowed: false });
  }

  openAddModal = () => {
    this.setState({ modalIsShowed: true });
  }

  onInputChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  }

  validate(input = 'all') {
    let noError = true;
    const checked = checkError(input, this.state);
    const { name, phone, email } = checked;

    this.setState({
      error: checked
    });
    if (name !== '' || phone !== '' || email !== '') {
      noError = false;
    }
    // If noError is ture, the form is fine to submit
    return noError;
  }

  render() {
    const { name, phone, email, error, userData, modalIsShowed } = this.state; 
    return (
      <div>
        <div className="header">
          點選列表即可修改資料
					<button className="btn btn-main btn-add" onClick={this.openAddModal}>
            新增資料
          </button>
        </div>
        <DataList data={userData} deleteUser={this.onDeleteUser}/>
        <Modal isShowed={modalIsShowed} title="新增資料"
          closeModal={this.closeAddModal}
        >
          <form>
            <Input
              name="name"
              label="姓名"
              required="*必填"
              value={name}
              error={error.name}
              onChange={this.onInputChange}
              onBlur={() => this.validate('name')}
            />
            <Input
              name="phone"
              label="電話"
              value={phone}
              error={error.phone}
              onChange={this.onInputChange}
              onBlur={() => this.validate('phone')}
            />
            <Input
              name="email"
              label="電子信箱"
              required="*必填"
              value={email}
              error={error.email}
              onChange={this.onInputChange}
              onBlur={() => this.validate('email')}
            />
            <div className="btn_container">
              <button className="btn btn-cancel" onClick={this.closeAddModal}>取消</button>
              <button type="button" id="submitBtn"
                className="btn btn-main"
                onClick={this.onAddUser}
              >新增
     				</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}