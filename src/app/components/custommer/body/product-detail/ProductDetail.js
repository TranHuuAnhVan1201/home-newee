import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import * as actions from "../../../../_actions/custommer/products/product";

//import { AddCartSHOP } from "../../../../_actions/custommer/products/product";



import ProductTab from "./../home-default/home-detail/product-tab/ProductTab";
import "../cmt/Comment.scss";
import "./productDetail.scss";

function to_slug(str) {
  // Chuyển hết sang chữ thường
  if (str) {
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
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

function ProductDetail(props) {
  const history = useHistory();
  const getID = useSelector((state) => state.IDName);

  const { register, handleSubmit, errors } = useForm();
  const [check, setCheck] = useState(false);
  if (getID.id === undefined) {
    history.push("/");
    window.setTimeout(window.location.reload.bind(window.location), 10);
  }
  const dispatch = useDispatch();

  const addProduct = (item) => {
    dispatch(actions.addProductToCart(item));
  };

  const AddCart = (item) => {
    console.log(item);
    dispatch(actions.AddCartSHOP(item));
  }

  const getIDName = (item) => {
    dispatch(actions.IDName(item));
  };
  // answer

  return (
    <section className="type0">
      <div className="sp-detail">
        <div className="breadcrumb">
          <Link to="/" className="breadcrumb-item">
            {getID.id.categoryBeadcrumb ? getID.id.categoryBeadcrumb : "Hãng"}
          </Link>
          <span className="mg-16">›</span>

          <Link to="/" className="breadcrumb-item">
            {getID.id.companyBeadcrumb ? getID.id.companyBeadcrumb : "Danh mục"}
          </Link>
        </div>

        <div className="index-wrap">
          <div className="container-left">
            <div className="larger-img">
              {/* <img width={444} height={444} src={getID.id.url} alt="pictures" /> */}
              <img width={410} height={410} src={getID.id.link} alt="pictures" />
              <div className="list-img">
                <img
                  src="https://salt.tikicdn.com/cache/w64/ts/product/7a/a6/48/bd26325e7312ff0f6de9b1c1f4785107.jpg"
                  alt="123"
                ></img>
                <img
                  src="https://salt.tikicdn.com/cache/w64/ts/product/7a/a6/48/bd26325e7312ff0f6de9b1c1f4785107.jpg"
                  alt="123"
                ></img>
                <img
                  src="https://salt.tikicdn.com/cache/w64/ts/product/7a/a6/48/bd26325e7312ff0f6de9b1c1f4785107.jpg"
                  alt="123"
                ></img>
                <img
                  src="https://salt.tikicdn.com/cache/w64/ts/product/7a/a6/48/bd26325e7312ff0f6de9b1c1f4785107.jpg"
                  alt="123"
                ></img>
                <img
                  src="https://salt.tikicdn.com/cache/w64/ts/product/7a/a6/48/bd26325e7312ff0f6de9b1c1f4785107.jpg"
                  alt="123"
                ></img>
                <img
                  src="https://salt.tikicdn.com/cache/w64/ts/product/7a/a6/48/bd26325e7312ff0f6de9b1c1f4785107.jpg"
                  alt="123"
                ></img>
              </div>
            </div>
          </div>
          <div className="container-right">
            <div className="header">
              <div className="header-left">
                <div className="brand">
                  <span>
                    Thương hiệu: <font color="rgb(13, 92, 182)">Ohazo</font>
                  </span>
                  <span>|</span>
                  <span>
                    Đứng thứ{" "}
                    <font color="rgb(13, 92, 182)">
                      39 trong Top 1000 Đồ bán chạy tháng này
                    </font>
                  </span>
                </div>
                <h1>{getID.id ? getID.id.name : null}</h1>
                <div className="item-rate">
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <i className="icon-star" />
                  <span>2 đánh giá</span>
                </div>
              </div>
              <div className="header-right">
                <div className="icon-wrap">
                  <img
                    src={
                      "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617527540/newee/mnyw56rjz8d7eotlerlk.png"
                    }
                    alt="alt"
                  ></img>
                </div>
                <div className="icon-wrap fb">
                  <img
                    src={
                      "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617527540/newee/xyfvnhh3zactyxypdzlb.png"
                    }
                    alt="alt"
                  ></img>
                </div>
                <div className="icon-wrap fb">
                  <img src={"http://placehold.jp/24x24.png"} alt="alt"></img>
                </div>
              </div>
            </div>
            <div className="body">
              <div className="body-left">
                <div>
                  <div className="area-price ">
                    <span className="current-price">
                      {formatVND(getID.id.price1)} đ
                    </span>
                    <span className="list-price">
                      {formatVND(getID.id.priceSeller1)} đ
                    </span>
                    <span className="discount-price">-50%</span>
                  </div>
                  <div className="area-option">
                    <div className="option color">
                      <div className="option-name">
                        Chọn màu:
                        <span>Hồng</span>
                      </div>

                      <div className="choose-option">
                        <div className="list active">
                          <span>Hồng</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                        <div className="list">
                          <span>Đỏ</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                        <div className="list">
                          <span>Xanh</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                        <div className="list">
                          <span>Tím</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                      </div>
                    </div>
                    <div className="option size">
                      <div className="option-name">
                        Chọn size:
                        <span>S</span>
                      </div>

                      <div className="choose-option">
                        <div className="list active">
                          <span>S</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                        <div className="list">
                          <span>M</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                        <div className="list">
                          <span>L</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                        <div className="list">
                          <span>XL</span>
                          <img
                            src={
                              "https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/attribute.svg"
                            }
                            alt="123"
                          ></img>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="area-discount">
                    <div className="discount-text">Mã giảm giá</div>
                    <div className="discount-tags">
                      <div className="tags">Giảm 10%</div>
                      <div className="tags">Giảm 20%</div>
                      <div className="tags">Giảm 50%</div>
                    </div>
                  </div>
                  <div className="area-address">
                    Bạn hãy{" "}
                    <span style={{ color: "rgb(13, 92, 182)" }}>
                      NHẬP ĐỊA CHỈ
                    </span>{" "}
                    nhận hàng để được dự báo thời gian &amp; chi phí giao hàng
                    một cách chính xác nhất.
                  </div>
                  <div className="area-pay">
                    <div className="pay-text">Số lượng</div>
                    <div className="group-button">
                      <button>-</button>
                      <input type="text" value="1"></input>
                      <button>+</button>
                      <span>Chỉ còn 10 sản phẩm</span>
                    </div>
                  </div>

                  <button class="btn btn-primary larger">
                    <Link to="/cart">
                      <span onClick={() => AddCart(getID.id)}>
                        Mua hàng SHOP
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
              <div className="body-right">
                <div className="seller">
                  <div className="header">
                    <img
                      src={
                        "https://vcdn.tikicdn.com/ts/seller/c4/55/d3/1f094ff307af67c74289ac80b5fa14cd.jpg"
                      }
                      alt="shop"
                    ></img>
                    <div className="seller-name">
                      <h3>Newee Asia</h3>
                      <img
                        src={
                          "https://salt.tikicdn.com/ts/upload/29/4b/4a/c6765840a95e1ba5c7e51adb455f56a0.png"
                        }
                        alt="123"
                      ></img>
                    </div>
                  </div>
                  <div className="rate">
                    <div className="number-rate">
                      <span>5.0</span>
                      <span>/</span>
                      <span>5.0</span>
                      <br></br>
                    </div>
                    <div className="text-rate">
                      <span>
                        969 <br></br>Theo dõi
                      </span>
                    </div>
                  </div>
                  <div className="seller-action">
                    <button className="btn btn-blue">
                      <i class="fas fa-store"></i>
                      <span>Xem Shop</span>
                    </button>
                    <button className="btn btn-blue">
                      <i class="fas fa-plus"></i>
                      <span>Theo dõi</span>
                    </button>
                  </div>
                  <div className="policy">
                    <div className="col-3">
                      <i class="far fa-check-circle"></i>
                      <span>Hoàn tiền 111% nếu giả</span>
                    </div>
                    <div className="col-3">
                      <i class="far fa-thumbs-up"></i>
                      <span>Mở hộp kiểm tra nhận hàng</span>
                    </div>
                    <div className="col-3">
                      <i class="fas fa-check"></i>
                      <span>Đổi trả trong 7 ngày</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="clr" />
        <div className="related">
          <div className="header">
            <h2>Sản phẩm tương tự</h2>
          </div>
          <div className="body">
            <ProductTab />
          </div>
        </div>

        <div className="description">
          <div className="left">
            <div className="area-details">
              <div className="header">
                <h2>Thông tin chi tiết</h2>
              </div>
              <div className="body">
                <div className="body-items">
                  <div class="left">Thương hiệu</div>
                  <div>New Asia</div>
                </div>
                <div className="body-items">
                  <div class="left">Xuất sứ thương hiệu</div>
                  <div>Việt Nam</div>
                </div>
                <div className="body-items">
                  <div class="left">Xuất sứ</div>
                  <div>Việt Nam</div>
                </div>
                <div className="body-items">
                  <div class="left">Model</div>
                  <div>VN-972</div>
                </div>
                <div className="body-items">
                  <div class="left">SKU</div>
                  <div>4406849797785</div>
                </div>
              </div>
            </div>
            <div className="area-description">
              <div className="header">
                <h2>Mô tả sản phẩm</h2>
              </div>
              <div className="body">
                <div className="content">
                  [NHIỀU MÀU] Khẩu Trang Y Tế 3Hmask 3 lớp quai bản không đau
                  tai
                  <br></br>
                  Các bạn xin lưu ý 3Hmask chỉ xuất kho theo đơn đặt hàng, không
                  nhận đặt màu trong tin nhắn hoặc ghi chú. Xin cảm ơn các bạn
                  đã thông cảm cho vấn đề này.
                  <br></br>
                  ĐẶC ĐIỂM NỔI BẬT
                  <br></br>Lớp vải kháng khuẩn có thể lọc 98+% vi khuẩn.
                  <br></br>Được sản xuất theo tiêu chuẩn TCCS 01:2020/VT.
                  <br></br>Đạt chứng nhận quốc tế ISO 13485: 2016
                  <br></br>Ôm gọn mặt, không gây đau tai khi sử dụng.
                  <br></br>100% nguyên liệu sạch Sản phẩm không mùi, không gây
                  dị ứng
                  <br></br>
                  <br></br>NỘI DUNG SẢN PHẨM KHẨU TRANG 3 LỚP Cấu tạo:
                  <br></br>Bao gồm 3 lớp vải cao cấp.
                  <br></br>Lớp 1: Vải không dệt: Lớp vải chống thấm ngoài cùng
                  có 3 nếp gấp, nhằm tạo dáng ôm trọn khuôn mặt, giúp ngăn chặn
                  hiệu quả các loại dịch, tia bắn.
                  <br></br>Lớp 2: Vải kháng khuẩn: Vải kháng khuẩn được nhập
                  khẩu từ Hàn Quốc, với 98+ hiệu suất lọc khuẩn, không gây mùi
                  hôi, bảo vệ sức khỏe người sử dụng.
                  <br></br>Lớp 3: Vải không dệt: Vải lót mềm trong cùng tạo cảm
                  giác êm ái và thoải mái. Thanh tựa mũi ôm trọn khuôn mặt, đảm
                  bảo độ che chắn tốt.
                  <br></br>Thun đeo tai mềm mại, có độ co giãn tốt, không gây
                  đau tai khi sử dụng trong thời gian dài.
                  <br></br>
                  <br></br>Chất liệu: Sản phẩm được làm từ 100% nguyên liệu
                  sạch, không mùi, không gây dị ứng cho người sử dụng.
                  <br></br>
                  <br></br>Tiêu chuẩn chất lượng: Đạt tiêu chuẩn ISO 13485: 2016
                  đã được kiểm định bởi Công ty Cổ phần Chứng Nhận và Giám Định
                  Quốc Tế ISOCERT.
                  <br></br>Số công bố đủ điều khiện sản xuất:
                  200000333/PCBSX-HCM Quy cách:
                  <br></br>Hộp 20 cái Kích thước: 18,5 x 10 x 6cm
                  <br></br>Trọng lượng: 200gram Lưu ý: Bảo quản nơi khô ráo,
                  thoáng mát.
                  <br></br>Chỉ sử dụng một (01) lần
                  <br></br>
                  -------------------------------------------------------
                  <br></br>3Hmask là thương hiệu được bảo trợ bởi Vĩnh Tiến Vĩnh
                  Tiến.
                  <br></br>Thương hiệu uy tín được người tiêu dùng tin chọn hơn
                  40 năm qua.
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* comment */}
        <div className="comment">
          <div className="header">
            <h2>ĐÁNH GIÁ SẢN PHẨM</h2>
          </div>
          <div className="content">
            <div className="content-left">
              <div className="header">
                <h2>4.7</h2>
                <div className="line-rate">
                  <div className="item-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <div className="line"></div>
                  <span>(2)</span>
                </div>
              </div>

              <div className="body">
                <div className="line-rate">
                  <div className="item-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <div className="line"></div>
                  <span>(2)</span>
                </div>
                <div className="line-rate">
                  <div className="item-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <div className="line"></div>
                  <span>(2)</span>
                </div>
                <div className="line-rate">
                  <div className="item-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <div className="line"></div>
                  <span>(2)</span>
                </div>
                <div className="line-rate">
                  <div className="item-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <div className="line"></div>
                  <span>(2)</span>
                </div>
                <div className="line-rate">
                  <div className="item-rate">
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                    <i className="icon-star" />
                  </div>
                  <div className="line"></div>
                  <span>(2)</span>
                </div>
              </div>
            </div>
            <div className="content-right">
              <div className="header">
                <h3>Tất cả hình ảnh (1)</h3>
                <img
                  src={
                    "https://salt.tikicdn.com/cache/280x280/ts/product/7f/85/c1/6302e1ae83db85b63a497de101382d0f.jpg"
                  }
                  alt="1"
                ></img>
                <div className="filter">
                  <h3>Lọc xem theo</h3>
                  <button>Mới nhất</button>
                  <button>Có hình ảnh</button>
                  <button>Đã mua</button>
                  <button>
                    5
                    <div className="item-rate">
                      <i className="icon-star" />
                    </div>
                  </button>
                  <button>
                    4
                    <div className="item-rate">
                      <i className="icon-star" />
                    </div>
                  </button>
                  <button>
                    3
                    <div className="item-rate">
                      <i className="icon-star" />
                    </div>
                  </button>
                  <button>
                    2
                    <div className="item-rate">
                      <i className="icon-star" />
                    </div>
                  </button>
                  <button>
                    1
                    <div className="item-rate">
                      <i className="icon-star" />
                    </div>
                  </button>
                </div>
              </div>
              <div className="body"></div>
            </div>
          </div>
        </div>
        {/* end comment */}
      </div>
    </section>
  );
}

export default ProductDetail;
