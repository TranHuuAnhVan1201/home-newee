import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./productBestSale.scss";

import * as actions from "../../../../../../_actions/custommer/products/product";
import Slider from "react-slick";
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
function ProductBestSale(props) {
  const dispatch = useDispatch();
  const database = useSelector((state) => state.GetProduct);

  useEffect(() => {
    dispatch(actions.getProduct());
  }, []);

  const addProduct = (item) => {
    dispatch(actions.addProductToCart(item));
  };
  const getIDName = (item) => {
    dispatch(actions.IDName(item));
  };
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
      var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide: 0,

        autoplay: true,
        speed: 500,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              initialSlide: 3,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
  

  return (
    <div className="home-product">
      <div className="product-top">
        <section className="homeproductsale product-best-sale">
          <div
            id="owl-promo"
            className="product-best-sale owl-promo owl-carousel homepromo item2020  owl-theme"
          >
            <div className="owl-wrapper-outer">
              <div
                className=""
                style={{
                  left: 0,
                  display: "block",
                  transition: "all 0ms ease 0s",
                  transform: "translate3d(0px, 0px, 0px)",
                }}
              >
                <Slider {...settings}>
                   {database.length !== 0 ||
                database.length === undefined ||
                database !== null
                  ? database.map((value, key) => {
                      if (value.id !== 1) {
                        return (
                            <li
                              className="container"
                              id={value.id}
                              key={key}
                            >
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
                                  <div className="deal-sale">
                                    <img src={value.link} alt="123"></img>
                                    <div className="deal-discount">50%</div>
                                  </div>
                                  {/* <div className="deal-price">
                                    {formatVND(value.price)} đ
                                  </div> */}
                                <div className="deal-name">{ value.name}</div>
                                {/* <div className="deal-price">{ value.price1}</div> */}

                                  {/* <div className="deal-total">
                                    <div className="roundy"></div>
                                    <span>Vừa mở bán</span>
                                  </div> */}
                                </Link>
                              </div>
                            </li>
                         
                        );
                      }
                    })
                  : null}
                    </Slider>
               
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

export default ProductBestSale;
