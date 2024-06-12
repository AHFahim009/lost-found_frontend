import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";



type TProp = {
  name: string;
  label: string;
};

const UseDatePicker = ({ name, label }: TProp) => {
  return (
    <Controller
      name={name}
      defaultValue={dayjs(new Date().toDateString())}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            label={label}
            orientation="portrait"
            {...field}
            disablePast={true}
            slotProps={{
              textField: {
                size: "medium",
                fullWidth: true,



              },

            }}
          />
        </LocalizationProvider>
      )}
    />
  );
};

export default UseDatePicker;
