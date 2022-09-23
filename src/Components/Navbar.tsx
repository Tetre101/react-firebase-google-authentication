import {Link} from "react-router-dom";
import { Auth } from "../Config/Firebase";
import {useAuthState} from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

export const Navbar =()=>{

    const [user] = useAuthState(Auth);
    const SignUserOut =async ()=>{
  await signOut(Auth);
    }
    return(
        <div className="navbar">
            <div className="links">
        <Link to = "/"> Home </Link>
        <Link to = "/Login"> Login</Link>
        </div>
        
        
<div className="user">
    {user && (
        <>
            <p>{user?.displayName} </p>
            <img src={user?.photoURL || ""}  width ="20" height= "20"/>
            <button onClick ={SignUserOut}> Log Out </button>
            </>)}
        </div>
              </div>
    )
};