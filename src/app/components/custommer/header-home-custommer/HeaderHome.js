import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Search from "../body/page-search/search-product/SearchProduct";
import * as actions from "../../../_actions/custommer/products/product";

// import Search from "../body/page-search/search-product/Search";
import { useForm } from "react-hook-form";

function HeaderHome(props) {
  const dispatch = useDispatch();
  const shop = useSelector((state) => state.Shop);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleSearchs(data.search);
  };
  console.log(errors);

  const [role, setRole] = useState(false);
  const [check, setCheck] = useState(false);
  const [inputs, setInputs] = useState({
    productName: "",
  });
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwtDecode(localStorage.getItem("token"));
      setRole(decoded);
      setCheck(true);
      console.log(decoded);
    }
  }, []);

  // đăng xuất
  const onLogout = () => {
    setCheck(false);
    localStorage.removeItem("token");
    history.push("/");
    window.setTimeout(window.location.reload.bind(window.location), 10);
  };

  // tìm kiếm
  const handleSearchs = async (inputs) => {
    await axios
      .get(
        `https://api.newee.asia:5001/Newee/ProductSeller/GetByName/${inputs}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then(
        (res) => {
          console.log(res.data.data);
          dispatch(actions.getSearchResult(res.data.data));
          history.push("/search");

          // if (window.location.href !== "http://localhost:4200/#/search") {
          //   history.push("/search");
          // }
        },
        (err) => {
          console.log(err);
        }
      );
  };

  return (
    <header className="seller">
      <section>
        <div className="header">
          <div className="header-top-left">
            <div className="logo-menu">
              <Link to="/" className="logo">
                <img
                  src={
                    "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617642216/newee/logo/hxhd4sgboplhmn66ci2b.png"
                  }
                  alt="1"
                ></img>
              </Link>
              <div className="menu">
                <div className="bars">
                  <i class="fas fa-bars"></i>
                </div>
                <div className="wrap">
                  <span>Danh Mục </span>
                  <span className="text-icon">
                    Sản phẩm <i class="fas fa-caret-down"></i>
                  </span>
                </div>
                <div className="user-dropdown menus menu-dropdown position-absolute top-40 left-120">
                  <div className="container-menu">
                    <Link to="/search/dochoi">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Đồ chơi</span>
                      </p>
                      <div className="menu-detail">right</div>
                    </Link>
                    <Link to="/search/khautrang">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Bách hóa</span>
                      </p>
                      <div className="menu-detail">
                        <div className="col menu-detail-brand">
                          <p className="p-col">
                            <span className="title">Thương hiệu</span>
                            <span>3HMASK</span>
                            <span>3HMASK</span>
                            <span>3HMASK</span>
                            <span>3HMASK</span>
                          </p>
                        </div>
                        <div className="col menu-detail-category">
                          <p>
                            <span className="title">Tên sản phẩm</span>
                            <span>
                              Khẩu trang 3HMASK kháng khuẩn 3 lớp quai bản
                            </span>
                            <span>
                              Khẩu trang 3HMASK kháng khuẩn 4 lớp quai bản
                            </span>
                            <span>
                              Khẩu trang 3HMASK kháng khuẩn 4D quai bản
                            </span>
                            <span>
                              Khẩu trang 3HMASK kháng khuẩn 4D quai tròn
                            </span>
                            <span>
                              Khẩu trang 3HMASK kháng khuẩn KN95 quai tròn
                            </span>
                          </p>
                        </div>
                        <div className="col menu-detail-quantity">
                          <p>
                            <span className="title">Số lượng</span>
                            <span>20cái / hộp</span>
                            <span>10cái / hộp</span>
                          </p>
                        </div>
                      </div>
                    </Link>
                    <Link to="/search/mebe">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Mẹ và bé </span>
                      </p>
                    </Link>
                    <Link to="/search/thoitrang">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Thời trang</span>
                      </p>
                    </Link>
                    <Link to="/search/phukien">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Phụ kiện thời trang</span>
                      </p>
                    </Link>
                    <Link to="/search/suckhoe">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Sức khỏe và sắc đẹp</span>
                      </p>
                    </Link>
                    <Link to="/search/nhacua">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Nhà cửa và đời sống </span>
                      </p>
                    </Link>
                    <Link to="/search/thucung">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>Chăm sóc thú cưng</span>
                      </p>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="btn search">
              <form className="search" onSubmit={handleSubmit(onSubmit)}>
                <input
                  name="search"
                  type="text"
                  placeholder="Tìm sản phẩm, danh mục hay thương hiệu bạn mong muốn..."
                  ref={register({
                    required: true,
                    // pattern: {
                    //   value: /[A-Za-z]+/,
                    //   message: "Sai định dạng.",
                    // },
                    maxLength: {
                      value: 30,
                      message: "Nhập quá số lượng tối đa 30 ký tự.",
                    },
                  })}
                />

                <button type="submit">
                  <i class="fas fa-search"></i>Tìm kiếm
                  {/* <Link to="/search"></Link> */}
                </button>
              </form>
            </div>
          </div>
          <div className="header-top-right">
            <div className="header-login">
              <i class="far fa-user"></i>
              <div className="col col-user">
                <div className="login-register">
                  {check ? (
                    <div>
                      <span>Tài khoản</span>
                    </div>
                  ) : (
                    <div className="span-user">
                      <Link to="/login">
                        <span>
                          Đăng nhập<br></br>
                        </span>
                      </Link>
                      <span>/</span>
                      <Link to="/register">
                        <span>
                          Đăng Ký<br></br>
                        </span>
                      </Link>
                    </div>
                  )}
                </div>
                <span className="text-icon">
                  {check ? role.exp : "Tài khoản"}
                  <i class="fas fa-caret-down"></i>
                </span>
                {check ? (
                  <div className="user-dropdown acount position-absolute top-42">
                    <Link to="/admin/sale">
                      <p>
                        <span>Đơn hàng của tôi</span>
                      </p>
                    </Link>
                    <Link to="/">
                      <p>
                        <span>Thông báo của tôi</span>
                      </p>
                    </Link>
                    <Link to="/admin/users">
                      <p>
                        <span>Tài khoản của tôi</span>
                      </p>
                    </Link>
                    <Link to="/order">
                      <p>
                        <span>Nhận xét sản phẩm đã mua</span>
                      </p>
                    </Link>
                    <Link to="/order">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>
                          Mã giảm giá.
                          <br></br>
                          Bạn đang có 0 mã giảm giá
                        </span>
                      </p>
                    </Link>
                    <Link to="/order">
                      <p>
                        <span className="span-icon">
                          <i class="fas fa-gift"></i>
                        </span>
                        <span>
                          Đổi trả dễ dàng
                          <br></br>
                          Bạn đang có 0 mã giảm giá
                        </span>
                      </p>
                    </Link>
                    <Link to="/">
                      <p onClick={() => onLogout()}>
                        <span>Thoát tài khoản</span>
                      </p>
                    </Link>
                  </div>
                ) : (
                  <div className="user-dropdown menus position-absolute top-42 btn-header ">
                    <Link
                      to="/login"
                      className="Userdropdown-button btns-login-register"
                    >
                      <p>
                        <span className="span-center span-border-none">
                          Đăng nhập
                        </span>
                      </p>
                    </Link>
                    <Link
                      to="/register"
                      className="Userdropdown-button btns-login-register"
                    >
                      <p>
                        <span className="span-center span-border-none">
                          Đăng ký
                        </span>
                      </p>
                    </Link>
                    <Link to="/login" className="Userdropdown-button btns-fb">
                      <p>
                        <img
                          width={32}
                          height={32}
                          src={
                            "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617120617/newee/wjycvjclpa015orqijvd.png"
                          }
                          alt="icon"
                        ></img>
                        <div className="mg-8"></div>
                        <span>Đăng nhập bằng Facebook</span>
                      </p>
                    </Link>
                    <Link
                      to="/login"
                      className="Userdropdown-button btns-google"
                    >
                      <p>
                        <img
                          width={32}
                          height={32}
                          src={
                            "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617120617/newee/nfxna33s6optwoxawhf5.png"
                          }
                          alt="icon"
                        ></img>
                        <div className="mg-8"></div>
                        <span>Đăng nhập bằng Gmail</span>
                      </p>
                    </Link>
                    <Link to="/login" className="Userdropdown-button btns-zalo">
                      <p>
                        <img
                          width={32}
                          height={32}
                          src={
                            "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617120617/newee/piq6k6u4gvzzdkwucfm9.png"
                          }
                          alt="icon"
                        ></img>
                        <div className="mg-8"></div>
                        <span>Đăng nhập bằng Zalo</span>
                      </p>
                    </Link>
                  </div>
                )}
              </div>
            </div>
            <div className="header-cart">
              <Link to="/cart">
                <div className="cart-container">
                  <div>
                    <i class="fas fa-shopping-cart"></i>
                    <div className="cart-roundy">{shop.numberCart}</div>
                  </div>
                </div>
                <span>Giỏ hàng</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </header>
  );
}

export default HeaderHome;
