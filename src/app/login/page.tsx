"use client";

import UseForm from "@/components/useForm/UseForm";
import UseInput from "@/components/useForm/UseInput";
import UsePasswordField from "@/components/useForm/UsePasswordField";
import { userLoginApi } from "@/services/actions/userLogin.api";
import { storedUserInfo } from "@/services/auth.services";
import { globalResponse } from "@/types/globalType/global.type";
import { TAuthRes } from "@/types/responseType/response.type";
import { Box, Button, Grid, Typography, Paper, Stack } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";

const Login = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (payload: FieldValues) => {
    setLoading(true);
    try {
      const loginRes = (await userLoginApi(
        payload
      )) as globalResponse<TAuthRes>;

      if (loginRes.data.accessToken) {
        toast.success("User logged successfully...");
        // store in  auth data in local storage
        storedUserInfo({ accessToken: loginRes.data.accessToken });
        // push in home page
        router.push("/");
      }
    } catch (error) {
      console.log("login page internal problem", error);
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
                Login
              </Typography>
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
            <Grid xs={12} md={12} item>
              <UsePasswordField
                name="password"
                type="password"
                placeholder="password"
                size="small"
                required={true}
              />
            </Grid>
            <Grid sm={12}>
              <Link href="/register">
                <small style={{ display: 'flex', justifyContent: "flex-end", marginTop: "2px" }}>register</small>

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
                  Login
                </Button>
              )}
            </Grid>
          </Grid>
        </UseForm>
      </Paper>
    </Box>
  );
};
export default Login;
