import { IconButton, InputAdornment, TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

type TProp = {
  type: string;
  placeholder: string;
  name: string;
  size?: "small" | "medium";
  required?: boolean
};

const UsePasswordField = ({
  type,
  placeholder,
  name,
  size = "small",
  required
}: TProp) => {
  const [visible, setVisible] = useState(false);
  const { control } = useFormContext();


  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field, fieldState: { error } }) => (
          <TextField
            required={required}
            id="outlined-start-adornment"
            {...field}
            size={size}
            label={placeholder}
            variant="outlined"
            type={visible ? "text" : type}
            placeholder={placeholder}
            fullWidth={true}
            error={!!error}
            helperText={error?.message}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setVisible((pre) => !pre)}
                    aria-label="toggle password visibility"
                    edge="end"
                  >
                    {visible ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
        )}
      />
    </>
  );
};
export default UsePasswordField;
