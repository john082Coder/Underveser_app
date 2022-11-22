import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";

import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { connectorLocalStorageKey } from "@pancakeswap/uikit";
import  setupNetwork  from "../utils/wallet";
import  connectorsByName  from "../utils/web3React";
import { useRouter } from "next/router";


const useAuth = () => {
  const { activate, deactivate, account } = useWeb3React();
  let router = useRouter();

  const login = useCallback(
    
    (connectorID) => {
     
      const connector = connectorsByName[connectorID];
      if (connector) {
        
        activate(connector, async (error) => {
          if (error instanceof UnsupportedChainIdError) {
            const hasSetup = await setupNetwork();
            if (hasSetup) {
              activate(connector);
            }
          } else {
            window.localStorage.removeItem(connectorLocalStorageKey);
            if (
              error instanceof NoEthereumProviderError 
            ) {
              
            } else if (
              error instanceof UserRejectedRequestErrorInjected ||
              error instanceof UserRejectedRequestErrorWalletConnect
            ) {
              if (connector instanceof WalletConnectConnector) {
                const walletConnector = connector;
                walletConnector.walletConnectProvider = null;
              }
            } else {
             
            }
          }
        });
        
      } else {
        
      }
    },
    [activate]
  );

  const logout = useCallback(() => {
    deactivate();
    if (window.localStorage.getItem("walletconnect")) {
      connectorsByName.walletconnect.close();
      connectorsByName.walletconnect.walletConnectProvider = null;
    }
    window.localStorage.removeItem(connectorLocalStorageKey);
  }, [deactivate]);

  return { login, logout };
};

export default useAuth;
