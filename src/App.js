import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import NotFoundPage from "./app/_pages/custommer-page/Not_Found_Page/NotFoundPage";
import ScrollToTop from "react-router-scroll-top";

const defaultPage = React.lazy(() =>
  import("./app/_pages/custommer-page/default-pages/defaultPage")
);
const LoginPage = React.lazy(() => import("./app/_pages/login-page/LoginPage"));
const Admin_deafault_page = React.lazy(() =>
  import("./app/_pages/admin-page/admin-default-page/Admin_deafault_page")
);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const [role, setRole] = useState("");
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      var decoded = jwt_decode(token);
      setRole(decoded.role);
      if (role === "admin") {
        console.log("đúng");
      }
    }
  }, []);
  return (
    <HashRouter>
      <ScrollToTop>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path={"/login"} exact component={LoginPage} />
            <Route
              path={"/admin"}
              component={role === "admin" ? Admin_deafault_page : NotFoundPage}
            />
            <Route path="/" component={defaultPage} />
          </Switch>
        </React.Suspense>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
