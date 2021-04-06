import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import {
  chooseImageStep2,
  chooseStep1,
  chooseStep2,
} from "../../../_actions/custommer/products/product";
import "../Register.scss";

function Step2(props) {
  // const api = axios.create({
  //   baseURL: `http://localhost:5000/Newee/Seller/Register`,
  //   // baseURL: `https://103.15.50.190:5001/Newee/Seller/Register`,
  // });
  // const createUser = async (data) => {
  //   console.log(data);
  //   await api
  //     .post("/", data)
  //     .then((res) => {
  //       console.log(res);
  //     })
  //     .catch((err) => console.log(err));
  // };

  const history = useHistory();
  const dispatch = useDispatch();
  const [submitted, setSubmitted] = useState(false);
  const Register = useSelector((state) => state.Register);
  const { register, handleSubmit, errors } = useForm({
    defaultValues: { Register },
  });


  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [step, setStep] = useState(false);

  const [state, setState] = useState({
    step1: [],
    step2: [],
    image: [],
  });
  const [step2, setStep2] = useState({
    imageCMND: [],
    imageAVT: [],
  });

  //   const onSubmit = (data) => {
  //     alert("Chuyển sang Bước 2.");
  //     console.log(data);
  //     setState({
  //       ...state,
  //       data,
  //     });
  //     dispatch(chooseStep1(data));
  //     console.log(state);
  //     history.push("/step2");
  //   };
  const onSubmit = (data2) => {
    alert("Cập nhập hình ảnh CMND...");
    dispatch(chooseStep2(data2));
    // createUser(Register);
    history.push("/register/step-3");
  };

  const prevStep = () => {
    history.push("/register");
  };

  return (
    <section>
      <div className="register">
        <div className="register-container">
          <Link to="/" className="btn-cancel">
            X
          </Link>
          <div className="group-text">
            <h2>Đăng Ký Bước 2</h2>
            <span>Nhanh chóng và dễ dàng</span>
            <div className="group-span"></div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="tab-content">
              <div className="tab-step step-2">
                <label>Số nhà</label>
                <input
                  name="address"
                  type="text"
                  placeholder="Vui lòng nhập số nhà"
                  // ref={register({
                  //   required: true,
                  //   minLength: 9,
                  //   maxLength: 16,
                  // })}
                  ref={register()}
                ></input>

                <label>Tên đường</label>
                <input
                  name="street"
                  type="text"
                  placeholder="Vui lòng nhập tên đường..."
                  // ref={register({
                  //   required: true,
                  //   minLength: 9,
                  //   maxLength: 16,
                  // })}
                  ref={register()}
                ></input>

                <label>Xã / Phường</label>
                <input
                  name="ward"
                  type="text"
                  placeholder="Vui lòng nhập địa chỉ phường..."
                  // ref={register({
                  //   required: true,
                  //   minLength: 9,
                  //   maxLength: 16,
                  // })}
                  ref={register()}
                ></input>

                <label>Huyện / Quận</label>
                <input
                  name="district"
                  type="text"
                  placeholder="Vui lòng nhập địa chỉ xã / phường..."
                  // ref={register({
                  //   required: true,
                  //   minLength: 9,
                  //   maxLength: 16,
                  // })}
                  ref={register()}
                ></input>

                <label>Tỉnh / Thành phố</label>
                <input
                  name="city"
                  type="text"
                  placeholder="Vui lòng nhập tên tỉnh / thành phố..."
                  // ref={register({
                  //   required: true,
                  //   minLength: 9,
                  //   maxLength: 16,
                  // })}
                  ref={register()}
                ></input>

                <div className="form-controls btn-sm">
                  <button
                    style={{
                      padding: "0 6px",
                      background: "rgb(242,242,242)",
                      color: "#000",
                    }}
                    type="submit"
                    className="btns btns-newee go-back"
                    onClick={() => prevStep()}
                  >
                    Quay lại
                  </button>

                  <button
                    className="btns btns-newee"
                    type="submit"
                    placeholder="Đăng ký"
                  >
                    Đăng ký
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Step2;
