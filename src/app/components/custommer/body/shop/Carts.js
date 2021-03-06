import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

import "./Cart.scss";
import * as actions from "../../../../_actions/custommer/products/product";
import jwtDecode from "jwt-decode";
import PayPal from "../paypal/PayPal";
import axios from "axios";

function Carts(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  // data
  const listCarts = useSelector((state) => state.Shop);
  console.log(listCarts);
  let TotalCart = 0;
  if (listCarts.numberCart !== 0) {
    listCarts.Carts.forEach((element) => {
      TotalCart += element.quantity * element.price;
    });
  }

  // if (listCarts.carts.length !== 0) {
  //   listCarts.forEach((element) => {
  //     console.log(element);
  //   });
  // }
  ///=====
  // let ListCart = [];
  // let TotalCart = 0;
  // ListCart.forEach(function (item) {
  //   TotalCart += item.Carts[item].quantity * item.Carts[item].price;
  //   ListCart.push(item.Carts[item]);
  // });

  ///=====
  const [state, setState] = useState({ ID: 0 });
  const [checkout, setCheckOut] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwtDecode(localStorage.getItem("token"));
      setRole(true);
    }
  });

  const deleteProductInCart = (item) => {
    dispatch(actions.DeleteCartSHOP(item));
  };
  const Increase_Quantity = (increase) => {
    dispatch(actions.IncreaseQuantitySHOP(increase));
  };
  const Decrease_Quantity = (decrease) => {
    dispatch(actions.DecreaseQuantitySHOP(decrease));
  };
  const handlePayPal = () => {
    if (role) {
      setCheckOut(true);
      <PayPal total={TotalCart} />;
      history.push("/paypal");
    } else {
      history.push("/login");
    }
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
  //create bill
  const createBill = () => {
    
    let createBill = {
      user_id: 47,
      total_price: TotalCart,
      shipping_address_id: 42,
    };

    dispatch(actions.getUSER_ID(createBill.user_id));
    axios.post(`http://localhost:4333/bill/add`, createBill).then(
      (res) => {
        console.log(res.data.id);
        setState({
          ...state,
          ID: res.data.id,
        });
        itemCart(res.data.id);
      },
      (err) => {
        console.log(err);
      }
    );
  };

  // item_carrt trong bills.

  const itemCart = (a) => {
    listCarts.Carts.forEach((element) => {
      // let total = parseInt(element.price) / 230000;
      let obj = {
        product_id: element.id,
        quantity: element.quantity,
        cart_id: 5,
        // total: total * element.quantity,
        total: TotalCart,
        bill_id: a,
      };
      axios.post(`http://localhost:4333/cart/add_cart_item`, obj).then(
        (data) => {
          console.log(data);
        },
        (err) => {
          console.log(err);
        }
      );
    });
  };

  const onBuy = () => {
    if (role) {
      setCheckOut(true);
      createBill();

      alert("?????t h??ng th??nh c??ng.")
      dispatch(actions.ClearCart());
      history.push("/");
    } else {
      history.push("/login");
    }
  };

  localStorage.setItem("shop", JSON.stringify(listCarts));

  return (
    <section>
      <div className="carts-container">
        <h2 className="carts-h2">
          Gi??? h??ng:{" "}
          <font>
            {listCarts.numberCart !== 0 ? listCarts.numberCart : 0} s???n ph???m
          </font>
        </h2>
        {listCarts.numberCart === 0 ? (
          <div className="wrap-carts-empty">
            <img
              src={"http://placehold.jp/190x160.png"}
              alt="cart"
            ></img>
            <span style={{ padding: "10px 0", margin: "15px 0" }}>
              Kh??ng c?? s???n ph???m n??o trong gi??? h??ng c???a b???n.
            </span>
            <Link to="/">
              {" "}
              <button className="btns btn-go-home">Ti???p t???c mua s???m</button>
            </Link>
          </div>
        ) : (
          <div className="wrap-carts">
            <div className="carts-left">
              {listCarts.numberCart !== 0
                ? listCarts.Carts.map((value, key) => {
                    return (
                      <div className="carts-product-group" key={key}>
                        <Link to="/">Kh???u trang</Link>
                        <ul className="carts-left-product">
                          <li className="d-flex">
                            <div className="carts-product-image">
                              <img src={value.image} alt="carts"></img>
                            </div>
                            <div className="carts-product-content">
                              <div className="carts-product-content-desc">
                                <div className="carts-product-content-desc-name">
                                  {value.name || value.title}
                                </div>
                                <div className="carts-product-content-desc-button">
                                  <button
                                    className="btns"
                                    onClick={() => deleteProductInCart(key)}
                                  >
                                    {" "}
                                    X??a
                                  </button>
                                  <button className="btns">
                                    ????? d??nh mua sau
                                  </button>
                                </div>
                              </div>
                              <div className="carts-product-content-detail">
                                <div className="col-6 carts-button">
                                  <div className="group-button">
                                    <button
                                      onClick={() => Decrease_Quantity(key)}
                                    >
                                      -
                                    </button>
                                    <span className="value">
                                      {value.quantity}
                                    </span>
                                    <button
                                      onClick={() => Increase_Quantity(key)}
                                    >
                                      +
                                    </button>
                                  </div>
                                </div>
                                <div className="col-6 carts-price">
                                  <div className="d-flex-column">
                                    <span className="span-price">
                                      {value.priceSale
                                        ? formatVND(value.priceSale)
                                        : formatVND(value.price)}
                                      ??
                                    </span>
                                    <div className="span-group">
                                      <span className="span-line-through">
                                        {value.priceSale
                                          ? formatVND(value.price)
                                          : formatVND(value.price)}
                                      </span>
                                      <span className="line-d">|</span>
                                      <span className="cart-discount">
                                        {value.priceSale
                                          ? (
                                              100 -
                                              (value.priceSale / value.price) *
                                                100
                                            ).toFixed(2)
                                          : 0}{" "}
                                        %
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <div className="carts-product-gift-item">
                            <div className="gift-description">
                              M?? khuy???n m??i
                            </div>
                            <div className="gift-small-coupon-list"></div>
                          </div>
                        </ul>
                      </div>
                    );
                  })
                : null}
            </div>

            <div className="carts-right">
              <div className="carts-right-voucher">
                <div className="d-flex-space-between">
                  <span className="span-title">Newee Khuy???n M??i</span>
                  <span>C?? th??? ch???n 2</span>
                </div>
              </div>
              <div className="mg-bottom"></div>

              <div className="carts-right-address">
                <button className="btns">Thay ?????i</button>
                <div className="d-flex-space-between">
                  <span>?????a ch???</span>
                  <span className="span-address">
                    406 C???ng H??a, T??n B??nh, H??? Ch?? Minh
                  </span>
                </div>
              </div>
              <div className="mg-bottom"></div>
              <div className="carts-right-cart-price">
                <div className="d-flex-space-between">
                  <span>T???m t??nh</span>
                  <span className="span-price">
                    {" "}
                    {listCarts.numberCart !== 0 ? formatVND(TotalCart) : 0} ??
                  </span>
                </div>
                <div className="d-flex-space-between">
                  <span>S??? l?????ng</span>
                  <span className="span-price">
                    x{listCarts.numberCart !== 0 ? listCarts.numberCart : 0}
                  </span>
                </div>
              </div>

              <div className="mg-bottom"></div>
              <div className="carts-right-total-cart-price">
                <div className="d-flex-space-between">
                  <span>Th??nh ti???n</span>
                  <p className=" d-flex-column">
                    <span className="span-total-price">
                      {" "}
                      {listCarts.numberCart !== 0 ? formatVND(TotalCart) : 0} ??
                    </span>
                    <br></br>
                    <span>(???? bao g???m VAT n???u c??)</span>
                  </p>
                </div>
              </div>
              <div className="mg-bottom"></div>
              <button className="btns btn-primary" onClick={() => onBuy()}>
                ?????t h??ng
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Carts;
