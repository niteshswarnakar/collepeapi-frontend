import React, {useState, useEffect} from 'react'
import axios from "axios"

function AddBook() {

    const [file,setFile] = useState(null)
    const [response,setResponse] = useState(null)
    const[uploadImage, setUploadImage] = useState()

    const fileChangeHandler = (e) =>{
        setFile(e.target.files[0])
        // let myimage = e.target.files[0]

        // const imageUrl = URL.createObjectURL(myimage)
        // setUploadImage(imageUrl)

    }

    const submitHandler = async (e) =>{
        e.preventDefault()
        console.log(file?.name)

        try{
            const formData = new FormData()
            formData.append("file",file)
            const {data} = await axios.post("http://localhost:5000/book/add-book/",formData)
            const responseImageUrl = URL.createObjectURL(new Blob([data.file], { type: data.file.mimetype }));
            setResponse(responseImageUrl)
            console.log({responseImageUrl})
            console.log("my data - ",data)
        }catch(e){
            console.log(e)
        }

    }

  return (<>
    <form onSubmit={submitHandler}>
        <label htmlFor = "image">Add image</label>
        <input onChange={fileChangeHandler} type= "file" name = "image" id = "image"/>
        <button type = "submit">Upload</button>
    </form>
    {response ? <img src = {response.split("blob:")[0]} alt = "image" /> : ""}
    </>
)
}

export default AddBook