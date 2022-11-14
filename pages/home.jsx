import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
import styles from "../styles/home.module.scss";
import Image from "next/image"
import Link from "next/link"
export default function Home() {
    return(
        <>
        <Nav />
        <div className={styles.home_bars_main}  >
        <div className={styles.home_bars_wrapper} >
            <LeftBar />
        <div className={styles.home_center} >

            <h1>house {"&"} building</h1>
            <h2>house</h2>
            <p className={styles.txt} >you live under the bridge when you go to sleep you get the energy</p>
            <button>to sleep</button>
            <div className={styles.Image_wrapper} >
            <Image src='/mafia.jpg' layout="fill" />
            </div>
            <h2>upgrading</h2>
            <p className={styles.txt} >when you have a better home you get better energy, and you have better protection</p>
            <Link  href=""><a className={styles.upgrade} >buy a box to sleep in <span>.......($40)</span></a></Link>
            <Link href=""><a className={styles.upgrade} >buy a caravan to sleep in <span>.......($8000)</span></a></Link>
            <Link href=""><a className={styles.upgrade} >buy a house to sleep in <span>......($90,000)</span></a></Link>
            <Link href=""><a className={styles.upgrade} >convert a house into a villa <span>.....($1,200,000)</span></a></Link>
            <br />
            <h2>Bedroom</h2>
            <p className={styles.txt}>set first if you are a man or at the  <Link  href=""><a  >edit profile</a></Link> then you can go to the <Link  href=""><a  >bedroom</a></Link> </p>
        </div>
            <RightBar />
        </div>
        </div>
        <Footer />
        </>
    )
}