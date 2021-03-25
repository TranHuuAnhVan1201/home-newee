import React from 'react';
import { Link } from 'react-router-dom';
import './Need.scss';
import img1 from "./../../../../../../../tiki/col-4/col-4-1.jpg";
import img2 from "./../../../../../../../tiki/col-4/col-4-2.jpg";
import img3 from "./../../../../../../../tiki/col-4/col-4-3.jpg";
import img4 from "./../../../../../../../tiki/col-4/col-4-4.jpg";

function Need(props) {
    return (
        <div className="need"> 
            <div className="item">
                <Link to="/hoctap">
                    <img src={img1} alt="img"></img>
                </Link>
                <Link to="/hoctap">
                    <img src={img2} alt="img"></img>
                   
                </Link>
                <Link to="/mongnhe">
                    <img src={img3} alt="img"></img>
                </Link>
                <Link to="/gaming">
                    <img src={img4} alt="img"></img>
                   
                </Link>
            </div>
        </div>
    );
}

export default Need;