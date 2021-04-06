import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./carts.scss";
import * as actions from "../../../../_actions/custommer/products/product";
import jwtDecode from "jwt-decode";
import PayPal from "../paypal/PayPal";
import axios from "axios";

function Shop(props) {
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
      setRole(decoded.role);
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
      total_price: TotalCart / 230000,
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
      let total = parseInt(element.price) / 230000;
      let obj = {
        product_id: element.id,
        quantity: element.quantity,
        cart_id: 5,
        total: total * element.quantity,
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
    alert("Bạn phải đăng nhập trước...");
    if (role) {
      setCheckOut(true);
      createBill();
      history.push("/paypal");
    } else {
      history.push("/login");
    }
  };

  localStorage.setItem("shop", JSON.stringify(listCarts));

  return (
    <section>
      <div className="carts">
        <h2 className="text-center">Giỏ hàng của bạn</h2>
        <div className="cart-content">
          <table>
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Tên sản phẩm</th>
                <th>Số lượng</th>
                <th style={{ textAlign: "right", paddingRight: "10px" }}>
                  Giá{" "}
                </th>
                <th style={{ textAlign: "right", paddingRight: "10px" }}>
                  Thành tiền
                </th>
                <th style={{ paddingLeft: "20px" }}>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {listCarts.numberCart !== 0
                ? listCarts.Carts.map((value, key) => {
                    return (
                      <tr key={key}>
                        <td>
                          <img src={value.link} alt={123}></img>
                        </td>
                        <td className="name">
                          <div className="product-name">
                            {value.title || value.name}
                          </div>
                        </td>
                        <td className="td-group">
                          <div className="group-button">
                            <button onClick={() => Decrease_Quantity(key)}>
                              -
                            </button>
                            <span className="value">{value.quantity}</span>
                            <button onClick={() => Increase_Quantity(key)}>
                              +
                            </button>
                          </div>
                        </td>
                        <td
                          style={{ textAlign: "right", paddingRight: "10px" }}
                        >
                          {formatVND(value.price1)} đ
                        </td>
                        <td
                          style={{ textAlign: "right", paddingRight: "10px" }}
                        >
                          {formatVND(value.price1 * value.quantity)} đ
                        </td>
                        <td>
                          <button
                            className="btns"
                            onClick={() => deleteProductInCart(key)}
                            style={{ marginLeft: "20px" }}
                          >
                            Xóa
                          </button>
                        </td>
                      </tr>
                    );
                  })
                : null}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Tổng cộng: </td>

                <td>
                  {listCarts.numberCart !== 0 ? formatVND(TotalCart) : 0} đ
                </td>
              
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="btn-carts">
          <button className="btns btn-success larger">
            <Link to="/">Mua thêm sản phẩm </Link>
          </button>
          {/* onClick={() => onBuy()} */}
          <button className="btns btn-primary larger " onClick={() => onBuy()}>
            Mua hàng
          </button>
        </div>
      </div>
    </section>
  );
}

export default Shop;
