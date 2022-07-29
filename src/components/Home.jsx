import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  query,
  where,
  onSnapshot,
  addDoc,
} from "firebase/firestore";
import User from "./User";
import "./Home.css";
import Messageform from "./MessageForm";
export const Home = () => {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
  const [text, setText] = useState("");

  const user1 = auth.currentUser.uid;

  useEffect(() => {
    const usersRef = collection(db, "users");
    const q = query(usersRef, where("uid", "not-in", [auth.currentUser.uid]));
    const unsub = onSnapshot(q, (querySnapshot) => {
      let users = [];
      querySnapshot.forEach((doc) => {
        users.push(doc.data());
      });
      setUsers(users);
    });
    return () => unsub();
  }, []);
  const selectUser = (users) => {
    setChat(users);
    console.log("users", users);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const user2 = chat.uid;
      const id = user1 > user2 ? `${user1 + user2}` : `${user2 + user1}`;
      console.log()
      await addDoc(collection(db, "message", id, "chat"), {
        text,
        from: user1,
        to: user2,
      });
      setText("");
    }
    catch(e){
      console.log(e)
    }
  };
  return (
    <div className="Home_container">
      <div className="users_container">
        {users.map((user) => {
          return <User key={user.uid} user={user} selectUser={selectUser} />;
        })}
      </div>
      <div className="messenger_container">
        {chat ? (
          <>
            <div className="message_user">
              <h3>{chat.name}</h3>
            </div>
            <Messageform
              handleSubmit={handleSubmit}
              text={text}
              setText={setText}
            />
          </>
        ) : (
          <h3 className="no_conv">Select a user to start conversation</h3>
        )}
      </div>
    </div>
  );
};
