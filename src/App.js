import { Provider } from "react-redux";
import store from "./redux/storeConfig/store";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product/:id" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
