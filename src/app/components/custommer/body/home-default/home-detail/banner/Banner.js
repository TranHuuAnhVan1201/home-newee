/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './Banner.scss';

//banner =>> gồm owl home( 800x170 ) và right (390 x 170)
//-owl-home
// => div ảnh ( chứa ảnh nằm dưới cùng )
// => div chứa ( owl-wrapper-outer - bên ngoài - làm gốc - hiển thị = 800px)
//      => div rộng, chứa tất cả hình ( owl-wrapper - click sẽ đổi ảnh hoặc auto
//      => div controls => nút tròn dưới cùng - click sẽ sang.
//                      => next- pre -> 2 bên.

function Banner(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <div className="banners">
      <div className="banners-left owl-home ">
        <Slider {...settings}>
          <div>
            <img src={"http://placehold.jp/824x274.png"} alt="1"></img>
          </div>
          <div>
            <img src={"http://placehold.jp/824x274.png"} alt="1"></img>
          </div>
          <div>
            <img src={"http://placehold.jp/824x274.png"} alt="1"></img>
          </div>
          <div>
            <img src={"http://placehold.jp/824x274.png"} alt="1"></img>
          </div>
          <div>

            <img src={"http://placehold.jp/824x274.png"} alt="1"></img>
          </div>
        </Slider>
      </div>
      <div className="banners-right">
        <img src={"http://placehold.jp/408x274.png"} alt="1"></img>
      </div>
    </div>

    // <div className="banner">
    //   <div className="banner-left">

    //   </div>
    //   <div className="banner-right"></div>
    // </div>
    // <div className="banner">
    //   <div id="owl-home" className="owl-carousel owl-theme">
    //     <div className="owl-wrapper-outer">
    //       <div className="owl-wrapper">

    //         <Slider {...settings}>
    //           <div className="owl-item800">
    //             <Link to="/laptopsale">
    //               <img
    //                 src={"http://placehold.jp/824x274.png"}
    //                 alt="banner"
    //               ></img>
    //             </Link>
    //           </div>
    //           <div className="owl-item800">
    //             <Link to="/laptop-lenovo-sale">
    //               <img
    //                 src={"http://placehold.jp/824x274.png"}
    //                 alt="banner"
    //               ></img>
    //             </Link>
    //           </div>
    //           <div className="owl-item800">
    //             <Link to="/laptop-lenovo-sale">
    //               <img
    //                 src={"http://placehold.jp/824x274.png"}
    //                 alt="banner"
    //               ></img>
    //             </Link>
    //           </div>
    //         </Slider>
    //       </div>
    //     </div>
    //     <div className="owl-controls">
    //       <div className="owl-buttons">
    //         <div className="owl-prev owl-btns">‹123123</div>
    //         <div className="owl-next owl-btns">›</div>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="right">
    //     <Link to="/windowns-10-ban-quyen" className="right-height80">
    //       <img src={"http://placehold.jp/408x274.png"}></img>
    //     </Link>
    //   </div>
    //   <div className="clr"></div>
    // </div>
  );
}

export default Banner;