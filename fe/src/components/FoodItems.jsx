import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const FoodItems = ({ items }) => {
  return (
    <Container fluid className="py-5">
      <h1 className="text-center mb-4">Our Special {items.title}</h1>
      <Row>
        {items.data.map((item, index) => (
          <Col md={4} sm={12} key={index} className="mb-4">
            <Card className="shadow-sm">
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Text>{item.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FoodItems;
