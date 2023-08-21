import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { store } from "../store.js";
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { QueryProvider } from "../QueryContext.jsx";

import "./index.css";
import ThemeContainer from "../Componenti/ThemeContainer.jsx";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <ThemeContainer>
      <QueryClientProvider client={queryClient}>
        <QueryProvider>
          <Router>
            <App />
          </Router>
        </QueryProvider>
      </QueryClientProvider>
    </ThemeContainer>
  </Provider>
);
