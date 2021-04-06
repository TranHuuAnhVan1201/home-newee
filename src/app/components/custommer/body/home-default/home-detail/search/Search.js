import React from "react";
import { Link } from "react-router-dom";
import "./Search.scss";

function Search(props) {
  return (
    <div className="searchs">
      <div className="header">
        <div>
          <i class="fas fa-search"></i>
          <span>Tìm kiếm nổi bật</span>
        </div>
        <div>
          <i class="fas fa-sync-alt see"></i>
          <span className="see">Xem thêm</span>
        </div>
      </div>
      <div className="body">
        <Link to="/">
          <div className="col-3">
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
          </div>
          <span>
            <strong>Đèn led rgb</strong>
            <p>105 Sản phẩm</p>
          </span>
        </Link>
        <Link to="/">
          <div className="col-3">
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
          </div>
          <span>
            <strong>Đèn led rgb</strong>
            <p>105 Sản phẩm</p>
          </span>
        </Link>
        <Link to="/">
          <div className="col-3">
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
          </div>
          <span>
            <strong>Đèn led rgb</strong>
            <p>105 Sản phẩm</p>
          </span>
        </Link>
        <Link to="/">
          <div className="col-3">
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
            <img src={"http://placehold.jp/86x86.png"} alt="col-3"></img>
          </div>
          <span>
            <strong>Đèn led rgb</strong>
            <p>105 Sản phẩm</p>
          </span>
        </Link>
      </div>
    </div>
  );
}

export default Search;
