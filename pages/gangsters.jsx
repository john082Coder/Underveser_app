import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
import styles from "../styles/gansters.module.scss";
import Image from "next/image"
import Link from "next/link"
import { ContentCopy } from "@mui/icons-material";
export default function Gangsters() {
 return(
     <>
     <Nav />
     <div className={styles.gangsters_bars_main} >
     <div className={styles.gangsters_bars_wrapper} >
         <LeftBar />
         <div className={styles.gangsters_center_bar} >
             <h1>Gangsters</h1>
             <p className={styles.txt}>help about gangsters <Link href=""><a> my gangters</a></Link> distribute them well ! after deviding you have to press save.if people sign up via your link , you get a gangster! you get a gangster! your gangster link  </p>
             <div className={styles.link_wrapper} >
                    <p className={styles.txt} >https://underverse.com/?2228</p>
                    <button><ContentCopy />copy</button>
              </div>
              <p className={styles.warn}>note: <span>you are not allowed to register yourself , if you do so your account will get banned permanently</span></p>
              <br />
              
              <p>or ask people if they set you up at work as a gangster and you will also get a gangster</p>
              <br />
              <br />
              <div className={styles.btns} >
                  <button>save</button>
                  <button>view pro</button>
              </div>
              <br />
              <br />
              <br />
              <div className={styles.boxes}>
                  <div className={styles.box1}>
                      <div className={styles.item1} >
                          <p>bodyguard</p>
                      </div>
                      <div className={styles.item2} >
                          <p>post here</p>
                      </div>
                      <div className={styles.item3} >

                          <div className={styles.img} >
                          <Image src='/mafia.jpg' layout="fill" />
                          </div>

                          <div className={styles.img} >
                          <Image src='/mafia.jpg' layout="fill" />
                          </div>

                          <div className={styles.img} >
                          <Image src='/mafia.jpg' layout="fill" />
                          </div>
                      </div>
                  </div>
                  <div className={styles.box2}>
                      <div className={styles.item1} >
                      <p>bodyguard</p>
                      </div>
                      <div className={styles.item2} >
                      <p>post here</p>
                      </div>
                      <div className={styles.item3} >
                      <div className={styles.img} >
                          <Image src='/mafia.jpg' layout="fill" />
                          </div>

                      </div>
                  </div>
                  <div className={styles.box3}>
                      <div className={styles.item1} >
                      <p>bodyguard</p>
                      </div>
                      <div className={styles.item2} >
                      <p>post here</p>
                      </div>
                      <div className={styles.item3} >
                      <div className={styles.img} >
                          <Image src='/mafia.jpg' layout="fill" />
                          </div>

                      </div>
                  </div>
              </div>
              <br /><br /><br />
            <div className={styles.main_img} >
                <Image src='/mafia.jpg' layout="fill" />
            </div>
            <br /><br />
         </div>
         <RightBar   />
     </div>
     </div>
     <Footer />
     </>
 )
}