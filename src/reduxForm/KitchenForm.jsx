import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import {
  FormControl,
  Select,
  InputLabel,
  FormHelperText,
} from "@material-ui/core";
import TimePicker from "@mui/lab/TimePicker";

import { TextField } from "@components/inputs/TextField";

import asyncValidate from "@services/asyncValidate";
import { SubmitKitchenForm } from "../api/submission";

const validate = (values) => {
  const errors = {};
  const requiredFields = ["name", "preparation_time", "type"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

const renderTimeField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TimePicker
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    ampm={false}
    openTo="hours"
    views={["hours", "minutes", "seconds"]}
    inputFormat="HH:mm:ss"
    mask="__:__:__"
    value="number"
    // onChange={(newValue) => {
    //   setValue(newValue);
    // }}
    renderInput={(params) => <TextField {...params} />}
    {...input}
    {...custom}
  />
);

const renderFromHelper = ({ touched, error }) => {
  if (!(touched && error)) {
    return;
  } else {
    return <FormHelperText>{touched && error}</FormHelperText>;
  }
};

const renderSelectField = ({
  input,
  label,
  meta: { touched, error },
  children,
  ...custom
}) => (
  <FormControl error={touched && error}>
    <InputLabel htmlFor="dish-type">{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "dish-type",
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

// const handleSubmit = SubmitKitchenForm();

let KitchenForm = (props) => {
  const { dishType, handleSubmit, pristine, reset, submitting, classes } =
    props;
  return (
    <form onSubmit={handleSubmit(SubmitKitchenForm)}>
      <div>
        <Field name="name" component={TextField} label="Dish name" />
      </div>
      <div>
        <Field
          name="preparation_time"
          component={renderTimeField}
          label="Preparation time"
        />
      </div>
      <div>
        <Field
          classes={classes}
          name="type"
          component={renderSelectField}
          label="Dish type"
        >
          <option value="" />
          <option value={"pizza"}>Pizza</option>
          <option value={"soup"}>Soup</option>
          <option value={"sandwich"}>Sandwich</option>
        </Field>
      </div>
      <div />
      {dishType === "pizza" && (
        <div>
          <Field
            name="no_of_slices"
            component={TextField}
            label="Number of slices"
            type="number"
          />
        </div>
      )}
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

KitchenForm = reduxForm({
  form: "kitchenForm",
  validate,
  asyncValidate,
})(KitchenForm);

const selector = formValueSelector("kitchenForm");
KitchenForm = connect((state) => {
  const dishType = selector(state, "type");
  const time = selector(state, "preparation_time");
  console.log(
    time &&
      time
        .toLocaleString("en-US", {
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
        })
        .slice(0, -3)
  );
  console.log(state);
  return {
    dishType,
  };
})(KitchenForm);

export default KitchenForm;
