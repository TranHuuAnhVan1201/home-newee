import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import "./carts.scss";
import * as actions from "../../../../_actions/custommer/products/product";
import jwtDecode from "jwt-decode";
import PayPal from "../paypal/PayPal";
import axios from "axios";

function CartsDefault(props) {
  const dispatch = useDispatch();
  let history = useHistory();
  // 1
  const listCarts = useSelector((state) => state.GetCarts);
  const [state, setState] = useState({ ID: 0 });
  const [checkout, setCheckOut] = useState(false);
  const [role, setRole] = useState(null);
  const [total, setTotal] = React.useState([]);
  // 2
  const cartTotal = listCarts.items.reduce(
    (total, { price = 0 }) => total + price,
    0
  );
  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwtDecode(localStorage.getItem("token"));
      setRole(decoded.role);
    }

    setTotal(cartTotal);
    listCarts.totalPrice = total;

  });

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
  console.log(state);
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
                    <td>{value.price} đ</td>
                    <td style={{ textAlign: "right", paddingRight: "10px" }}>
                      {formatVND(
                        parseInt(parseInt(value.price)) * (value.quantity || 1)
                      )}{" "}
                      đ
                    </td>
                    <td>
                      <button
                        className="btns"
                        onClick={() => deleteProductInCart(key)}
                      >
                        Xóa
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={4}>Tổng cộng: </td>

                <td>{listCarts.totalPrice} đ</td>
                <td>Cập nhập</td>
                <td></td>
              </tr>
            </tfoot>
            <tfoot>
              <tr>
                <td colSpan={4}>Tổng cộng: </td>

                <td>{listCarts.totalPrice} đ</td>
                <td>Cập nhập</td>
                <td></td>
              </tr>
            </tfoot>
          </table>
        </div>

        <div className="btn-carts">
          <button className="btns btn-success larger">
            <Link to="/">Mua thêm sản phẩm </Link>
          </button>

          <button className="btns btn-primary larger" onClick={() => onBuy()}>
            Mua hàng
          </button>
        </div>
      </div>
    </section>
  );
}

export default CartsDefault;
