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
  const [productState, setProductState] = useState(null);
  const [loading, setLoading] = useState(true);
  const { productId } = useParams();

  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3003/productData").then((response) => {
        const products = response.data;
        const productDetails = products.filter(
          (item) => item.id === +productId
        );
        // console.log(productDetails, products, productId);
        setProductState(productDetails[0]);
        // console.log(productDetails[0]);
        setLoading(false);
      });
    }, 1000);
  }, []);
  return (
    <div>
      {/* {loading && (
        <Spinner
          animation="border"
          variant="dark"
          style={{ alignItem: "center", margin: "auto" }}
        />
      )} */}
      {productState === null ? (
        <div>
          {" "}
          <Spinner
            animation="border"
            variant="dark"
            style={{ alignItem: "center", margin: "auto" }}
          />
        </div>
      ) : (
        <Container
          id="contain"
          bg="dark"
          variant="dark"
          key={productState.productDetails}>
          <Row>
            <Col sm={8}>
              <Card>
                <Card.Img variant="top" src={productState.image} />
              </Card>
            </Col>
            <Col sm={4}>
              <ListGroup>
                <ListGroup.Item>{productState.product}</ListGroup.Item>
                <ListGroup.Item>{productState.price}</ListGroup.Item>
              </ListGroup>
              <Button variant="dark">Dark</Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
export default Product;
