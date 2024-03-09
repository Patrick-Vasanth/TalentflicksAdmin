import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function BannerForm() {
  const [bannertitle, setbannertitle] = useState(" ");
  const [bannerdesc, setbannerdesc] = useState(" ");
  const [banneralt, setbanneralt] = useState(" ");
  const [banneractive, setbanneractive] = useState(1);
  const [bannerimage, setbannerimage] = useState(null);

  let uploadBanner=(e)=>{
    e.preventDefault();
    let bannerObj ={
      bannertitle:bannertitle,
      bannerdesc:bannerdesc,
      banneralt:banneralt,
      banneractive:banneractive,
      bannerimage:bannerimage,
    }

    console.log(bannerObj);
  }

  return (
    <div className="formBanner">
      <form className="row g-3" onSubmit={uploadBanner}>
        <div className="col-md-6">
          <label  className="form-label">
            Banner Title
          </label>
          <input
            type="text"
            className="form-control"
            id="bannerTitle"
            name="bannertitle"
            value={bannertitle}
            onChange={(e)=>setbannertitle(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label  className="form-label">
            Banner Description
          </label>
          <input
            type="text"
            className="form-control"
            id="bannerDesc"
            name="bannerdesc"
            value={bannerdesc}
            onChange={(e)=>setbannerdesc(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-6">
          <label  className="form-label">
            Banner Alternative
          </label>
          <input
            type="text"
            className="form-control"
            id="bannerAlt"
            name="banneralt"
            required
            value={banneralt}
            onChange={(e)=>setbanneralt(e.target.value)}
          ></input>
        </div>
        <div className="col-md-6">
          <label  className="form-label">
            Banner Active
          </label>
          <select
            className="form-select"
            id="bannerActive"
            name="banneractive"
            value={banneractive}
            onChange={(e)=>setbanneractive(e.target.value)}
            required
          >
            <option value={1}>Active</option>
            <option value={0}>Not Active</option>
            
          </select>
        </div>
        <div className="col-md-6 bannerUpload">
          <label  className="form-label">
            Choose Banner
          </label>
          <input
            type="file"
            className="form-control"
            id="bannerImage"
            name="bannerimg"
            value={bannerimage}
            onChange={(e)=>setbannerimage(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-12 banBtn">
          <button className="btn bannerBtn" type="submit">
            Upload Banner
          </button>
        </div>
      </form>
    </div>
  );
}
