import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
import Vans from "./component/Vans";
function App() {
  return (
    <Router>
      <nav className="bg-[#FFF7ED] flex justify-between text-black font-bold py-9 px-2">
        <Link to="/">#VANILLE</Link>
        <div className="flex justify-between gap-4">
          <Link to="/about">About</Link>
          <Link to="/vans">Vans</Link>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/Vans" element={<Vans />} />
      </Routes>
    </Router>
  );
}

export default App;
