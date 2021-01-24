import config from '../paths/paths';
import { authHeader } from '../helpers';

export const userService = {
    login,
    logout,
    register,
    registerdata,
    getAll,
    getById,
    update,
    delete: _delete
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
            return user;
        });
}

function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function getAll() {
    const requestOptions = {
        method: 'GET',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
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

function update(user) {
    const requestOptions = {
        method: 'PUT',
        headers: { ...authHeader(), 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users/${user.id}`, requestOptions).then(handleResponse);;
}

// prefixed function name with underscore because delete is a reserved word in javascript
function _delete(id) {
    const requestOptions = {
        method: 'DELETE',
        headers: authHeader()
    };

    return fetch(`${config.apiUrl}/users/${id}`, requestOptions).then(handleResponse);
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