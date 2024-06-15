import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import UseInput from "@/components/useForm/UseInput";
import UseForm from "@/components/useForm/UseForm";
import UseDialog from "@/components/Dialog/useDialog/UseDialog";
import {
  useSingleFoundItemQuery,
  useUpdateFoundItemMutation,
} from "@/redux/api/endpoints/foundItem.api";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";
import { TCreateClaim } from "@/types/dataType/data.type";
import { useCreateClaimMutation } from "@/redux/api/endpoints/claim.api";

type TProp = {
  open: boolean;
  setOpen: any;
  foundItemId: string;
};


const ClaimPage = ({ open, setOpen, foundItemId }: TProp) => {
  const [createClaim, { isLoading, error: claimError }] =
    useCreateClaimMutation();
  if (claimError) {
    toast.error("fetch error");
  }



  const handleSubmit = async (payload: any) => {
    payload.foundItemId = foundItemId

    try {
      const res = await createClaim(payload).unwrap();
      console.log(res);

      if ("data" in res) {
        res.data?.data.id && toast.success(res.data?.message);
        setOpen(false)

      } else {
        toast.error(res.err.message);
      }
    } catch (error) {
      console.log("claim page internal problem", error);
    }
  };

  return (
    <UseDialog open={open} setOpen={setOpen} title="Claim Report">
      <UseForm onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <UseInput
              name="distinguishingFeatures"
              type="text"
              placeholder="Distinguishing Features"
              size="small"
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <UseInput
              name="lostDate"
              type="text"
              placeholder="description"
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

    </UseDialog>
  );
};
export default ClaimPage;
