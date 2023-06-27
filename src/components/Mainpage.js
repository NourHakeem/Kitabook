import React from "react";
import Topnav from "./Topnav";
import Hcards from "./Hcards";
import "../App.css";

import Footer from "./Footer";
import GoogleFonts, { GoogleFontsProps } from "react-google-fonts";
// import ControlledCarousel from "./ImageSlider";
import Aboutus from "./Aboutus";
// import Slogan from "./Slogan";

const   Mainpage = () => {
  return (
    <>
      <div className="mainpagecontainer">
        <Topnav />
        <GoogleFonts font="sans-serif">
          <h1 style={{ fontFamily: "sans-serif" }}>
            {" "}
            Unleash imagination through listening!{" "}
          </h1>
        </GoogleFonts>

        <div className="middlehomecontainer">
          <Aboutus />

          <Hcards />
          {/* <Slogan/> */}
          {/* <ControlledCarousel  /> */}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Mainpage;
