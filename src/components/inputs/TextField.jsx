import { TextField as MuiTextField } from "@mui/core";

export const TextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <MuiTextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);
