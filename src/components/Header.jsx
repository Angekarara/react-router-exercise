import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="bg-[#FFF7ED] flex justify-between text-black font-bold py-9 px-2">
      <Link to="/">#VANILLE</Link>
      <nav className="flex justify-between gap-4">
        <Link to="/host">Host</Link>
        <Link to="/about">About</Link>
        <Link to="/vans">Vans</Link>
      </nav>
    </header>
  );
}

export default Header;
