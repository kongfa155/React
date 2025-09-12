import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, NavLink } from 'react-router-dom';
const Header = ()=> {
  return (
    <>
      <Navbar bg="light" data-bs-theme="light">
        <Container>  
        {/* <Navbar.Brand href="#home">Hoi Dan It</Navbar.Brand> */}
        <NavLink to='/' className='navbar-brand'>Hoi dan IT</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to='/' className='nav-link'>Home</NavLink>
            <NavLink to='/users' className='nav-link'>User</NavLink>
            <NavLink to='/admins' className='nav-link'>Admin</NavLink>
            {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">User</Nav.Link>
            <Nav.Link href="/admins">Admin</Nav.Link> */}
          </Nav>
          <Nav>
            <NavDropdown title="Setting" id="basic-nav-dropdown">
              <NavDropdown.Item >Log in</NavDropdown.Item>
              <NavDropdown.Item >Log out</NavDropdown.Item>
              <NavDropdown.Item >User Info</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;