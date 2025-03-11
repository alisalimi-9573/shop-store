import { TextField } from "@mui/material";
import Button from "@/components/button/Button";
import Nvabar from "@/components/nav/Nvabar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import { useRouter } from "next/router";
import { useState } from "react";

const schema = yup.object().shape({
  username: yup.string().required("User name is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const router = useRouter();
  const [formError, setFormError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // const onSubmit = async (data) => {
  //   console.log("login data:", data);
  //   try {
  //     const loginData = await loginUser(data);

  //     if (loginData && loginData.token) {
  //       localStorage.setItem("authToken", loginData.token);
  //       console.log("Token received:", loginData.token);

  //       router.push("/");
  //     } else {
  //       setFormError("Invalid username or password");
  //     }
  //   } catch (error) {
  //     console.log("Login error:", error);
  //     setFormError("Login failed. Please try again.");
  //   }
  // };

  const onSubmit = async (data) => {
    console.log("login data :", data);
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      if (user.username === data.username && user.password === data.password) {
        router.push("./");
      } else {
        alert("username or pasword wrong");
      }
    } catch (error) {
      console.log(error.messaage);
    }
  };

  return (
    <>
      <Nvabar />
      <BreadCrumbs />
      <section className="form_field">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h2>Log In To Exclusive</h2>
          </div>

          <TextField
            InputLabelProps={{ style: { fontSize: 14 } }}
            id="username"
            label="User Name"
            variant="standard"
            {...register("username")}
            error={!!errors.username || !!formError}
            helperText={errors.username?.message}
          />

          <TextField
            InputLabelProps={{ style: { fontSize: 14 } }}
            id="password"
            label="Password"
            type="password"
            autoComplete="current-password"
            variant="standard"
            {...register("password")}
            error={!!errors.password || !!formError}
            helperText={errors.password?.message}
          />

          {formError && (
            <div style={{ color: "red", marginTop: "10px", fontSize: "14px" }}>
              {formError}
            </div>
          )}

          <div className="form_footer">
            <Button type="submit" btnText="LogIn" />
            <a href="#">Forget Password?</a>
          </div>
        </form>
      </section>
    </>
  );
}
