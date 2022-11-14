import Image from "next/image"
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import {Logout} from '@mui/icons-material';
import {Paid} from '@mui/icons-material';
import { LocalHospital } from "@mui/icons-material";
import { Bolt } from "@mui/icons-material";
import { Message } from "@mui/icons-material";
export default function Nav() {
    return(
        <>
        <div className="top-bar-wrapper" >
      {/*logo */}
            <div className="container">
                    <div className="logo-wrapper" >
                        <section>
                            <Image src="/logo.png" alt="logo" layout="fill" />
                        </section>
                    </div>
                
                {/* brief-details */}
                    <div className="brief-details-wrapper" >
                        <div className="item" >
                            <p>john doe</p>
                            <button style={{display:"none"}} > <Logout /></button>
                        </div>
                        <div className="item" >
                        <section><Paid></Paid> <p>money:<span>$30,000</span></p></section>
                        </div>
                        <div className="item" >
                            <section><LocalHospital></LocalHospital> <p>life:</p></section>
                            <section><div></div></section> 
                        </div>
                        
                        <div className="item" >
                        <section><Bolt></Bolt> <p>energy:</p></section>
                            <section><div></div></section> 
                        </div>
                        <div className="item" >
                            <div>
                                <section>
                                <Message />
                                <span>3</span>
                                </section>
                            </div>
                            <section>
                                <p>experience :53</p>
                            </section>
                        </div>
                    </div>
            </div>
        </div>
        </>
    )
}