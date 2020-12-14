import React from "react";
import { Card } from "react-bootstrap";
import { Container, Row, Col, Button, Image } from "react-bootstrap";
import Header from '../Components/Header';

 


const Product = () => {



  return (
      <>
      <Header/>



    <div className="my-3">
      <Container>
        <Row>
          <Col md={6}>
            <Image src={"https://picsum.photos/400/500?random=1"} fluid />
          </Col>
          <Col md={3}>
            <Card style={{ width: "18rem" }}>
              <Card.Header as="h5">Your github manager!</Card.Header>
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Card Subtitle
                </Card.Subtitle>
                <Card.Img src="https://picsum.photos/400/500"/>
                <Card.Text className="my-3">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text>
                
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Link href="#">Another Link</Card.Link>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
    </>
  );
};

export default Product;
