import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";

const theme = createTheme();

export default function LoginForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <h2>Aatif Ali</h2>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <Grid item xs={false} sm={4} md={7} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ mt: 1 }}
            >
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
                style={{
                  borderRadius: 10,
                  border: "none",
                }}
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
                  <Link
                    href="RegisterForm"
                    variant="body2"
                    style={{
                      textAlign: "center",
                      marginLeft: 3,
                    }}
                  >
                    Create a New Account
                  </Link>
                  <Link to="/RegisterForm">Create a New Account</Link>
                </Button>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
