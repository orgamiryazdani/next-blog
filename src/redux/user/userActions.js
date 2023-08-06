import {
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
} from "./userTypes";
import http from "@/services/httpService";

export const signinUsersRequest = () => {
    return {
        type: SIGNIN_USER_REQUEST,
    };
};

export const signinUsersSuccess = (users) => {
    return {
        type: SIGNIN_USER_SUCCESS,
        payload: users,
    };
};

export const signinUsersFailure = (error) => {
    return {
        type: SIGNIN_USER_FAILURE,
        payload: error,
    };
};

export const signupUsersRequest = () => {
    return {
        type: SIGNUP_USER_REQUEST,
    };
};

export const signupUsersSuccess = (users) => {
    return {
        type: SIGNUP_USER_SUCCESS,
        payload: users,
    };
};

export const signupUsersFailure = (error) => {
    return {
        type: SIGNUP_USER_FAILURE,
        payload: error,
    };
};

export const userSignin = (data) => {
    return (dispatch) => {
        dispatch(signinUsersRequest());
        http
            .get("/user/signin", data, { withCredentials: true })
            .then((response) => {
                dispatch(signinUsersSuccess(response.data));
            })
            .catch((error) => {
                dispatch(signinUsersFailure(error.message));
            });
    };
};

export const userSignup = (data) => {
    return (dispatch) => {
        dispatch(signupUsersRequest());
        http
            .get("/user/signup", data, { withCredentials: true })
            .then((response) => {
                dispatch(signupUsersSuccess(response.data));
            })
            .catch((error) => {
                dispatch(signupUsersFailure(error.message));
            });
    };
};