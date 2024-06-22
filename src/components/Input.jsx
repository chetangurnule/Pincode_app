import React from "react";
import { TextField } from "@mui/material";
const Input = ({ label }) => {
  return (
    <TextField
      sx={{
        width: "100%",
        margin: "10px 0",
      }}
      id="outlined-basic"
      label={label}
      variant="outlined"
    />
  );
};

export default Input;
