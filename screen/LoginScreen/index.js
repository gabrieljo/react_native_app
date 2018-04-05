import { connect } from "react-redux";
import Container from "./container";
import { actionCreators as userActions } from "../../redux/modules/user";

const mapDispatchTopProps = (dispatch, ownProps) => {
  return {
    login: (username, password) => {
      //await에서 받을수 있게 dispatch 리턴해야함
      return dispatch(userActions.login(username, password));
    },
    fbLogin:() => {
      dispatch(userActions.facebookLogin())
    }
  };
};

export default connect(null, mapDispatchTopProps)(Container);
