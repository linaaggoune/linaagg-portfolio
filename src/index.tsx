import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import App from "./App.tsx";
import { Provider } from "./provider.tsx";

import "./styles/globals.css";
import { MediaQueryProvider } from "./context/mediaQueryContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider>
        <MediaQueryProvider>
          <App />
        </MediaQueryProvider>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
