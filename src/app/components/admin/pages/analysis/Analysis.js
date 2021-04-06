import React from "react";
import { Link } from "react-router-dom";
import "./Analysis.scss";

function Analysis(props) {
  return (
    <div className="body-cate analysis">
      <h2>Tổng Quan</h2>
      <div className="analysis-container">
        <div className="left">
          <div className="left-col">
            <div className="row">
              <div className="col-3">
                <h3 className="title">Sẽ thanh toán</h3>
                <p>Tổng cộng</p>
                <h3 className="title">0 đ</h3>
              </div>
              <div className="col-3">
                <h3 className="title">Đã thanh toán</h3>
                <p>Tuần này</p>
                <h3 className="title">0 đ</h3>
              </div>
              <div className="col-3">
                <p>Tháng này</p>
                <h3 className="title">0 đ</h3>
              </div>
              <div className="col-3">
                <p>Tổng cộng</p>
                <h3 className="title">86.935.441 đ</h3>
              </div>
            </div>
            <div className="row d-flex-space-between">
              <p>Tài khoản Ngân hàng của tôi: **** 8268</p>
              <button className="btns">Ví Shopee</button>
            </div>
          </div>

          <div className="left-col">
            <div className="left-col-group d-flex-space-between">
              <h3 className="title">Chi tiết</h3>
              <h3>Tìm kiếm đơn hàng</h3>
            </div>
            <nav>
              <Link to={"/admin/analysis/willpay"}>Sẽ thanh toán</Link>
              <Link to={"/admin/analysis/paid"}>Đã thanh toán</Link>
            </nav>

            <div className="analysis-search ">
              <div className="analysis-search-header">
                <div className="complex-date-picker">
                  <button className="btns btns-larger">Thời gian</button>
                </div>
                <div className="search-actions">
                  <div className="latest">
                    <button type="button" className="btns">
                      Xuất
                    </button>
                    <button type="button" className="btns">
                      <i class="fas fa-bars"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="transaction-table">
                <table className="analysis-table">
                  <thead>
                    <tr>
                      <th>Đơn hàng</th>
                      <th>Người mua</th>
                      <th>Thanh toán đã chuyển vào</th>
                      <th>Trạng thái</th>
                      <th>Số tiền</th>
                    </tr>
                  </thead>
                </table>
                <div>Không có dữ liệu</div>
              </div>
            </div>

            <div className=""></div>
          </div>
        </div>
        <div className="right">
          <div className="d-flex-column">
            <div className="d-flex-column-space-between">
              <h3>Báo cáo thu nhập</h3>
              <button className="btns"> Xem thêm</button>
            </div>
            <ul>
              <li>
                <Link className="d-flex-column-space-between">
                  <span>1 Th03 - 31 Th03 2021</span>
                  <img
                    src={
                      "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617529141/newee/x9x5y94eyhachfsts69x.png"
                    }
                    alt="1"
                  ></img>
                </Link>
              </li>
              <li>
                <Link className="d-flex-column-space-between">
                  <span>1 Th03 - 31 Th03 2021</span>
                  <img
                    src={
                      "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617529141/newee/x9x5y94eyhachfsts69x.png"
                    }
                    alt="1"
                  ></img>
                </Link>
              </li>
              <li>
                <Link className="d-flex-column-space-between">
                  <span>1 Th03 - 31 Th03 2021</span>
                  <img
                    src={
                      "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617529141/newee/x9x5y94eyhachfsts69x.png"
                    }
                    alt="1"
                  ></img>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Analysis;
