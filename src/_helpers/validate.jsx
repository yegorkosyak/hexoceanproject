export const validate = (values) => {
  const errors = {};
  let requiredFields = ["name", "preparation_time", "type"];
  if (values.type === "pizza") {
    requiredFields = [
      "name",
      "preparation_time",
      "type",
      "no_of_slices",
      "diameter",
    ];
  } else if (values.type === "soup") {
    requiredFields = ["name", "preparation_time", "type", "spiciness_scale"];
  } else if (values.type === "sandwich") {
    requiredFields = ["name", "preparation_time", "type", "slices_of_bread"];
  } else {
    requiredFields = ["name", "preparation_time", "type"];
  }
  requiredFields.forEach((field) => {
    if (!values[field]) {
      errors[field] = "Required";
    }
  });
  return errors;
};
