import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Rating,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchApi from "../hooks/useFetchApi";

const ProductDetails = () => {
  const navigate = useNavigate();
  let { id } = useParams();
  const [productDetails, setProductDetails] = useState(null);
  const { execute, response, status } = useFetchApi(
    `https://fakestoreapi.com/products/${id}`
  );
  useEffect(() => {
    if (response) {
      setProductDetails(response);
    }
  }, [response]);

  useEffect(() => {
    execute();
  }, []);
  return (
    <Box>
      {productDetails ? (
        <Grid container>
          <Grid item md={6}>
            <Box
              padding={4}
              minHeight={"calc(100vh - 64px)"}
              display={"flex"}
              alignItems={"center"}
            >
              <div
                style={{
                  height: "450px",
                  width: "100%",
                  backgroundImage: `url(${productDetails.image})`,
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                }}
              />
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box
              padding={4}
              bgcolor={"#dcdcdc"}
              minHeight={"calc(100vh - 64px)"}
            >
              <Box marginBottom={3}>
                <Button
                  variant="text"
                  onClick={() => {
                    navigate(`/`);
                  }}
                >
                  Back to all products
                </Button>
              </Box>
              <Typography variant="subtitle2" color={"#777777"}>
                {productDetails.category}
              </Typography>
              <Box>
                <Typography
                  variant="h6"
                  color={"#ff688d"}
                  style={{ fontWeight: "bold" }}
                >
                  {productDetails.price} {"AED"}
                </Typography>
              </Box>
              <Box marginBottom={1} display={"flex"}>
                <Box>
                  <Rating
                    size="small"
                    precision={0.5}
                    value={productDetails.rating.rate}
                    readOnly
                  />
                </Box>
                <Box>
                  <Typography color={"gray"} variant={"body2"}>
                    ({productDetails.rating.count})
                  </Typography>
                </Box>
              </Box>
              <Box marginBottom={3}>
                <Typography variant="h4">{productDetails.title}</Typography>
              </Box>

              <Typography variant="subtitle1">
                {productDetails.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Box paddingTop={4} textAlign={"center"}>
          <CircularProgress />
        </Box>
      )}
    </Box>
  );
};

export default ProductDetails;
