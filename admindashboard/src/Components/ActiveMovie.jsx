import React from "react";
import "./Assest/Movie.css";
import MovieForm from "./MovieForm";
import MovieList from "./MovieList";


export default function ActiveMovie() {
  return (
    <div className="mainMovie">
      <h1 className="movieHeading">Movie Upload</h1>
      <div className="movieCard">
        <MovieForm></MovieForm>
        <MovieList></MovieList>
      </div>
    </div>
  );
}
