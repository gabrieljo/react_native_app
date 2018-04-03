import React, { Component } from "react";
import LogInScreen from "./presenter";

class Container extends Component {
  state = {
    username: "",
    password: "",
    isSubmitting: false
  };

  render() {
    return (
      <LogInScreen
        {...this.state}
        changeUsername={this._changeUsername}
        changePassword={this._changePassword}
        submit={this._submit}
      />
    );
  }

  _changeUsername = text => {
    this.setState({ username: text });
  };

  _changePassword = text => {
    this.setState({ password: text });
  };

  _submit = () => {
    const { username, password, isSubmitting } = this.state;

    if (!isSubmitting) {
      if (username && password) {
        this.setState({ isSubmitting: true });
        //redux action
      } else {
        window.alert("All field is required");
      }
    }
  };
}

export default Container;
