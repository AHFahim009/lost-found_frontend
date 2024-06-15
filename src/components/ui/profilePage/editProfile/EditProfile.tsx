import UseDialog from "@/components/Dialog/useDialog/UseDialog"
import UseForm from "@/components/useForm/UseForm";
import UseInput from "@/components/useForm/UseInput";
import { useGetProfileQuery, useSingleProfileQuery, useUpdateProfileMutation } from "@/redux/api/endpoints/proilfe.api";
import { Button, Grid } from "@mui/material";
import { toast } from "sonner";


type TProp = {
  open: boolean;
  setOpen: any;
  title: string;
  userId: string

}
const EditProfile = ({ open, setOpen, title, userId }: TProp) => {
  const [updateProfileData, { isLoading: createLoading, error: creatingError }] =
    useUpdateProfileMutation();
  if (creatingError) {
    toast.error("fetch error");
  }
  const {
    data: singleUserProfile,
    isLoading,
    error,
  } = useSingleProfileQuery(userId);

  if (error) {
    toast.error("fetch error");
  }

  let defaultValues;
  if (!isLoading && singleUserProfile?.data?.data) {
    const { bio, profilePhoto, age } =
      singleUserProfile?.data?.data!;
    defaultValues = { bio, profilePhoto, age }
  }


  const handleSubmit = async (data: any) => {
    const payload = {
      id: userId,
      data: data,
    };

    console.log(payload);

    try {
      const res = await updateProfileData(payload).unwrap();
      if ("data" in res) {
        res.data?.data.id && toast.success(res.data?.message);
        setOpen(false)
      } else {
        toast.error(res.err.message);
      }
    } catch (error) {
      console.log("edit profile page internal problem", error);
    }
  };

  return (
    <UseDialog open={open} setOpen={setOpen} title={title}>
      {
        isLoading ? "Loading..." :
          <UseForm onSubmit={handleSubmit} defaultValues={defaultValues}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="profilePhoto"
                  type="text"
                  placeholder="Profile Photo"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="bio"
                  type="text"
                  placeholder="Bio"
                  size="small"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <UseInput
                  name="age"
                  type="number"
                  placeholder="Age"
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
      }
    </UseDialog>
  )
}
export default EditProfile