import React from "react";
import { Link } from "react-router-dom";
import "./QuickLink.scss";

function QuickLink(props) {
  return (
    <div className="quick-link">
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/73/50/e1/83afc85db37c472de60ebef6eceb41a7.png"
          }
          alt="quicklink"
        ></img>
        <span>Mã giảm giá</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/b2/e9/22/2b3ef51042c789f5c6d1985217cee43b.png"
          }
          alt="quicklink"
        ></img>
        <span>Bí kiếp săn sale</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/07/05/6d/dd5e7d873aa1960102a9508703f79333.png"
          }
          alt="quicklink"
        ></img>
        <span>Nạp thẻ & tiền điện</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/c2/da/13/638cc2dc09b1be2e148c0571a107281a.png"
          }
          alt="quicklink"
        ></img>
        <span>Free Ship</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/52/50/73/0788d5207ec8b82e05859dfe953a4327.png"
          }
          alt="quicklink"
        ></img>
        <span>Hoàn tiền 15%</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/ce/ee/fe/a8a350727b38a1e20ce1610c5162fcb7.png"
          }
          alt="quicklink"
        ></img>
        <span>Dành cho hội viên</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/a9/58/39/872e4acbdb3576be53b57c05a386860b.png"
          }
          alt="quicklink"
        ></img>
        <span>Hẹn giao lắp đặt</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/46/7e/06/64c9e7975b58b8953a74fe77dd4cb4b5.png"
          }
          alt="quicklink"
        ></img>
        <span>Counpon 50%</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/a0/0d/90/bab67b6da67117f40538fc54fb2dcb5e.png"
          }
          alt="quicklink"
        ></img>
        <span>Thực phẩm tươi sống</span>
      </div>
      <div className="item">
        <img
          src={
            "https://salt.tikicdn.com/ts/upload/4a/b2/c5/b388ee0e511889c83fab1217608fe82f.png"
          }
          alt="quicklink"
        ></img>
        <span>Ưu đãi đối tác</span>
      </div>
    </div>
  );
}

export default QuickLink;
