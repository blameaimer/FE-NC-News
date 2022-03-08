import {Navbar, Container, Nav,} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../pics/React-icon.svg";
import { React} from "react";



export default function NavBarTop() {

  return (
    <>


          <Container>
            <Navbar fixed="top"  bg="dark" variant="dark">
              <Nav className="topicbar">
                <Nav.Link href="/articles/coding">Coding</Nav.Link>
                <Nav.Link href="/articles/football">Football</Nav.Link>
                <Nav.Link href="/articles/cooking">Cooking</Nav.Link>
                <Nav.Link href="/articles">All</Nav.Link>
              </Nav>
            </Navbar>
          </Container>
         
      <Container>
        <Navbar fixed="bottom"  bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <img src={logo} alt="react-logo" width="30" height="30" />
            </Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="#features">Users</Nav.Link>
            <Nav.Link href="/">
              <b>NC News</b>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>


    </>
  );
}

