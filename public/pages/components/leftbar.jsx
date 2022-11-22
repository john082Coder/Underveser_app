import Link from "next/link"
export default function LeftBar() {
    return(
        <div  className="left-bar shadow-left" >
            <section>
            <p>under-verse</p>
         <div className="item" >
             <Link href="/overview" ><a>overview</a></Link>
             
             <Link href="/news" ><a>news</a></Link>
             <Link href="/property" ><a>property / stuffs</a></Link>
             <Link href="/whores" ><a>whores</a></Link>
             <Link href="/home" ><a>Home</a></Link>
             <Link href="#" ><a>free stuffs</a></Link>
             <Link href="/gangsters" ><a>gangsters</a></Link>
             <Link href="#" ><a>credit</a></Link>
             <Link href="#" ><a>online members</a></Link>
             <Link href="#" ><a>chat</a></Link>
             <Link href="/explanation" ><a>explanation</a></Link>
             <Link href="#" ><a>Help desk</a></Link>
         </div>
         <p>city</p>
         <div className="item" >
         <Link href="#" ><a>to work</a></Link>
         <Link href="#" ><a>stores</a></Link>
         <Link href="#" ><a>driving school</a></Link>
         <Link href="#" ><a>fitness center</a></Link>
         <Link href="#" ><a>hospital</a></Link>
         <Link href="#" ><a>jail</a></Link>
         <Link href="#" ><a>hotel</a></Link>
         <Link href="#" ><a>city hall</a></Link>
         <Link href="#" ><a>bulletin board</a></Link>
         <Link href="#" ><a>search player</a></Link>
         </div>
         <p>casino</p>
         <div className="item" >
         <Link href="#" ><a>dice game</a></Link>
         <Link href="#" ><a>slot</a></Link>
         <Link href="#" ><a>heads or tails</a></Link>
         <Link href="#" ><a>roulette</a></Link>
         <Link href="#" ><a>horse racing</a></Link>
         <Link href="#" ><a>crack the safe</a></Link>
         <Link href="#" ><a>vega</a></Link>
         </div>
         
            </section>
        </div>
    )
}