import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productsTab.scss";
import * as actions from "../../../../../../_actions/custommer/products/product";

function to_slug(str) {
  // Chuyển hết sang chữ thường
  if (str) {
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  }
}

function ProductDatabase(props) {
  // database của reducer GetProductDatabase.js
  const dispatch = useDispatch();

  //database 1
  // const database = useSelector((state) => state.LoadProduct);
  const database = useSelector((state) => state.GetProduct);
  useEffect(() => {
    // 1
    // dispatch(actions.actLoadProductListRequest());

    dispatch(actions.getProduct());
  }, []);
  const addProduct = (item) => {
    dispatch(actions.addProductToCart(item));
  };
  const getIDName = (item) => {
    dispatch(actions.IDName(item));
  };

  return (
    <div className="home-product">
      <div className="product-top">
        <section className="ProductDatabasesale product-star ">
          <div
            id="owl-promo"
            className="owl-promo owl-carousel homepromo item2020  product-tab owl-theme"
          >
            <div className="owl-wrapper-outer">
              <div
                className="owl-warpper"
                style={{
                  left: 0,
                  display: "block",
                  transition: "all 0ms ease 0s",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                {database.length !== 0 ||
                database.length === undefined ||
                database !== null
                  ? database.map((value, key) => {
                      return (
                        <li className="owl-item" id={value.id} key={key}>
                          <div className="item">
                            <Link
                              to={
                                "/product-detail/" +
                                to_slug(value.name) +
                                "." +
                                value.id
                              }
                              onClick={() => getIDName(value)}
                              className="vertion2020 large"
                            >
                              <div className="item-img">
                                <img src={value.url} alt="123"></img>
                              </div>
                              <div className="item-title">{value.title}</div>
                              <div className="item-rate">
                                <div className="star">
                                  <span>
                                    <i class="icontgdd-star"></i>
                                  </span>
                                  <span>
                                    <i class="icontgdd-star"></i>
                                  </span>
                                  <span>
                                    <i class="icontgdd-star"></i>
                                  </span>
                                  <span>
                                    <i class="icontgdd-star"></i>
                                  </span>
                                  <span>
                                    <i class="icontgdd-star"></i>
                                  </span>
                                </div>
                                <div className="review">(10)</div>
                              </div>
                              <div className="item-price">
                                <span>{value.price}</span>
                                <span className="item-sale">{value.sale}%</span>
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                    })
                  : null}
              </div>
              <div className="clr" />
              <div className="owl-controls clickable">
                <div className="owl-buttons">
                  <div className="owl-prev">&lt;</div>
                  <div className="owl-next">&gt;</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDatabase;
