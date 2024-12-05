import React from 'react';
import { Container, Carousel } from 'react-bootstrap'; // Importing necessary Bootstrap components
import '../home.css';

const Home = () => {
  return (
    <div id="home">
      <Container
        fluid
        className="text-center py-5"
        style={{
          backgroundColor: '#333333', // Dark Gray Background
          color: 'white',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          padding: '0 10%',
          fontFamily: "'Poppins', sans-serif", // Readable font
        }}
      >
        {/* Introduction Section */}
        <div
          style={{
            border: '2px solid rgba(255, 255, 255, 0.5)',
            padding: '40px',
            borderRadius: '15px',
            backgroundColor: 'rgba(255, 255, 255, 0.1)', // Slight transparent white background
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            maxWidth: '900px',
            width: '100%',
            marginBottom: '50px',
          }}
        >
          <h1 style={{ fontWeight: 'bold', marginBottom: '20px' }}>Welcome to My Personal Website</h1>
          <p style={{ fontSize: '1.2rem' }}>Discover more about my journey and passions.</p>
        </div>

        {/* Slider Section */}
        <Carousel style={{ maxWidth: '900px', width: '100%' }}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/profile.png"
              alt="First slide"
              style={{ borderRadius: '10px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>About Me</h3>
              <p>View my profile.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/education.jpg"
              alt="Second slide"
              style={{ borderRadius: '10px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Education</h3>
              <p>Discover my educational background.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/hobbies.jpg"
              alt="Third slide"
              style={{ borderRadius: '10px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>My Hobbies</h3>
              <p>Find out about my hobbies and passions.</p>
            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100"
              src="/images/contact.jpg"
              alt="Fourth slide"
              style={{ borderRadius: '10px', objectFit: 'cover' }}
            />
            <Carousel.Caption>
              <h3>Contact</h3>
              <p>Contact me for more information.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default Home;
