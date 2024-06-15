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

const roles = ["USER", "ADMIN"];

export interface SimpleDialogProps {
  selectorOpen: boolean;
  children: React.ReactNode;
  title?: string;
  onClose: () => void;
}

export function UseSelector(props: SimpleDialogProps) {
  const { selectorOpen, children, onClose, title } = props;

  return (
    <Dialog open={selectorOpen} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      {children}
    </Dialog>
  );
}

type TProp = {
  selectorOpen: boolean;
  setSelectorOpen: any;
  userId: string;
  onClose: () => void;
};

export const RoleSelector = ({
  selectorOpen,
  setSelectorOpen,
  userId,
  onClose,
}: TProp) => {
  const [updateRole] = useUpdateUserRoleMutation();

  const handleListItemClick = async (value: string) => {
    console.log(value);

    const payload = {
      id: userId,
      data: {
        role: value,
      },
    };

    try {
      const res = await updateRole(payload).unwrap();
      if ("data" in res) {
        res.data && toast.success(res.data?.message);
      } else {
        toast.error(res.err.message);
      }
    } catch (error) {
      console.log("edit found page internal problem", error);
    } finally {
      setSelectorOpen(false);
    }
  };

  return (
    <div>
      <UseSelector selectorOpen={selectorOpen} onClose={onClose}>
        <List sx={{ pt: 0 }}>
          {roles.map((email) => (
            <ListItem disableGutters key={email}>
              <ListItemButton onClick={() => handleListItemClick(email)}>
                <ListItemAvatar>
                  <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                    <PersonIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={email} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </UseSelector>
    </div>
  );
};
