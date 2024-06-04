import { Container, Navbar, Nav } from "react-bootstrap";
import { FaChessKing } from "react-icons/fa";
import "./Index.css"
function Header() {
  return (
    <div>
      <Navbar bg="light" expand="lg" sticky="top">
        <Container>
          <div className=" d-flex w-100 ">
           
              <Navbar.Brand href="#home" className="header-logo"><FaChessKing/>  Landguru </Navbar.Brand>
           
            <Navbar.Collapse>
              <Nav className="me-auto">
                
              </Nav>
            </Navbar.Collapse>
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#home" className="header-link">Home</Nav.Link>
                <Nav.Link href="#adversite" className="header-link">Adversite</Nav.Link>
                <Nav.Link href="#supports"className="header-link">Supports</Nav.Link> 
                <Nav.Link href="#contact"className="header-link">Contact</Nav.Link> 
              </Nav>
            </Navbar.Collapse>
        
            {/* <Navbar.Collapse id="basic-navbar-nav" >
              <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav>
            </Navbar.Collapse> */}
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
