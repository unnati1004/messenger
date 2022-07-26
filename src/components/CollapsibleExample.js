import {Auth} from './context/auth';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {useNavigate} from "react-router-dom";
import {auth,db} from "../firebase";
import {signOut} from "firebase/auth";
import {updateDoc,doc} from "firebase/firestore";
import { useContext } from 'react';

function CollapsibleExample() {
  const navigate = useNavigate();
 const {user} = useContext(Auth);
  const handleoffline=async()=>{
      await updateDoc(doc(db,'users',auth.currentUser.uid),{
        isOnline:false,
      });
      await signOut(auth);
      navigate("/");
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand to="/home">Messenger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {auth.currentUser?
          (<Nav>
            <Nav.Link href="./profile">Profile</Nav.Link>
            <Nav.Link eventKey={2} onClick={()=>handleoffline()}>
              Logout
            </Nav.Link>
          </Nav>):
          (<Nav>
            <Nav.Link href="./register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/">
              Login
            </Nav.Link>
          </Nav>)
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;