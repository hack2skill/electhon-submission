import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import 'animate.css';
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { mainnet, polygon, optimism, arbitrum, localhost } from "wagmi/chains";
import DataContextProvider from "./context/Context";
const alchemyId ="iSoLFoQDND_y0a4IOLotRoJ-ZPy2r5it";
import { BrowserRouter as Router } from "react-router-dom";

const client = createClient(
  getDefaultClient({
    appName: "Democracy Chain",
    alchemyId,
    chains: [mainnet, polygon, optimism, arbitrum, localhost]
  })
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <Router>
          <DataContextProvider>
            <App />
          </DataContextProvider>
        </Router>
      </ConnectKitProvider>
    </WagmiConfig>
  </React.StrictMode>
);
