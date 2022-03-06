import React from "react";
import KitchenForm from "../reduxForm/KitchenForm";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import "./App.scss";

function App() {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="app">
        <div className="form-wrapper">
          <KitchenForm />
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default App;
