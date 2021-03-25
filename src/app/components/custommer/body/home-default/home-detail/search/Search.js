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
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/99/cd/91/ea21096675cbcb604ef9af9d8d7dbf67.jpg"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/81/7b/64/c8d2c135b7bff1c1fa567b4561d14e98.jpg"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/75/9f/c6/f3a71c15de85ad6a225fd8ec9c12ca27.jpg"
              }
              alt="col-3"
            ></img>
          </div>
          <span>
            <strong>Đèn led rgb</strong>
            <p>105 Sản phẩm</p>
          </span>
        </Link>
        <Link to="/">
          <div className="col-3">
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/dd/96/e3/9f8c530442b0f1e112e7a78d7aaea598.jpg"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/ce/12/0f/91df57dd67e8e654a12624a6964af1d5.jpg"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/f8/17/6e/6cb3598db5292eff3024f7b8161de73b.jpg"
              }
              alt="col-3"
            ></img>
          </div>
          <span>
            <strong>Đèn led rgb</strong>
            <p>105 Sản phẩm</p>
          </span>
        </Link>
        <Link to="/">
          <div className="col-3">
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/74/a4/55/0a1a1e0a122e874c6b7ba00cf82b46a9.jpg"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/06/47/f9/20e066d053ac62c36fd13f515fb99076.jpg"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/fb/ee/39/3c72743e502791564bab8c32180f7cf6.jpg"
              }
              alt="col-3"
            ></img>
          </div>
          <span>
            <strong>Đèn led rgb</strong>
            <p>105 Sản phẩm</p>
          </span>
        </Link>
        <Link to="/">
          <div className="col-3">
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/8f/0a/23/dd354108e78f164d66d2ad7b855ef520.png"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/ca/4d/5c/e2f13d78ac480855ff64740c7cdb9b90.jpg"
              }
              alt="col-3"
            ></img>
            <img
              src={
                "https://salt.tikicdn.com/cache/280x280/ts/product/c0/4e/52/8892ab502e1c56d7cca254dc0425e690.jpg"
              }
              alt="col-3"
            ></img>
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
