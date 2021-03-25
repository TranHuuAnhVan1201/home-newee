import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./HeaderAdmin.scss";
function HeaderAdmin(props) {
  const history = useHistory();
  useEffect(() => {
    if (localStorage.getItem("token-user")) {
    }
  }, []);

  const onLogout = () => {
    localStorage.removeItem("token");
    history.push("/");
    window.setTimeout(window.location.reload.bind(window.location), 10);
  };
  return (
    <header>
      <div className="wrap-main">
        <nav>
          <li className="logo">
            <Link to="/admin">LaptopTHAV</Link>
          </li>
          <div className="menu-info">
            <div className="menu-right">
              <button
                type="button"
                class="btn"
                onClick={() => onLogout()}
              >
                Logout
              </button>
            </div>
          </div>
        </nav>
      </div>
      <div className="clr" />
    </header>
  );
}

export default HeaderAdmin;
