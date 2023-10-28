import React, { useEffect } from "react";
import "styles/navbar.css";
import { ShoppingCart } from "phosphor-react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "context/auth-context";
import { Link, useNavigate } from "react-router-dom";

function NavbarComponent() {
  const { userFullName, userLogOutLogic } = useAuth();
  const { hasProducts } = useAuth();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  //const [userFullName, setUserFullName] = useState({});

  //console.log(Object.keys(userFullName).length === 0, "hello");
  //console.log(!Object.keys(userFullName).length === 0, "hello2");
  //console.log(Object.entries(userFullName));

  // const handleLogout = useCallback(() => {
  //   userLogOutLogic();
  //   navigate("/", { replace: true });
  //   console.log("i'm re-rendering");
  // });
  const handleLogout = () => {
    userLogOutLogic();
    navigate("/", { replace: true });
    console.log("i'm re-rendering");
  };

  useEffect(() => {}, []);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">My Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link>
              <Link to="/">Home</Link>
            </Nav.Link>
            <Nav.Link>
              <Link to="/about">About Us</Link>
            </Nav.Link>
            {!isAuthenticated && (
              <Nav.Link>
                <Link to="/login">Log In</Link>
              </Nav.Link>
            )}
            {!isAuthenticated && (
              <Nav.Link>
                <Link to="/register">Register</Link>
              </Nav.Link>
            )}
            {isAuthenticated && (
              <NavDropdown
                title={`${userFullName.firstName} ${userFullName.lastName}`}
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item>
                  <Link to="/edit-profile">Edit Profile</Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link to="/orders">My Orders</Link>
                </NavDropdown.Item>
                {console.log("no", hasProducts)}
                {hasProducts > 0 && (
                  <NavDropdown.Item>
                    <>
                      <Link to="/products">My Products</Link>
                    </>
                  </NavDropdown.Item>
                )}

                <NavDropdown.Item>
                  <>
                    <Link to="/add-product">Add Product</Link>
                  </>
                </NavDropdown.Item>

                {isAuthenticated && (
                  <>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogout}>
                      Log Out
                    </NavDropdown.Item>
                  </>
                )}
              </NavDropdown>
            )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link>
              {" "}
              <Link to="/cart">{<ShoppingCart size={28} />}</Link>{" "}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
