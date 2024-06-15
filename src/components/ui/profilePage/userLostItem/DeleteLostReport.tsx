import UseAlertDialog from "@/components/Dialog/alertDialog/UseAlertDialog";
import { useDeleteLostItemMutation } from "@/redux/api/endpoints/lostItem.api";
import { Button, DialogActions, Typography } from "@mui/material";
import { toast } from "sonner";

type TProp = {
  openAlert: boolean;
  setOpenAlert: any;
  deleteId: string;
};

const DeleteLostReport = ({ openAlert, setOpenAlert, deleteId }: TProp) => {
  const [deleteLostItem] = useDeleteLostItemMutation();
  const handleClose = () => {
    setOpenAlert((pre: any) => !pre);
  };

  const handleDelete = async () => {
    try {
      const res = await deleteLostItem(deleteId).unwrap();
      console.log(deleteId);

      console.log(res);

      if ("data" in res) {
        res.data && toast.success(res.data.message);
      } else {
        res.err && toast.error(res.err.message);
      }
    } catch (error) {
      console.error("Error deleting lost item:", error);
      toast.error("Failed to delete the item. Please try again.");
    } finally {
      setOpenAlert((prev: any) => !prev);
    }
  };

  return (
    <UseAlertDialog openAlert={openAlert} title=" Delete Confirmation">
      <Typography>
        Are you sure you want to delete this item? This action cannot be undone.
      </Typography>

      <DialogActions>
        <Button size="small" onClick={handleClose}>
          Cancel
        </Button>
        <Button size="small" onClick={handleDelete} autoFocus>
          Sure
        </Button>
      </DialogActions>
    </UseAlertDialog>
  );
};
export default DeleteLostReport;
