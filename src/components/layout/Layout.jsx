import React, { useEffect, useState } from "react";
import { Container, Card, CardGroup, Row, Col } from "react-bootstrap";

import showe from "../images/showe.jpg";
import spash from "../images/spash.jpg";
import { LinkContainer } from "react-router-bootstrap";
import Product from "../products/Product";
import axios from "axios";

function Layout() {
  const [productState, setProductState] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3003/productData").then((response) => {
      setProductState(response.data);
    });
  });
  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3003/productData")
  //     .then((response) => {
  //       return response.json();
  //     })
  //     .then((data) => {
  //       console.log(data);
  //     });
  // }, []);
  return (
    <div>
      <Container>
        <Row xs={1} md={3} className="g-4">
          {productState === [] ? (
            <h1>Loading</h1>
          ) : (
            productState.map((item, image) => (
              <Col>
                <Card key={item.id}>
                  <Card.Img variant="top" src={item.image} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>{item.product}</Card.Title>
                      <Card.Text>{item.price}</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
            ))
          )}
        </Row>
      </Container>
      {/* <Col>
                <Card>
                  <Card.Img variant="top" src={showe} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={spash} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>

              <Col>
                <Card>
                  <Card.Img variant="top" src={spash} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={showe} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col>
              <Col>
                <Card>
                  <Card.Img variant="top" src={spash} />
                  <Card.Body>
                    <Card.Body>
                      <Card.Title>Pink Everest</Card.Title>
                      <Card.Text>Price: 8000</Card.Text>
                    </Card.Body>
                  </Card.Body>
                </Card>
              </Col> */}
      {/* ))} */}
    </div>
  );
}
export default Layout;
