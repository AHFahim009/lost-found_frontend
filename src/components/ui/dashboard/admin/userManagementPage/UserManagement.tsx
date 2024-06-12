"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useState } from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Image from "next/image";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useGetAllUserQuery } from "@/redux/api/endpoints/user.api";
import { toast } from "sonner";
import { Skeleton, Stack } from "@mui/material";
import DeleteUser from "./deleteUser";
import { RoleSelector } from "@/components/Dialog/useSeletor/UseSelector";
import { userInformation } from "@/services/auth.services";
const UserManagement = () => {
  const user = userInformation();

  const [openAlert, setOpenAlert] = useState(false);
  const [selectorOpen, setSelectorOpen] = useState(false);
  const [deleteId, setDeleteId] = useState("");
  const [updateId, setUpdateId] = useState("");
  const { data: allUser, isLoading, error } = useGetAllUserQuery("");
  console.log(allUser);

  if (error) {
    toast.error("Fetch error");
  }

  const handleDelete = (id: string) => {
    setOpenAlert(true);
    setDeleteId(id);
  };

  const handleEdit = (id: string) => {
    setSelectorOpen(true);
    setUpdateId(id);
  };
  const handleClose = () => {
    setSelectorOpen(false);
  };
  const columns: GridColDef[] = [
    {
      field: "profile?.profilePhoto",
      headerName: "Photo ",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return row.profile && row.profile.profilePhoto ? (
          <div className="imageContainer">
            <Image
              src={row.profile.profilePhoto}
              alt="icon"
              width={40}
              height={40}
              className="image"
            />
          </div>
        ) : (
          <div>No Image</div>
        );
      },
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction="row" alignItems="center" gap={1}>
            <h1>{row.name}</h1>
            {row.email === user!?.email ? <div>....</div> : null}
          </Stack>
        );
      },
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",
    },
    {
      field: "role",
      headerName: "Role",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          <Stack direction="row" alignItems="center" gap={1}>
            <h1>{row.role}</h1>
            <Button
              size="small"
              variant="text"
              onClick={() => handleEdit(row.id)}
            >
              <EditIcon />
            </Button>
          </Stack>
        );
      },
    },

    {
      field: "action",
      headerName: "Action ",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",

      renderCell: ({ row }) => {
        return (
          <Button
            size="small"
            onClick={() => handleDelete(row.id)}
            variant="text"
          >
            <DeleteIcon />
          </Button>
        );
      },
    },
  ];
  // Ensure rows is an array, even if data is not yet available
  const rows = allUser?.data?.data ?? [];
  return (
    <>
      <Box className="specialty-table-box" py={4}>
        {isLoading ? (
          Array.from(new Array(8)).map((_, index) => (
            <Skeleton key={index} width={1000} />
          ))
        ) : (
          <DataGrid
            rows={rows}
            columns={columns}
            hideFooterPagination
            hideFooter
          />
        )}
      </Box>
      {openAlert && (
        <DeleteUser
          openAlert={openAlert}
          setOpenAlert={setOpenAlert}
          deleteId={deleteId}
        />
      )}
      {selectorOpen && (
        <RoleSelector
          selectorOpen={selectorOpen}
          setSelectorOpen={setSelectorOpen}
          userId={updateId}
          onClose={handleClose}
        />
      )}
    </>
  );
};
export default UserManagement;
