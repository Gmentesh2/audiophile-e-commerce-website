import "./App.css";
import RoutesConfig from "./routes/Routes";
import SelectedProductsContextProvider from "./context/SelectedProductsContext";
import useScrollToTop from "./hooks/useScrollToTop";

function App() {
  useScrollToTop();

  return (
    <>
      <SelectedProductsContextProvider>
        <RoutesConfig />
      </SelectedProductsContextProvider>
    </>
  );
}

export default App;
