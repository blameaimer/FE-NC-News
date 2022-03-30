import { Navbar, Container, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../pics/React-icon.svg";
import { AiOutlineHome } from "react-icons/ai";
import { React, useContext } from "react";
import { UserContext } from "./User";
import { FaNewspaper } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { BiCodeAlt } from "react-icons/bi";
import { IoMdFootball } from "react-icons/io";
import { GiCookingPot, GiWorld } from "react-icons/gi";

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
                <FaNewspaper size={20} />
                NC News
              </b>
            </Nav.Link>

            <Nav.Link className="coding" href="/articles/coding">
              Coding <BiCodeAlt className="code-icon" size={20} />
            </Nav.Link>
            <Nav.Link className="footy" href="/articles/football">
              Football <IoMdFootball className="footy-icon" size={20} />
            </Nav.Link>
            <Nav.Link className="cooking" href="/articles/cooking">
              Cooking <GiCookingPot className="cooking-icon" size={20} />
            </Nav.Link>
            <Nav.Link className="all" href="/articles/all">
              All <GiWorld className="all-icon" size={20} />
            </Nav.Link>
          </Nav>
        </Navbar>
      </Container>

      <Container>
        <Navbar fixed="bottom" bg="dark" variant="dark">
          <Nav className="me-auto">
            <Nav.Link href="/">
              <img src={logo} alt="react-logo" width="30" height="30" />
            </Nav.Link>

            <Nav.Link href="/">
              <AiOutlineHome size={28} />
            </Nav.Link>

            <Nav.Item>
              <p className="user">
                {user} <CgProfile />
              </p>
            </Nav.Item>
          </Nav>
        </Navbar>
      </Container>
    </>
  );
}
