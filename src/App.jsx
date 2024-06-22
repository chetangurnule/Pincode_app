import { useState } from "react";
import { Box, Container } from "@mui/material";
import SearchResult from "./pages/SearchResult";
import PincodeSearch from "./pages/PincodeSearch";

function App() {
  const [active, setActive] = useState(true);
  const [pincodeData, setPincodeData] = useState(null);
  return (
    <>
      <Container>{active ? <PincodeSearch /> : <SearchResult />}</Container>
    </>
  );
}

export default App;
