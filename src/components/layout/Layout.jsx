import React, { useEffect, useState } from "react";
import { Container, Card, CardGroup, Row, Col, Spinner } from "react-bootstrap";

import Product from "../products/Product";
import axios from "axios";
import { Link } from "react-router-dom";

function Layout() {
  const [productState, setProductState] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      axios.get("http://localhost:3003/productData").then((response) => {
        setProductState(response.data);
        setLoading(false);
      });
    }, 1000);
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
              <Col>
                <Card key={item.id}>
                  <Link to={`/productId/${item.id}`}>
                    <Card.Img variant="top" src={item.image} alt="shoe" />
                  </Link>

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
