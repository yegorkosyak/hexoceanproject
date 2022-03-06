import { useState } from "react";

import { Field, reduxForm, formValueSelector } from "redux-form";
import { connect } from "react-redux";
import { Box, Stack, Button } from "@mui/material";

import { TextField } from "@components/inputs/TextField";
import { TimeField } from "@components/inputs/TimeField";
import { SelectField } from "@components/inputs/SelectField";
import { SliderField } from "@components/inputs/SliderField";

import { FormTable } from "@components/tables/FormTable";

import { validate } from "@helpers/validate";

import { SubmitKitchenForm } from "../api/submission";

const options = ["", "pizza", "soup", "sandwich"];

let KitchenForm = (props) => {
  const [subResponse, setSubResponse] = useState("");

  const { dishType, handleSubmit, pristine, reset, submitting, classes } =
    props;

  async function _SubmitKitchenForm(data) {
    data.preparation_time = data.preparation_time.toLocaleString("pl", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    if (data.no_of_slices) {
      data.no_of_slices = +data.no_of_slices;
      data.diameter = +data.diameter;
    }
    if (data.spiciness_scale) {
      data.spiciness_scale = +data.spiciness_scale;
    }
    if (data.slices_of_bread) {
      data.slices_of_bread = +data.slices_of_bread;
    }
    let response = await SubmitKitchenForm(data);
    setSubResponse(response);
  }
  return (
    <>
      <form onSubmit={handleSubmit(_SubmitKitchenForm)}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "350px",
            justifyContent: "space-evenly",
          }}
        >
          <Field
            classes={classes}
            name="type"
            props={{
              options: options,
            }}
            component={SelectField}
            label="Dish type"
          />
          <Field name="name" component={TextField} label="Dish name" />
          <Field
            name="preparation_time"
            component={TimeField}
            label="Preparation time"
          />
          {dishType === "pizza" && (
            <>
              <Field
                name="no_of_slices"
                component={TextField}
                label="Number of slices"
                type="number"
                InputProps={{ inputProps: { min: 0 } }}
              />
              <Field
                name="diameter"
                component={TextField}
                label="Diameter of pizza"
                type="number"
                InputProps={{ inputProps: { min: 0, step: 0.1 } }}
              />
            </>
          )}
          {dishType === "soup" && (
            <Box
              sx={{
                padding: "1em 0",
              }}
            >
              <Field
                name="spiciness_scale"
                component={SliderField}
                label="Spiciness scale"
              />
            </Box>
          )}
          {dishType === "sandwich" && (
            <Field
              name="slices_of_bread"
              component={TextField}
              label="Number of slices of bread"
              type="number"
              InputProps={{ inputProps: { min: 1 } }}
            />
          )}
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={4}
            padding={2}
          >
            <Button
              type="submit"
              disabled={pristine || submitting}
              variant="contained"
            >
              Submit
            </Button>
            <Button
              type="button"
              disabled={pristine || submitting}
              onClick={reset}
              variant="outlined"
            >
              Clear Values
            </Button>
          </Stack>
        </Box>
      </form>
      {subResponse && (
        <Box>
          <FormTable data={subResponse} />
        </Box>
      )}
    </>
  );
};

KitchenForm = reduxForm({
  form: "kitchenForm",
  validate,
})(KitchenForm);

const selector = formValueSelector("kitchenForm");
KitchenForm = connect((state) => {
  const dishType = selector(state, "type");
  return {
    dishType,
  };
})(KitchenForm);

export default KitchenForm;
