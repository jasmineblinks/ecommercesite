import React from "react";
import { Container, Row, Navbar, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        style={{ marginTop: "50px", height: "200px" }}>
        <Container bg="dark" variant="dark">
          <Nav>
            <Nav.Link href="#link">&copy; Cloudcommerce</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
export default Footer;
