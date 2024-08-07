import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Layout() {
  return (
    <div className="bg-[#FFF7ED] flex flex-col min-h-screen">
      <Header />
      <main>
        <Outlet />
      </main>

      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}

export default Layout;
