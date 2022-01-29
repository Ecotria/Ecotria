const config = {

    apipath: 'http://147.182.189.183:5007/ecotria_api',
    // apipath: 'http://172.19.0.2:5007/ecotria_api',
    
    user:{
        create: '/user-create',
        createuserdata: '/datosrespo-create',
        login: '/user-login',
        createpost: '/post_create',
        getpostpage: '/post_list_all',
        postcounter: '/post_counter',
        postuploadimage: '/post_upload_img',
        getpostbyid: '/post_view?_id=',
    }
}

export default config;