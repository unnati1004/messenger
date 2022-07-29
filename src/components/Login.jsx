import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithEmailAndPassword } from "firebase/auth";
import {updateDoc, doc} from "firebase/firestore";
import { auth, db } from "../firebase";
import "./Login.css";
import {  useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({
    email: "",
    password: "",
    error: null,
    loading: false,
  });
  const {  email, password, error, loading } = data;
  const navigate = useNavigate();
  const handlechange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handlesubmit = async () => {
    // e.preventDefault();
    console.log(data);
    setData({ ...data, error: null, loading: true });
    if ( !email || !password) {
      setData({ ...data, error: "All fields are required" });
    }
    try {
      const result = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(result.user);
      await updateDoc(doc(db, "users", result.user.uid), {
        isOnline: true,
      });
      setData({
        email: "",
        password: "",
        error: null,
        loading: false,
      });
      navigate("/");
    } catch (err) {
      setData({ ...data, error: err.message, loading: false });
    }
  };
  return (
    <div className="Register_div">
      <Form>
        <h1>Login</h1>
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
        {error?<Form.Text className="text-muted">{error}</Form.Text>:null}
        <Button variant="primary" onClick={() => handlesubmit()}>
          {loading?'Logging in...':'Login'}
        </Button>
        <Form.Text className="text-muted">
        Need help<a href="./register">No account</a>
          </Form.Text>
      </Form>
    </div>
  );
}

export default Login;
