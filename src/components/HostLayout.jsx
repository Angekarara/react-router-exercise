import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function HostLayout() {
  return (
    <>
      <nav className="flex ml-16 gap-52 text-[#4D4D4D] font-semibold">
        <Link to="/host">Dashboard</Link>
        <Link to="/host/income">Income</Link>
        <Link to="/host/reviews">Reviews</Link>
      </nav>
      <Outlet />
    </>
  );
}

export default HostLayout;
