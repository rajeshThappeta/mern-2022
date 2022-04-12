import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Signup from "../Signup";
import Login from "../Login";
import Contactus from "../Contactus";
import Userprofile from "../user-profile/Userprofile";
import Cart from "../cart/Cart";
import Products from "../view-products/ViewProducts";
import { useSelector } from "react-redux";
import { clearLoginStatus } from "../../slices/userSlice";
import { useDispatch } from "react-redux";
import Userdashboard from "../userdashboard/Userdashboard";
import { useNavigate ,Navigate} from "react-router-dom";

function Header() {
  //get state from store
  let { userObj, isError, isLoading, isSuccess, errMsg } = useSelector(
    (state) => state.user
  );
  //get dispathc function
  let dispath = useDispatch();

  //get navigate function
  let navigate = useNavigate();

  //logout user
  const userLogout = () => {
    localStorage.clear();
    dispath(clearLoginStatus());
    navigate("/login");
  };

  return (
    <div>
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">ShoppersHub</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              {isSuccess !== true ? (
                <>
                  {/* These links can be visible when no user logged in */}
                  <Nav.Item>
                    <Nav.Link eventKey="1" as={NavLink} to="/">
                      Home
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="2" as={NavLink} to="/signup">
                      Signup
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="3" as={NavLink} to="/login">
                      Login
                    </Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                    <Nav.Link eventKey="4" as={NavLink} to="/contactus">
                      ContactUs
                    </Nav.Link>
                  </Nav.Item>
                </>
              ) : (
                <>
                  {/* This dropdown is visible only when a user is logged in */}
                  <NavDropdown
                    title={userObj.username}
                    id="collasible-nav-dropdown"
                    id="drop-down"
                  >
                    <NavDropdown.Item>Change password</NavDropdown.Item>

                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={userLogout}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/userdashboard" element={<Userdashboard />}>
          <Route path="profile" element={<Userprofile />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Products />} />
          {/* Navigating to profile when child path is empty */}
          <Route path="" element={<Navigate to="profile" replace={true} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Header;
