import { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import User from "./User";
import "./Home.css";
export const Home = () => {
  const [users, setUsers] = useState([]);
  const [chat, setChat] = useState("");
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
          </>
        ) : (
          <h3 className="no_conv">Select a user to start conversation</h3>
        )}
      </div>
    </div>
  );
};
