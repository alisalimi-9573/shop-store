import { TextField } from "@mui/material";
import Button from "@/components/button/Button";
import { useContext } from "react";
import Nvabar from "@/components/nav/Nvabar";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import BreadCrumbs from "@/components/breadCrumbs/BreadCrumbs";
import { useRouter } from "next/router";
import { useState } from "react";
import { userContext } from "../contexts/UserContext/UserContext";
import Link from "next/link";

const schema = yup.object().shape({
  username: yup.string().required("User name is required"),
  password: yup.string().required("Password is required"),
});

export default function Login() {
  const router = useRouter();
  const [formError, setFormError] = useState("");
  const { state, login } = useContext(userContext);
  console.log(" reducer state in login component", state.userData);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    const user = state.userData.find(
      (user) =>
        user.userName === data.username && user.password === data.password
    );

    console.log("user finded", user);

    if (user) {
      login(user);
      router.push("./");
    } else {
      setFormError("Invalid username or password");
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
            <Link href={"./sign-up"}>Create Account</Link>
          </div>
        </form>
      </section>
    </>
  );
}
