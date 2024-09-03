import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { MetaMaskProvider } from "@metamask/sdk-react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <MetaMaskProvider
        debug={false}
        sdkOptions={{
          logging: {
            developerMode: false,
          },
          checkInstallationImmediately: false, // This will automatically connect to MetaMask on page load
          i18nOptions: {
            enabled: true,
          },
          dappMetadata: {
            name: "custom telegram auth",
            url: window.location.protocol + "//" + window.location.host,
          },
        }}
    >
      <App />
    </MetaMaskProvider>
  </React.StrictMode>
);
