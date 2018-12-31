import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token, username) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token,
        userId: username
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const logout = () => {
    return {
        type: actionTypes.AUTH_LOGOUT
    };
};

export const checkAuthTimeout = (expirationTime) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime);
    };
};

export const auth = (email, password, isSignUp) => {
    return dispatch => {
        dispatch(authStart());
        const authData = {
            username: email,
            password: password
        }
        let url = '/users';
        if (!isSignUp) {
            url = '/sessions';
        }
        axios.post(url, authData)
            .then(response => {
                console.log(response);
                dispatch(authSuccess(response.data.token, response.data.username));
                //dispatch(checkAuthTimeout(response.data.expiresIn))
            })
            .catch(err => {
                dispatch(authFail(err.response.data.error));
            });
    };
};