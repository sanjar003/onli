import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainRoutes />
        
      </Provider>
    </>
  );
}

export default App;
