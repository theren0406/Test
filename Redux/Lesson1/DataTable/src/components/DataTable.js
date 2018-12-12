import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addUser, deleteUser } from '../actions';

import { checkError } from './validate';
import DataList from './DataList';
import Modal from './Modal';
import Input from './Input';

class DataTable extends Component {
  state = {
    name: '',
    phone: '',
    email: '',
    error: { name: '', phone: '', email: '' },
    // userData: [
    // 	{ name: 'Lily Wang', phone:'0920-832123', email: 'happy@gmail.com' }
    // ],
    modalIsShowed: false
  }

  handleAddUser = () => {
    const { name, phone, email } = this.state;
    if (this.validate()) {
      const newUser = { name, phone, email };

      this.props.addUser(newUser);
      this.setState({
        name: '',
        phone: '',
        email: '',
        error: { name: '', phone: '', email: '' },
        // userData: [ ...userData, newUser],
        modalIsShowed: false
      });
    }
  }

  handleDeleteUser = (inputUser) => {
    // const { userData } = this.state;
    // const newData = [ ...userData ].filter(user => user.name !== inputUser.name );
    // this.setState({
    //   userData: newData
    // })
    this.props.deleteUser(inputUser);
  }

  closeAddModal = () => {
    this.setState({ modalIsShowed: false });
  }

  openAddModal = () => {
    this.setState({ modalIsShowed: true });
  }

  handleInputChange = (key, e) => {
    this.setState({ [key]: e.target.value });
  }

  validate(input = 'all') {
    let noError = true;
    const checked = checkError(input, this.state, this.props);
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
    // console.log(this.props);
    const { name, phone, email, error, modalIsShowed } = this.state; 
    const { userData } = this.props;
    return (
      <div>
        <div className="header">
          點選列表即可修改資料
					<button className="btn btn-main btn-add" onClick={this.openAddModal}>
            新增資料
          </button>
        </div>
        <DataList data={userData} deleteUser={this.handleDeleteUser}/>
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
              onChange={this.handleInputChange}
              onBlur={() => this.validate('name')}
            />
            <Input
              name="phone"
              label="電話"
              value={phone}
              error={error.phone}
              onChange={this.handleInputChange}
              onBlur={() => this.validate('phone')}
            />
            <Input
              name="email"
              label="電子信箱"
              required="*必填"
              value={email}
              error={error.email}
              onChange={this.handleInputChange}
              onBlur={() => this.validate('email')}
            />
            <div className="btn_container">
              <button className="btn btn-cancel" onClick={this.closeAddModal}>取消</button>
              <button type="button" id="submitBtn"
                className="btn btn-main"
                onClick={this.handleAddUser}
              >新增
     				</button>
            </div>
          </form>
        </Modal>
      </div>
    );
  }
}

// export default DataTable;

function mapStateToProps(state) {
	return {
		// product: state.product,
		userData: state.user
	};
}

function mapDispatchToProps(dispatch) {
  // return bindActionCreators({ addUser, deleteUser }, dispatch);
  return {
    // addUser: (payload) => dispatch({ type: 'ADD_USER', payload }),
    addUser: (payload) => dispatch(addUser(payload)),
    deleteUser: (payload) => dispatch(deleteUser(payload))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DataTable);