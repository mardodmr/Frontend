import React, { useEffect, useState } from "react";
import "styles/navbar.css";
import { ShoppingCart } from "phosphor-react";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useAuth } from "context/auth-context";
//user logged in??

function NavbarComponent() {
  const { userFullName, userLogOutLogic } = useAuth();
  const { hasProducts } = useAuth();
  const { isAuthenticated } = useAuth();
  //const [userFullName, setUserFullName] = useState({});

  //console.log(Object.keys(userFullName).length === 0, "hello");
  //console.log(!Object.keys(userFullName).length === 0, "hello2");
  //console.log(Object.entries(userFullName));

  const handleLogout = () => {
    userLogOutLogic();
  };

  useEffect(() => {}, []);

  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/">My Store</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About Us</Nav.Link>
              {!isAuthenticated && <Nav.Link href="/login">Log In</Nav.Link>}
              {!isAuthenticated && (
                <Nav.Link href="/register">Register</Nav.Link>
              )}
              {isAuthenticated && (
                <NavDropdown
                  title={`${userFullName.firstName} ${userFullName.lastName}`}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="/complete-profile">
                    Edit Profile
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/orders">My Orders</NavDropdown.Item>
                  {hasProducts && (
                    <NavDropdown.Item href="/products">
                      My Products
                    </NavDropdown.Item>
                  )}

                  <NavDropdown.Item href="/add-product">
                    Add Product
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
              <Nav.Link href="/cart"> {<ShoppingCart size={28} />} </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
