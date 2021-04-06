import React from 'react';
import './FooterHome.scss';

function FooterHome(props) {
    return (
      <footer>
        <section>
          <div className="container">
            <div className="footer-header">
              <div className="col-5">
                <h2>Hỗ trợ khách hàng</h2>
                <h3 style={{ color: '#bf081f'} }>Hotline 033 745 6729</h3>
                <ul>
                  <li>Các câu hỏi thường gặp</li>

                  <li>Hướng dẫn dặt hàng</li>
                  <li>Phương thức vận chuyển</li>

                  <li>
                    Hỗ trợ khách hàng <br></br>
                    Newee.ecom@gmail.com
                  </li>
                </ul>
              </div>
              <div className="col-5">
                <h2>Về chúng tôi</h2>

                <ul>
                  <li>Giới thiệu</li>
                  <li>Tuyển dụng</li>
                  <li>Chính sách bảo mật thông tin cá nhân</li>
                </ul>
              </div>
              <div className="col-5">
                <h2>Bán Hàng Cùng NEWEE</h2>

                <ul>
                  <li>Đăng ký trở thành nhà bán hàng</li>
                  <li>Quy chế hoạt động</li>
                </ul>
              </div>
              <div className="col-5 pay">
                <h2>Phương thức thanh toán</h2>
                <ul>
                  <li>
                    <i class="fab fa-cc-visa"></i>
                  </li>
                  <li>
                    <i class="fab fa-cc-mastercard"></i>
                  </li>
                  <li>
                    <i class="fab fa-cc-jcb"></i>
                  </li>
                  <li>
                    <i class="fab fa-cc-jcb"></i>
                  </li>
                  <li>
                    <i class="fab fa-cc-jcb"></i>
                  </li>
                  <li>
                    <i class="fab fa-cc-jcb"></i>
                  </li>
                </ul>
              </div>
              <div className="col-5 pay">
                <h2>Kết nối với chúng tôi</h2>
                <ul>
                  <li>
                    <i class="fab fa-facebook"></i>
                  </li>
                  <li>
                    <i class="fab fa-youtube"></i>
                  </li>
                  <li>
                    <i class="fas fa-phone"></i>
                  </li>
                </ul>
                <h2>Tải ứng dụng trên điện thoại</h2>
                <ul>
                  <li>
                    <i class="fab fa-apple"></i>
                  </li>
                  <li>
                    <i class="fab fa-android"></i>
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-body">
              <p className="p-address">
                <span>
                  <strong>Địa chỉ văn phòng:</strong> 77 Trần Bình Trọng, Phường
                  1, Quận Gò Vấp, Thành phố Hồ Chí Minh, Việt Nam.
                </span>
                <span>
                  Newee nhận đặt hàng trực tuyến và giao hàng tận nơi.
                </span>
              </p>
            </div>
            <div className="footer-body">
              <p>
                <span>
                  <strong>© 2021</strong> - Giấy chứng nhận Đăng ký Kinh doanh số
                  0316606005 do Sở Kế hoạch và Đầu tư Thành phố Hồ Chí Minh cấp
                  ngày 04/12/2020.
                </span>
                
              </p>
            </div>
          </div>
        </section>
      </footer>
    );
}

export default FooterHome;