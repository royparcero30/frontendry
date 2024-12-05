import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Hobbies = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: '#333333', // Dark gray background
        color: '#f9f9f9', // Light text for contrast
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif",
      }}
    >
      <h2
        className="mb-5"
        style={{
          fontWeight: 'bold',
          color: '#ffc107', // Vibrant yellow for headings
          fontSize: '2.5rem',
          textTransform: 'uppercase',
          letterSpacing: '1px',
        }}
      >
        My Hobbies
      </h2>

      <Row className="mb-5">
        {/* Hobby 1 */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow"
            style={{
              borderRadius: '15px',
              backgroundColor: '#34495E', // Slightly lighter gray for the cards
              color: '#f9f9f9',
            }}
          >
            <Card.Img
              variant="top"
              src="/images/basketball.jpeg" // Replace with the actual image URL
              style={{
                height: '200px',
                objectFit: 'cover',
                borderRadius: '15px 15px 0 0',
              }}
              alt="Hobby 1"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ffc107' }}>
                Playing Basketball
              </Card.Title>
              <Card.Text style={{ fontSize: '1rem' }}>
                I have always loved playing basketball; it’s not just a sport for me but a passion that brings me joy, keeps me active, and helps me build teamwork and discipline.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Hobby 2 */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow"
            style={{
              borderRadius: '15px',
              backgroundColor: '#34495E',
              color: '#f9f9f9',
            }}
          >
            <Card.Img
              variant="top"
              src="/images/cook.jpg" // Replace with the actual image URL
              style={{
                height: '200px',
                objectFit: 'cover',
                borderRadius: '15px 15px 0 0',
              }}
              alt="Hobby 2"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ffc107' }}>
                Cooking
              </Card.Title>
              <Card.Text style={{ fontSize: '1rem' }}>
                I've always loved cooking and experimenting with new recipes, especially ones that are rich and indulgent, adding a touch of creativity to make them even more satisfying.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>

        {/* Hobby 3 */}
        <Col md={6} className="mb-4">
          <Card
            className="h-100 shadow"
            style={{
              borderRadius: '15px',
              backgroundColor: '#34495E',
              color: '#f9f9f9',
            }}
          >
            <Card.Img
              variant="top"
              src="/images/mg.jpg" // Replace with the actual image URL
              style={{
                height: '200px',
                objectFit: 'cover',
                borderRadius: '15px 15px 0 0',
              }}
              alt="Hobby 3"
            />
            <Card.Body>
              <Card.Title style={{ fontWeight: 'bold', fontSize: '1.5rem', color: '#ffc107' }}>
                Gaming
              </Card.Title>
              <Card.Text style={{ fontSize: '1rem' }}>
                I love playing mobile games as they serve as a perfect stress reliever, helping me relax and recharge while enjoying some fun and engaging challenges.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Footer Section */}
      <Container
        className="text-center mt-5"
        style={{
          backgroundColor: '#ffc107', // Yellow footer background
          color: '#2C3E50', // Dark gray text for contrast
          padding: '20px',
          borderRadius: '10px',
        }}
      >
        <p style={{ fontSize: '1rem' }}>
          These hobbies not only provide me with joy and relaxation, but they also enhance my creativity, focus, and problem-solving abilities.
        </p>
      </Container>
    </Container>
  );
};

export default Hobbies;
