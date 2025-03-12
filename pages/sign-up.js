import React, { useContext } from "react";
import Nvabar from "@/components/nav/Nvabar";
import Button from "@/components/button/Button";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import Link from "next/link";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/router";
import { userContext } from "../contexts/UserContext";

const schema = yup.object().shape({
  username: yup.string().required("userName is required"),
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function SignUp() {
  const { signUp } = useContext(userContext);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    signUp({
      id: Date.now(),
      userName: data.username,
      email: data.email,
      password: data.password,
    });
    router.push("./login");
    console.log("User sign up data:", data);
  };

  return (
    <>
      <Nvabar />
      <BreadCrumbs />
      <form className="sign-up-form" onSubmit={handleSubmit(onSubmit)}>
        <div>
          <h2>Create Your Account</h2>
        </div>

        <TextField
          InputLabelProps={{ style: { fontSize: 14 } }}
          id="username"
          label="User Name"
          variant="standard"
          {...register("username")}
          error={!!errors.username}
          helperText={errors.username?.message}
        />

        <TextField
          InputLabelProps={{ style: { fontSize: 14 } }}
          id="email"
          label="Email"
          variant="standard"
          {...register("email")}
          error={!!errors.email}
          helperText={errors.email?.message}
        />

        <TextField
          InputLabelProps={{ style: { fontSize: 14 } }}
          id="password"
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="standard"
          {...register("password")}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <Button width="width" btnText="Create Account" type="submit" />

        <div>
          <p>
            Already have an account?
            <Link className="link" href="./login">
              Log In
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}
