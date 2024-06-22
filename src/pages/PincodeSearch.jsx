import React from "react";
import Input from "../components/Input";
import CustomButton from "../components/CustomButton";
import { Box, Typography } from "@mui/material";

const PincodeSearch = () => {
  return (
    <Box
      sx={{
        marginTop: "20px",
      }}
    >
      <Typography variant="h5">Enter Pincode</Typography>
      <Input label="Pincode" />
      <CustomButton buttonText="Lookup" />
    </Box>
  );
};

export default PincodeSearch;
