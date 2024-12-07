import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Container fluid className="pt-5" style={{height:"100vh"}}>
     
      <Row className="px-3 mb-0">
        <Col md={6} sm={12} className="mb-4">
          <Card as={Link} to="/veg" className="shadow-sm text-decoration-none">
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/400x300"
              alt="Veg Menu"
            />
            <Card.Body className="text-center">
              <Card.Title>Vegetarian Menu</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={6} sm={12} className="">
          <Card
            as={Link}
            to="/nonveg"
            className="shadow-sm text-decoration-none"
          >
            <Card.Img
              variant="top"
              src="https://via.placeholder.com/400x300"
              alt="Non-Veg Menu"
            />
            <Card.Body className="text-center">
              <Card.Title>Non-Vegetarian Menu</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
