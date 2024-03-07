import React from "react";
import "./Assest/SideBar.css";
import LogoDev from "./Assest/logo.svg";
import { NavLink } from "react-router-dom";
import AddPhotoAlternateOutlinedIcon from "@mui/icons-material/AddPhotoAlternateOutlined";
import MovieFilterOutlinedIcon from "@mui/icons-material/MovieFilterOutlined";
import EmojiEventsOutlinedIcon from "@mui/icons-material/EmojiEventsOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
import QuizOutlinedIcon from "@mui/icons-material/QuizOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import Button from "@mui/material/Button";
export default function SideBar() {
  return (
    <div className="sideMain">
      <div className="logo">
        <img src={LogoDev} alt="logo" />
      </div>
      <div className="menuBar">
        <ul className="sidebarList">
          <li>
            <NavLink to="/banner" className="sideList">
              <AddPhotoAlternateOutlinedIcon
                className="iconSize"
                activeClassName="active"
              />
              Banner
            </NavLink>
          </li>
          <li>
            <NavLink to="/movie" className="sideList">
              <MovieFilterOutlinedIcon
                className="iconSize"
                activeClassName="active"
              />
              Active Movie
            </NavLink>
          </li>
          <li>
            <NavLink to="/winner" className="sideList">
              <EmojiEventsOutlinedIcon
                className="iconSize"
                activeClassName="active"
              />
              Winners
            </NavLink>
          </li>
          <li>
            <NavLink to="/goldenhour" className="sideList">
              <QueryBuilderOutlinedIcon
                className="iconSize"
                activeClassName="active"
              />
              Golden Hour
            </NavLink>
          </li>
          <li>
            <NavLink to="/quiz" className="sideList">
              <QuizOutlinedIcon className="iconSize" activeClassName="active" />
              Quiz
            </NavLink>
          </li>
        </ul>
        <div className="logOutBtn">
          <Button startIcon={<LogoutOutlinedIcon className="iconSize" />}>
            Logout
          </Button>
        </div>
      </div>
    </div>
  );
}
