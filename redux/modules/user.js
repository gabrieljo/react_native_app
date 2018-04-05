// imports
import { API_URL, FB_APP_ID } from "../../constants";
import { AsyncStorage } from 'react-native';
import { Facebook } from 'expo';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly8xMzkuNTkuMjMwLjE4Mjo4MDEyL2FwaS9zaWduaW4iLCJpYXQiOjE1MjI5MDA1NTYsImV4cCI6MTUyMzEyMDE1NiwibmJmIjoxNTIyOTAwNTU2LCJqdGkiOiJoSWxNUXRyNVNDQ1BoZ05LIn0.37q_FefBS1LVbypTEypNYbI3M00N85E7M742gXaKKO0";
const user = {
        "id": 2,
        "uid": "599ed4768ea8d",
        "account_type": "5",
        "login_code": "SPAA25409058",
        "business_code": "",
        "business_no": null,
        "business_name": "엔이노베이션",
        "name": "이구영",
        "email": "nanum2540@naver.com",
        "mobile": "01090582540",
        "phone": "070-4158-2540",
        "postcode": "10881",
        "address1": "경기도 파주시 문발로 139",
        "address2": "나래곰 4층 403호",
        "business_type": "도소매",
        "business_item": "카드단말기",
        "handling_item": "카드단말기",
        "fee": "0",
        "total_fee": "0",
        "bank": "11",
        "holder_name": "주식회사 엔이노베이션",
        "bank_account": "",
        "kind": "법인",
        "dob": "-",
        "ssn": null,
        "deposit_cycle": null,
        "installment": null,
        "approval_limit": null,
        "monthly_limit": null,
        "next_day_charge": "미사용",
        "warranty": "미사용",
        "approved_date": "2016-12-15",
        "status": "운영",
        "memo": null,
        "parent_code": "AAAA00000000",
        "dealer_code": null,
        "agent_code": null,
        "company_code": null,
        "hq_code": "AAAA00000000",
        "pin": null,
        "device_token": null,
        "created_at": "2017-10-06 22:09:39",
        "updated_at": "2017-08-23 22:28:22"
    }

// Actions
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";
const SET_USER = "SET_USER";

//Actions creators
function setLogin (token) {
  return {
    type:LOG_IN,
    token
  }
}

function setLogout(){
  AsyncStorage.clear();
  return { type:LOG_OUT }
}

function setUser(user) {
  return {
    type:SET_USER,
    user
  }
}

//Api Actions
function login(username, password) {
  return dispatch => {

    dispatch(setLogin(token))
    dispatch(setUser(user))
    // return fetch(`$(API_URL)/api/login`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({ username, password })
    // })
    //   .then(response => response.json())
    //   .then(json => {
    //      if(json.user && json.token){
    //       dispatch(setLogin(json.token));
    //       dispatch(setUser(json.user));
    //       return true;
    //     }else{
    //       return false;
    //     }
    //   });
  };
}

function facebookLogin() {
  return async dispatch => {
    const {type, token} = await Facebook.logInWithReadPermissionsAsync(
      FB_APP_ID, {
      permission:["public_profile", 'email']
    });

    if(type === "success"){

      dispatch(setLogin(token))
      dispatch(setUser(user))
      // fetch(`${API_URL}/users/login/facebook/`, {
      //   method:"POST",
      //   headers: {
      //     "Content-Type":"application/json"
      //   },
      //   body:JSON.stringify({
      //     access_token:token
      //   })
      //   .then(response => response.json())
      //     .then(json => {
      //        if(json.user && json.token){
      //         dispatch(setLogin(json.token));
      //         dispatch(setUser(json.user));
      //         return true;
      //       }else{
      //         return false;
      //       }
      //     });
      // })
    }
  }
}
//Initial state
const initialState = {
  isLoggedIn: false
};
//Reducer

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
    return applyLogin(state, action)
    case LOG_OUT:
    return applyLogout(state, action)
    case SET_USER:
    return applySetUser(state, action)
    default:
      return state;
  }
}

//Reducer functions
function applyLogin(state, action){
  const {token} = action;
  return {
    ...state,
    isLoggedIn:true,
    token
  }
}

function applyLogout(state, action){
  AsyncStorage.clear();
  return {
    ...state,
    isLoggedIn: false,
    token:""
  }
}

function applySetUser(state, action){
  const {user} = action;
  return {
    ...state,
    profile:user
  }
}
//Exports
const actionCreators = {
  login,
  facebookLogin
};

export { actionCreators };
//Default reducer export
export default reducer;
