import "./App.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Contactus from "./components/Contactus";

function App() {
  return (
    <div>
      <Navbar bg="dark">
        <Container>
          <Navbar.Brand href="#home">MyApp</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>

            <NavLink className="nav-link" to="/signup">
              Signup
            </NavLink>

            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>

            <NavLink className="nav-link" to="/contactus">
              ContactUs
            </NavLink>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contactus" element={<Contactus />} />
      </Routes>
    </div>
  );
}

export default App;
