import React from "react";
import Banner from "./Banner";
import FilterSection from "./FilterSection";
import Cards from "./Cards";
import { Box, Container, Grid } from "@mui/material";

const index = ({ setCart }) => {
  return (
    <Container>
      <Box paddingY={8}>
        <Box marginBottom={6}>
          <Banner />
        </Box>
        <Box marginBottom={6}>
          <FilterSection />
        </Box>
        <Box>
          <Cards setCart={setCart} />
        </Box>
      </Box>
    </Container>
  );
};

export default index;
