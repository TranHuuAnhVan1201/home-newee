import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./carts.scss";
import * as actions from "../../../../_actions/custommer/products/product";
import jwtDecode from "jwt-decode";
import PayPal from "../paypal/PayPal";
import axios from "axios";

function CartsDefault(props) {
  // 1
  const listCarts = useSelector((state) => state.GetCarts);
  console.log(listCarts);
  const [state, setState] = useState({ ID: 0 });
  console.log(state.ID);
  const [checkout, setCheckOut] = useState(false);
  const [role, setRole] = useState(null);

  let history = useHistory();

  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwtDecode(localStorage.getItem("token"));
      setRole(decoded.role);
    }
  }, []);
  const dispatch = useDispatch();
  const deleteProductInCart = (item) => {
    dispatch(actions.deleteProductInCart(item));
  };
  const Increase_Quantity = (increase) => {
    dispatch(actions.getIncrease_Quantity(increase));
  };
  const Decrease_Quantity = (decrease) => {
    dispatch(actions.getDecrease_Quantity(decrease));
  };
  const handlePayPal = () => {
    if (role) {
      setCheckOut(true);
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
      total_price: listCarts.totalPrice / 230000,
      shipping_address_id: 42,
    };
    // todo user id
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
    listCarts.items.forEach((element) => {
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
    if (role) {
      setCheckOut(true);
      createBill();
      history.push("/paypal");
    } else {
      history.push("/login");
    }
  };
  console.log(listCarts);

  return (
    <section>
      <div className="carts">
        <h2 className="text-center">Giỏ hàng của bạn</h2>
        <div className="cart-content">
          <table>
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th>Giá </th>
                <th>Thành tiền</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {listCarts.items.map((value, key) => {
                return (
                  <tr key={key}>
                    <td>
                      <img src={value.url} alt={123}></img>
                    </td>
                    <td>{value.title || value.name}</td>
                    <td className="td-group">
                      <span onClick={() => Decrease_Quantity(key)}>-</span>
                      <span>{value.quantity}</span>
                      <span onClick={() => Increase_Quantity(key)}>+</span>
                    </td>
                    <td>{value.price} đ</td>
                    <td>
                      {formatVND(
                        parseInt(parseInt(value.price)) * (value.quantity || 1)
                      )}{" "}
                      đ
                    </td>
                    <td onClick={() => deleteProductInCart(key)}>xóa</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Tổng cộng: </td>

                <td>{formatVND(listCarts.totalPrice)} đ</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>
        <div className="btn-carts">
          <Link to="/" className="btn-back link">
            <i className="fas fa-long-arrow-alt-left"></i>Tiếp tục mua sắm
          </Link>
          <button onClick={() => onBuy()}> Mua hàng</button>
          <Link to="/checkout" className="btn-checkout link">
            <i className="fas fa-long-arrow-alt-right"></i> Thanh toán
          </Link>

          {checkout ? (
            <PayPal />
          ) : (
            <button className="btn-checkout link" onClick={handlePayPal}>
              CheckOut Paypal
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default CartsDefault;
