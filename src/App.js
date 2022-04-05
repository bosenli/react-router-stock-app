import "./App.css";
import Home from "./components/Home";
import Search from "./components/Search";
import NoMatch from "./components/NoMatch";
import Detail from "./components/Detail";
import { NavLink, Route, Routes } from "react-router-dom";

//npm i axios react-router-dom routers
function App() {
  return (
    <div className="App">
      <nav className="navigation">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/search"}>Search</NavLink>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search/:symbol" element={<Detail />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
