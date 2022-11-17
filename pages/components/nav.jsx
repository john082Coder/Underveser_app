import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useWeb3React } from "@web3-react/core"; 
import Modals from "./Modals";
import WalletModal from "./WalletModal";
import useAuth from "../hooks/useAuth";
export default function Nav() {
    let router = useRouter();
    const { login, logout } = useAuth();
    const { account } = useWeb3React();
    const [ isShow, setIsShow] = useState(false);


    // const checkWalletConnected = async () => {
    //     const { ethereum } = window;
    //     if (!ethereum) {
    //         alert('Install Metamask!')
    //     }

    //     try {
    //         const accounts = await ethereum.request({method: 'eth_requestAccounts'});
    //         setCurrentAccount(accounts[0]);
    //         router.push('/overview');
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }
    const handleConnectWallet  = () => {
        if(account)
        {
            logout();
            return;
        }
        setIsShow(true);
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
                                <Link  href=''>
                                    <a onClick={handleConnectWallet}>{ account ? account.replace(/(.{4}).*(.{4})/, "$1...$2") : "Connect Wallet" }
                                    </a>
                                </Link>
                              
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
