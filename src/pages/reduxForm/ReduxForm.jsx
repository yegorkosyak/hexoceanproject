import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import FormHelperText from "@material-ui/core/FormHelperText";
import asyncValidate from "../../_services/asyncValidate";

const validate = (values) => {
  const errors = {};
  const requiredFields = ["name", "favoriteColor", "notes"];
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
  <TextField
    label={label}
    placeholder={label}
    error={touched && invalid}
    helperText={touched && error}
    {...input}
    {...custom}
  />
);

const renderCheckbox = ({ input, label }) => (
  <div>
    <FormControlLabel
      control={
        <Checkbox
          checked={input.value ? true : false}
          onChange={input.onChange}
        />
      }
      label={label}
    />
  </div>
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
    <InputLabel htmlFor="color-native-simple">{label}</InputLabel>
    <Select
      native
      {...input}
      {...custom}
      inputProps={{
        name: input.name,
        id: "color-native-simple",
      }}
    >
      {children}
    </Select>
    {renderFromHelper({ touched, error })}
  </FormControl>
);

const ReduxForm = (props) => {
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name="name" component={renderTextField} label="Dish name" />
      </div>
      <div>
        <Field
          name="preparation_time"
          component={renderTextField}
          label="Preparation time"
          type="number"
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
      <div>
        <Field
          name="notes"
          component={renderTextField}
          label="Notes"
          multiline
          maxRows="4"
          margin="normal"
        />
      </div>
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

export default reduxForm({
  form: "ReduxForm", // a unique identifier for this form
  validate,
  asyncValidate,
})(ReduxForm);
