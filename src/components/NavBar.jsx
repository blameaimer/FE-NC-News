import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../pics/React-icon.svg";
import { React, useContext } from "react";
import { FaNewspaper } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { UserContext } from "./User";

export default function NavBarTop({ topic = "" }) {
  let { user } = useContext(UserContext);
  return (
    <>
      <Container>
        <Navbar fixed="top" bg="dark" variant="dark">
          <Nav
            className="topicbar"
            activeKey={
              topic === ""
                ? "/articles"
                : topic === "/"
                ? `/`
                : `/articles/${topic}`
            }
          >
            <Nav.Link href="/">
              <b className="ncicon">
                <FaNewspaper size={28} />
                NC News
              </b>
            </Nav.Link>
            <Nav.Link href="/articles/coding">Coding</Nav.Link>
            <Nav.Link href="/articles/football">Football</Nav.Link>
            <Nav.Link href="/articles/cooking">Cooking</Nav.Link>
            <Nav.Link href="/articles/all">All</Nav.Link>
          </Nav>
        </Navbar>
      </Container>

      <Container>
        <Navbar fixed="bottom" bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <img src={logo} alt="react-logo" width="30" height="30" />
            </Nav.Link>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/users">Users</Nav.Link>
            <Nav.Link href={`/users/${user}`}>
              <p className="user">
                {user} <CgProfile />
              </p>
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}
