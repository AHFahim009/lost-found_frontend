import { Button, Input, SxProps } from "@mui/material";
import { Controller } from "react-hook-form";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});


type TProp = {
  type: string;
  name: string;
  label?: string;
  sx?: SxProps;
  fullWidth?: boolean
}




const UseFile = ({ type, name, label, sx, fullWidth }: TProp) => {
  return (
    <Controller
      name={name}
      render={({ field: { onChange, value, ...field } }) => (
        <Button
          fullWidth={fullWidth}
          component="label"
          role={undefined}
          variant="contained"
          tabIndex={-1}
          startIcon={<CloudUploadIcon />}
        >
          {label || "Upload file"}
          <Input sx={{ display: "none" }} type={type} value={value?.fileName} {...field} size="small" fullWidth={fullWidth}
            onChange={(e) => { onChange((e.target as HTMLInputElement).files?.[0]) }} />
        </Button>
      )} />
  )
}
export default UseFile