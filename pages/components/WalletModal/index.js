import React from "react";


import Metamask from "../icons/Metamask";
import TrustWallet from "../icons/TrustWallet";
import useAuth from "../../hooks/useAuth";
import { SigningKey } from "ethers/lib/utils";
const WalletModal = (props) =>  {
  const { login, logout } = useAuth();
  return (
    <div>
      <button
        className="button-text"
        onClick={() => {
          props.onClose();
        }}
      >
        {"< Back"}
      </button>
      <div className="d-flex gap-3 flex-column">
      
          <div className="d-flex flex-row align-items-center justify-content-center" onClick={()=>{login('injected')}}>
            <div className="me-2">Metamask</div>
            <Metamask width="30" />
          </div>
        
       
          <div className="d-flex flex-row align-items-center justify-content-center"  onClick={()=>{login('walletconnect');}}>
            <div className="me-2">Trust Wallet</div>
            <TrustWallet width="30" />
          </div>
       
      </div>
    </div>
  );
}
export default WalletModal;