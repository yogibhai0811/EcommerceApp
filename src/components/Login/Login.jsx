import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { handleAuthLogin } from "../../FetchReq/auth";
import { takeUserData } from "../../redux/auth/action";
import { getCookie } from "../../utils/cookies";
import Register from "../Register/Register";
import styles from "./login.module.css";
const Login = ({ showLogin, setShowLogin }) => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const [showRegister, setShowRegister] = useState(false);
  const handleLogin = () => {
    console.log(form);
    handleAuthLogin({ ...form }, dispatch);
    setShowLogin(false);
  };
  return (
    <>
      {showRegister === true ? (
        <Register
          setShowRegister={setShowRegister}
          setShowLogin={setShowLogin}
        />
      ) : (
        <div className={styles.modal}>
          <div className={`${styles.modal_content} ${styles.animate}`}>
            <div className={styles.imgcontainer}>
              <span
                onClick={() => setShowLogin(false)}
                className={styles.close}
                title="close login"
              >
                &times;
              </span>
              <img
                src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png"
                alt=""
                className={styles.avatar}
              />
            </div>
            <div className={styles.container}>
              <label htmlFor="email">
                <b>Email</b>
              </label>
              <input
                type="email"
                placeholder="Enter Email"
                name="email"
                required
                className={styles.input}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />

              <label htmlFor="password">
                <b>Password</b>
              </label>
              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                required
                className={styles.input}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />

              <button
                type="submit"
                className={styles.button}
                onClick={handleLogin}
              >
                Login
              </button>
            </div>
            <div
              className={styles.container}
              style={{ backgroundColor: "#f1f1f1" }}
            >
              <button
                type="button"
                className={styles.cancelbtn}
                onClick={() => setShowLogin(false)}
              >
                Cancel
              </button>
              <span
                className={styles.password}
                onClick={() => setShowRegister(true)}
              >
                Create an account
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Login;
