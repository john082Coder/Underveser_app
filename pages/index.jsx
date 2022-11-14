import Image from "next/image"
import Link from "next/link"
import Head from "next/head"
import { useRouter } from "next/router";
import Footer from "./components/footer"
import { useState } from "react";
export default function Index() {
  let router=useRouter()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleUsername = (e) => {
    setUsername(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = () => {
    if (username == 'admin' && password == '123') {
      router.push("/overview");
    } else {
      console.log('Login Failed!');
    }
  }

  return (
    <div style={{display: "flex", flexDirection: 'column', alignItems: 'center'}}>
      <Head>
        <title>under verse</title>
        <link rel="shortcut icon" href="logo.png" type="image/png" />
      </Head>
    <div className="top-bar-wrapper" >
      <div className="container">
        {/*logo */}
        <div className="logo-wrapper" >
        <section>
        <Image src="/logo.png" alt="logo" layout="fill" />
        </section>
        </div>
        {/*login form */}
        <div className="login-wrapper" >

          <div className="item1" >
            <p>login</p>
            <label>userName</label>
            <input type="text" value={username} onChange={handleUsername} />
            <label>password</label>
            <input type="password" value={password} onChange={handlePassword} />
          </div>

          <div className="item2" >
            <button onClick={handleLogin} >login</button>
          </div>
          {/* ()=>{router.push("/overview")} */}
        </div>
      </div>

    </div>
    {/*MAIN CONTENT*/ }
    <div className="main-content-wrapper" >
      <h1>Online Mafia Game</h1>
      <p>under verse is a free mafia game in which you can become the godfather of the underworld.</p>
      <p>Steal a Ferrari, rob banks and build your own villa! You can play this game every day!</p>
      <Link href=""><a >play for free now</a></Link>
      <div className="image-wrapper" >
        <Image src="/mafia.jpg" alt="image" layout="fill" />
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
        <div className="sign-up-wrapper" >
          <div className="item1" >
          <p>Sign up</p>
          <label >username</label>
          <input type="text" />
          <label >password</label>
          <input type="text" />
          <label >e-mail</label>
          <input type="text" />
          </div>
          <div className="item2" >
            <button>sign up</button>
          </div>
        </div>
    </div>
    <Footer></Footer>
    </div>
  );
}
