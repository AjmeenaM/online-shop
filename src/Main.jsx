import React, { useState } from "react";
import OnlineShop from "./OnlineShop";
import Cart from "./OnlineShop/Cart";

const Main = () => {
  const [cart, setCart] = useState(false);
  return (
    <>{cart ? <Cart setCart={setCart} /> : <OnlineShop setCart={setCart} />}</>
  );
};

export default Main;
