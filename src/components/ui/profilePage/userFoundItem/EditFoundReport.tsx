import { Box, Button, Grid, Typography } from "@mui/material";
import UseInput from "@/components/useForm/UseInput";
import UseForm from "@/components/useForm/UseForm";
import UseDialog from "@/components/Dialog/useDialog/UseDialog";
import {
  useSingleFoundItemQuery,
  useUpdateFoundItemMutation,
} from "@/redux/api/endpoints/foundItem.api";
import { toast } from "sonner";
import { BeatLoader } from "react-spinners";

type TProp = {
  open: boolean;
  setOpen: any;
  foundItemId: string;
};

const defaultValues = {
  id: "1",
  foundProductName: "Dell Laptop",
  location: "Dhaka, savar",
  foundDate: "2024-05-25",
  description:
    "My laptop color is black. It has no any stretch .My laptop keyboard is loss so i add some paper to tight it. ",
};

const EditFoundReport = ({ open, setOpen, foundItemId }: TProp) => {
  const [updateFoundItem, { isLoading: foundLoading, error: foundingError }] =
    useUpdateFoundItemMutation();
  if (foundingError) {
    toast.error("fetch error");
  }
  const {
    data: foundLostItem,
    isLoading,
    error,
  } = useSingleFoundItemQuery(foundItemId);

  if (error) {
    toast.error("fetch error");
  }

  let defaultValues;
  if (!isLoading && foundLostItem?.data?.data) {
    const { foundItemName, description, foundDate, location } =
      foundLostItem?.data?.data;
    defaultValues = { foundItemName, description, foundDate, location };
  }

  const handleSubmit = async (data: any) => {
    const payload = {
      id: foundItemId,
      data: data,
    };

    try {
      const res = await updateFoundItem(payload).unwrap();
      if ("data" in res) {
        res.data?.data.id && toast.success(res.data?.message);
        setOpen(false)
      } else {
        toast.error(res.err.message);
      }
    } catch (error) {
      console.log("edit found page internal problem", error);
    }
  };

  return (
    <UseDialog open={open} setOpen={setOpen} title="Edit Found Report">
      {isLoading ? (
        <Box sx={{ textAlign: "center" }}>
          <BeatLoader color="#36d7b7" />
        </Box>
      ) : (
        <UseForm onSubmit={handleSubmit} defaultValues={{ ...defaultValues }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <UseInput
                name="lostItemName"
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
                name="lostDate"
                type="text"
                placeholder="found Date"
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
export default EditFoundReport;
