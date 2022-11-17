import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

import { ConnectorNames } from "@pancakeswap/uikit";
import { ethers } from "ethers";
import getNodeUrl from "./getRpcUrl";
import { DEFAULT_CHAINID } from "../constants";

const POLLING_INTERVAL = 12000;
const rpcUrl = getNodeUrl();
const chainId = parseInt(DEFAULT_CHAINID, 10);

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
  
};

export const getLibrary = (provider) => {
  const library = new ethers.providers.Web3Provider(provider);
  library.pollingInterval = POLLING_INTERVAL;
  return library;
};
