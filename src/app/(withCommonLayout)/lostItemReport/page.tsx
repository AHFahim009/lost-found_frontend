"use client";
import { useCreateLostItemMutation } from "@/redux/api/endpoints/lostItem.api";
import UseForm from "@/components/useForm/UseForm";
import UseInput from "@/components/useForm/UseInput";
import { userInformation } from "@/services/auth.services";
import { TCreateLostItem } from "@/types/dataType/data.type";
import {
  globalErrorResponse,
  globalResponse,
} from "@/types/globalType/global.type";
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { FieldValues } from "react-hook-form";
import { BeatLoader } from "react-spinners";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { lostItemResolver } from "@/reslovers/resolvers";
import UseTextArea from "@/components/useForm/UseTextArea";

const LostItemReport = () => {
  const [createLostItem, { isLoading, error }] = useCreateLostItemMutation();

  if (error) {


    toast.warning("fetch error");
  }

  const user = userInformation();

  const handleSubmit = async (data: FieldValues) => {



    const payload = data as TCreateLostItem;
    payload.userId = user?.userId as string;

    try {
      const res = await createLostItem(payload).unwrap();
      console.log("unwrap", res);


      if ("data" in res) {
        res.data?.data.id && toast.success(res?.data?.message);
      } else {
        const error = res.err;
        toast.error(error?.message);
      }
    } catch (error) {
      console.log("Lost item page internal error", error);
    }
  };
  return (
    <Container sx={{ marginTop: "5rem", }}>
      <Typography variant="h6">Submit Lost Property</Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",

        }}
      >
        <Paper
          sx={{
            maxWidth: "800px",
            padding: "2rem",
          }}
        >
          <UseForm onSubmit={handleSubmit}
            resolver={zodResolver(lostItemResolver)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="lostItemName"
                  type="text"
                  placeholder="what was lost"
                  size="small"
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <UseInput
                  name="location"
                  type="text"
                  placeholder="lost item location"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="lostDate"
                  type="date"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="category"
                  type="text"
                  placeholder="category"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="photo"
                  type="text"
                  placeholder="give photo url(optional)"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6} >
                <UseTextArea
                  name="description"
                  type="text"
                  placeholder="description"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>

                <Typography variant="h6">
                  Contact Information (optional)
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="phoneNumber"
                  type="text"
                  placeholder="phone number"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="email"
                  type="text"
                  placeholder="email"
                  size="small"
                />
              </Grid>
              <Grid item xs={12}>
                {isLoading ? (
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
                    submit
                  </Button>
                )}
              </Grid>
            </Grid>
          </UseForm>
        </Paper>
      </Box>
    </Container>
  );
};
export default LostItemReport;
