import React from "react";
import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import RequireAuth from "./context/RequireAuth";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Sign_up";
import ForgotPassword from "./components/ForgotPassword";
import UpdateProfile from "./components/UpdateProfile";
import Mainpage from "./components/Mainpage";
import Uploadfile from "./components/Uploadfile";
import Home from './screens/home/index'

const App = () => {
 
  return (
    <Container className="d-flex  " style={{ minHeight: "100vh" }}>
      {/* align-items-center  justify-content-center*/}
      <div className="w-100">
        {/* //style={{ maxWidth: "400px" }} */}
        {/* <BrowserRouter> */}
          <AuthProvider>
            <Routes>
              <Route
                path="/"
                element={
                  <RequireAuth>
                    <Dashboard />
                  </RequireAuth>
                }
              />
              <Route path="/update-profile" element={<UpdateProfile />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/mainpage" element={<Mainpage />} />
              <Route path="/uploadfile" element={<Uploadfile />} />
              <Route path="/Home" element={<Home />} />
              
            </Routes>
          </AuthProvider>
        {/* </BrowserRouter> */}
        {/* <Home/> */}
      </div>
    </Container>
  );
};

export default App;
