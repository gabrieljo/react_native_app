import React, { Component } from "react";
import LogInScreen from "./presenter";
import {Alert} from 'react-native';
import PropTypes from 'prop-types';

class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };

  static propTypes = {
    login: PropTypes.func.isRequired,
    fbLogin: PropTypes.func.isRequired
  }

  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
        fbLogin={this._handleFBLogin}
      />
    );
  }

  _changeUsername = text => {
    this.setState({ username: text });
  };

  _changePassword = text => {
    this.setState({ password: text });
  };
    //async 요청한 awsit request 처리가 끝날때까지 대기하도록 처리
  _submit = () => async () => {
    const { username, password, isSubmitting } = this.state;
    const { login } = this.props;

    if (!isSubmitting) {
      if (username && password) {
        this.setState({ isSubmitting: true });
        //redux action
        const loginResult = await login(username, password);

        if(!loginResult){
          Alert.alert('Something went wrong, try again');
          this.setState({
            isSubmitting: false
          })
        }

      } else {
        window.alert("All field is required");
      }
    }
  };

  _handleFBLogin = () => async () => {
    const {fbLogin} = this.props;
    this.setState({isSubmitting:true})
    const facebookResult = await fbLogin();
    if(!facebookResult){
      this.setState({isSubmitting:false})
    }
  }
}

export default Container;
