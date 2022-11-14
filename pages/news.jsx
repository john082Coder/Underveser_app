import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
export default function News() {
    return(
        <>
        <Nav/>
        <div className="news-main">
        <div className="news-bars-wrapper">
            <LeftBar/>
            <div className="news-center-bars" >
                <h1>news</h1>

                <section>
                    <h2>29/6</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, provident odio! Tenetur nesciunt quidem consequatur asperiores corporis deleniti explicabo voluptatum quae qui ducimus, iste eius ipsam officia nostrum ut odio.2</p>
                </section>

                <section>
                    <h2>29/6</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, provident odio! Tenetur nesciunt quidem consequatur asperiores corporis deleniti explicabo voluptatum quae qui ducimus, iste eius ipsam officia nostrum ut odio.2</p>
                </section>

                <section>
                    <h2>29/6</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, provident odio! Tenetur nesciunt quidem consequatur asperiores corporis deleniti explicabo voluptatum quae qui ducimus, iste eius ipsam officia nostrum ut odio.2</p>
                </section>

                <section>
                    <h2>29/6</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, provident odio! Tenetur nesciunt quidem consequatur asperiores corporis deleniti explicabo voluptatum quae qui ducimus, iste eius ipsam officia nostrum ut odio.2</p>
                </section>

                <section>
                    <h2>29/6</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, provident odio! Tenetur nesciunt quidem consequatur asperiores corporis deleniti explicabo voluptatum quae qui ducimus, iste eius ipsam officia nostrum ut odio.2</p>
                </section>

                <section>
                    <h2>29/6</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, provident odio! Tenetur nesciunt quidem consequatur asperiores corporis deleniti explicabo voluptatum quae qui ducimus, iste eius ipsam officia nostrum ut odio.2</p>
                </section>

                <section>
                    <h2>29/6</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, provident odio! Tenetur nesciunt quidem consequatur asperiores corporis deleniti explicabo voluptatum quae qui ducimus, iste eius ipsam officia nostrum ut odio.2</p>
                </section>
            </div>
            <RightBar />
        </div>
        </div>
        <Footer />
        </>
    )
}