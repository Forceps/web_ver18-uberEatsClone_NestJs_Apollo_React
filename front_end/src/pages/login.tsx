import React from "react";
import { useForm } from "react-hook-form";

const Login = () => {
  const { register, getValues, errors } = useForm();
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
        <h3 className="text-3xl text-gray-800">Log In</h3>
        <form className="flex flex-col mt-5 px-5">
          <input placeholder="Email" className="input mb-3" />
          <input placeholder="Password" className="input" />
          <button className="btn mt-3">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
