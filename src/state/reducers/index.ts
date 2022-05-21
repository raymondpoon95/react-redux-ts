import { combineReducers } from "redux";
import bankReducer from "../reducers/bankReducer";

const rootReducer = combineReducers({
  bank: bankReducer,
});

export default rootReducer;

export type State = ReturnType<typeof rootReducer>;
