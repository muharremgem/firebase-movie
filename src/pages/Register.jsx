import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { register } from "../auth/firebase";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    register(email, password, navigate);
    console.log(firstName, lastName);
  };
  return (
    <div className="bggrandiant flex justify-center items-center  ">
      <form onSubmit={handleSubmit} className="bgcontainer flex flex-col gap-5">
        <img
          className="flex mx-auto w-[8rem] lg-hidden"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ec0daff-b6c6-4327-8a5f-1c50edd6c903/d4ff6mo-ca2adf52-cb24-4d55-86c8-27ba89efcda1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllYzBkYWZmLWI2YzYtNDMyNy04YTVmLTFjNTBlZGQ2YzkwM1wvZDRmZjZtby1jYTJhZGY1Mi1jYjI0LTRkNTUtODZjOC0yN2JhODllZmNkYTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Rt0xeLv8CNR6UtGvJLSgjhvWS_IuzNb7MNvMZ9dblA0"
          alt=""
        />
        <input
          className="rounded-md bg-blue-700 p-4 text-white"
          placeholder="First Name"
          type="text"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          className="rounded-md bg-blue-700 p-4 text-white"
          placeholder="Last Name"
          type="text"
          required
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          className="rounded-md bg-blue-700 p-4 text-white"
          placeholder="Type your email"
          type="text"
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="rounded-md bg-blue-700 p-4 text-white"
          placeholder="Type your password"
          type="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className=" bg-blue-600 rounded-lg p-2 w-[9rem] m-auto text-yellow-500 font-bold hover:scale-95">
          Login
        </button>
        <button className="mx-auto hover:scale-95" type="button">
          <FcGoogle className="text-4xl" />
        </button>
      </form>
    </div>
  );
};

export default Register;
