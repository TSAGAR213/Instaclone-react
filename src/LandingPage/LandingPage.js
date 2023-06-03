import { Link, useNavigate } from "react-router-dom";
import "../styles/landing.css"
import ig from "./lens.png";

function LandingPage()
  {  let navigate=useNavigate();
    return <>
    <div id="container">
    <div className='dim'>
    <img className={'img'} src={ig} alt='lens'/>
      </div>
      <div className="buttoncls">
        <div>10x Team 04</div>
        <div
         id="enter"
         onClick={()=>{
          navigate("/posts")
         }}
         >Enter</div>
      </div>
      </div>
      </>
  }

  export default LandingPage;



  {/* 
    <Link to={'/postview'}>
    <button data-testid={"Enter"}>Enter</button>
    </Link> */}