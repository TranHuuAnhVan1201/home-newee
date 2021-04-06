import React from "react";
import { Link } from "react-router-dom";
import "./QuickLink.scss";

function QuickLink(props) {
  return (
    <div className="quick-links flex-start">
     
      <div className="item">
        <img src={"http://placehold.jp/48x48.pngg"} alt="quicklink"></img>
        <span>Ưu đãi vận chuyển</span>
      </div>
      <div className="item">
        <img src={"http://placehold.jp/48x48.png"} alt="quicklink"></img>
        <span>Quà tặng</span>
      </div>
      <div className="item">
        <img src={"http://placehold.jp/48x48.png"} alt="quicklink"></img>
        <span>Thưởng nóng</span>
      </div>
      <div className="item">
        <img src={"http://placehold.jp/48x48.png"} alt="quicklink"></img>
        <span>Ưu đãi đối tác</span>
      </div>
    </div>
  );
}

export default QuickLink;
