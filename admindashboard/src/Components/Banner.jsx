import React from "react";
import "./Assest/Banner.css";
import BannerForm from "./BannerForm";
import BannerList from "./BannerList";

export default function Banner() {
  return (
    <div className="mainBanner">
      <h1 className="bannerHeading">Banner Upload</h1>
      <div className="bannerCard">
        <BannerForm />
       <BannerList/>
      </div>
    </div>
  );
}
