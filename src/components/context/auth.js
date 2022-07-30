import {createContext,useEffect,useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import { auth, db } from "../../firebase";
import Loading from "../Loading";
export const Auth = createContext();

const AuthContext =({children})=>{
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
        onAuthStateChanged(auth,user=>{
            setUser(user);
            setLoading(false);
        })
    },[])
    if(loading){
        return <Loading/>
    }else{
    return (
        <Auth.Provider value={{user}}>
            {children}
        </Auth.Provider>
     )}
}
export default AuthContext;