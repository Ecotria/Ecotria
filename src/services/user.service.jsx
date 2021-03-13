import config from '../paths/paths';
import { authHeader } from '../helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    registerdata,
    getPostPage,
    getById,
    update,
    createpost,
};

function login(correo, contrasena) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo, contrasena })
    };

    return fetch(`${config.apipath}${config.user.login}`, requestOptions)
        .then(handleResponse)
        .then(user => {
            var _user = user.info.data
            localStorage.setItem('ObjectData', JSON.stringify(_user));
            localStorage.setItem('user', JSON.stringify(_user.nombre));
            localStorage.setItem('token', JSON.stringify(user.token) )
            localStorage.setItem('subscriberID', JSON.stringify(user.subsciberID))
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

// function getPostPage(currentPage,postsLimit) {
//     // var token = localStorage.getItem('token')
//     const requestOptions = {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ currentPage, postsLimit })
//     };

//     return fetch(`${config.apipath}${config.user.getpostpage}`, requestOptions)
//     .then(handleResponse)
//     .then(post => {
//         var _post = post.data
//         localStorage.setItem('PostPageArray', JSON.stringify(_post))
//         return post;
//     });
// }

async function getPostPage(currentPagenum,postsLimitnum){
    return await axios.post(`${config.apipath}${config.user.getpostpage}`, { currentPage: currentPagenum, postsLimit: postsLimitnum }, { headers: {'Content-Type': 'application/json'} })
        .then(res => {
            let _post = res.data.data
            let _total = res.data.total
            localStorage.setItem('PostPageArray', JSON.stringify(_post))
            localStorage.setItem('Total Posts', JSON.stringify(_total))
            return res;
      })
  }


function getById(id) {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apipath}${config.user.create}`, requestOptions).then(handleResponse);
}

function registerdata(user) {
    var token = localStorage.getItem('token')
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json',  'Authorization': token },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apipath}${config.user.createuserdata}`, requestOptions).then(handleResponse); 
}

function createpost(post) {
    const requestOptions = {
        method: 'POST',
        headers: { ...authHeader(), 'Content-Type': 'application/json'},
        body: JSON.stringify(post)
        }
    
    return fetch(`${config.apipath}${config.user.createpost}`, requestOptions).then(handleResponse);
}

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}


function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}