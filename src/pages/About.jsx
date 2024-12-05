import '../about.css';

// src/pages/About.jsx
import React from 'react';
import { Container, Row, Col, Card, Button, ListGroup } from 'react-bootstrap';

const About = () => {
  return (
    <Container
      fluid
      className="text-center py-5"
      style={{
        backgroundColor: '#333333', // Dark gray background color
        color: '#FFF', // White text for contrast
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          border: '2px solid rgba(255, 255, 255, 0.1)',
          padding: '40px',
          borderRadius: '15px',
          backgroundColor: 'blue',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          maxWidth: '900px',
          width: '100%',
        }}
      >
        <h1>About Me</h1>
        <p style={{ fontSize: '1.2rem', color: '#555' }}>
          My name is Roy Parcero. I’m a passionate developer with a love for creating impactful web experiences. With a strong foundation in front-end development, I aim to make the web a better place through elegant and user-friendly designs.
        </p>

        <Row className="mt-5">
          <Col md={4}>
            <img
              src="/images/me.jpg" // Replace with your image path
              alt="Profile"
              className="img-fluid rounded-circle"
              style={{ maxWidth: '250px', marginBottom: '20px' }}
            />
          </Col>
          <Col md={8}>
            <h4>Dreams</h4>
            <p>
              "My dream is to become a successful front-end developer, crafting seamless, visually appealing, and user-centric web experiences. I've gained hands-on experience with technologies like React, JavaScript, HTML, CSS, and various frontend frameworks, which fuel my passion for creating innovative interfaces. I am committed to continuous learning, staying updated on the latest industry trends, and refining my skills to excel in building dynamic, responsive websites. This dedication drives me to transform ideas into impactful, interactive digital experiences that leave a lasting impression."
            </p>

            {/* Contact Button */}
            <Button
              href="/contact"
              variant="success"
              size="lg"
              className="mt-3"
              style={{
                backgroundColor: '#28a745', // Green color for button
                borderColor: '#28a745',
                color: 'white',
              }}
            >
              Contact Me
            </Button>
          </Col>
        </Row>

        {/* Experience Section */}
        <h4 className="mt-5">LEARNING</h4>
        <p style={{ fontSize: '1rem', color: '#555' }}>
          I've been developing my foundational knowledge of web development through a variety of projects that have made me more aware of the importance of industrial needs and user or consumer usability. My goal is to become a proficient developer who can solve real-world issues with highly interactive, user-friendly software. I'm willing to keep becoming better by picking up new skills and expanding my technical knowledge while collaborating with others to bring fantastic ideas to life.
        </p>
      </div>
    </Container>
  );
};

export default About;
