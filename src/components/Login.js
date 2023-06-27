import { React, useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useNavigate, useLocation } from "react-router-dom";

export default function Login() {
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
      navigate(redirectPath);
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <>
    <div className="d-flex align-items-center  justify-content-center mt-5">
    <form className="formlogin plogin"   onSubmit={handleSubmit}>
   
    <div className="header">Sign In</div>
    <div className="inputs">
         {error && <Alert variant="danger">{error}</Alert>}
         <label htmlFor="email">Email:</label>
        <input placeholder="Email" id="email" className="input" type="email"  ref={emailRef} required />
        <label htmlFor="password">Password:</label>
        <input placeholder="Password" className="input" id="password"
                type="password"
                ref={passwordRef}
                required/>
   
    <button disabled={loading} type="submit" className="sigin-btn">Submit</button>
    <Link className="forget" to="/forgot-password">Forgot Password?</Link>
    <p className="signup-link">  Don't have an account? <Link to="/signup">Sign Up</Link></p>
    </div>
    </form>
    </div>
    </>
  );
}
