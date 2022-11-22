import React, { useContext } from "react";
import Metamask from "../icons/Metamask";
import TrustWallet from "../icons/TrustWallet";
import useAuth from "../../hooks/useAuth";
import { useRouter } from "next/router";
import MetaMaskOnboarding from '@metamask/onboarding';
import { ModeContext } from "../../context/CustomContext";

const WalletModal = (props) =>  {
  const { login, logout } = useAuth();
  let router = useRouter();
  const { setAccount } = useContext(ModeContext);


  const handleAccounts = (accounts) => {
    if (accounts.length === 0) {
      console.log('Please connect to MetaMask.')
    } else {
      setAccount(accounts[0]);
      router.push('/overview');
    }
  }

  const handleConnectWallet  = async () => {
      if (MetaMaskOnboarding.isMetaMaskInstalled()) {
          try {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' })
            handleAccounts(accounts);
          } catch (e) {
            console.log(e)
          }
        } else {
          onboarding.current?.startOnboarding()
        }
  }

  return (
    <div className="walletModal">
      <div className="d-flex gap-3 flex-column">
      
          <div className="d-flex flex-row align-items-center justify-content-center" >
            <div className="walletBtn" onClick={()=>{handleConnectWallet()}}>
              <div className="me-2">Metamask</div>
              <Metamask width="30" />
            </div>
          </div>
          <div className="d-flex flex-row align-items-center justify-content-center">
            <div className="walletBtn"  onClick={()=>{login('walletconnect');}}>
              <div className="me-2">Trust Wallet</div>
              <TrustWallet width="30" />
            </div>
          </div>
       
      </div>
    </div>
  );
}
export default WalletModal;