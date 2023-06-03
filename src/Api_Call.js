let PORT='https://instaclone-api-2023.onrender.com/'
function GetApi()
{
 return fetch(`${PORT}instagramUser`)
    .then(data=>data.json());
}
function PostApi(data)
{
  return  fetch(`${PORT}instagramUser`,{
        method:"POST",
        body:(data)
    })
    .then((res)=>{
        if(res.status===201)
        {
            return res.json()
        }
    })
}
export{GetApi,PostApi,PORT}