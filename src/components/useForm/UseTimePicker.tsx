import * as React from "react";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Controller } from "react-hook-form";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";

type TProp = {
  name: string;
  label: string;
};

const UseTimePicker = ({ name, label }: TProp) => {
  return (
    <Controller
      name={name}
      // defaultValue={dayjs(new Date().toString())}
      render={({ field }) => (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <TimePicker
            label={label}
            {...field}
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

export default UseTimePicker;
