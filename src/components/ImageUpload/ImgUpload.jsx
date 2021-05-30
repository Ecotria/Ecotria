import React, { useState, useEffect } from 'react';
import { DropzoneArea } from 'material-ui-dropzone';
import imageToBase64 from 'image-to-base64/browser';
import { connect, useDispatch } from 'react-redux';
import { userActions } from '../../actions';
import { userConstants } from '../../constants';
import { userService } from '../../services';



function ImgUpload() {
    const dispatch = useDispatch();
    const [image, setImage] = useState([]);
    const [image64, setImage64] = useState('');
    const [submitted, setSubmitted] = useState(false)
    


    
   // useEffect(() => console.log(image), [image]);
    
    
    
        
        function submitHandler(image){
            const _id = "604923ad36113f001fbc1935";

            imageToBase64(image)
            .then(
            (response) => {
                setImage64(response)
            }
            )
            .catch(
            (error) => {
                console.log(error);
            }
             );

             userActions.postuploadimage(_id, image64)
          }
    
        

        // handleSubmit = (e) => {
        //     e.preventDefault();

        //     setSubmitted(true);

        //     if (_id && image64){
        //         userActions.postuploadimage(_id && image64)
        //     }
        // }

    return (
        // onSubmit={ handleSubmit() }
        <form >
            <div className="container">
                <div className="uploader">
                    <DropzoneArea filesLimit="1" onChange={setImage} dropzoneText="Arrastra tu imagen aquí o haz click para subir imagen" ></DropzoneArea>
                </div>
                <button className="submit" onClick={submitHandler(image)}>
                    Subir Imagen
                </button>
            </div>
        </form>
    );
}

export default ImgUpload;