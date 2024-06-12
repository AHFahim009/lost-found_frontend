import * as React from "react";
import { SxProps } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import { Controller, useFormContext } from "react-hook-form";
import TextField from "@mui/material/TextField";

type TProp = {
  name: string;
  label?: string;
  options: string[];
  sx?: SxProps;
  fullWidth?: boolean;
};

const UseSelect = ({ name, label, options, sx, fullWidth }: TProp) => {
  const { control, formState } = useFormContext();
  const isError = formState.errors[name] !== undefined;

  return (
    <div>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            size="small"
            {...field}
            label={label}
            select
            fullWidth={fullWidth}
            error={!!error}
            helperText={error?.message}
          >
            {options.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </TextField>
        )}
      />
    </div>
  );
};

export default UseSelect;
