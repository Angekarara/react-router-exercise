import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./component/Home";
import About from "./component/About";
function App() {
  return (
    <Router>
      <nav className="bg-[#FFF7ED] flex justify-between text-black font-bold py-9 px-2">
        <Link to="/">#VANILLE</Link>
        <Link to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;
