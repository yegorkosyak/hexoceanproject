import { Slider, InputLabel } from "@mui/material";

export const SliderField = ({ label, input, ...custom }) => {
  return (
    <>
      <InputLabel htmlFor="spicinessScale">{label}</InputLabel>
      <Slider
        aria-label="spiciness-scale"
        defaultValue={1}
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
        id="spicinessScale"
        {...input}
        {...custom}
      />
    </>
  );
};
