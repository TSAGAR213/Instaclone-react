import icon from "../Post/icon.jpg"
import camera from "../Post/camera.jpg"
import "../styles/form.css"
import { useNavigate } from "react-router-dom"
import { PostApi } from "../Api_Call"
import { useState } from "react"
function Form()
{  let navigate=useNavigate();
  
   let [name,setName]=useState('');
   let [location,setLocation]=useState('');
   let [description,setDescriptio]=useState('');
   let [image,setImage]=useState({});

 
    function AfterPost()
    {  let formdata=new FormData();
        formdata.append("name",name);
        formdata.append("location",location)
        formdata.append("description",description)
        formdata.append("PostImage",image)
        PostApi(formdata)
       .then(data=>{})
        navigate("/posts")
    }
    return <>
       <div id="formContainer">
    <header id="header-bar">
        <nav id='nav-bar'>
            <ul>
                <li><img src={icon} alt="icon"/></li>
                <li id="ighead"><h2>Instaclone</h2></li>
                <li id="camera"><img src={camera} alt="camera"/></li>
            </ul>
        </nav>
    </header>
      <div id="form">
       <form encType="multipart/form-data" onSubmit={(e)=>{
        e.preventDefault()
        AfterPost()
       }}>
        <input 
        type="file" 
        name="PostImage" 
        placeholder="No file choosen"
        onChange={(e)=>{
            setImage(e.target.files[0])
        }}
        />
        <br/>
        <input 
        id="iauth" 
        type="text" 
        name="author" 
        placeholder="Author"
        onChange={(e)=>{
            setName(e.target.value)
        }}
        
        />
        <input 
        id="iloc" 
        type="text" 
        name="location" 
        placeholder="Location"
        onChange={(e)=>{
           setLocation(e.target.value)
        }}
        />
        <br/>
        <input 
        id="idesc" 
        type="text" 
        name="description" 
        placeholder="Description"
        onChange={(e)=>{
          setDescriptio(e.target.value)
        }}
        />
        <br/>
        <button type="submit">Post</button>
       </form>
      </div>

    </div>
    </>
}
export default Form;