import Link from "next/link"
import SettingsIcon from '@mui/icons-material/Settings';
import GroupsIcon from '@mui/icons-material/Groups';
export default function RightBar() {
    return(
        <div className="right-bar" >
        <section>
            <p>settings</p>
         
         <div className="item" >
             <Link href="#" ><a>messages</a></Link>
             <Link href="#" ><a>edit profile</a></Link>
             <Link href="#" ><a>profile</a></Link>
             <Link href="/settings" ><a>settings</a></Link>
             
         </div>
         <p>crimes</p>
         <div className="item" >
         <Link href="#" ><a>crime</a></Link>
         <Link href="#" ><a>steal scooter</a></Link>
         <Link href="#" ><a>real crime</a></Link>
         <Link href="#" ><a>organinized</a></Link>
         <Link href="#" ><a>smugling</a></Link>
         </div>
         <p>money</p>
         <div className="item" >
         <Link href="#" ><a>Bank</a></Link>
         <Link href="#" ><a>To donate</a></Link>
         <Link href="#" ><a>work as a gangster</a></Link>
         <Link href="#" ><a>codes</a></Link>
         <Link href="#" ><a>payment</a></Link>
         </div>
         <p>gangs</p>
         <div className="item" >
         <Link href="#" ><a>Join</a></Link>
         <Link href="#" ><a>create gang</a></Link>
         <Link href="#" ><a>top 30 gangs</a></Link>
         <Link href="#" ><a>find gang</a></Link>
         </div>

         <p>remainings</p>
         <div className="item" >
         <Link href="#" ><a>top 10 of the month</a></Link>
         <Link href="#" ><a>line</a></Link>
         </div>

            </section>
        </div>
    )
}