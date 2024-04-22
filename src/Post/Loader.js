import React from "react";
import "../styles/post.css";

function Loader({userList}) {
  return (
    <div className={`loader ${userList.length > 0 ? "trans" : ""}`}>
      <div className="img-container">
        <img src={"/loader.svg"} alt="loader-svg" />
      </div>

      <p>Loading Your Posts...</p>
    </div>
  );
}

export default Loader;
