import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Cart = ({ setCart }) => {
  return (
    <Box>
      <Typography variant="h3">Cart</Typography>
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem quaerat
        ab distinctio quo aut molestias tenetur, laudantium eaque maiores
        magnam? Deserunt vitae provident quia quae eum, quasi nostrum nobis
        doloribus.
      </Typography>
      <Button variant="outlined" onClick={() => setCart(false)}>
        back to products
      </Button>
    </Box>
  );
};

export default Cart;
