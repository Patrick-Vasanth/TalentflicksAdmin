import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";


export default function GoldenForm() {
  const [startdate, setstartdate] = useState(" ");
  const [enddate, setenddate] = useState(" ");
  const [starttime, setstarttime] = useState(" ");
  const [endtime, setendtime] = useState("");
  const [GHactive, setGHactive] = useState(1);

  let startGoldenHr=(e)=>{
    e.preventDefault();
    let goldenHrObj ={
      startdate:startdate,
      enddate:enddate,
      starttime:starttime,
      endtime:endtime,
      GHactive:GHactive,
    }

    console.log(goldenHrObj);
  }

 

  return (
    <div className="formGolden">
      <form className="row g-3" onSubmit={startGoldenHr}>
        <div className="col-md-6">
          <label  className="form-label">
           Start Date
          </label>
         <input type="date" className="form-control" name="startdate" id="startDate" value={startdate} onChange={(e)=>setstartdate(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label  className="form-label">
            End Date
          </label>
          <input type="date" className="form-control" name="enddate" id="startDate" value={enddate} onChange={(e)=>setenddate(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label  className="form-label">
            Start Timer
          </label>
         <input type="time" className="form-control" name="starttime" id="startTime" value={starttime} onChange={(e)=>setstarttime(e.target.value)} />
        </div>
        <div className="col-md-6 bannerUpload">
          <label  className="form-label">
            End Timer
          </label>
          <input type="time" className="form-control" name="endtime" id="endTime" value={endtime} onChange={(e)=>setendtime(e.target.value)} />
        </div>
        <div className="col-md-6">
          <label  className="form-label">
            Golden Active
          </label>
          <select
            className="form-select"
            id="goldHrActive"
            name="GHactive"
            value={GHactive}
            onChange={(e)=>setGHactive(e.target.value)}
            required
          >
            <option value={1}>Active</option>
            <option value={0}>Not Active</option>
            
          </select>
        </div>
       
        <div className="col-12 GHBtn">
          <button className="btn GoldenBtn" type="submit">
            Start Golden
          </button>
        </div>
      </form>
    </div>
  );
}
