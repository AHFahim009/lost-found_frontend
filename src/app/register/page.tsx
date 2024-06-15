"use client";

import UseForm from "@/components/useForm/UseForm";
import UseInput from "@/components/useForm/UseInput";
import UsePasswordField from "@/components/useForm/UsePasswordField";
import { userLoginApi } from "@/services/actions/userLogin.api";
import { userRegisterApi } from "@/services/actions/userRegister.api";
import { storedUserInfo } from "@/services/auth.services";
import { globalResponse } from "@/types/globalType/global.type";
import {
  TAuthRes,
  TUserRegisteredRes,
} from "@/types/responseType/response.type";

import { Box, Button, Grid, Typography, Paper, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { BeatLoader, DotLoader } from "react-spinners";
import { toast } from "sonner";

const RegisterPage = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (data: FieldValues) => {
    setLoading(true);
    if (data.password !== data.confirmPassword) {
      setLoading(false);
      return alert("password does not match");
    }
    const { confirmPassword, ...payload } = data;

    try {
      const registeredRes = (await userRegisterApi(
        payload
      )) as globalResponse<TUserRegisteredRes>;
      console.log(registeredRes);

      if (registeredRes.data.id) {
        // user is registered
        toast.success("User registered successfully...");
        // login from here
        const loginRes = (await userLoginApi({
          email: payload.email,
          password: payload.password,
        })) as globalResponse<TAuthRes>;
        // if access token has store in local storage


        if (loginRes.data.accessToken) {
          // store in local storage
          storedUserInfo({ accessToken: loginRes.data.accessToken });
          // push in home page
          router.push("/");
        }
      }
    } catch (error) {
      console.log("register page internal problem", error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          maxWidth: "500px",
          padding: "1rem 2rem",
        }}
      >
        <UseForm onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} marginTop="5px">
              <Typography variant="h6" textAlign="center">
                Register Form
              </Typography>
            </Grid>
            <Grid xs={12} md={12} item>
              <UseInput
                name="name"
                type="text"
                placeholder="write your name"
                size="small"
                required={true}
              />
            </Grid>
            <Grid xs={12} md={12} item>
              <UseInput
                name="email"
                type="text"
                placeholder="write your email"
                size="small"
                required={true}
              />
            </Grid>
            <Grid xs={12} md={6} item>
              <UsePasswordField
                name="password"
                type="password"
                placeholder="password"
                size="small"
                required={true}
              />
            </Grid>
            <Grid xs={12} md={6} item>
              <UsePasswordField
                name="confirmPassword"
                type="password"
                placeholder="confirm password"
                size="small"
                required={true}
              />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" textAlign="center">
                Profile Section (option)
              </Typography>
            </Grid>

            <Grid xs={6} md={12} item>
              <UseInput
                name="profile.bio"
                type="text"
                placeholder="bio"
                size="small"
              />
            </Grid>
            <Grid xs={6} md={12} item>
              <UseInput
                name="profile.age"
                type="number"
                placeholder="age"
                size="small"
              />
            </Grid>
            <Grid xs={6} md={12} item>
              <UseInput
                name="profile.photo"
                type="text"
                placeholder="give your photo"
                size="small"
              />
            </Grid>
            <Grid sm={12}>
              <Link href="/login">
                <small style={{ display: 'flex', justifyContent: "flex-end", marginTop: "2px" }}>login</small>

              </Link>
            </Grid>
            <Grid xs={12} item>
              {loading ? (
                <Stack
                  direction="row"
                  gap={1}
                  justifyContent="center"
                  alignItems="center"
                >
                  <Typography component="p">Creating</Typography>
                  <BeatLoader color="#36d7b7" />
                </Stack>
              ) : (
                <Button type="submit" fullWidth={true}>
                  Submit
                </Button>
              )}
            </Grid>
          </Grid>
        </UseForm>
      </Paper>
    </Box>
  );
};
export default RegisterPage;
