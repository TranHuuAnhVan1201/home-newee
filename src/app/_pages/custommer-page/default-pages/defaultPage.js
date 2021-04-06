import React from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
const Header = React.lazy(() =>
  import("../../../components/custommer/header-home-custommer/HeaderHome")
);
const FooterHome = React.lazy(() =>
  import("../../../components/custommer/footer-home-custommer/FooterHome")
);
const HomeDefault = React.lazy(() =>
  import("../../../components/custommer/body/home-default/HomeDefault")
);

const ProductDetail = React.lazy(() =>
  import("../../../components/custommer/body/product-detail/ProductDetail")
);
// const Carts = React.lazy(() =>
//   import("../../../components/custommer/body/carts/CartsDefault")
// );
// const Shop = React.lazy(() =>
//   import("../../../components/custommer/body/shop/Shop")
// );
const Cart = React.lazy(() =>
  import("../../../components/custommer/body/shop/Carts")
);
const PayPal = React.lazy(() =>
  import("../../../components/custommer/body/paypal/PayPal")
);
const PageHistory = React.lazy(() =>
  import("../../../components/custommer/body/paypal/history/History")
);
const SearchProduct = React.lazy(() =>
  import(
    "../../../components/custommer/body/page-search/search-product/SearchProduct"
  )
);
const Searchs = React.lazy(() =>
  import(
    "../../../components/custommer/body/page-search/search/Search"
  )
);

function defaultPage() {
  return (
    <HashRouter>
      <React.Suspense>
        <Header></Header>
        <section>
          <Switch>
            <Route path={"/"} exact component={HomeDefault} />
            <Route path={"/search-product"} exact component={SearchProduct} />
            <Route path={"/search"} component={Searchs} />
            <Route path={"/cart"} exact component={Cart} />

            
            {/* <Route path={"/carts"} exact component={Carts} /> */}
            {/* <Route path={"/shop"} exact component={Shop} /> */}

            <Route path={"/paypal"} component={PayPal} />
            <Route path={"/history"} component={PageHistory} />
            <Route
              path={"/product-detail/:slug.:id"}
              exact
              component={ProductDetail}
            />
          </Switch>
        </section>
      </React.Suspense>
      <FooterHome></FooterHome>
    </HashRouter>
  );
}

export default defaultPage;
