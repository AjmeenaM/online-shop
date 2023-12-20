import { Provider } from "react-redux";
import Main from "./Main";
import store from "./redux/storeConfig/store";

function App() {
  return (
    <Provider store={store}>
      <Main/>
      </Provider>
  );
}

export default App;
