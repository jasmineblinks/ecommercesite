import React, { useEffect, useState, useRef } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  Button,
  Spinner,
} from "react-bootstrap";
import Header from "../header/Header";
import Footer from "../footer/footer";
import spash from "../images/spash.jpg";
import axios from "axios";
import { useParams } from "react-router-dom";

function Product() {
  const [productState, setProductState] = useState({
    id: 0,
    image: "",
    product: "",
    price: 80000,
  });
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const imgDiv = useRef();

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3003/productData" + id).then((response) => {
        setProductState(response.data);
        setLoading(false);
      });
    }, 1000);
  });
  return (
    <div>
      <Header />
      {loading && (
        <Spinner
          animation="border"
          variant="dark"
          style={{ alignItem: "center", margin: "auto" }}
        />
      )}
      {productState === [] ? (
        <div></div>
      ) : (
        productState.map((item) => (
          <Container id="contain" bg="dark" variant="dark">
            <Row>
              <Col sm={8}>
                <Card>
                  <Card.Img variant="top" src={item.image} ref={imgDiv} />
                </Card>
              </Col>
              <Col sm={4}>
                <ListGroup>
                  <ListGroup.Item>{item.product}</ListGroup.Item>
                  <ListGroup.Item>{item.price}</ListGroup.Item>
                  {/* <ListGroup.Item>Morbi leo risus</ListGroup.Item>
                  <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
                  <ListGroup.Item>Vestibulum at eros</ListGroup.Item> */}
                </ListGroup>
                <Button variant="dark">Dark</Button>
              </Col>
            </Row>
          </Container>
        ))
      )}
      <Footer />
    </div>
  );
}
export default Product;
