import { userConstants } from '../constants';
import { userService } from '../services';
import { alertActions } from './';
import { history } from '../helpers';
import { Redirect } from 'react'

export let userActions = {
    login,
    logout,
    register,
    registerdata,
    createpost,
    getpostpage
    
};

function getpostpage(currentPage, postsLimit){
    userService.getPostPage(currentPage, postsLimit)
    return { type: userConstants.GETPOSTPAGE }

   /* function request(allPost) { return { type: userConstants.GETALL_REQUEST, allPost } }
    function success(allPost) { return { type: userConstants.GETALL_SUCCESS, allPost } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }*/
}



function login(username, password) {
    return dispatch => {
        dispatch(request({ username }));

        userService.login(username, password)
            .then(
                user => { 
                    dispatch(success(user));
                    history.push('/');
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.LOGIN_REQUEST, user } }
    function success(user) { return { type: userConstants.LOGIN_SUCCESS, user } }
    function failure(error) { return { type: userConstants.LOGIN_FAILURE, error } }
}

function logout() {
    userService.logout();
    return { type: userConstants.LOGOUT };
}

function register(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    alert("trying redirect");
                    <Redirect to="/login" />
                    history.push('/registerdata');
                    dispatch(alertActions.success('Registration successful'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}

function registerdata(user) {
    return dispatch => {
        dispatch(request(user));

        userService.register(user)
            .then(
                user => { 
                    dispatch(success());
                    history.push('/home');
                    dispatch(alertActions.success('Data Updated'));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request(user) { return { type: userConstants.REGISTER_REQUEST, user } }
    function success(user) { return { type: userConstants.REGISTER_SUCCESS, user } }
    function failure(error) { return { type: userConstants.REGISTER_FAILURE, error } }
}


function createpost(post){
    return dispatch => {
        dispatch(request(post));

        userService.createpost(post)
            .then(
                post => dispatch(success(post)),
                error => dispatch(failure(post, error.toString()))
            )
    }

    function request(post) { return { type: userConstants.CREATE_POST_REQUEST, post } }
    function success(post) { return { type: userConstants.CREATE_POST_SUCCESS, post } }
    function failure(error) { return { type: userConstants.CREATE_POST_FAILURE, error } }

}