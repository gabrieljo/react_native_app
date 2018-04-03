import { combinReducers, applyMiddleware, createStore } from "redux";
import { persistStore, persistCombineReducers } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import user from "./modules/user";

const middlewares = [thunk];
const persistConfig = {
  key: "root",
  storage
  //blacklist:["modules"] - 원하지 않는 데이터는 저장하지 않음
};

const reducer = persistCombineReducers(persistConfig, {
  user
});

const configureStore = () => {
  let store = createStore(reducer, applyMiddleware(...middlewares));
  let persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
