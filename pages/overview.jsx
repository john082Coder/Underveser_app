import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
export default function OverView() {
    return(
        <>
        
        <Nav />
        <div className="over-view-main" style={{backgroundColor: '#111111'}}>
            <div className="over-view-bars-wrapper" >
                <LeftBar />

                <div className="overview-center" >
                    <h1>overview</h1>

                    <div className="tabs-wrapper" >
                        <Link href="/property"><a>properties</a></Link>
                        <Link href="/home"><a>home</a></Link>
                        <Link href="/whores"><a>whores</a></Link>
                    </div>

                    <div className="box-wrapper" >
                        <Image src="/logo.png" layout="fill"  />
                        <div>
                            <section className="items" >
                            <h2>person</h2>
                            <section className="item1" >
                                <section className="item" >
                                    <p>rank</p>
                                    <p>gang</p>
                                    <p>credits</p>
                                </section>
                                <section className="item" >
                                    <p>errand boy</p>
                                    <p>no</p>
                                    <p>0</p>
                                </section>
                            </section>
                            <h2>properties</h2>
                            <section className="item2" >
                                <section className="item" >
                                    <p>experience</p>
                                </section>
                                <section className="item" >
                                    <p>83</p>
                                </section>
                            </section>
                            <h2>money</h2>
                            <section className="item3" >
                                <section className="item" >
                                    <p>money in your account</p>
                                </section>
                                <section className="item" >
                                    <p>$7777</p>
                                </section>
                            </section>
                            <h2>whores</h2>
                            <section className="item4" >
                                <section className="item" >
                                    <p>whores</p>
                                    <p>condoms</p>
                                </section>
                                <section className="item" >
                                    <p>2</p>
                                    <p>0</p>
                                </section>
                            </section>
                            <h2>statistics</h2>
                            <section className="item5" >
                                <section className="item" >
                                    <p>blue royalty points</p>
                                </section>
                                <section className="item" >
                                    <p>0</p>
                                </section>
                            </section>
                            </section>
                            
                        </div>
                    </div>
                    <div className="ranking-wrapper" >
                        <p>ranking (60%)</p>
                        <div className="progress-wrapper" >
                            <section></section>
                        </div>
                    </div>
                    <p className="txt" >Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p className="txt">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                </div>
                <RightBar />
            </div>
        </div>
        <Footer/>
        </>
    )
}