import { Button, Grid, Skeleton, Typography, Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import { useSelector } from "react-redux";
import useFetchApi from "../hooks/useFetchApi";

const Products = () => {
  const { filters } = useSelector((state) => state);
  const [allProducts, setAllProducts] = useState([]);
  const { execute, response, status } = useFetchApi(
    "https://fakestoreapi.com/products"
  );
  useEffect(() => {
    if (response) {
      setAllProducts(response);
    }
  }, [response]);

  useEffect(() => {
    execute();
  }, []);

  const filteredProducts = allProducts.filter((product) => {
    let activeFilters = filters.filter((f) => f.active === true);
    if (activeFilters.length) {
      let activeFiltersCats = activeFilters.map((f) => f.name);
      if (activeFiltersCats.includes(product.category)) {
        return true;
      } else {
        return false;
      }
    } else {
      return true;
    }
  });

  return (
    <>
      {status === "error" && (
        <Box textAlign={"center"}>
          <Typography textAlign={"center"} color={"red"} variant="h5">
            Error Occured!
          </Typography>
          <Button onClick={execute}>Reload</Button>
        </Box>
      )}
      <Grid container spacing={4}>
        {status === "loading" &&
          [1, 2, 3, 4].map((i) => (
            <Grid key={i} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <Skeleton variant="rounded" width={250} height={380} />
            </Grid>
          ))}
        {status === "success" &&
          filteredProducts.map((product) => (
            <Grid key={product.id} item xl={3} lg={3} md={4} sm={6} xs={12}>
              <ProductCard product={product} />
            </Grid>
          ))}
      </Grid>
    </>
  );
};

export default Products;
