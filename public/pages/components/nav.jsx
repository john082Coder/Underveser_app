import Image from "next/image";
import { useState, useEffect, useContext } from "react";
import { ModeContext } from "../context/CustomContext";
import Modals from "./Modals";
import WalletModal from "./WalletModal";

export default function Nav() {
    const [ isShow, setIsShow] = useState(false);
    const { account } = useContext(ModeContext);

    const handleConnectWallet  = () => {
        if (account) {
            alert('Accunt is already exist!');
        } else {
            setIsShow(true);
        }
    }
    
    useEffect(() => {
        console.log("account = ", account)
        if(account)
          setIsShow(false);
      }, [account]);
    
    return(
        <div className="top-bar-wrapper" >
            <div className="container">
                <div className="nav-logo">
                    <Image src="/logo.png" alt="logo" layout="fill" />
                </div>
                
                <div className="brief-details-wrapper" >
                    { 
                        <>
                            <a onClick={handleConnectWallet}>{ account ? account.replace(/(.{4}).*(.{4})/, "$1...$2") : "Connect Wallet" }
                            </a>
                        </>
                    } 
                </div>
            </div>
            <Modals show={isShow} onHide={() => setIsShow(false)} size="md">
                <WalletModal onClose={() => setIsShow(false)} />
            </Modals>
        </div>
    )
}
