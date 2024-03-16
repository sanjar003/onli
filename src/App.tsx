import { Provider } from "react-redux";
import "./App.css";
import MainRoutes from "./routes/MainRoutes";
import store from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <MainRoutes />
        <div>
          <h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum quos veniam maiores, voluptatibus quae neque, unde
              beatae illum omnis ducimus earum at atque, fugiat facere
              architecto esse perspiciatis distinctio dignissimos!
            </p>
          </h1>
        </div>
      </Provider>
    </>
  );
}

export default App;
