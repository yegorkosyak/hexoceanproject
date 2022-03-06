import { FormControl, Select, InputLabel } from "@mui/material";

import { formHelper } from "@helpers/formHelper";

export const SelectField = ({
  input,
  label,
  meta: { touched, error },
  options,
  ...custom
}) => (
  <FormControl fullWidth error={touched && error}>
    <InputLabel htmlFor="dish-type">{label}</InputLabel>
    <Select
      variant="standard"
      native
      id="dish-type"
      name={input.name}
      {...input}
      {...custom}
    >
      {options.map((option, idx) => (
        <option key={idx} value={option}>
          {option}
        </option>
      ))}
    </Select>
    {formHelper({ touched, error })}
  </FormControl>
);
