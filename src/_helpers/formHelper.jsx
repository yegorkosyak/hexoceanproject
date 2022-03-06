import { FormHelperText } from "@mui/material";

export const formHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return (
      <FormHelperText variant="standard">{touched && error}</FormHelperText>
    );
  }
};
