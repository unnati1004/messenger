import {createContext,useEffect,useState} from "react";
import {onAuthStateChanged} from "firebase/auth";

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
        return "loading";
    }else{
    return (
        <Auth.Provider>
            {children}
        </Auth.Provider>
     )}
}
export default AuthContext;