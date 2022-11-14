import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
import Link from "next/link"
import Image from "next/image"
export default function Property() {
    return(
        <>
        <Nav />
        <div className="property-bars-main" >
        <div className="property-bars-wrapper" >
            <LeftBar />
            <div className="property-center-bars" >
                <h1>property</h1>
                <Link  href=""><a >throw everything away</a></Link>
                <div className="items-wrapper" >
                    
                    <div  className="item" >
                        <div className="image-wrapper" >
                        <Image src="/girl1.png" layout="fill"  />
                        </div>
                        <div className="item-name" >
                            <p>item name</p>
                        </div>
                        <div className="item-btns" >
                            <button>sale</button>
                            <button>usage</button>
                        </div>
                    </div>

                    <div  className="item" >
                        <div className="image-wrapper" >
                        <Image src="/girl1.png" layout="fill"  />
                        </div>
                        <div className="item-name" >
                            <p>item name</p>
                        </div>
                        <div className="item-btns" >
                            <button>sale</button>
                            <button>usage</button>
                        </div>
                    </div>

                    <div  className="item" >
                        <div className="image-wrapper" >
                        <Image src="/girl1.png" layout="fill"  />
                        </div>
                        <div className="item-name" >
                            <p>item name</p>
                        </div>
                        <div className="item-btns" >
                            <button>sale</button>
                            <button>usage</button>
                        </div>
                    </div>

                    <div  className="item" >
                        <div className="image-wrapper" >
                        <Image src="/girl1.png" layout="fill"  />
                        </div>
                        <div className="item-name" >
                            <p>item name</p>
                        </div>
                        <div className="item-btns" >
                            <button>sale</button>
                            <button>usage</button>
                        </div>
                    </div>

                    <div  className="item" >
                        <div className="image-wrapper" >
                        <Image src="/girl1.png" layout="fill"  />
                        </div>
                        <div className="item-name" >
                            <p>item name</p>
                        </div>
                        <div className="item-btns" >
                            <button>sale</button>
                            <button>usage</button>
                        </div>
                    </div>

                    <div  className="item" >
                        <div className="image-wrapper" >
                        <Image src="/girl1.png" layout="fill"  />
                        </div>
                        <div className="item-name" >
                            <p>item name</p>
                        </div>
                        <div className="item-btns" >
                            <button>sale</button>
                            <button>usage</button>
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