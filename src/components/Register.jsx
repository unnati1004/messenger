import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc,setDoc } from "firebase/firestore";
import { auth, db } from "../firebase";
import {useNavigate} from "react-router-dom";
import "./Register.css";
function Register() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const { name, email, password, error, loading } = data;
  const navigate= useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlesubmit = async () => {
    // e.preventDefault();
    // console.log(data);
    setData({ ...data, error: null, loading: true });
    if (!name || !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("result",result.user.uid);
      
      console.log("doc",doc);
        await setDoc(doc(db, "users", result.user.uid), {
           uid: result.user.uid,
           name,
           email,
           isOnline: true,
         });
      
      setData({
        name: "",
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/login");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
      console.log(err);
    }
  };
  return (
    <div className="Register_div">
      <Form>
       <h2>Register</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            placeholder="Enter name"
            name="name"
            onChange={(e) => handlechange(e)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            placeholder="Enter email"
            name="email"
            onChange={(e) => handlechange(e)}
          />
          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            placeholder="Password"
            name="password"
            onChange={(e) => handlechange(e)}
          />
        </Form.Group>
        <Form.Text className="text-muted"></Form.Text>
        <Button variant="primary" onClick={() => handlesubmit()}>
          Submit
        </Button>
        <Form.Text className="text-muted">
      Need help<a href="./Login">already have a account</a>
        </Form.Text>
      </Form>
    </div>
  );
}

export default Register;
