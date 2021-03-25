import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Header.scss";
import { useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import axios from "axios";
import Search from "../body/page-search/search-product/Search";
// import Search from "../body/page-search/search-product/Search";

function HeaderHome(props) {
  const storeGetCart = useSelector((state) => state.GetCarts);
  const [role, setRole] = useState(null);
  const [inputs, setInputs] = useState({
    productName: "",
  });
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      var decoded = jwtDecode(localStorage.getItem("token"));
      setRole(decoded.role);
    }
  }, []);
  const onLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.setTimeout(window.location.reload.bind(window.location), 10);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://localhost:4333/product/searchnull`, inputs).then(
      (res) => {
        console.log("hanldeSearch success");
        console.log(res);
        if (window.location.href !== "http://localhost:4200/#/search") {
          history.push("/search");
        }
      },
      (err) => {
        console.log(err);
      }
    );
  };
  return (
    <header>
      <section>
        <div className="header-top">
          <div className="header-top-left">
            <div className="logo-menu">
              <Link to="/">
               Newee
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
              </div>
            </div>
            <div className="btn search">
              <input
                type="search"
                placeholder="Tìm sản phẩm, danh mục hay thương hiệu bạn mong muốn..."
              ></input>
              <button className="btn btn-search">
                <i class="fas fa-search"></i>
                Tìm kiếm
              </button>
            </div>
          </div>
          <div className="header-top-right">
            <div className="header-login">
              <i class="far fa-user"></i>
              <div>
                <span>
                  Đăng Nhập / Đăng Ký <br></br>
                </span>
                <span className="text-icon">
                  Sản phẩm <i class="fas fa-caret-down"></i>
                </span>
              </div>
            </div>
            <div className="header-cart">
              <i class="fas fa-shopping-cart"></i>
              <span>Giỏ hàng</span>
            </div>
          </div>
        </div>
        <div className="header-bottom">
          <ul>
            <Link to="/">Airpod</Link>
            <Link to="/">Sách kỹ năng sống</Link>
            <Link to="/">Sửa rửa mặt</Link>
            <Link to="/">Sạc dự phòng</Link>
            <Link to="/">Áo hoodie nam</Link>
            <Link to="/">Tủ lạnh</Link>
            <Link to="/">Laptop</Link>
          </ul>
        </div>
      </section>
    </header>
  );
}

export default HeaderHome;
