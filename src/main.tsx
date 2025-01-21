import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store.ts";
import { PersistGate } from "redux-persist/integration/react";
// import { Toaster } from "./components/ui/sonner.tsx";
import { Elements } from "@stripe/react-stripe-js";
import { stripePromise } from "./utils/stripe.utils.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Elements stripe={stripePromise}>
            <App />
          </Elements>
          {/* <Toaster /> */}
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
