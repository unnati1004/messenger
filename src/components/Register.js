import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {createUserWithEmailAndPassword} from "firebase/auth"
import {auth} from "../firebase";
import "./Register.css";
 function Register() {
    const [data,setData]=useState({
        "name":"",
        "email":"",
        "password":"",
        "error":null,
        "loading":null
    })
    const {name,email,password,error,loading} = data;
    const handlechange=(e)=>{
        const {name,value} = e.target;
        setData({...data,[name]:value});
    }

    const handlesubmit=async()=>{
      console.log(data);
      if(!name||!email||!password)
      {
        setData({...data,error:"All fields are required"})
      }
      try{
        const result = await createUserWithEmailAndPassword(auth,email,password);
        console.log(result.user)
      }
      catch(err){
          console.log(err.message);
      }
    }


  return (
    <div className='Register_div'>
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" value={name} placeholder="Enter name" name='name'onChange={(e)=>handlechange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" value={email} placeholder="Enter email" name='email' onChange={(e)=>handlechange(e)}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" value={password} placeholder="Password" name='password' onChange={(e)=>handlechange(e)}/>
      </Form.Group>
      <Button variant="primary" type="submit" onClick={()=>handlesubmit()}>
        Submit
      </Button>
    </Form>
    </div>
  );
}

export default Register;