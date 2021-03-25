import React from 'react';
import axios from "axios";
import jwt_decode from "jwt-decode";
import { useForm } from 'react-hook-form';
function Login(props) {
    const { register, errors, reset, setValue, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        axios.post('http://phucnb-django-example.herokuapp.com/api/user/auth/login', data).then((rs) => {
            const token = rs.data.access;
            var decoded = jwt_decode(token);
            if (decoded.role === 'admin') {
                localStorage.setItem("token", token);   
                props.history.push('/admin');
                window.setTimeout(window.location.reload.bind(window.location),10);
            }
            if (decoded.role === 'user') {
                localStorage.setItem("token-user", token);   
                props.history.push('/');
                window.setTimeout(window.location.reload.bind(window.location),10);
            }
            console.log(token);
        }, (err) => {
            e.target.reset();
        })
    }
    return (
        <div style={{ width: "60%", margin: "0px auto" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label htmlFor="email">Username:</label>
                    <input type="text" name="username" ref={register({ required: true })} className="form-control" id="email" />
                    <small id="emailHelp" style={{ color: "red" }}>
                        {errors.username && "Vui lòng nhập giá trị tài khoản bằng admin"}
                    </small>
                </div>
                <div className="form-group">
                    <label htmlFor="pwd">Password:</label>
                    <input type="password" name="password" ref={register({ required: true })} className="form-control" id="pwd" />
                    <small id="emailHelp" style={{ color: "red" }}>
                        {errors.password && "Vui lòng nhập mật khẩu bằng vnpt@123"}
                    </small>
                </div>
                <div className="checkbox">
                    <label><input type="checkbox" /> Remember me</label>
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
            </form>
        </div>
    );
}

export default Login;