import React from "react";
import Banner from "../components/Banner";
import FilterSection from "../components/FilterSection";
import Products from "../components/Products";
import { Box, Container } from "@mui/material";

const Home = () => {
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
          <Products />
        </Box>
      </Box>
    </Container>
  );
};

export default Home;
