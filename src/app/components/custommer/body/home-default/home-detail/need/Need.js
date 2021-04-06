import React from 'react';
import { Link } from 'react-router-dom';
import './Need.scss';


function Need(props) {
    return (
      <div className="need">
        <div className="item">
          <Link to="/hoctap">
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
          </Link>
          <Link to="/hoctap">
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
          </Link>
          <Link to="/mongnhe">
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
          </Link>
          <Link to="/gaming">
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
            <img src={"http://placehold.jp/90x120.png"} alt="img"></img>
          </Link>
        </div>
      </div>
    );
}

export default Need;