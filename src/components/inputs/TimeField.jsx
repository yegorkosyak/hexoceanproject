import TimePicker from "@mui/lab/TimePicker";
import { TextField as MuiTextField } from "@mui/material";

export const TimeField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => {
  return (
    <TimePicker
      label={label}
      placeholder={label}
      ampm={false}
      openTo="hours"
      views={["hours", "minutes", "seconds"]}
      inputFormat="HH:mm:ss"
      mask="__:__:__"
      renderInput={(params) => (
        <MuiTextField
          variant="standard"
          {...params}
          error={touched && invalid}
          helperText={touched && error}
        />
      )}
      {...input}
      {...custom}
    />
  );
};
