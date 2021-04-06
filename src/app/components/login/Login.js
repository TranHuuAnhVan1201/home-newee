import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import "./Login.scss";
import { Link, useHistory } from "react-router-dom";
function Login(props) {
  const { register, errors, reset, setValue, handleSubmit } = useForm({
    criteriaMode: "all",
  });
  const history = useHistory();
  const api = axios.create({
    // baseURL: `https://103.15.50.190:5001/Newee/Seller/Login/`,

    baseURL: `https://api.newee.asia:5001/Newee/Seller/Login/`,
  });
  const header = axios.create({
    // baseURL: `https://103.15.50.190:5001/Newee/test2`,
    baseURL: `https://api.newee.asia:5001/Newee/test2`,
  });

  const author = async () => {
    await header
      .get("/", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const LoginUser = async (data, e) => {
    console.log(data);
    await api
      .post("/", data)
      .then((res) => {
       
        localStorage.setItem("token", res.data.data.token);
        history.push("/");
        window.setTimeout(window.location.reload.bind(window.location), 10);

        // if (res.data.data.roles === `["Seller"]`) {
        //   alert("chay roi");
        //   localStorage.setItem("token", res.data.token)
        //   history.push("/");
        //   window.setTimeout(window.location.reload.bind(window.location), 10);
        // }
      })
      .catch((err) => console.log(err));
    // (err) => {
    //   e.target.reset();;
  };
  const onSubmit = (data, e) => {
    e.preventDefault();
    console.log(data);
    LoginUser(data);
    author(data);

    // "http://phucnb-django-example.herokuapp.com/api/user/auth/login",
    // axios.post("https://103.15.50.190:5001/Newee/Seller/Login/", data).then(
    //   (rs) => {
    //     if (rs) {
    //       jwt_decode(rs.data.access);
    //     }
    // const token = rs.data.access;
    // var decoded = jwt_decode(token);
    // console.log(token);
    // if (decoded.role === "admin") {
    //   localStorage.setItem("token", token);
    //   props.history.push("/admin");
    //   window.setTimeout(window.location.reload.bind(window.location), 10);
    // }
    // if (decoded.role === "user") {
    //   localStorage.setItem("token-user", token);
    //   props.history.push("/");
    //   window.setTimeout(window.location.reload.bind(window.location), 10);
    // }
    // console.log(rs);
    // },
    // (err) => {
    //   e.target.reset();
    // }
    // );
  };
  return (
    <section>
      <div className="container-login">
        <div className="left"></div>
        <div className="right">
          <div className="card-body">
            <Link to="/" className="btn-cancel">
              X
            </Link>
            <h2>Đăng nhập</h2>
            {/* onSubmit={handleSubmit(onSubmit)} */}
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                name="Username"
                type="text"
                placeholder="Username: admin_seller@gmail.com"
                ref={register({
                  required: "Vui lòng nhập tài khoản 6-30 ký tự.",
                  // pattern: {
                  //   value: /[A-Za-z]+/,
                  //   message: "Sai định dạng.",
                  // },
                  min: {
                    value: 5,
                    message: "Gồm ít nhất 5 ký tự",
                  },
                  minLength: {
                    value: 5,
                    message: "Gồm ít nhất 5 ký tự.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Nhập quá số lượng tối đa 30 ký tự.",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="Username">
                {({ messages }) => {
                  console.log(messages);
                  return (
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <p key={type}>{message}</p>
                    ))
                  );
                }}
              </ErrorMessage>

              <input
                name="Password"
                type="password"
                placeholder="Password: Seller@123"
                ref={register({
                  required: "Vui lòng nhập mật khẩu 6-30 ký tự.",
                  // pattern: {
                  //   value: /[A-Za-z]+/,
                  //   message: "Sai định dạng.",
                  // },
                  min: {
                    value: 6,
                    message: "Gồm ít nhất 6 ký tự",
                  },
                  minLength: {
                    value: 6,
                    message: "Gồm ít nhất 6 ký tự.",
                  },
                  maxLength: {
                    value: 30,
                    message: "Nhập quá số lượng tối đa 30 ký tự.",
                  },
                })}
              />
              <ErrorMessage errors={errors} name="Password">
                {({ messages }) => {
                  console.log(messages);
                  return (
                    messages &&
                    Object.entries(messages).map(([type, message]) => (
                      <span key={type}>{message}</span>
                    ))
                  );
                }}
              </ErrorMessage>

              <div className="option">
                <div className="checkbox forgot">
                  <Link to="/forgot">Quên mật khẩu?</Link>
                </div>
              </div>
              <button
                type="submit"
                className="btns larger submit btns-login-register"
              >
                Đăng nhập
              </button>
              <div className="user-dropdown login-register ">
                <Link to="/login" className="Userdropdown-button btns-fb">
                  <p>
                    <img
                      width={32}
                      height={32}
                      src={
                        "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617120617/newee/wjycvjclpa015orqijvd.png"
                      }
                      alt="icon"
                    ></img>
                    <div className="mg-8"></div>
                    <span>Đăng nhập bằng Facebook</span>
                  </p>
                </Link>
                <Link to="/login" className="Userdropdown-button btns-google">
                  <p>
                    <img
                      width={32}
                      height={32}
                      src={
                        "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617120617/newee/nfxna33s6optwoxawhf5.png"
                      }
                      alt="icon"
                    ></img>
                    <div className="mg-8"></div>
                    <span>Đăng nhập bằng Gmail</span>
                  </p>
                </Link>
                <Link to="/login" className="Userdropdown-button btns-zalo">
                  <p>
                    <img
                      width={32}
                      height={32}
                      src={
                        "https://res.cloudinary.com/cv-thav-herokuapp-com/image/upload/v1617120617/newee/piq6k6u4gvzzdkwucfm9.png"
                      }
                      alt="icon"
                    ></img>
                    <div className="mg-8"></div>
                    <span>Đăng nhập bằng Zalo</span>
                  </p>
                </Link>
              </div>
            </form>
            <button className="btns larger btn-create">
              <Link to="/register">Tạo tài khoản mới</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
