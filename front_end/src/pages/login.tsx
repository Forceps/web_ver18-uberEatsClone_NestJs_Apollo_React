import React from "react";
import { useForm } from "react-hook-form";

interface ILoginForm {
  email?: string;
  password?: string;
}
const Login = () => {
  const { register, getValues, errors, handleSubmit } = useForm<ILoginForm>();
  const onSubmit = () => {};
  return (
    <div className="h-screen flex items-center justify-center bg-gray-800">
      <div className="bg-white w-full max-w-lg pt-10 pb-7 rounded-lg text-center">
        <h3 className="text-3xl text-gray-800">Log In</h3>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-5 px-5"
        >
          <input
            ref={register({ required: "Email is required" })}
            name="eamil"
            required
            type="eamil"
            placeholder="Email"
            className="input"
          />
          {errors.email?.message && (
            <span className="font-medium text-red-500">
              {errors.email?.message}
            </span>
          )}
          <input
            ref={register({ required: "Password is required", minLength: 7 })}
            name="password"
            required
            type="password"
            placeholder="Password"
            className="input"
          />
          {errors.password?.message && (
            <span className="font-medium text-red-500">
              {errors.password?.message}
            </span>
          )}
          {errors.password?.type === "minLength" && (
            <span className="font-medium text-red-500">
              Password must be more than 7 chars.
            </span>
          )}
          <button className="btn mt-3">Log In</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
