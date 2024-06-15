import * as React from "react";

import Avatar from "@mui/material/Avatar";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import PersonIcon from "@mui/icons-material/Person";

import { blue } from "@mui/material/colors";
import { useUpdateUserRoleMutation } from "@/redux/api/endpoints/user.api";
import { toast } from "sonner";
import { UseSelector } from "@/components/Dialog/useSeletor/UseSelector";
import { useUpdateClaimMutation } from "@/redux/api/endpoints/claim.api";

const roles = ["APPROVED", "REJECTED", "PENDING"];

type TProp = {
  selectorOpen: boolean;
  setSelectorOpen: any;
  setFullDialogOpen: any;
  userId: string;
  onClose: () => void;
};

export const ClaimStatusUpdate = ({
  selectorOpen,
  setSelectorOpen,
  setFullDialogOpen,
  userId,
  onClose,
}: TProp) => {
  const [updateStatus] = useUpdateClaimMutation()

  const handleListItemClick = async (value: string) => {
    console.log(value);

    const payload = {
      claimId: userId,
      data: {
        status: value
      }
    };
    console.log(payload);


    console.log("payload", payload);

    try {
      const res = await updateStatus(payload).unwrap();
      console.log(res);

      if ("data" in res) {
        res.data && toast.success(res.data?.message);
      } else {
        toast.error(res.err);
      }
    } catch (error) {
      console.log("edit found page internal problem", error);
    } finally {
      setSelectorOpen(false);
      setFullDialogOpen(false)
    }
  };

  return (
    <div>
      <UseSelector selectorOpen={selectorOpen} onClose={onClose} title="Change Status">
        <List sx={{ pt: 0 }}>
          {roles.map((email) => (
            <ListItem disableGutters key={email}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <ListItemButton onClick={() => handleListItemClick(email)}>

                <ListItemText primary={email} sx={{ textAlign: "center" }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </UseSelector>
    </div>
  );
};