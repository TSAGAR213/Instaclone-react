import React from "react";
import "../styles/post.css";

function Skeleton() {
  return (
    <div className="card-load">
      <div className="head-div"></div>
      <div className="img-div"></div>
      <div className="like-icon-div"></div>
      <div className="likes-div"></div>
      <div className="caption-div"></div>
    </div>
  );
}

export default Skeleton;
