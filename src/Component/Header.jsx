import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <Navbar expand="lg" className="bg-black w-100">
      <Container>
        <Navbar.Brand href="#home">
          <img src="/Bently.png" alt="" height="60px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="Models">Models</Nav.Link>
            <Nav.Link href="#About us">About us</Nav.Link>
            <Nav.Link href="#Discovers">Discovers</Nav.Link>
            <Nav.Link href="#Services">Services</Nav.Link>   
            <Nav.Link href="#Sign up">Sign up</Nav.Link>        
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header