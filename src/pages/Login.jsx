import React from "react";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  return (
    <div className="bggrandiant flex justify-center items-center">
      <form className="bgcontainer flex flex-col gap-5">
        <img
          className="flex m-auto w-[8rem]"
          src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/9ec0daff-b6c6-4327-8a5f-1c50edd6c903/d4ff6mo-ca2adf52-cb24-4d55-86c8-27ba89efcda1.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzllYzBkYWZmLWI2YzYtNDMyNy04YTVmLTFjNTBlZGQ2YzkwM1wvZDRmZjZtby1jYTJhZGY1Mi1jYjI0LTRkNTUtODZjOC0yN2JhODllZmNkYTEucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.Rt0xeLv8CNR6UtGvJLSgjhvWS_IuzNb7MNvMZ9dblA0"
          alt=""
        />
        <input
          className="rounded-md bg-blue-700 p-3 text-white"
          placeholder="Type your email"
          type="text"
          required
        />
        <input
          className="rounded-md bg-blue-700 p-3 text-white"
          placeholder="Type your password"
          type="password"
          required
        />
        <button className=" bg-blue-600 rounded-lg p-2 w-[6rem] m-auto text-yellow-500 font-bold hover:scale-95">
          Login
        </button>
        <button className="mx-auto hover:scale-95" type="button">
          <FcGoogle className="text-4xl" />
        </button>
      </form>
    </div>
  );
};

export default Login;
