import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function MovieForm() {
  const [moviename, setmoviename] = useState(" ");
  const [moviedesc, setmoviedesc] = useState(" ");
  const [movietime, setmovietime] = useState(" ");
  const [movdirector, setmovdirector] = useState("");
  const [moviecast, setmoviecast] = useState("");
  const [moviegenre, setmoviegenre] = useState("");
  const [movielanguage, setmovielanguage] = useState("");
  const [movieurl, setmovieurl] = useState("");
  const [moviestatus, setmoviestatus] = useState(1);

  let uploadMovie = (e) => {
    e.preventDefault();
    let movieObj = {
      moviename: moviename,
      moviedesc: moviedesc,
      movietime: movietime,
      movdirector: movdirector,
      moviecast: moviecast,
      moviegenre: moviegenre,
      movielanguage: movielanguage,
      movieurl: movieurl,
      moviestatus: moviestatus,
    };
    console.log(movieObj);
  };

  return (
    <div className="formMovie">
      <form className="row g-3" onSubmit={uploadMovie}>
        <div className="col-md-4">
          <label className="form-label">Movie Name</label>
          <input
            type="text"
            className="form-control"
            id="movieTitle"
            name="moviename"
            value={moviename}
            onChange={(e) => setmoviename(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-4">
          <label className="form-label">Movie Description</label>
          <input
            type="text"
            className="form-control"
            id="movieDesc"
            name="moviedesc"
            value={moviedesc}
            onChange={(e) => setmoviedesc(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-4">
          <label className="form-label">Movie Time</label>
          <input
            type="text"
            className="form-control"
            id="movieTime"
            name="movietime"
            required
            value={movietime}
            onChange={(e) => setmovietime(e.target.value)}
          ></input>
        </div>
        <div className="col-md-4">
          <label className="form-label">Movie Active</label>
          <select
            className="form-select"
            id="movieActive"
            name="moviestatus"
            value={moviestatus}
            onChange={(e) => setmoviestatus(e.target.value)}
            required
          >
            <option value={1}>Active</option>
            <option value={0}>Not Active</option>
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label">Movie Director</label>
          <input
            type="text"
            className="form-control"
            id="movieDirector"
            name="movdirector"
            value={movdirector}
            onChange={(e) => setmovdirector(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-4 bannerUpload">
          <label className="form-label">Movie Cast</label>
          <input
            type="text"
            className="form-control"
            id="movieCast"
            name="moviecast"
            value={moviecast}
            onChange={(e) => setmoviecast(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-4 ">
          <label className="form-label">Movie Genre</label>
          <input
            type="text"
            className="form-control"
            id="movieGenre"
            name="moviegenre"
            value={moviegenre}
            onChange={(e) => setmoviegenre(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-4 ">
          <label className="form-label">Movie Language</label>
          <input
            type="text"
            className="form-control"
            id="movieLanguage"
            name="movielanguage"
            value={movielanguage}
            onChange={(e) => setmovielanguage(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-md-4 ">
          <label className="form-label">Movie URL</label>
          <input
            type="url"
            className="form-control"
            id="movieUrl"
            name="movieurl"
            value={movieurl}
            onChange={(e) => setmovieurl(e.target.value)}
            required
          ></input>
        </div>
        <div className="col-12 movBtn">
          <button className="btn movieBtn" type="submit">
            Upload Movie
          </button>
        </div>
      </form>
    </div>
  );
}
