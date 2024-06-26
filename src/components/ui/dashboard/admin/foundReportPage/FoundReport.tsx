"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { toast } from "sonner";
import { Skeleton, TextField } from "@mui/material";
import { useState } from "react";
import { useAdminAllFoundItemQuery } from "@/redux/api/endpoints/foundItem.api";
import CheckedDialog from "@/components/ui/checked/Checked";




const FoundReport = () => {

  const [value, setValue] = useState("")
  const [fullDialogOpen, setFullDialogOpen] = useState(false)
  const [foundItemId, setFoundItemId] = useState("")

  const handleDialog = (id: string) => {
    setFullDialogOpen(true)
    setFoundItemId(id)
  }

  const searchQuery: Record<string, unknown> = {};

  if (value) {
    searchQuery["searchTerm"] = value;
  }

  const { data: allFoundData, isLoading, error } = useAdminAllFoundItemQuery({ ...searchQuery });
  console.log(allFoundData);

  if (error) {
    toast.error("Fetch error");
  }
  const handleOnChange = (data: any) => {
    setValue(data)
  }


  const columns: GridColDef[] = [
    {
      field: "foundItemName",
      headerName: "Name ",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",

    },
    {
      field: "location",
      headerName: "Location",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",
    },
    {
      field: "foundDate",
      headerName: "Found Date",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",
    },
    {
      field: "claim",
      headerName: "Claim Status",
      flex: 1,
      align: "center",
      display: "flex",
      headerAlign: "center",
      renderCell: ({ row }) => {
        return (
          row.Claim && row?.Claim?.status ? (
            <div>{row.Claim.status}</div>
          ) : (
            <div>No</div>
          )
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
          row.Claim ? (
            <>
              <Button size="small" variant="text" onClick={() => handleDialog(row?.id)} >
                Checked
              </Button>

            </>
          ) : null

        );
      },
    },
  ];
  // Ensure rows is an array, even if data is not yet available
  const rows = allFoundData?.data?.data ?? [];
  return (
    <>
      <TextField type="text" placeholder="search ......" onChange={(e) => handleOnChange(e.target.value)} size="small" />
      <Box className="specialty-table-box" py={4}>
        {
          isLoading ?
            Array.from(new Array(8)).map((_, index) => (
              <Skeleton key={index} width={1000} />
            ))
            :
            <DataGrid
              rows={rows}
              columns={columns}
              hideFooterPagination
              hideFooter
            />
        }
      </Box>
      <CheckedDialog fullDialogOpen={fullDialogOpen} setFullDialogOpen={setFullDialogOpen}
        foundItemId={foundItemId}
      />
    </>
  );
};
export default FoundReport;
