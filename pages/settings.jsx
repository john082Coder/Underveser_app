import styles from "../styles/settings.module.scss";
import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
export default function Settings(){
    return(
        <>
    <Nav />
    <div className={styles.settings_main_bar} >
    <div className={styles.settings_bars_wrapper} >
        <LeftBar />
        <div className={styles.settings_center_bar} >
            <h1>setting</h1>
            <br />
            <h2>Personal settings</h2>
            <p>Change your personal settings here. These settings do not affect the course of the game.</p>
            <br />
            <h2>Change password</h2>
            <p>You can set a new password below, it may only consist of letters and numbers.</p>
            <br />
            <br />
            <div className={styles.form_wrapper} >
                <label >Your new password</label>
                <input type="text" placeholder="new password" />
                
                <button>save</button>
            </div>
        </div>
        <RightBar />
    </div>
    </div>
    <Footer />
    </>
    )
}