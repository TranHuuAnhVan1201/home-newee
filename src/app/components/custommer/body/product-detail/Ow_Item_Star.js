import React from "react";
import { Link } from "react-router-dom";
import "./Owl_Item_Star.scss";

function convertToSlug(slug) {
    return slug
        .toLowerCase()
        .replace(/ /g, '-')
        .replace(/[^\w-]+/g, '')
        ;
}
function Ow_Item_Star(props) {
    let { value } = props;

    
    return (
        <li className="owl-item star">
            <div className="item" data-index={1}>
                <Link to={"/detail/" + convertToSlug(value.item_Title) + "." + value.id } className="vertion2020 large">
                   
                   {/* carts */}
                    <Link to="/carts" className="item-carts">
                        <i className="fas fa-cart-plus"></i>
                    </Link>



                    <img src={value.pictures} className="imgStar" alt={value.picAlt} />
                    <div className="textStar">
                        <div>
                            <div className="result-label sale">
                                <i className="roundy">%</i>
                                <span className="text">{"Giảm sốc"}</span>
                            </div>
                            <div className="heightlabel">Trả góp 0%</div>
                        </div>
                        <label className="preorder"> {value.preorder}</label>
                        <h3>{value.item_Title}</h3>
                        <div className="props">
                            <span className="dotted  ">Ram {value.ram} GB</span>
                            <span className="dotted  ">Ssd {value.ssd} GB</span>
                            <span className="dotted  ">Core {value.core}</span>
                            <span className="dotted  ">Pin {value.pin}H</span>
                        </div>
                        <h6 className="textkm">{value.textkm} </h6>
                        <div className="price">
                            <strong>{value.price}đ</strong>
                            <span>{value.priceSale}đ</span>
                            <i>{5}%</i>
                        </div>
                        <div className="promo noimage">
                            <p>{value.textBouns}</p>
                        </div>
                        <div className="ratingresult">
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <i className="icontgdd-ystar" />
                            <span>{value.review} đánh giá</span>
                        </div>
                        <input
                            className="spInfo"
                            data-brand="Samsung"
                            data-cat="Điện thoại"
                            data-price={23490000}
                            data-pro={3}
                            data-version
                            id="data220833"
                            name="data220833"
                            type="hidden"
                            defaultValue={220833}
                        />
                    </div>
                </Link>
            </div>
        </li>
    );
}

export default Ow_Item_Star;
