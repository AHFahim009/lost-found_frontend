import UseAlertDialog from "@/components/Dialog/alertDialog/UseAlertDialog";
import { useDeleteFoundItemMutation } from "@/redux/api/endpoints/foundItem.api";
import { useDeleteUserMutation } from "@/redux/api/endpoints/user.api";
import { Button, DialogActions, Typography } from "@mui/material";
import { toast } from "sonner";

type TProp = {
  openAlert: boolean;
  setOpenAlert: any
  deleteId: string
}

const DeleteUser = ({ openAlert, setOpenAlert, deleteId }: TProp) => {
  const [deleteUser] = useDeleteUserMutation();

  const handleClose = () => {
    setOpenAlert((pre: any) => !pre);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteUser(deleteId).unwrap();
      if ("data" in res) {
        res.data && toast.success(res.data.message);
      } else {
        res.err && toast.error(res.err.message);
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      toast.error("Failed to delete the item. Please try again.");
    } finally {
      setOpenAlert((prev: any) => !prev);
    }
  };

  return (
    <UseAlertDialog openAlert={openAlert} title=" Delete Confirmation" >
      <Typography>
        Are you sure you want to delete this item? This action cannot be undone.
      </Typography>

      <DialogActions>
        <Button size="small" onClick={handleClose}>Cancel</Button>
        <Button size="small" onClick={handleDelete} autoFocus>
          Sure
        </Button>
      </DialogActions>
    </UseAlertDialog>
  )
}
export default DeleteUser