import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import Footer from "./components/footer"
import Nav from "./components/nav";

export default function Index() {

  return (
      <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
        <Head>
          <title>under verse</title>
          <link rel="shortcut icon" href="logo.png" type="image/png" />
        </Head>
      <Nav />
      {/*MAIN CONTENT*/ }
      <div className="main-content-wrapper" >
        <h1>Online Mafia Game</h1>
        <p>under verse is a free mafia game in which you can become the godfather of the underworld.</p>
        <p>Steal a Ferrari, rob banks and build your own villa! You can play this game every day!</p>
        <Link href=""><a >play for free now</a></Link>
        <div className="image-wrapper" >
          <Image src="/mafia.jpg" alt="image" layout="fill" width="200" />
          </div>
          <p>In this awesome online game you can commit all kinds of crimes,</p>
          <p>from petty crime to organized crime! Sign up for free!</p>
          <p>Join the mafia! There are also mini-games that you can play or you</p>
          <p>can use codes to get money. Slowly you will gain gangsters and you</p>
          <p>can take over the power!</p>

          <p></p>
          <p></p>
          <p></p>
          <p>Swear to be loyal to your criminal gang with an omerta and you can!</p>
          <p>become the biggest mob boss! Buy expensive cars and buildings and</p>
          <p>show your power! It&apos;s a tough underworld</p>
      </div>
      <Footer></Footer>
      </div>
  );
}
