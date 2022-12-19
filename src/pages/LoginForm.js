import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
// import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { NavLink } from "react-router-dom";

const theme = createTheme();

export default function LoginForm() {
  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   console.log({
  //     email: data.get("email"),
  //     password: data.get("password"),
  //   });
  // };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 400, paddingTop: 100 }}>
        <Grid container component="main">
          <Grid item />
          <Grid item>
            <Box>
              <Box>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  className="email"
                />

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  style={{
                    marginBottom: 20,
                    marginTop: 30,
                    borderRadius: 10,
                    backgroundColor: "#4646db",
                    padding: "18px 36px",
                    fontSize: "18px",
                  }}
                >
                  Log In
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link
                      href="#"
                      variant="body2"
                      style={{
                        textAlign: "center",
                        marginLeft: 3,
                      }}
                    >
                      Forgot password?
                    </Link>
                  </Grid>
                  <Button
                    type="submit"
                    fullWidth
                    variant="alert-success"
                    style={{
                      marginBottom: 20,
                      marginTop: 30,
                      borderRadius: 10,
                      backgroundColor: "#0d9b14",
                      padding: "18px 36px",
                      fontSize: "18px",
                      color: "#ffffff",
                    }}
                  >
                    <NavLink to="/RegisterForm">Create a New Account</NavLink>
                  </Button>
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </div>
    </ThemeProvider>
  );
}
