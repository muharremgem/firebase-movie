import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-800 flex justify-between items-center p-3 text-orange-500">
      <div className="font-bold text-3xl">Movie APP</div>
      <div className="flex gap-5">
        <img
          src="https://cdn-icons-png.flaticon.com/512/295/295128.png"
          width="50px"
          className="rounded-full"
        />
        <ul className="font-bold flex items-center gap-4">
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Logout</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
