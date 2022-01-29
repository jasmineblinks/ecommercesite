import React from "react";
import { Container, Row, Col, Card, ListGroup, Button } from "react-bootstrap";
import Header from "../header/Header";
import Footer from "../footer/footer";
import spash from "../images/spash.jpg";

function Product() {
  return (
    <div>
      <Header />
      <Container id="contain" bg="dark" variant="dark">
        <Row>
          <Col sm={8}>
            <Card>
              <Card.Img variant="top" src={spash} />
            </Card>
          </Col>
          <Col sm={4}>
            <ListGroup>
              <ListGroup.Item>Cras justo odio</ListGroup.Item>
              <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
              <ListGroup.Item>Morbi leo risus</ListGroup.Item>
              <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
              <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
            </ListGroup>
            <Button variant="dark">Dark</Button>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
}
export default Product;
