import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../slices/user";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../Signup.css";

const Backend_Url = "https://api.pollerhub.com/api/v1/login";

function Signin() {
  const navi = useNavigate();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { token } = useSelector((state) => state.user);
  const [Password, setPassword] = useState(false);
  const dispatch = useDispatch();

  const submitForm = async (data) => {
    const toastId = toast.loading("Loading....");
    try {
      const response = await axios.post(Backend_Url, data);

      console.log("Login response....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Login successful");
      dispatch(setToken(response.data.token));
      navi("/createblog");
    } catch (error) {
      console.log("Login Error", error);
      toast.error(error?.response?.data?.message || "Login failed");
    }
    toast.dismiss(toastId);
  };

  if (token) {
    return <Navigate to={"/course"} />;
  }

  return (
    <div className="sign-in-page">
      <div className="sign-in-content">
        <h2 className="sign-in-title">Sign In</h2>
        <form className="sign-in-form" onSubmit={handleSubmit(submitForm)}>
          <label className="sign-in-label">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="sign-in-input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="sign-in-error-message">
                Please enter the email
              </div>
            )}
          </label>

          <label className="sign-in-label">
            Password
            <div className="password-input-container">
              <input
                type={Password ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="sign-in-input"
                {...register("password", { required: true })}
              />
              <div
                className="toggle-password"
                onClick={() => setPassword(!Password)}
              >
                {Password ? (
                  <AiFillEyeInvisible />
                ) : (
                  <AiFillEye />
                )}
              </div>
            </div>
            {errors.password && (
              <div className="sign-in-error-message">
                Please enter the password
              </div>
            )}
          </label>

          <button className="sign-in-button">Signin</button>
        </form>

        <p className="sign-up-link">
        <span className="white-text">Don't have an account?{" "}</span>
          <Link to="/signup" className="white-text">Click here to sign up</Link>
        </p>
      </div>
    </div>
  );
}

export default Signin;
