import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import {auth,db} from "../firebase";
import {signOut} from "firebase/auth";
import {updateDoc,doc} from "firebase/firestore";
function CollapsibleExample() {
  const handleoffline=async()=>{
      await updateDoc(doc(db,'users',auth.currentUser.uid),{
        isOnline:false,
      });
      await signOut(auth);
  }
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="/">Messenger</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            {auth.currentUser?
          <Nav>
            <Nav.Link href="">Profile</Nav.Link>
            <Nav.Link eventKey={2} onClick={handleoffline()}>
              Logout
            </Nav.Link>
          </Nav>:
          <Nav>
            <Nav.Link href="/register">Register</Nav.Link>
            <Nav.Link eventKey={2} href="/login">
              Login
            </Nav.Link>
          </Nav>
            }
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;