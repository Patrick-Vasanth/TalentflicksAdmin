import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function BannerForm() {
  const [bannertitle, setbannertitle] = useState("");
  const [bannerdesc, setbannerdesc] = useState("");
  const [banneralt, setbanneralt] = useState("");
  const [banneractive, setbanneractive] = useState(1);
  const [bannerimage, setbannerimage] = useState("");

  const clearFiled = () => {
    setbanneractive(1);
    setbanneralt("");
    setbannerdesc("");
    setbannerimage("");
    setbannertitle("");
  };

  let uploadBanner = (e) => {
    e.preventDefault();

    let bannerObj = {
      BANNER_TITLE: bannertitle,
      BANNER_DESC: bannerdesc,
      BANNER_IMAGE_ALT: banneralt,
      BANNER_IS_ACTIVE: banneractive,
      BANNER_IMAGE_NAME: bannerimage,
    };

    try {
      const response = axios.post(
        "http://127.0.0.1:8000/api/home/banners",
        bannerObj
      );
      toast.success("🦄 Banner Uploaded", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      clearFiled();
    } catch (error) {
      console.log(error);
      toast.error("🦄 Banner Not Uploaded", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        draggable: true,
        progress: undefined,
        theme: "danger",
      });
    }
  };

  // let bannerChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();

  //   reader.onloadend = () => {
  //     setbannerimage(reader.result);
  //   };

  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };

  return (
    <div className="formBanner">
      <form className="row g-3" onSubmit={uploadBanner}>
        <div className="col-md-6">
          <label className="form-label">Banner Title</label>
          <input
            type="text"
            className="form-control"
            id="bannerTitle"
            name="bannertitle"
            value={bannertitle}
            onChange={(e) => setbannertitle(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Banner Description</label>
          <input
            type="text"
            className="form-control"
            id="bannerDesc"
            name="bannerdesc"
            value={bannerdesc}
            onChange={(e) => setbannerdesc(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Banner Alternative</label>
          <input
            type="text"
            className="form-control"
            id="bannerAlt"
            name="banneralt"
            value={banneralt}
            onChange={(e) => setbanneralt(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Banner Active</label>
          <select
            className="form-select"
            id="bannerActive"
            name="banneractive"
            value={banneractive}
            onChange={(e) => setbanneractive(e.target.value)}
            required
          >
            <option value={1}>Active</option>
            <option value={0}>Not Active</option>
          </select>
        </div>
        <div className="col-md-12 bannerUpload">
          <label className="form-label">Choose Banner</label>
          <input
            type="file"
            className="form-control"
            id="bannerImage"
            name="bannerimg"
            value={bannerimage}
            accept="image/*"
            // onChange={bannerChange}
            onChange={(e) => setbannerimage(e.target.value)}
            // required
          ></input>
        </div>
        <div className="col-12 banBtn">
          <button className="btn bannerBtn" type="submit">
            Upload Banner
          </button>
        </div>
      </form>
      <div>
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        />
        <ToastContainer
          position="top-right"
          autoClose={2000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          theme="light"
        />
      </div>
    </div>
  );
}
