import React, { useEffect, useState } from "react";
import { HashRouter, Route, Switch } from "react-router-dom";
import NotFoundPage from "./app/_pages/custommer-page/Not_Found_Page/NotFoundPage";
import ScrollToTop from "react-router-scroll-top";

const defaultPage = React.lazy(() =>
  import("./app/_pages/custommer-page/default-pages/defaultPage")
);
const LoginSeller = React.lazy(() =>
  import("./app/_pages/login-page/LoginPage")
);

const ForgotSeller = React.lazy(() => import("./app/components/login/Forgot"));
const RegisterSeller = React.lazy(() =>
  import("./app/components/register/Register")
);
const RegisterStepSeller = React.lazy(() =>
  import("./app/components/register/register-step/RegisterStep")
);

const Admin_deafault_page = React.lazy(() =>
  import("./app/_pages/admin-page/admin-default-page/Admin_deafault_page")
);

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

function App() {
  const [role, setRole] = useState(false);
  useEffect(() => {
    // setRole(true);
    const token = localStorage.getItem("token");
    if (token) {
      setRole(true);

      // var decoded = jwt_decode(token);
      // setRole(decoded.role);
      // if (role === "admin") {
      //   console.log("đúng");
      // }
    }
  }, []);
  return (
    <HashRouter>
      <ScrollToTop>
        <React.Suspense fallback={loading}>
          <Switch>
            <Route path={"/login"} exact component={LoginSeller} />
            <Route path={"/forgot"} exact component={ForgotSeller} />
            {/* <Route path={"/register"} exact component={RegisterSeller} /> */}

            <Route path={"/register"} component={RegisterStepSeller} />
            <Route
              path={"/admin"}
              component={role ? Admin_deafault_page : NotFoundPage}
            />

            {/* <Route path={"/admin"} exact component={Admin_deafault_page} /> */}
            <Route path={"/"} component={defaultPage} />
          </Switch>
        </React.Suspense>
      </ScrollToTop>
    </HashRouter>
  );
}

export default App;
