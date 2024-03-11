import React from "react";
import "./Assest/GoldenHour.css"
import GoldHrForm from"./GoldHrForm";

export default function GoldenHour() {
  return <div className="mainGolden">
  <h1 className="goldenHeading">Golden Hours</h1>
  <div className="goldenCard">
    <GoldHrForm />
  </div>
</div>;
}
