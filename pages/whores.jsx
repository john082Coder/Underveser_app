import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
import styles from "../styles/whores.module.scss";
import Image from "next/image"
import Link from "next/link"
import { Info } from "@mui/icons-material";
import { ContentCopy } from "@mui/icons-material";
export default function Whores() {
    return(
        <>
        <Nav />
        <div className={styles.whores_bars_main} >
        <div className={styles.whores_bars_wrapper} >
            <LeftBar />
            <div className={styles.whores_center_bar} >
                <h1>whores</h1>
                <Link  href=""><a><Info /> more info about whores</a></Link>
                <p className={styles.info} >when people click on your link you get a hooker</p>
                <div className={styles.link_wrapper} >
                    <p >https://underverse.com/?2228</p>
                    <button><ContentCopy />copy</button>
                </div>
                <hr />
                <div className={styles.box1}>
                    <p>2 whores dont have a condom</p>
                    <button>give a condom</button>
                </div>

                <div className={styles.box2_wrapper}>

                    <div className={styles.item} >
                        <div className={styles.box1} >
                            <div className={styles.whore_pic} ><Image src="/girl1.png" layout="fill"  /></div>
                            <div className={styles.btns_wrapper} >
                                <button>stack of money</button>
                                <button>sex</button>
                                <button>present</button>
                                <button>beat</button>
                                <button>turn over</button>
                            </div>
                        </div>
                        <div className={styles.box2} >
                            <p>lizzy is happy</p>
                        </div>
                    </div>

                    <div className={styles.item} >
                        <div className={styles.box1} >
                            <div className={styles.whore_pic} ><Image src="/girl1.png" layout="fill"  /></div>
                            <div className={styles.btns_wrapper} >
                                <button>stack of money</button>
                                <button>sex</button>
                                <button>present</button>
                                <button>beat</button>
                                <button>turn over</button>
                            </div>
                        </div>
                        <div className={styles.box2} >
                            <p>lizzy is happy</p>
                        </div>
                    </div>

                    <div className={styles.item} >
                        <div className={styles.box1} >
                            <div className={styles.whore_pic} ><Image src="/girl1.png" layout="fill"  /></div>
                            <div className={styles.btns_wrapper} >
                                <button>stack of money</button>
                                <button>sex</button>
                                <button>present</button>
                                <button>beat</button>
                                <button>turn over</button>
                            </div>
                        </div>
                        <div className={styles.box2} >
                            <p>lizzy is happy</p>
                        </div>
                    </div>

                </div>

            </div>
            <RightBar />
        </div>
        </div>
        <Footer />
        </>
    )
}