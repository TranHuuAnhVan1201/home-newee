import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productsTab.scss";
import * as actions from "../../../../../../_actions/custommer/products/product";
import axios from "axios";
import jwtDecode from "jwt-decode";

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
  const database = useSelector((state) => state.LoadProduct);
  // database category

  const [category, seCategory] = useState();
  const [check, setCheck] = useState(false);

  //2
  // const database = useSelector((state) => state.GetProduct);
  
  // api
  const apiProduct = axios.create({
    // baseURL: `https://api.newee.asia:5001/Newee/ProductSeller/Getlist/${10}/${1}`,
    baseURL: `https://api.newee.asia:5001/Newee/ProductSeller/Getlist/10/1`,
  });

  const products = async () => {
    await apiProduct
      .get("", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        seCategory(res.data.data);
        setCheck(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  useEffect(() => {
    products();
    if (localStorage.getItem("token")) {
      console.log(jwtDecode(localStorage.getItem("token")))
    }
    // 1
    dispatch(actions.actLoadProductListRequest());
    //2
    // dispatch(actions.getProduct());
  }, []);
  const addProduct = (item) => {
    dispatch(actions.addProductToCart(item));
  };
  const getIDName = (item) => {
    dispatch(actions.IDName(item));
  };
  // const getIDDETAIL = (id) => {
  //   dispatch(actions.IDDETAIL(id));
  // };

  const formatVND = (str) => {
    if (typeof str !== "string") {
      let toStr = String(str);
      return toStr
        .split("")
        .reverse()
        .reduce((prev, next, index) => {
          return (index % 3 ? next : next + ".") + prev;
        });
    }
  };

  return (
    <div className="home-product">
      <div className="product-top">
        <section className="ProductDatabasesale product-star ">
          <div
            id="owl-promo"
            className="product-tab owl-promo owl-carousel homepromo item2020  product-tab owl-theme"
          >
            <div className="owl-wrapper-outer">
              <div
                className="owl-warpper row-detail"
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
                              onClick={() => getIDName(value.id)}
                              // onClick={() => getIDDETAIL(value.id)}
                              className="vertion2020 large"
                            >
                              <div className="item-img">
                                <img src={value.link} alt="123"></img>
                              </div>
                              <div className="item-title">{value.name}</div>

                              <div className="item-price">
                                <span>{formatVND(value.price1)} đ</span>
                                <span className="item-sale">{50}%</span>
                              </div>
                              <div className="item-rate">
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <span>2 đánh giá</span>
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                    })
                  : null}
                


                <h2>Sản phẩm Mới - TEST</h2>
             
                {check
                  ? category.map((value, key) => {
                      return (
                        <li className="owl-item" id={value.id} key={key}>
                          <div className="item">
                            <Link
                              to={
                                "/product-detail/" +
                                to_slug(value.name) +
                                "." +
                                value.Id
                              }
                              onClick={() => getIDName(value)}
                              // onClick={() => getIDDETAIL(value.id)}
                              className="vertion2020 large"
                            >
                              <div className="item-img">
                                <img src={value.link} alt="123"></img>
                              </div>
                              <div className="item-title">{value.name}</div>

                              <div className="item-rate">
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <i className="icon-star" />
                                <span>2 đánh giá</span>
                              </div>

                              <div className="item-price">
                                <span>{formatVND(value.price1)} đ</span>
                                <span className="item-sale">{value.sale}%</span>
                                <span>{formatVND(value.price2)} đ</span>
                              </div>
                            </Link>
                          </div>
                        </li>
                      );
                    })
                  : null}
              </div>
              <div className="clr" />
              {/* <div className="owl-controls clickable">
                <div className="owl-buttons">
                  <div className="owl-prev">&lt;</div>
                  <div className="owl-next">&gt;</div>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProductDatabase;
