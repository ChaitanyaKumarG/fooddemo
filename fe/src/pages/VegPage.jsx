import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const FoodCategory = ({ isVeg }) => {
  const foodCategories = [
    { name: "Biryani", link: "/biryani" },
    { name: "Fried Rice", link: "/friedrice" },
    { name: "Curries", link: "/curries" },
  ];

  return (
    <Container fluid className="py-5">
      <h1 className="text-center mb-4">
        {isVeg ? "Veg Menu" : "Non-Veg Menu"}
      </h1>
      <Row>
        {foodCategories.map((food, index) => (
          <Col md={4} sm={12} key={index} className="mb-4">
            <Card
              as={Link}
              to={food.link}
              className="shadow-sm text-decoration-none"
            >
              <Card.Body className="text-center">
                <Card.Title>{food.name}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FoodCategory;
