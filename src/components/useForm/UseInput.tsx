import { TextField } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TProp = {
  type: string;
  placeholder?: string;
  name: string;
  size?: "small" | 'medium';
  required?: boolean
}


const UseInput = ({ type, placeholder, name, size = "small" }: TProp) => {
  const { control } = useFormContext()


  return (
    <>
      <Controller
        name={name}
        control={control}
        render={
          ({ field, fieldState: { error } }) =>
            <TextField size={size} {...field}
              label={placeholder} variant="outlined" type={type} placeholder={placeholder} fullWidth={true}
              error={!!error}
              helperText={error?.message}
            />
        }
      />
    </>
  )
}
export default UseInput