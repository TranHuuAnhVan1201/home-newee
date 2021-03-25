import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import Footer from "../../../components/admin/footer/Footer";
import HeaderAdmin from "../../../components/admin/header/HeaderAdmin";
import Category from "../../../components/admin/pages/Category/Product_Category";
import Products from "../../../components/admin/pages/Product/Products";
import Sale from "../../../components/admin/pages/Sale/Sale";
import Comment from "../../../components/admin/pages/Comment/Comment";
import HomeAdmin from "../../../components/admin/pages/Home-admin/HomeAdmin";
import "./Body-deafault-admin.scss";
function Admin_deafault_page(props) {
  return (
    <HashRouter>
      <React.Suspense>
        <HeaderAdmin></HeaderAdmin>
        <div className="body-deafault-admin">
          <div className="item-body-deafault-admin-left">
            <Link to={"/admin/category"} className="ul">
              <span> Quản Lý Tài Khoản</span>
            </Link>
            <Link to={"/admin/sale"} className="ul">
              <span>Quản Lý Đơn Hàng</span>
              <Link to={"/admin/sale/all"}>Tất Cả</Link>
              <Link to={"/admin/sale/cancel"}>Đơn Hủy</Link>
              <Link to={"/admin/sale/returnlist"}>Trả Hàng / Hoàn Tiền</Link>
            </Link>
            <Link to={"/admin/product"} className="ul">
              <span>Quản Lý Sản Phẩm</span>
              <Link to={"/admin/product/all"}>Tất Cả</Link>
              <Link to={"/admin/product/category"}>Phân Loại Sản Phẩm</Link>
              <Link to={"/admin/product/disable"}>Sản Phẩm Hết Hàng</Link>
            </Link>
            <Link to={"/admin/comment"} className="ul">
              <span>Quản Lý Bình Luận</span>
              <Link to={"/admin/comment/all"}>Tất Cả</Link>
              <Link to={"/admin/comment/unreply"}>Chưa Trả Lời</Link>
              <Link to={"/admin/comment/reply"}>Đã Trả Lời</Link>
            </Link>
          </div>
          <div className="item-body-deafault-admin-right">
            <Switch>
              <Route path={"/admin/sale"} component={Sale} />
              <Route path={"/admin/product"} component={Products} />
              <Route path={"/admin/category"} component={Category} />
              <Route path={"/admin/comment"} component={Comment} />
              <Route extra path={"/"} component={HomeAdmin} />
            </Switch>
          </div>
        </div>
      </React.Suspense>
      <Footer></Footer>
    </HashRouter>
  );
}

export default Admin_deafault_page;
