import React from "react";
import { Link } from "react-router-dom";
import "./Need2.scss";



function Need(props) {
  return (
    <div className="need">
      <div className="item col-3">
        <Link to="/hoctap">
          <img src={"http://placehold.jp/394x150.png"} alt="img"></img>
        </Link>
        <Link to="/hoctap">
          <img src={"http://placehold.jp/394x150.png"} alt="img"></img>
        </Link>
        <Link to="/mongnhe">
          <img src={"http://placehold.jp/394x150.png"} alt="img"></img>
        </Link>
        {/* <Link to="/gaming">
          <img src={img4} alt="img"></img>
        </Link> */}
      </div>
    </div>
  );
}

export default Need;
