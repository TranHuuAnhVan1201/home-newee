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
const Search = React.lazy(() =>
  import("../../../components/custommer/body/page-search/search-product/Search")
);
const ProductDetail = React.lazy(() =>
  import("../../../components/custommer/body/product-detail/ProductDetail")
);
const Carts = React.lazy(() =>
  import("../../../components/custommer/body/carts/CartsDefault")
);
const PayPal = React.lazy(() =>
  import("../../../components/custommer/body/paypal/PayPal")
);
const PageHistory = React.lazy(() =>
  import("../../../components/custommer/body/paypal/history/History")
);

function defaultPage() {
  return (
    <HashRouter>
      <React.Suspense>
        <Header></Header>
        <Switch>
          <Route path={"/"} exact component={HomeDefault} />
          <Route path={"/search"} exact component={Search} />
          <Route path={"/carts"} exact component={Carts} />
          <Route path={"/paypal"} component={PayPal} />
          <Route path={"/history"} component={PageHistory} />
          <Route
            path={"/product-detail/:slug.:id"}
            exact
            component={ProductDetail}
          />
        </Switch>
      </React.Suspense>
      <FooterHome></FooterHome>
    </HashRouter>
  );
}

export default defaultPage;
