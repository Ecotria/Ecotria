import React from 'react'
import { useState } from 'react'
import noimage from '../../img/image-not-found.png' 
const ImgSelector = (props) => {

    const [imgFile, setImgFile] = useState()

    const handleImageSet = (event) => {
        let input = event.target

        if (input.files && input.files[0]) {
            var reader = new FileReader();
            console.log(input)
            reader.onload = function (e) {
                setImgFile(e.target.result)
            }

            reader.readAsDataURL(input.files[0]);
        }
    }

    return (
        <>
            <div style={{ margin: "20px" }} >
                <label>{props.label}</label>
                <br />
                <br />
                <label type="file" style={{ marginTop: "10px", fontSize: 20, fontWeight: 700, display: "flex", flexDirection: "column"}}>
                <img  width="200" height="200" src={imgFile?imgFile:noimage} alt='' style={{ marginTop: "10px", objectFit: "cover" }} />
                <input type="file" style={{ display: "none" }} onChange={handleImageSet}/>
                    Seleccionar
                </label>
            </div>
        </>
    )
}

export default ImgSelector