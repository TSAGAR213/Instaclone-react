import { useEffect, useState } from "react";
import {GetApi} from "../Api_Call.js"
import icon from "./icon.jpg"
import camera from "./camera.jpg"
import more_icon from "./more_icon.jpg"
import heart from "./heart.jpg"
import share from "./share.jpg"
import "../styles/post.css"
import { useNavigate } from "react-router-dom";

function Post()
{   let navigate=useNavigate();
    let [userList,setUserList]=useState([]);
    useEffect(()=>{
        GetApi()
        .then(data=>{
            setUserList(data)
        })  
    },[userList])
    let a=userList.reverse();
    return <>
    <div id="postContainer">
    <header id="header-bar">
        <nav id='nav-bar'>
            <ul>
                <li><img src={icon} alt="icon"/></li>
                <li id="ighead"><h2>Instaclone</h2></li>
                <li id="camera"><img 
                src={camera} 
                alt="camera"
                onClick={()=>{
                  navigate("/form")
                }}
                /></li>
            </ul>
        </nav>
    </header>

    <div id="Posts">
       {
       a.map((data,i)=>{
        let x=data.date.split("GMT")
        return <div key={i} className='card'>
        <img className="more-icon" src={more_icon} alt="more-icon"/>
        <h4 className="data-name">{data.name}</h4>
        <p className="data-location">{data.location}</p>
        <img className={'cimg'} src={data.PostImage} alt={'PostImage'}/>
        <div className="heartshare">
        <span><img src={heart} alt={'heart'}/></span>
        <span className="share"><img src={share} alt={'share'}/></span>
        </div>
        <p className="likes">{data.likes} likes</p>
        <h5 className="desc">{data.description}</h5>
        <div className="date">{x[0]}</div>
        
        </div>
       })
       }
    </div>

    </div>
    </>
}
export default Post;