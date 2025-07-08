import React from "react";
import "../styles/post.css";

function Loader({text}) {
  return (
    <div className={`loader`}>
      <div className="img-container">
        <img src={"/loader.svg"} alt="loader-svg" />
      </div>

      <p>{text}...</p>
    </div>
  );
}

export default Loader;
