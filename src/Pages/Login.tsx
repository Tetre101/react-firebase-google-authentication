import {Auth, Provider} from "../Config/Firebase";
import { signInWithPopup } from "firebase/auth";
import {useNavigate} from "react-router-dom";

export const Login =()=>{
const navigate = useNavigate();
    const signInWithGoogle = async ()=>{
        const result = await signInWithPopup(Auth, Provider)
        console.log(result)
        navigate('/');
    };

    return(
        <div> 
            <p> Sign In With Google To Continue </p>
            <button onClick = {signInWithGoogle}> Sign In With Google To Continue </button>
             </div>
    )
};