import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

export default function MovieForm() {
  const [moviename, setmoviename] = useState("");
  const [moviedesc, setmoviedesc] = useState("");
  const [movietime, setmovietime] = useState("");
  const [movdirector, setmovdirector] = useState("");
  const [moviecast, setmoviecast] = useState("");
  const [moviegenre, setmoviegenre] = useState("");
  const [movielanguage, setmovielanguage] = useState("");
  const [movieurl, setmovieurl] = useState("");
  const [moviestatus, setmoviestatus] = useState(1);
  const [moviebanner, setmoviebanner] = useState("");
  const [movieposter, setmovieposter] = useState("");
  const message = document.getElementById("message");

  const clearFiled = () => {
    setmoviestatus(1);
    setmovdirector("");
    setmoviebanner("");
    setmoviecast("");
    setmoviedesc("");
    setmoviegenre("");
    setmovielanguage("");
    setmovieposter("");
    setmovietime("");
    setmoviename("");
    setmovieurl("");
  };

  let uploadMovie = async (e) => {
    e.preventDefault();
    let movieObj = {
      MOVIE_NAME: moviename,
      MOVIE_DESCRIPTION: moviedesc,
      MOVIE_RUNTIME: movietime,
      MOVIE_DIRECTOR_NAME: movdirector,
      MOVIE_STAR_CAST: moviecast,
      MOVIE_GENRE: moviegenre,
      MOVIE_LANGUAGE: movielanguage,
      MOVIE_URL_LINK: movieurl,
      MOVIE_STATUS: moviestatus,
      MOVIE_BANNER: moviebanner,
      MOVIE_POSTER: movieposter,
    };

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/home/movielist",
        movieObj
      );
      message.innerText = "Movie Uploaded";
      message.style.color = "green";
      message.style.textAlign = "center";
      message.style.fontSize = "20px";
      clearFiled();
      console.log("success");
    } catch (error) {
      console.log(error);
      message.innerText = "Movie Not Uploaded";
      message.style.color = "green";
      message.style.textAlign = "center";
      message.style.fontSize = "20px";
    }
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
            value={movietime}
            onChange={(e) => setmovietime(e.target.value)}
            required
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
        <div className="col-md-4">
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
            type="number"
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
            type="number"
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
        <div className="col-md-6">
          <label className="form-label">Choose Banner</label>
          <input
            type="file"
            className="form-control"
            id="movieBanner"
            name="moviebanner"
            value={moviebanner}
            accept="image/*"
            // onChange={bannerChange}
            onChange={(e) => setmoviebanner(e.target.value)}
            // required
          ></input>
        </div>
        <div className="col-md-6">
          <label className="form-label">Choose Poster</label>
          <input
            type="file"
            className="form-control"
            id="moviePoster"
            name="movieposter"
            value={movieposter}
            accept="image/*"
            // onChange={bannerChange}
            onChange={(e) => setmovieposter(e.target.value)}
            // required
          ></input>
        </div>
        <div id="message"></div>
        <div className="col-12 movBtn">
          <button className="btn movieBtn" type="submit">
            Upload Movie
          </button>
        </div>
      </form>
    </div>
  );
}
