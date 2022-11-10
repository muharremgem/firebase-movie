import React from "react";

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
        <select className="font-bold rounded-lg bg-orange-500 outline-none  mr-3 text-black">
          <option>Login</option>
          <option>Logout</option>
          <option>Register</option>
        </select>
      </div>
    </nav>
  );
};

export default Navbar;
