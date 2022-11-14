import styles from "../styles/explanation.module.scss";
import Nav from "./components/nav"
import Footer from "./components/footer"
import LeftBar from "./components/leftbar"
import RightBar from "./components/rightbar"
export default function Explanation(){
    return(
        <>
        <Nav />
        <div className={styles.explanation_main} >
            <div className={styles.explanation_bars_wrapper}>
                <LeftBar />
                <div className={styles.explanation_center_bar}>
                    <h1>Explanation</h1>
                    <br />
                    <h2>How do I get experience points?</h2>
                    <p>1. Do crimes (only the crimes you can do with your experience points).</p>
                    <p>2. Stealing scooters (no experience, but money).</p>
                    <p>3. Organized Crimes (requires a partner for this (if you request the Organized Crime you will get a code put it in the Chat at the bottom under GANGS - and there will often be enough people willing to join) start your Organized Crime and if the Crime goes well, you
also earn money! people copy this and enter it in the address bar you automatically get a whore!</p>
                    <br />
                    <h2>How do I make money?</h2>
                    <p>1. Steal scooters and hope you get 1 then sell it.</p>
                    <p>2. Good Crimes and Organized Crimes also make money</p>
                    <p>3. Successful work.</p>
                    <p>4. Request your money code every 15 minutes. (click on codes and a message will automatically be sent to you with a code)</p>
                    <p>5. Ask for codes from other people in the chat room (give you codes that can still be used by other players!)</p>
                    <p>6. Your money ask whores.</p>
                    <p>7. Gambling (but we all know it can LOSE money!)</p>
                    <p>8. Smuggling</p>
                    <p>9. Getting money donated (don{"'"}t ask other people this can be very annoying).</p>
                    <p>10. MSN {'&'} Hyves page</p>
                    <br />
                    <h2>How does the lottery work?</h2>
                    <p>Everyone with a ticket has a chance to win cash prizes, your ticket always remains valid.</p>
                    <p>On the {"'News'"} page you can find out who won.</p>
                    <br />
                    <h2>How does the Hummer battle work?</h2>
                    <p>Pretty easy the one with the most credits or the most PRO gangsters will receive a fat virtual hummer in the game!</p>
                    <br />
                    <h2>How do I steal a gang building?</h2>
                    <p>You must be at least Godfather, and must be a member of the gang you want to rob.</p>
                    <p>Go to the building you want to steal, then click the {"'enter building'"} button.</p>
                    <p>Leave the gang, join the gang you want to give the building to.
Once you{"'"}re accepted to that gang, visit the old gang, go to the building you{"'"}re in, then click on {"'take over'"}.</p>
                     <p>Then the building of the gang you are in at that moment.</p>
                     <br />
                     <h2>How can I safely buy credits from someone?</h2>
                     <p>First of all, never give out your password! If you want to buy credits, it{"'"}s best to confirm this deal via text message in-game, so that there is proof. But Gangs does not support credit trading.</p>
                     <br />
                     <h2>What is an operator?</h2>
                     <p>Someone who monitors the chat.</p>
                     <br />
                     <h2>What is a moderator?</h2>
                     <p>Someone who monitors the forum.</p>
                     <br />
                     <h2>How much can I have in one account?</h2>
                     <p>Up to 2 billion.</p>
                     <br />
                     <h2>What about scams?</h2>
                     <p>If you want to do business with someone in the game, make sure you use an intermediary. There are some designated by Gangs. Gangs don{"'"}t do anything about scams. Gangs do not support mutual credit trading. Are you getting scammed, and are credits involved? Depending on the situation, the person who has not delivered credits in the game may be penalized. You have not made an appointment with Gangs but with another player and therefore Gangs will not reimburse you for damage.</p>

                </div>
                <RightBar />
            </div>
        </div>
        <Footer />
        </>
    )
}
