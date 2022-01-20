import config from '../paths/paths';
import { authHeader } from '../helpers';
import axios from 'axios';

export const userService = {
    login,
    logout,
    register,
    registerdata,
    getPostPage,
    getPostById,
    update,
    createpost,
    postUploadImage,
    getPostDetail
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

async function getPostPage(currentPagenum, postsLimitnum) {
    return await axios.post(`${config.apipath}${config.user.getpostpage}`, { currentPage: currentPagenum, postsLimit: postsLimitnum }, { headers: {'Content-Type': 'application/json'} })
        .then(res => {
            let _post = res.data.data
            let _total = res.data.total
            localStorage.setItem('PostPageArray', JSON.stringify(_post))
            localStorage.setItem('Total Posts', JSON.stringify(_total))
            return res;
      })
}


async function getPostById(idparam) {
    return await axios.get(`${config.apipath}${config.user.getpostbyid}`, { id: idparam }, { headers: {'Content-Type': 'application/json'} })
    .then(res =>{
        return res
    })
}

async function getPostDetail(id) { 
    const token = await localStorage.getItem('token')

    return await axios.get(`${config.apipath}${config.user.getpostbyid}${id}`,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        }).then(res => {
            return res;
        })
}

function postUploadImage(id, _img ){
    console.log(_img)
    axios.post(`${config.apipath}${config.user.postuploadimage}`, { _id: id, img: _img }, { headers: {'Content-Type': 'application/json'} })
        .then(res => {
            console.log(res)
            return res;
      })
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
    var token = localStorage.getItem('token')
    // return fetch(`${config.apipath}${config.user.createpost}`, requestOptions).then(handleResponse);
    return  axios.post(`${config.apipath}${config.user.createpost}`, { titlePost: post.titlePost, price: post.price, descriptionPost: post.descriptionPost, catergory: post.catergory, address: post.address, phoneNumber: post.phoneNumber , email: post.email, subscriberId: post.subsciberID}, { headers: {'Content-Type': 'application/json', 'Authorization': token } })
    .then(res => {
        console.log("Respuesta de create post", res)
        return res;
  })
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