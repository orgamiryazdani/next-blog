import toast from "react-hot-toast";
import {
    SIGNIN_USER_REQUEST,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_FAILURE,
    SIGNUP_USER_REQUEST,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_FAILURE,
    SIGNOUT_USER,
} from "./userTypes";
import http from "@/services/httpService";
import Router from "next/router";

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
            .post("/user/signin", data, { withCredentials: true })
            .then(({ data }) => {
                toast.success(`${data.name}خوش آمدی!`);
                Router.push('/')
                dispatch(signinUsersSuccess(data));
            })
            .catch((error) => {
                const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message
                toast.error(errorMessage)
                dispatch(signinUsersFailure(errorMessage));
            });
    };
};

export const userSignup = (data) => {
    return (dispatch) => {
        dispatch(signupUsersRequest());
        http
            .post("/user/signup", data, { withCredentials: true })
            .then(({ data }) => {
                toast.success(`${data.name}خوش آمدی!`);
                Router.push('/')
                dispatch(signupUsersSuccess(data));
                dispatch(signinUsersSuccess(data));
            })
            .catch((error) => {
                const errorMessage = error.response && error.response.data.message ? error.response.data.message : error.message
                toast.error(errorMessage)
                dispatch(signupUsersFailure(errorMessage));
            });
    };
};

export const signout = () => (dispatch) => {
    dispatch({ type: SIGNOUT_USER })
    http.get('/user/logout', { withCredentials: true })
        .then(() => {
            window.location.href = '/'
        })
        .catch()
}