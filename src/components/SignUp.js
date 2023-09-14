import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../slices/user";
import { Navigate, Link, useNavigate } from "react-router-dom";
import "../Signup.css";

const Backend_Url = "http://ec2-13-200-110-133.ap-south-1.compute.amazonaws.com/api/v1/adduser";

function SignUp() {
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
    const toastId = toast.loading("Signing up....");
    try {
      const response = await axios.post(Backend_Url, data);

      console.log("Signup response....", response);

      if (!response.data.success) {
        throw new Error(response.data.message);
      }

      toast.success("Signup successful");
      dispatch(setToken(response.data.token));
      navi("/course");
    } catch (error) {
      console.log("Signup Error", error);
      toast.error(error?.response?.data?.message || "Signup failed");
    }
    toast.dismiss(toastId);
  };

  if (token) {
    return <Navigate to={"/course"} />;
  }

  return (
    <div className="sign-up-page">
      <div className="sign-up-content">
        <h2 className="sign-up-title">Sign Up</h2>
        <form className="sign-up-form" onSubmit={handleSubmit(submitForm)}>
          <label className="sign-up-label">
            Name
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="sign-up-input"
              {...register("name", { required: true })}
            />
            {errors.name && (
              <div className="sign-up-error-message">Please enter your name</div>
            )}
          </label>

          <label className="sign-up-label">
            Email
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="sign-up-input"
              {...register("email", { required: true })}
            />
            {errors.email && (
              <div className="sign-up-error-message">
                Please enter a valid email
              </div>
            )}
          </label>

          <label className="sign-up-label">
            Password
            <div className="password-input-container">
              <input
                type={Password ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="sign-up-input"
                {...register("password", { required: true })}
              />
              <div
                className="toggle-password"
                onClick={() => setPassword(!Password)}
              >
                {Password ? <AiFillEyeInvisible /> : <AiFillEye />}
              </div>
            </div>
            {errors.password && (
              <div className="sign-up-error-message">
                Please enter a password
              </div>
            )}
          </label>

          <button className="sign-up-button">Sign Up</button>

          <p className="sign-in-link">
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
