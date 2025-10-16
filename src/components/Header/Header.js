import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useSelector } from "react-redux";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
const Header = () => {
  const account = useSelector((state) => state.user.account);
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  return (
    <>
      <Navbar className="custom-navbar" data-bs-theme="light">
        <Container>
          {/* <Navbar.Brand href="#home">Hoi Dan It</Navbar.Brand> */}
          <NavLink to="/" className="navbar-brand">
            Hoi dan IT
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/" className="nav-link">
                Home
              </NavLink>
              <NavLink to="/users" className="nav-link">
                User
              </NavLink>
              <NavLink to="/admins" className="nav-link">
                Admin
              </NavLink>
              {/* <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">User</Nav.Link>
            <Nav.Link href="/admins">Admin</Nav.Link> */}
            </Nav>
            <Nav>
              {isAuthenticated === false ? (
                <>
                  <button className="btn-login" onClick={() => handleLogin()}>
                    Log in
                  </button>
                  <button className="btn-signup">Sign up</button>
                </>
              ) : (
                <NavDropdown title="Setting" id="basic-nav-dropdown">
                  <NavDropdown.Item>Log in</NavDropdown.Item>
                  <NavDropdown.Item>Log out</NavDropdown.Item>
                  <NavDropdown.Item>User Info</NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Header;
