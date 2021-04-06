import React from 'react';
import Banner from './home-detail/banner/Banner';
import Filter from './home-detail/filter/Filter';
import ProductBestSale from "./home-detail/product-best-sale/ProductBestSale";
import Need from "./home-detail/need/Need";
import QuickLink from './home-detail/quick-link/QuickLink';
import Category from './home-detail/category/Category';
import Search from './home-detail/search/Search';
import Need2 from './home-detail/need2/Need2';
import ProductTab from './home-detail/product-tab/ProductTab';
import ProductDatabase from './home-detail/product-tab/ProductDatabase';



function homeDefault(props) {
    return (
      <section>
        <Banner />
        <Filter />
        <ProductBestSale />
        <QuickLink />
        <Need />
        <Category />
        {/* <Search />
        <Need2 /> */}
        <ProductTab />
        {/* <ProductDatabase /> */}

      </section>
    );
}

export default homeDefault;