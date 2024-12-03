import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Educ = () => {
  return (
    <Container
      fluid
      className="py-5"
      style={{
        backgroundColor: '#333333', // Dark gray background color
        color: '#f9f9f9', // Light text color for contrast
        textAlign: 'center',
        fontFamily: "'Roboto', sans-serif", // Clean, modern font
      }}
    >
      <h2 className="mb-5" style={{ fontWeight: 'bold', color: '#ffc107' }}>
        Educational Background
      </h2>

      {/* College */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(255, 193, 7, 0.1)',
          border: '2px solid rgba(255, 193, 7, 0.5)',
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/images/cel.jpg" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="College Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Naga College Foundation</Card.Title>
                <Card.Text>
                  Bachelor of Science in Computer Science <br />
                  <small style={{ color: '#555' }}>2023 - Present</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Senior High School */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(255, 193, 7, 0.1)',
          border: '2px solid rgba(255, 193, 7, 0.5)',
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/images/collegelog.jpg" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="Senior High Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>ACLC Naga</Card.Title>
                <Card.Text>
                  Senior High School Diploma <br />
                  <small style={{ color: '#555' }}>2021</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* High School */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(255, 193, 7, 0.1)',
          border: '2px solid rgba(255, 193, 7, 0.5)',
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/images/hs.jpg" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="High School Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Sagurong High School</Card.Title>
                <Card.Text>
                  High School Diploma <br />
                  <small style={{ color: '#555' }}>2019</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Elementary */}
      <Container
        className="mb-5 p-4"
        style={{
          backgroundColor: 'rgba(255, 193, 7, 0.1)',
          border: '2px solid rgba(255, 193, 7, 0.5)',
          borderRadius: '15px',
        }}
      >
        <Row className="justify-content-center">
          <Col md={4} className="mb-4">
            <Card className="h-100 shadow">
              <Card.Img
                variant="top"
                src="/images/elem.jpg" // Replace with actual logo URL
                style={{ height: '150px', objectFit: 'contain' }}
                alt="Elementary School Logo"
              />
              <Card.Body>
                <Card.Title style={{ fontWeight: 'bold' }}>Solidad Marasigan Elementary School</Card.Title>
                <Card.Text>
                  Elementary Diploma <br />
                  <small style={{ color: '#555' }}>2014</small>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Summary */}
      <Container
        className="mt-5 p-4"
        style={{
          backgroundColor: 'rgba(255, 193, 7, 0.1)',
          border: '2px solid rgba(255, 193, 7, 0.5)',
          borderRadius: '15px',
        }}
      >
        <h4 style={{ fontWeight: 'bold' }}>Summary</h4>
        <p style={{ fontSize: '1rem', color: '#f9f9f9' }}>
          My educational journey reflects a passion for continuous learning and personal growth. 
          From building strong academic foundations in elementary school to specializing in 
          computer science in college, I’ve gained valuable skills and knowledge to pursue a 
          successful career in technology.
        </p>
      </Container>
    </Container>
  );
};

export default Educ;
