import axios from "axios";
import React, { useEffect, useState } from "react";
import { ErrorMessage } from "@hookform/error-message";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { chooseStep1 } from "../../../_actions/custommer/products/product";
import "../Register.scss";

function Step1(props) {
  //   const api = axios.create({
  //     baseURL: `https://103.15.50.190:5001/Newee/Seller/Register`,
  //   });
  //   const createUser = async (data) => {
  //     console.log(data);
  //     await api
  //       .post("/", data)
  //       .then((res) => {
  //         console.log(res);
  //       })
  //       .catch((err) => console.log(err));
  //   };
  const dispatch = useDispatch();
  const history = useHistory();
  const [submitted, setSubmitted] = useState(false);
  const Register = useSelector((state) => state.Register);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { Register },
  });
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [step, setStep] = useState(false);

  const [state, setState] = useState({
    imageCMND: [],
    imageAVT: [],
  });

  const onSubmit = (data) => {
    alert("Cập nhập thông tin địa chỉ...");
    console.log(data);
    setState({
      ...state,
      data,
    });

    dispatch(chooseStep1(data));
    history.push("/register/step-2");
  };
  console.log(errors);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "laptop");
    const res = await fetch(
      "https://api.cloudinary.com/v1_1/cv-thav-herokuapp-com/image/upload",
      {
        method: "POST",
        body: data,
      }
    );

    const file = await res.json();
    let image = {
      type: "image",
      url: `${file.secure_url}`,
    };
    setCheck1(true);
    setState({
      ...state,
      imageCMND: [...state.imageCMND, `${file.secure_url}`],
    });
  };


  return (
    <section>
      <div className="register">
        <div className="register-container">
          <Link to="/" className="btn-cancel">
            X
          </Link>
          <div className="group-text">
            <h2>Đăng Ký Bước 1</h2>
            <span>Nhanh chóng và dễ dàng</span>
            <div className="group-span"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tab-content">
              <div className={"tab-step step-1"}>
                <input
                  style={{ display: "none" }}
                  disabled
                  type="text"
                  name="Id"
                  placeholder="Id"
                  defaultValue="11231"
                  ref={register({
                    required: true,
                    // pattern: {
                    //   value: /[A-Za-z]+/,
                    //   message: "Sai định dạng.",
                    // },
                    // min: {
                    //   value: 6,
                    //   message: "Gồm ít nhất 6 ký tự",
                    // },
                    // minLength: {
                    //   value: 6,
                    //   message: "Gồm ít nhất 6 ký tự.",
                    // },
                    // maxLength: {
                    //   value: 30,
                    //   message: "Nhập quá số lượng tối đa 30 ký tự.",
                    // },
                  })}
                ></input>
                {/* <ErrorMessage errors={errors} name="Id">
                  {({ messages }) => {
                    console.log(messages);
                    return (
                      messages &&
                      Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                      ))
                    );
                  }}
                </ErrorMessage> */}

                <input
                  name="LastName"
                  type="text"
                  placeholder="Họ"
                  ref={register({
                    required: "Vui lòng nhập Họ từ 2 ký tự.",
                    // pattern: {
                    //   value: /[A-Za-z]+/,
                    //   message: "Sai định dạng.",
                    // },
                    min: {
                      value: 2,
                      message: "Gồm ít nhất 2 ký tự",
                    },
                    minLength: {
                      value: 2,
                      message: "Gồm ít nhất 2 ký tự.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Nhập quá số lượng tối đa 20 ký tự.",
                    },
                  })}
                ></input>
                <ErrorMessage errors={errors} name="LastName">
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
                  name="FirstName"
                  type="text"
                  placeholder="Tên"
                  ref={register({
                    required: "Vui lòng nhập Tên từ 2 ký tự.",
                    // pattern: {
                    //   value: /[A-Za-z]+/,
                    //   message: "Sai định dạng.",
                    // },
                    min: {
                      value: 2,
                      message: "Gồm ít nhất 2 ký tự",
                    },
                    minLength: {
                      value: 2,
                      message: "Gồm ít nhất 2 ký tự.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Nhập quá số lượng tối đa 20 ký tự.",
                    },
                  })}
                ></input>
                <ErrorMessage errors={errors} name="FirstName">
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
                  type="tel"
                  name="Phone"
                  placeholder="Số điện thoại"
                  ref={register({
                    required: "Vui lòng nhập Số điện thoại từ 10 ký tự.",
                    pattern: {
                      value: /\d+/,
                      message: "Sai định dạng, chỉ gồm số...",
                    },
                    min: {
                      value: 10,
                      message: "Gồm ít nhất 10 ký tự",
                    },
                    minLength: {
                      value: 10,
                      message: "Gồm ít nhất 10 ký tự.",
                    },
                    maxLength: {
                      value: 12,
                      message: "Nhập quá số lượng tối đa 12 ký tự.",
                    },
                  })}
                ></input>

                <ErrorMessage errors={errors} name="Phone">
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
                  type="text"
                  name="Email"
                  placeholder="Tài khoản Email"
                  ref={register({
                    required: "Vui lòng nhập Email từ 10 ký tự.",
                    pattern: {
                      value: /^\S+@\S+$/,
                      message: `Sai định dạng Email /^\S+@\S+$/`,
                    },
                    min: {
                      value: 10,
                      message: "Gồm ít nhất 10 ký tự",
                    },
                    minLength: {
                      value: 10,
                      message: "Gồm ít nhất 10 ký tự.",
                    },
                    maxLength: {
                      value: 50,
                      message: "Nhập quá số lượng tối đa 50 ký tự.",
                    },
                  })}
                ></input>
                <ErrorMessage errors={errors} name="Email">
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
                  type="password"
                  name="Password"
                  className="w-170"
                  placeholder="Mật khẩu bao gồm chữ số, in hoa, ký tự đặt biệt"
                  ref={register({
                    required: "Vui lòng nhập Password từ 10 ký tự.",
                    // pattern: {
                    //   value: /^\S+@\S+$/,
                    //   message: "Sai định dạng, chỉ gồm số...",
                    // },
                    min: {
                      value: 8,
                      message: "Gồm ít nhất 8 ký tự",
                    },
                    minLength: {
                      value: 8,
                      message: "Gồm ít nhất 8 ký tự.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Nhập quá số lượng tối đa 20 ký tự.",
                    },
                  })}
                ></input>

                <ErrorMessage errors={errors} name="Password">
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
                  type="password"
                  name="PasswordConfirm"
                  className="w-170"
                  placeholder="Mật khẩu mới"
                  ref={register({
                    required: "Vui lòng nhập PasswordConFirm từ 10 ký tự.",
                    // pattern: {
                    //   value: /^\S+@\S+$/,
                    //   message: "Sai định dạng, chỉ gồm số...",
                    // },
                    min: {
                      value: 8,
                      message: "Gồm ít nhất 8 ký tự",
                    },
                    minLength: {
                      value: 8,
                      message: "Gồm ít nhất 8 ký tự.",
                    },
                    maxLength: {
                      value: 20,
                      message: "Nhập quá số lượng tối đa 20 ký tự.",
                    },
                  })}
                ></input>
                <ErrorMessage errors={errors} name="PasswordConfirm">
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
                  type="datetime"
                  name="DateBirthday"
                  className="w-170"
                  placeholder="Ngày sinh: 28/03/2021"
                  ref={register({
                    required: "Vui lòng nhập Ngày sinh: 28/03/2021.",
                    // pattern: {
                    //   value: /d+/,
                    //   message: "Sai định dạng, chỉ gồm số...",
                    // },
                    min: {
                      value: 10,
                      message: "Gồm ít nhất 10 ký tự",
                    },
                    minLength: {
                      value: 10,
                      message: "Gồm ít nhất 10 ký tự.",
                    },
                    maxLength: {
                      value: 12,
                      message: "Nhập quá số lượng tối đa 12 ký tự.",
                    },
                  })}
                ></input>
                <ErrorMessage errors={errors} name="DateBirthday">
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

                {/* <div className="form-controls">
                  <label className="w-120">Ngày sinh</label>
                  <input
                    type="datetime"
                    placeholder="28/03/2021"
                    name="date-birthday"
                    ref={register({ required: true })}
                  />
                </div> */}
                <div className="form-controls btn-sm">
                  <button
                    type="submit"
                    className="btns-newee"
                    placeholder="Đăng ký"
                  
                  >
                    {" "}
                    Tiếp theo
                  </button>

                  {/* <input
                    type="submit"
                    className="btns-newee"
                    placeholder="Đăng ký"
                  /> */}
                </div>
                {/* <div
                  className="form-controls btn-right"
                  style={{ justifyContent: "flex-end" }}
                >
                  <button
                    type="submit"
                    className="btns-newee"
                    onClick={() => nextStep(2)}
                  >
                    Bước tiếp theo
                  </button>
                  
                </div> */}
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Step1;
