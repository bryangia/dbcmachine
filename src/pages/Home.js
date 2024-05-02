import "./Home.css";
import logo from "../images/DBC.png";
import React, { useState } from "react";
import { images } from "../images/equipment/equipment";
import { Button } from "@mui/material";

const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
    console.log(currentIndex)
  };

  const handlePrevious = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    console.log(currentIndex)
  };

  return (
    <div className="gallery" style={{ display: "flex" }}>
      <Button onClick={handlePrevious}>{"<"}</Button>
      <img className="galleryImg" src={images[currentIndex].imageSrc} />
      <Button onClick={handleNext}>{">"}</Button>
    </div>
  );
};

export const HomeContent = () => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <div style={{ flex: 1 }}>
          <p className="HomeText">DBC Machine INC</p>
          <p className="HomeText">6040 Brittmore Rd Suite H</p>
          <p className="HomeText">Houston TX, 77041</p>
          <p className="HomeText">713-307-2235</p>
          <p className="HomeText">dbcmachine@gmail.com</p>
          <p style={{paddingTop: '80px'}}/>
          <p className="HomeText">ISO 9001:2015</p>
          <p className="HomeText">CNC Machining</p>
          <p className="HomeText">CNC Milling</p>
          <p className="HomeText">CAD Drawing/Design</p>

        </div>
        <div className="logoContainer">
          <img className="CompanyLogo" src={logo}></img>
        </div>
      </div>
      <div className='galleryContainer' style={{display: "flex", justifyContent: "center" }}>
        <Gallery />
      </div>
    </>
  );
};
