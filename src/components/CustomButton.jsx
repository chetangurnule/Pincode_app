import React from "react";
import Button from "@mui/material/Button";

const CustomButton = ({ buttonText }) => {
  return (
    <Button
      variant="contained"
      sx={{
        backgroundColor: "black",
      }}
    >
      {buttonText}
    </Button>
  );
};

export default CustomButton;
