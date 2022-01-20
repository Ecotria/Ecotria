/** @format */

import { userConstants } from "../constants";
import { userService } from "../services";
import { alertActions } from "./";
import { history } from "../helpers";
import { Redirect } from "react";

export const userActions = {
  login,
  logout,
  register,
  registerdata,
  createpost,
  getpostpage,
  postuploadimage
};

function getpostpage(currentPage, postsLimit) {
  userService.getPostPage(currentPage, postsLimit);
  return { type: userConstants.GETPOSTPAGE };

  /* function request(allPost) { return { type: userConstants.GETALL_REQUEST, allPost } }
    function success(allPost) { return { type: userConstants.GETALL_SUCCESS, allPost } }
    function failure(error) { return { type: userConstants.GETALL_FAILURE, error } }*/
}

export const getPostDetail = (postId) => {
  return async (dispatch) => {
    try {
      const post = await userService.getPostDetail(postId);
      if (post.status === 200 && post.data) {
        dispatch({
          type: `${userConstants.GET_POST_DETAILS}`,
          payload: post.data.data
        });
        <Redirect to='/postDetails' />;
        history.push("/postDetails");
      }
    } catch (error) {
      console.log("ERROR", error);
      alert("No se ha podido obtener los datos del post");
    }

    // userService
    //   .getPostDetail(postId)
    //   .then((post) => {
    //     console.log("QUE NOTA", post);
    //     if (post.status === 200 && post.data) {
    //       dispatch({
    //         type: `${userConstants.GET_POST_DETAILS}`,
    //         payload: post.data
    //       });
    //       <Redirect to='/postDetails' />;
    //       history.push("/postDetails");
    //     }
    //   })
    //   .catch((e) => {
    //     console.log("ERROR", e);
    //     alert("No se ha podido obtener los datos del post");
    //   });
  };
};

function postuploadimage(_id, img) {
  userService.postUploadImage(_id, img);

  function request(img) {
    return { type: userConstants.POST_UPLOAD_IMAGE_REQUEST }, img;
  }
  function success(img) {
    return { type: userConstants.POST_UPLOAD_IMAGE_SUCCESS }, img;
  }
  function failure(error) {
    return { type: userConstants.POST_UPLOAD_IMAGE_FAILURE }, error;
  }
}

function login(email, password) {
  return (dispatch) => {
    dispatch(request({ email }));

    userService.login(email, password).then(
      (user) => {
        dispatch(success(user));
        history.push("/");
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  userService.logout();
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        <Redirect to='/login' />;
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function registerdata(user) {
  return (dispatch) => {
    dispatch(request(user));

    userService.register(user).then(
      (user) => {
        dispatch(success());
        history.push("/home");
        dispatch(alertActions.success("Data Updated"));
      },
      (error) => {
        dispatch(failure(error.toString()));
        dispatch(alertActions.error(error.toString()));
      }
    );
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

function createpost(post) {
  console.log("post", post);
  return (dispatch) => {
    dispatch(request(post));

    userService.createpost(post).then(
      (post) => dispatch(success(post)),
      (error) => dispatch(failure(post, error.toString()))
    );
  };

  function request(post) {
    return { type: userConstants.CREATE_POST_REQUEST, post };
  }
  function success(post) {
    return { type: userConstants.CREATE_POST_SUCCESS, post };
  }
  function failure(error) {
    return { type: userConstants.CREATE_POST_FAILURE, error };
  }
}
