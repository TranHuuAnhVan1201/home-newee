import React, { useEffect, useState } from "react";
import { HashRouter, Link, Route, Switch } from "react-router-dom";
import "./Search.scss";

import Freeship from "../search-shipping/Freeship";
import { useSelector } from "react-redux";
import axios from "axios";
import { getProduct } from "../../../../../_actions/custommer/products/product";

function Search(props) {
  const GetProduct = useSelector((state) => state.GetProduct);

  const [state, setState] = useState();
  const [active, setActive] = useState();
  const [activeCate, setActiveCate] = useState();
  const [activePrice, setActivePrice] = useState();
  const [check, setCheck] = useState(false);
  const [checks, setChecks] = useState(false);
  const [categorys, setCategorys] = useState();
  const [list, setList] = useState();

  const [checkTab, setCheckTab] = useState(false);
  const arr2 = [
    "Đang khuyến mãi",
    "Bán chạy",
    "Freeship",
    "Giá tăng thấp đến cao",
    "Giá giảm cao đến thấp",
    "Chiết khấu giảm dần",
    "Chiết khấu tăng dần",
  ];
  const price = [
    "Dưới 100.000",
    "Từ 100.000 đến 1.000.000",
    "Từ 1.000.000 đến 10.000.000",
    "Trên 10.000.000",
  ];
  const category = [
    "Chưa phân loại",
    "Sức khỏe và đời sống",
    "Nhà cửa và đời sống",
    "Bách hóa",
  ];
  // phân trang

  const [currentpage, setCurrentpage] = useState(1);
  const [postperpage, setPostperpage] = useState(4);
  const [totalPages, setTotalPages] = useState();
  const [arr, setArr] = useState();
  async function getUser() {
    //khai báo phần tử cuối
    const indexofLastPost = currentpage * postperpage;
    //khai báo phần tử đầu
    const indexofFirstPost = indexofLastPost - postperpage;
    try {
      let arrPage = [];
      const Post = arr.slice(indexofFirstPost, indexofLastPost);
      setArr(Post);
      for (let i = 1; i <= Math.ceil(parseInt(arr.length) / postperpage); i++) {
        arrPage.push({ item: i });
      }
      setTotalPages(arrPage);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    products();
    handleTab(0);
  }, []);

  useEffect(() => {
    if (state) {
      getUser();
      if (currentpage) {
        getUser();
      }
    }
    // if (setCheckTab) {
    //   setList(GetProduct);
    // }
    setState(GetProduct);
  }, [currentpage, list]);

  const handleTab = (tab) => {
    setActive(tab);
    setCheckTab(true);
    if (state) {
      switch (tab) {
        case 0:
          let khuyemai = state.filter(
            // (item) => console.log(item)
            (item) => item.price1 / item.priceSeller1 > 1
          );
          setState(khuyemai);
          getUser();
          return arr;
        case 1:
          let value1 = state.filter((item) => item.price1 > 30000);
          setState(value1);
          getUser();

          return arr;

        case 2:
          let freeship = state.filter((item) => item.shipping === 1);
          setState(freeship);
          return arr;
        case 3:
          let ascending = state.sort(
            (a, b) => Number(a.price1) - Number(b.price1)
          );
          setCheck(!check);
          setState(ascending);
          getUser();
          return arr;
        case 4:
          let ascending2 = state.sort(
            (a, b) => Number(a.price1) - Number(b.price1)
          );
          setCheck(!check);
          setState(ascending2.reverse());
          getUser();
          return arr;
        case 5:
          let ascending3 = state.sort(
            (a, b) =>
              Number(a.price1 / a.priceSeller1) -
              Number(b.price1 / b.priceSeller1)
          );
          setCheck(!check);
          setState(ascending3.reverse());
          getUser();
          return arr;
        case 6:
          let ascending4 = state.sort(
            (a, b) =>
              Number(a.price1 / a.priceSeller1) -
              Number(b.price1 / b.priceSeller1)
          );
          setCheck(!check);
          setState(ascending4);
          getUser();
          return arr;
        default:
          return;
      }
    }
  };
  const handleSort = (sort) => {
    setActivePrice(sort);
    if (sort === 0) {
      let sort1 = GetProduct.filter((item) => item.price < 100000);
      setState(sort1);
    } else if (sort === 1) {
      let sale = GetProduct.filter(
        (item) => item.price > 100000 && item.price < 1000000
      );
      setState(sale);
    } else if (sort === 2) {
      let freeship = GetProduct.filter(
        (item) => item.price > 1000000 && item.price < 10000000
      );
      setState(freeship);
    } else if (sort === 3) {
      let giacao = GetProduct.filter((item) => item.price > 1000000);
      setState(giacao);
    } else {
      setState(GetProduct);
    }
  };
  //phan trang
  const onAddPage = (page) => {
    setTimeout(function () {
      setCurrentpage(page);
    }, 1000);
  };

  const onClickCategory = (id) => {
    productCategory(id);
  };
  const apiProduct = axios.create({
    // baseURL: `https://api.newee.asia:5001/Newee/ProductSeller/Getlist/${10}/${1}`,
    baseURL: `https://api.newee.asia:5001/Newee/ProductSeller/Getlist/10/1`,
  });

  const allResult = async () => {
    await apiProduct
      .get("", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setList(res.data.data);
        setChecks(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const productCategory = async (id) => {
    console.log(id);
    await axios
      .get(
        `https://api.newee.asia:5001/Newee/ProductSeller/Getlist/${id}/10/1`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        // setCategorys(res.data.data);
        console.log(list);
        setList(res.data.data);
        setChecks(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const apiCategory = axios.create({
    // baseURL: `https://api.newee.asia:5001/Newee/ProductSeller/Getlist/${10}/${1}`,
    baseURL: `https://api.newee.asia:5001/Newee/ProductSeller/GetListCategory`,
  });

  const products = async () => {
    await apiCategory
      .get("", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setCategorys(res.data.data);
        setChecks(true);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(list);
  return (
    <div className="search-all">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-item">
          Hãng
        </Link>
        <span className="mg-16">›</span>

        <Link to="/" className="breadcrumb-item">
          Danh mục
        </Link>
      </div>
      <div className="container">
        <div className="left">
          <div className="category-search left-list ">
            <h4 className="title">Danh mục sản phẩm</h4>
            <div className="list">
              {checks
                ? categorys.map((value, key) => {
                    return (
                      <Link
                        to="/search"
                        // onClick={() => handleCategory(key)}
                        onClick={() => onClickCategory(value.id)}
                      >
                        <li>{value.name}</li>
                      </Link>
                    );
                  })
                : null}
            </div>
          </div>

          <div className="category-search left-price-sort ">
            <h4 className="title">Giá</h4>
            <div className="list">
              {price.map((value, key) => {
                return (
                  <Link
                    to="/search"
                    onClick={() => handleSort(key)}
                    className={key === activePrice ? "sort active" : "sort"}
                  >
                    {" "}
                    {value}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="category-search left-color ">
            <h4 className="title">Màu sắc</h4>
            <div className="list">
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Trắng</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Hồng</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Xanh</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Đen</a>
              </div>
            </div>
          </div>
          <div className="category-search left-shipping ">
            <h4 className="title">Địa chỉ nhận hàng</h4>
            <div className="list">
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Viettel Post</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Giao hàng tiết kiệm</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Now</a>
              </div>
            </div>
          </div>

          <div className="category-search left-service ">
            <h4 className="title">Dịch vụ</h4>
            <div className="list">
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Giao hàng 2h</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Miễn phí giao hàng</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">Rẻ hơn hoàn tiền</a>
              </div>
            </div>
          </div>
          <div className="category-search left-rate">
            <h4 className="title">Đánh giá</h4>
            <div className="line-rate">
              <div className="item-rate">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
              <span>(5)</span>
            </div>
            <div className="line-rate">
              <div className="item-rate">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
              <span>(4)</span>
            </div>
            <div className="line-rate">
              <div className="item-rate">
                <i className="icon-star" />
                <i className="icon-star" />
                <i className="icon-star" />
              </div>
              <span>(3)</span>
            </div>
          </div>

          <div className="category-search left-brand ">
            <h4 className="title">Thương hiệu</h4>
            <div className="list">
              <a href="/search/supplier">3H MASK</a>
            </div>
          </div>
          <div className="category-search left-size">
            <h4 className="title">Kích thước</h4>
            <div className="list">
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">M</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">L</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">S</a>
              </div>
              <div>
                <input type="checkbox"></input>
                <a href="/search/supplier">XL</a>
              </div>
            </div>
          </div>
          <div className="category-search left-supplier ">
            <h4 className="title">Nhà cung cấp</h4>
            <div className="list">
              <a href="/search/supplier">3H MASK</a>
            </div>
          </div>
          <div className="category-search left-category-search ">
            <h4 className="title">Phân loại</h4>
          </div>
          <div className="category-search left-material">
            <h4 className="title">Chất liệu</h4>
          </div>
        </div>
        <div className="right">
          <div className="header">
            <div className="header-result">
              <h3>Kết quả tìm kiếm: </h3>
              <h4>
                {state ? state.length : 0} kết quả.{" "}
                {/* {arr !== undefined ? arr.length : 0} kết quả */}
              </h4>
            </div>
            <div className="header-tab">
              {arr2.map((value, key) => {
                return (
                  <h5
                    className={key === active ? "active" : ""}
                    onClick={() => handleTab(key)}
                  >
                    {value}
                  </h5>
                );
              })}
            </div>
          </div>
          <div className="body">
            {checks ? <Freeship data={state} /> : null}
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {totalPages
                ? totalPages.map((value, index) => {
                    return (
                      <li
                        key={index}
                        onClick={() => onAddPage(value.item)}
                        className="asd"
                      >
                        {value.item}
                      </li>
                    );
                  })
                : null}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Search;
