import React from "react";
import { Link } from "react-router-dom";
import "./Need2.scss";
import img1 from "./../../../../../../../tiki/col-3/col-3-1.jpg";
import img2 from "./../../../../../../../tiki/col-3/col-3-2.jpg";
import img3 from "./../../../../../../../tiki/col-3/col-3-3.jpg";


function Need(props) {
  return (
    <div className="need">
      <div className="item col-3">
        <Link to="/hoctap">
          <img src={img1} alt="img"></img>
        </Link>
        <Link to="/hoctap">
          <img src={img2} alt="img"></img>
        </Link>
        <Link to="/mongnhe">
          <img src={img3} alt="img"></img>
        </Link>
        {/* <Link to="/gaming">
          <img src={img4} alt="img"></img>
        </Link> */}
      </div>
    </div>
  );
}

export default Need;
