import React from "react";
import "./About.css";
import mainpic from "../images/mainpic.jpg";
import { useState } from "react";

import { useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
const Aboutus = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const redirectPath = location.state?.path || "/";

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      navigate("/home");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }
  return (
    <>
      <Modal
        className="customise"
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <form className="formlogin" onSubmit={handleSubmit}>
            <div className="header">Sign In</div>
            <div className="inputs">
              {error && <Alert variant="danger">{error}</Alert>}
              <label htmlFor="email">Email:</label>
              <input
                placeholder="Email"
                id="email"
                className="input"
                type="email"
                ref={emailRef}
                required
              />
              <label htmlFor="password">Password:</label>
              <input
                placeholder="Password"
                className="input"
                id="password"
                type="password"
                ref={passwordRef}
                required
              />

              <button disabled={loading} type="submit" className="sigin-btn">
                Submit
              </button>
              <Link className="forget" to="/forgot-password">
                Forgot Password?
              </Link>
              <p className="signup-link">
                {" "}
                Don't have an account? <Link to="/signup">Sign Up</Link>
              </p>
            </div>
          </form>
        </Modal.Body>
      </Modal>
      <div className="container">
        <div className="row">
          <div className="content-column col-lg-6 col-md-12 col-sm-12 order-2">
            <div className="inner-column">
              {/* <div className="sec-title">
              <span className="title">About KitaBook</span>
            </div> */}
              <div className="aboutflex">
                <div>
                  <div className="text">
                    Unleash your voice, discover inspiring voices, and immerse
                    yourself in a passionate community. Join us on an
                    extraordinary journey of self-expression and discovery,
                    where storytelling, learning, and the joy of listening
                    converge.
                  </div>
                  <button className="cssbuttons-io-button" onClick={handleShow}>
                    {" "}
                    Get started
                    <div className="icon">
                      <svg
                        height="24"
                        width="24"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M0 0h24v24H0z" fill="none"></path>
                        <path
                          d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </button>
                </div>
                <img className="aboutpic" src={mainpic} alt />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutus;
