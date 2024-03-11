// import logo from './logo.svg';
// import './App.css';
import Banner from "./Components/Banner";
import SideBar from "./Components/SideBar";
import ActiveMovie from "./Components/ActiveMovie";
import GoldenHour from "./Components/GoldenHour";
// import Winner from "./Components/Winner";
import Quiz from "./Components/Quiz";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div style={{ minWidth: "300px",position:"sticky" ,left:"0",top:"0" }}>
          <SideBar />
        </div>
      <div style={{width:"100%",minHeight:"100vh", overflowY:"scroll"}}>
      <Routes>
          <Route path="/" element={<Banner />} />
          <Route path="/banner" element={<Banner />} />
          <Route path="/movie" element={<ActiveMovie />} />
          {/* <Route path="/winner" element={<Winner />} /> */}
          <Route path="/goldenhour" element={<GoldenHour />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
      </div>
      </div>
    </Router>
  );
}

export default App;
