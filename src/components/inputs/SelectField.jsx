import { FormControl, Select, InputLabel } from "@mui/material";

import { formHelper } from "@helpers/formHelper";

import "./Field.scss";

export const SelectField = ({
  input,
  label,
  meta: { touched, error },
  options,
  ...custom
}) => (
  <FormControl className="form-control" fullWidth error={touched && error}>
    <InputLabel className="select-label" htmlFor="dish-type">
      {label}
    </InputLabel>
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
