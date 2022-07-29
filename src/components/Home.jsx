import { useEffect,useState } from "react"
import {db,auth} from "../firebase";
import {collection,query,where,onSnapshot} from 'firebase/firestore';
export const Home=()=>{
    const [users,setUsers] = useState([]);
    useEffect(()=>{
        const usersRef = collection(db,'users')
        const q = query(usersRef,where('uid','not-in',[auth.currentUser.uid]))
        const unsub = onSnapshot(q, querySnapshot =>{
            let users = []
            querySnapshot.forEach(doc=>{
                users.push(doc.data());
            });
            console.log(users);
            setUsers(users);
        });
        return ()=> unsub();
    },[]);
    
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}