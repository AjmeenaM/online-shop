import { Box, Button, Card, Rating, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { rating } = product;
  return (
    <Card
      sx={{
        width: "250px",
      }}
      elevation={4}
    >
      <Box margin={"0 auto"} width={"250px"} height={"390px"}>
        <Box
          textAlign={"center"}
          marginBottom={1}
          marginTop={1}
          height={"210px"}
          borderBottom={"1px solid lightgrey"}
          paddingBottom={1}
          paddingX={1}
        >
          <div
            style={{
              height: "200px",
              backgroundImage: `url(${product.image})`,
              backgroundPosition: "center",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
            }}
          />
        </Box>
        <Box paddingX={1}>
          <Box marginBottom={1} display={"flex"} justifyContent={"flex-end"}>
            <Box>
              <Rating
                size="small"
                precision={0.5}
                value={rating.rate}
                readOnly
              />
            </Box>
            <Box>
              <Typography color={"gray"} variant={"body2"}>
                ({rating.count})
              </Typography>
            </Box>
          </Box>
          <Box marginBottom={1} height={"40px"} overflow={"hidden"}>
            <Typography variant={"body2"}>{product.title}</Typography>
          </Box>
          <Box marginBottom={1}>
            <Typography variant={"caption"}>{product.category}</Typography>
          </Box>
          <Box
            marginBottom={1}
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Box>
              <Typography
                color={"#ff688d"}
                style={{ fontWeight: "bold" }}
                variant={"subtitle2"}
              >
                {product.price} {"AED"}
              </Typography>
            </Box>
            <Box>
              <Button
                color={"success"}
                size={"small"}
                onClick={() => {
                  navigate(`/product/${product.id}`);
                }}
              >
                Details
              </Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Card>
  );
};

export default ProductCard;
