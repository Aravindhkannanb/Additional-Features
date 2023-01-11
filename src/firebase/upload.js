import { useState } from 'react';
import {storage} from './indexs.js';
import {ref, uploadBytes} from 'firebase/storage';
import {v4} from 'uuid';

const Fileupload=()=>{
    const [imageUpload,setImageUpload]=useState(null);
  const uploadImage=()=>{
    if(imageUpload==null){
        return;
    }
    else{
const imageref=ref(storage,`images/${imageUpload.name+v4()}`);
uploadBytes(imageref,imageUpload).then(()=>{
    alert("Image Uploaded");
});
    }
  }
    return (
        <div>
            <input type ='file' onChange={(e)=>{setImageUpload(e.target.files[0]);}} />
            <br></br>
            <br></br>
            <button onClick={uploadImage}>Upload</button>
        </div>
    );
}
export default Fileupload;