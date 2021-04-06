import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "./modal";
import * as actions from "../../../../../../_actions/custommer/isDisplayForm/DisplayForm";
import axios from "axios";
import "./FormNewee.scss";  
import { Link } from "react-router-dom";

function Form(props) {
  let { id } = props;
  const [list, setList] = useState({});
  const isDisplayForm = useSelector((state) => state.isDisplayForm);
  const [isModalOpen, toggleModal] = useState(isDisplayForm);
  const [detail, setDetail] = useState([]);
  const [total, setTotal] = useState(0);
  const [check, setCheck] = useState(false);
  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {
    getProductDetail();
  }, []);

  const toggleModal5 = () => {
    toggleModal(true);
  };
  const toggleModal6 = () => {
    toggleModal(false);
    props.onSetLogged();
    dispatch(actions.closeForm());
  };

  async function getProductDetail() {
    if (id) {
      const response = await axios.get(
        `http://localhost:4333/bill/detail/${id}`
      );
      if (response.data.result.length > 0) {
        setList(response.data.result);
        setDetail(response.data.result[0]);
        setCheck(true);
        
      } else alert("Không tìm thấy chi tiết");
    }
  }
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
    <div className="Apps form-sale">
      <Modal isOpen={isModalOpen} toggle={toggleModal}>
        <form className="sale-container">
          <h3>
            Chi tiết đơn hàng: #480 -{" "}
            <span className="status return">Đã hủy</span>
          </h3>
          <h3>Ngày đặt hàng: 02/03/2021</h3>
          <div class="form-sale-container">
            <div className="col">
              <div className="row-sale">
                <div className="col-4">
                  <h3 className="title">ĐỊA CHỈ NGƯỜI NHẬN</h3>
                  <div className="row-sale-content">
                    <h3 className="title">Tên: Tên người nhận</h3>
                    <p>Địa chỉ: Nguoi nhan</p>
                    <p>Địa chỉ: Nguoi nhan</p>
                  </div>
                </div>
                <div className="col-4">
                  <h3 className="title">HÌNH THỨC GIAO HÀNG</h3>
                  <div className="row-sale-content">
                    <p>Giao trước: 16:00 ngày 20/10/2021</p>

                    <p>Phí vận chuyển: 29.000đ</p>
                  </div>
                </div>
                <div className="col-4">
                  <h3 className="title">HÌNH THỨC THANH TOÁN</h3>
                  <div className="row-sale-content">
                    <span>Thanh toán tiền mặt khi nhận hàng</span>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <h2>Sản phẩm</h2>
                  <table class="table table-hover table-detail-bill">
                    <thead>
                      <tr>
                        <th>STT</th>
                        <th>Tên sản phẩm</th>
                        <th>Trạng thái</th>
                        <th>Số lượng</th>
                        <th>Đơn giá</th>
                        <th>Giảm giá</th>
                        <th
                          style={{
                            textAlign: "right",
                            paddingRight: "10px",
                          }}
                        >
                          Thành tiền
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {check || list.length > 0
                        ? list.map((value, index) => {
                            return (
                              <tr key={index}>
                                <td style={{ textAlign: "center" }}>
                                  {value.id}
                                </td>
                                <td className="name">
                                  <img
                                    src={value.url}
                                    alt="Mountain"
                                    width="80px"
                                    height="80px"
                                    style={{ objectFit: "contain" }}
                                  ></img>
                                  <div className="product-name">
                                    <p>{value.product_name}</p>
                                  </div>
                                </td>
                                <td>{value.status}</td>

                                <td>x{value.quantity_in_stock}</td>
                                <td>{formatVND(value.price)} VNĐ</td>
                                <td>0 VNĐ</td>
                                <td
                                  style={{
                                    textAlign: "right",
                                    paddingRight: "10px",
                                  }}
                                >
                                  {formatVND(
                                    parseInt(value.quantity_in_stock) *
                                      parseInt(value.price)
                                  )}{" "}
                                  VNĐ
                                </td>
                              </tr>
                            );
                          })
                        : null}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={6}>Phí vận chuyển: </td>
                        <td>0 VNĐ</td>
                      </tr>
                      <tr>
                        <td colSpan={6}>Tổng đơn hàng: </td>
                        <td>
                          {check ? formatVND(detail.total_price) : null} VNĐ
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              <div className="btn-groups">
                <button
                  type="button"
                  onClick={() => toggleModal6()}
                  className="btns go-back"
                >
                  Quay lại
                </button>
              </div>
            </div>
          </div>

          {/* <div className="forms form-container">
            <div className="form-left">
              <div className="h3-group">
                <h3>Chi tiết đơn hàng: 480 - Đã hủy</h3>
              </div>
              <div className="h3-group">
                <h3>Lịch sử mua hàng của người mua</h3>
                <div className="detail">
                  <span>
                    Với người mua có tỷ lệ giao hành thành công thấp, hãy liên
                    hệ xác nhận đơn hàng với họ trước khi gửi hàng.
                  </span>
                  <div className="roundy">
                    <div className="round">100%</div>
                    <span>
                      Đơn giao thành công nhỏ hơn <br></br>
                      {">"} <font color="red">3</font> đơn hàng
                    </span>
                  </div>
                  <div className="roundy">
                    <div className="round">5/5</div>
                    <span>
                      Đánh giá Người mua <br></br>
                      <font color="red">16</font> Đánh giá
                    </span>
                  </div>
                </div>
              </div>
              <div className="h3-group">
                <h3>ID đơn hàng</h3>
                <span>210313930BRE0K</span>
                <h3>Địa chỉ người nhận</h3>

                {check ? (
                  <ul>
                    <li>Name: {detail.shipping_name}</li>
                    <li>Phone: {detail.phone}</li>
                    <li>Địa chỉ: {detail.chitiet}</li>
                  </ul>
                ) : null}

                <h3>Thông tin vận chuyển</h3>
                <ul>
                  <li>Đơn vị vận chuyển: Giao hàng tiết kiệm.</li>
                  <li></li>
                </ul>
              </div>

              <div className="identifi">
                <div className="user">
                  Trần Ha Văn <br></br>
                  Email: {check ? detail.email : null}
                </div>
                <div className="social">
                  <button className="btn btn-primary">Theo dõi</button>
                  <button className="btn">Chat ngay</button>
                </div>
              </div>
              <div className="information">
                <nav>
                  <h3>Thông tin thanh toán</h3>
                  <h3>Xem lịch sử giao dịch</h3>
                </nav>
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th>STT</th>
                      <th>Tên sản phẩm</th>
                      <th>Trạng thái</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                    </tr>
                  </thead>
                  <tbody>
                    {check || list.length > 0
                      ? list.map((value, index) => {
                          return (
                            <tr key={index}>
                              <td style={{ textAlign: "center" }}>
                                {value.id}
                              </td>
                              <td className="name">
                                <img
                                  src={value.url}
                                  alt="Mountain"
                                  width="80px"
                                  height="80px"
                                  style={{ objectFit: "contain" }}
                                ></img>
                                <div className="product-name">
                                  <p>{value.product_name}</p>
                                </div>
                              </td>
                              <td>{value.status}</td>

                              <td>x{value.quantity_in_stock}</td>
                              <td>{value.price}</td>
                              <td
                                style={{
                                  textAlign: "right",
                                  paddingRight: "10px",
                                }}
                              >
                                {parseInt(value.quantity_in_stock) *
                                  parseInt(value.price)}{" "}
                                VNĐ
                              </td>
                            </tr>
                          );
                        })
                      : null}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td colSpan={5}>Tổng đơn hàng: </td>
                      <td>{check ? detail.total_price : null} VNĐ</td>
                    </tr>
                  </tfoot>
                </table>
                <div className="btn-group">
                  <button type="submit" className="btn btn-primary">
                    {id ? "Sửa sản phẩm" : "Thêm mới"}
                  </button>
                  <button
                    type="button"
                    onClick={() => toggleModal6()}
                    className="btn btn-default"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
            <div className="form-right">
              <li>Thông tin sản phẩm</li>
              <li>Thông tin bán hàng</li>
              <li>Quản lý hình ảnh</li>
              <li>Vận chuyển</li>
              <li>Thông tin khác</li>
            </div>
          </div> */}
        </form>
      </Modal>
    </div>
  );
}

export default Form;
