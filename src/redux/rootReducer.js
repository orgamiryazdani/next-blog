import { combineReducers } from "redux";
import {userSigninReducer,userSignupReducer} from "./users/reducer";

const rootReducer = combineReducers({
  userSignin: userSigninReducer,
  userSignup: userSignupReducer,
});

export default rootReducer; 