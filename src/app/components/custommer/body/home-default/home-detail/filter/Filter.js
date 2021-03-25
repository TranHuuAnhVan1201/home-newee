import React from "react";
import { Link } from "react-router-dom";
import "./Filter.scss";

function Filter(props) {
  return (
    <div className="filter">
      <div>
        <img
          src={
            "https://frontend.tikicdn.com/_desktop-next/static/img/giasoc.svg"
          }
          alt="tiki sale 1"
        ></img>
        <img
          src={
            "https://frontend.tikicdn.com/_desktop-next/static/img/flash.gif"
          }
          alt="flash deal"
        ></img>
        <img
          src={
            "https://frontend.tikicdn.com/_desktop-next/static/img/homnay.svg"
          }
          alt="tiki sale 3"
        ></img>
      </div>
      <div className="navigation">
        <div className="count-down">
          <span>01</span>:<span>02</span>:<span>03</span>
          <img
            src={
              "https://salt.tikicdn.com/ts/upload/93/23/bf/1a8d8d0978740faf58eba5f419507de3.png"
            }
            alt=">"
          ></img>
        </div>
      </div>
    </div>
  );
}

export default Filter;
