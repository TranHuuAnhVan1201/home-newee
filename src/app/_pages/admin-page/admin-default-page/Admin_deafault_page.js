import React from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import "./Body-deafault-admin.scss";
function Admin_deafault_page(props) {
  
const HeaderAdmin = React.lazy(() =>import("../../../components/admin/header/HeaderAdmin"));
const Footer = React.lazy(() =>
  import("../../../components/admin/footer/Footer")
);
const Users = React.lazy(() =>
  import("../../../components/admin/pages/Users/Users")
);
const ChangePassword = React.lazy(() =>
  import("../../../components/admin/pages/Users/ChangePassword")
);
const Address = React.lazy(() =>
  import("../../../components/admin/pages/Users/InformationAddress")
);
const Sale = React.lazy(() =>
  import("../../../components/admin/pages/Sale/Sale")
);
const Products = React.lazy(() =>
  import("../../../components/admin/pages/Product/Products")
);
const Comment = React.lazy(() =>
  import("../../../components/admin/pages/Comment/Comment")
);
const Analysis = React.lazy(() =>
  import("../../../components/admin/pages/analysis/Analysis")
);
const HomeAdmin = React.lazy(() =>
  import("../../../components/admin/pages/Home-admin/HomeAdmin")
);


  return (
    <HashRouter>
      <React.Suspense>
        <HeaderAdmin></HeaderAdmin>
        <div className="body-deafault-admin">
          <div className="item-body-deafault-admin-left">
            {/* <Link to={"/admin/category"} className="ul">
              <span> Quản Lý Tài Khoản</span>
            </Link> */}
            <Link to={"/admin/users"} className="ul">
              <div>
                <img
                  width={24}
                  height={24}
                  src={
                    "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617527938/newee/l2k9q4jcyloztvc8dxat.png"
                  }
                  alt="1"
                ></img>
                <span> Thông tin tài khoản</span>
              </div>

              <Link to={"/admin/users/change"} className="uls">
                Thay đổi mật khẩu
              </Link>
              <Link to={"/admin/users/address"} className="uls">
                Thay đổi địa chỉ
              </Link>
              <Link to={"/admin/users/image-avt"} className="uls">
                Thay đổi ảnh đại diện
              </Link>
            </Link>

            <Link to={"/admin/product"} className="ul">
              <div>
                <img
                  width={24}
                  height={24}
                  src={
                    "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617528553/newee/cwazuafakihkuwakpmxv.png"
                  }
                  alt="1"
                ></img>
                <span>Quản Lý Sản Phẩm</span>
              </div>

              {/* <Link to={"/admin/product/all"}>Tất Cả</Link>
              <Link to={"/admin/product/category"}>Phân Loại Sản Phẩm</Link>
              <Link to={"/admin/product/disable"}>Sản Phẩm Hết Hàng</Link> */}
            </Link>

            <Link to={"/admin/sale"} className="ul">
              <div>
                <img
                  width={24}
                  height={24}
                  src={
                    "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617528553/newee/huhv8k9rseyfljqz8tkm.png"
                  }
                  alt="1"
                ></img>
                <span>Quản Lý Đơn Hàng</span>
              </div>

              <Link to={"/admin/sale/create"}>Tạo đơn hàng</Link>
              <Link to={"/admin/sale/edit"}>Sửa đơn hàng</Link>
              {/* <Link to={"/admin/sale/all"}>Tất Cả</Link>
              <Link to={"/admin/sale/cancel"}>Đơn Hủy</Link>
              <Link to={"/admin/sale/returnlist"}>Trả Hàng / Hoàn Tiền</Link> */}
            </Link>
            
            <Link to={"/admin/analysis"} className="ul">
              <div>
                <img
                  width={24}
                  height={24}
                  src={
                    "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617528552/newee/zxzzmykopbecgfhzpaei.png"
                  }
                  alt="1"
                ></img>
                <span>Phân tích</span>
              </div>

              {/* <Link to={"/admin/product/all"}>Tất Cả</Link>
              <Link to={"/admin/product/category"}>Phân Loại Sản Phẩm</Link>
              <Link to={"/admin/product/disable"}>Sản Phẩm Hết Hàng</Link> */}
            </Link>
            {/* 
            <Link to={"/admin/comment"} className="ul">
              <span>Quản Lý Bình Luận</span> */}
            {/* <Link to={"/admin/comment/all"}>Tất Cả</Link>
              <Link to={"/admin/comment/unreply"}>Chưa Trả Lời</Link>
              <Link to={"/admin/comment/reply"}>Đã Trả Lời</Link> */}
            {/* </Link> */}
          </div>
          <div className="item-body-deafault-admin-right">
            <Switch>
              {/* <Route path={"/admin/category"} component={Category} /> */}
              <Route path={"/admin/users"} exact component={Users} />
              <Route path={"/admin/users/change"} component={ChangePassword} />
              <Route path={"/admin/users/address"} component={Address} />

              <Route path={"/admin/sale"} component={Sale} />
              <Route path={"/admin/product"} component={Products} />

              <Route path={"/admin/comment"} component={Comment} />
              <Route path={"/admin/analysis"} component={Analysis} />
              <Route path={"/"} component={HomeAdmin} />
            </Switch>
          </div>
        </div>
      </React.Suspense>
      <Footer></Footer>
    </HashRouter>
  );
}

export default Admin_deafault_page;
