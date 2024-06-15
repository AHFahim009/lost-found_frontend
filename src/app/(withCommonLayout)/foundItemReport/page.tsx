"use client";
import UseForm from "@/components/useForm/UseForm";
import UseInput from "@/components/useForm/UseInput";
import { useCreateFoundItemMutation } from "@/redux/api/endpoints/foundItem.api";
import { foundItemResolver } from "@/reslovers/resolvers";
import { TCreateFoundItem } from "@/types/dataType/data.type";
import { zodResolver } from "@hookform/resolvers/zod";
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

const FoundItemReport = () => {
  const [createFoundItem, { isLoading, error }] = useCreateFoundItemMutation();
  if (error) {
    toast.error("fetch error");
  }

  const handleSubmit = async (data: FieldValues) => {
    const payload = data as TCreateFoundItem;

    try {
      const res = await createFoundItem(payload).unwrap();

      if ("data" in res) {
        res.data?.data.id && toast.success(res?.data?.message);
      } else {
        const error = res.err;
        toast.error(error?.message);
      }
    } catch (error) {
      console.log("fount item page internal error", error);
    }
  };
  return (
    <Container sx={{ marginTop: "6rem" }}>
      <Typography variant="h6">Submit Found Property</Typography>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <Paper
          sx={{
            maxWidth: "800px",
            padding: "2rem",
          }}
        >
          <UseForm
            onSubmit={handleSubmit}
            resolver={zodResolver(foundItemResolver)}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="foundItemName"
                  type="text"
                  placeholder="what was found"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="description"
                  type="text"
                  placeholder="description"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="location"
                  type="text"
                  placeholder="found item location"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="foundDate"
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
export default FoundItemReport;
