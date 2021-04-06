import React from "react";
import "./SearchCategory";
function SearchCategory(props) {
  return (
    <div className="body-search-product">
      <h1>Category</h1>
      {/* {GetProduct.map((value, key) => {
          return (
            <div className="product-item col-4">
              <Link
                to={"/product-detail/" + to_slug(value.name) + "." + value.id}
                onClick={() => getIDName(value)}
                className="vertion2020 large"
              >
                {" "}
                <div className="thumbnail">
                  <div className="bage-top"></div>
                  <img src={value.url} alt="search"></img>
                </div>
                <div className="info">
                  <div className="service">
                    <div>
                      <img
                        width="56"
                        height="16"
                        alt="123"
                        src="https://salt.tikicdn.com/ts/upload/9f/32/dd/8a8d39d4453399569dfb3e80fe01de75.png"
                      ></img>
                    </div>
                  </div>
                  <div className="name">
                    <p>ADMIN</p>
                    <span>{value.title}</span>
                  </div>
                  <div className="rating-review">
                    <div className="item-rate">
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <i className="icon-star" />
                      <span>(5)</span>
                    </div>
                  </div>
                  <div className="price-discount">
                    <div className="price-discount-price">{value.price} đ</div>
                    <div className="price-discount-discount">-50%</div>
                  </div>
                  <div className="badge-under-price">
                    <img
                      width="124"
                      height="18"
                      src="https://salt.tikicdn.com/ts/upload/51/ac/cc/528e80fe3f464f910174e2fdf8887b6f.png"
                      alt="123"
                    ></img>
                  </div>
                  <div className="badge-benefits">{value.textBouns}</div>
                  <div className="badge-add-info"></div>
                </div>
              </Link>
            </div>
          );
        })} */}
    </div>
  );
}

export default SearchCategory;
