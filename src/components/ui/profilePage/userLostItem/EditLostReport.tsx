import { Box, Button, Grid } from "@mui/material";

import UseInput from "@/components/useForm/UseInput";
import UseForm from "@/components/useForm/UseForm";
import UseDialog from "@/components/Dialog/useDialog/UseDialog";
import {
  useGetSingleLostItemQuery,
  useUpdateSingleLostItemMutation,
} from "@/redux/api/endpoints/lostItem.api";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";

type TProp = {
  open: boolean;
  setOpen: any;
  lostItemId: string;
};

const EditLostReport = ({ open, setOpen, lostItemId }: TProp) => {
  const [updateLostItem, { isLoading: createLoading, error: creatingError }] =
    useUpdateSingleLostItemMutation();
  if (creatingError) {
    toast.error("fetch error");
  }
  const {
    data: singleLostItem,
    isLoading,
    error,
  } = useGetSingleLostItemQuery(lostItemId);

  if (error) {
    toast.error("fetch error");
  }

  let defaultValues;
  if (!isLoading && singleLostItem?.data?.data) {
    const { lostItemName, description, lostDate, location } =
      singleLostItem?.data?.data!;
    defaultValues = { lostItemName, description, lostDate, location };
  }

  const handleSubmit = async (data: any) => {
    const payload = {
      id: lostItemId,
      data: data,
    };

    try {
      const res = await updateLostItem(payload).unwrap();
      if ("data" in res) {
        res.data?.data.id && toast.success(res.data?.message);
        setOpen(false)
      } else {
        toast.error(res.err.message);
      }
    } catch (error) {
      console.log("edit lost page internal problem", error);
    }
  };

  return (
    <UseDialog open={open} setOpen={setOpen} title="Edit Lost Report">
      {isLoading ? (
        <Box sx={{ textAlign: "center" }}>
          <BeatLoader color="#36d7b7" />
        </Box>
      ) : (
        <UseForm onSubmit={handleSubmit} defaultValues={defaultValues}>
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
                placeholder="lost item location"
                size="small"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <UseInput
                name="lostDate"
                type="text"
                placeholder="lost Date"
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
              <Button fullWidth={true} type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </UseForm>
      )}
    </UseDialog>
  );
};
export default EditLostReport;
