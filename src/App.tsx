import "./App.css";
import RoutesConfig from "./routes/Routes";
import SelectedProductsContextProvider from "./context/SelectedProductsContext";
import useScrollToTop from "./hooks/useScrollToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useScrollToTop();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="wrapper">
      <SelectedProductsContextProvider>
        <RoutesConfig />
      </SelectedProductsContextProvider>
    </div>
  );
}

export default App;
