import React from "react";
import { Grid } from "@mui/material";
import LoginForm from "./common/LoginForm";

const Login = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <nav className=" login-header-style">
          <h3>Login</h3>
        </nav>
      </Grid>
      <Grid align="center" item xs={12}>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;