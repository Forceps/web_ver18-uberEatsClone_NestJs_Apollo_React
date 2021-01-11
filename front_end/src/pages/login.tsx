import { useMutation } from "@apollo/client";
import React from "react";
import { useForm } from "react-hook-form";
import { FormError } from "../Components/form-error";
import {
  loginMutation,
  loginMutationVariables,
} from "../GlobalLib/Apollo/ApolloTypes/loginMutation";
import { LOGIN_MUTATION } from "../GlobalLib/Apollo/GraphQL_Client/User/UserCUD";
import numberLogo from "../GlobalLib/Assets/Images/uber-eats-logo-1a01872c77.svg";

interface ILoginForm {
  email: string;
  password: string;
}
const Login = () => {
  const {
    register,
    getValues,
    errors,
    handleSubmit,
    formState,
  } = useForm<ILoginForm>();
  const [loginMutation, { data: loginMutationResult, loading }] = useMutation<
    loginMutation,
    loginMutationVariables
  >(LOGIN_MUTATION, {
    onCompleted: (data: loginMutation) => {
      const {
        login: { ok, error, token },
      } = data;
      if (ok) {
        console.log(token);
      }
    },
  });
  const onSubmit = () => {
    if (!loading) {
      const { email, password } = getValues();
      loginMutation({ variables: { loginInput: { email, password } } });
    }
  };
  return (
    <div className="h-screen flex items-center flex-col mt-10 lg:mt-28">
      <div className="w-full max-w-screen-sm flex flex-col px-5 items-center">
        <img alt="logo" src={numberLogo} className="w-52 mb-5" />
        <h4 className="w-full font-medium text-left text-3xl mb-10">
          Welcome back
        </h4>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="grid gap-3 mt-5 w-full"
        >
          <input
            ref={register({ required: "Email is required" })}
            name="email"
            required
            type="email"
            placeholder="Email"
            className="input"
          />
          {errors.email?.message && (
            <FormError errorMessage={errors.email?.message} />
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
            <FormError errorMessage={errors.password?.message} />
          )}
          {errors.password?.type === "minLength" && (
            <FormError errorMessage="Password must be more than 7 chars." />
          )}
          <button className={`btn ${!formState.isValid ? "bg-gray-300" : ""}`}>
            {loading ? "Loading..." : "Log In"}
          </button>
          {loginMutationResult?.login.error && (
            <FormError errorMessage={loginMutationResult.login.error} />
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;
