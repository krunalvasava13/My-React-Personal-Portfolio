import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { Element } from "react-scroll";
import { Container, Modal, Carousel, Col, Row } from "react-bootstrap";
import styled from "styled-components";
import Title from "./Title";
import certi1 from "../images/spring_certi.jpg"
import certi2 from "../images/java certi.png"
import certi3 from "../images/sql certi.jpg"
import certi4 from "../images/Az-900.png"
import certi5 from "../images/Az-104.jpg"

// Styled-components for the modal image
const StyledImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  
  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

const StyledCarousel = styled(Carousel)`
  padding: 0 40px;
  margin-bottom: 50px;

  .carousel-control-prev,
  .carousel-control-next {
    width: 40px;
    height: 40px;
    background-color: ${({ theme }) => theme === 'dark' ? '#f0f8ff' : '#2d3033'};
    border-radius: 50%;
    top: 35%;
    transform: translateY(-50%);
    opacity: 1;

    &:hover {
      opacity: 1;
      background-color: ${({ theme }) => theme === 'dark' ? 'red' : 'red'};
    }
  }

  .carousel-control-prev {
    left: -10px;
  }

  .carousel-control-next {
    right: -10px;
  }

  .carousel-indicators {
    bottom: -50px;
    
    button {
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background-color: ${({ theme }) => theme === 'dark' ? 'red' : 'red'};
      opacity: 0.5;
      
      &.active {
        opacity: 1;
      }
    }
  }

  .carousel-item {
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    padding: 0 20px;
    
    .carousel-control-prev,
    .carousel-control-next {
      display: block;
      top: 45%;
    }

    .carousel-indicators {
      bottom: -30px;
    }
  }
`;

const certificationData = [
  {
    id: 1,
    title: "[NEW] Master Spring Boot 3 & Spring Framework 6 with Java",
    issuer: "Udemy",
    date: "July 2024",
    image: certi1,
  },
  {
    id: 2,
    title: "Java Course - Mastering the Fundamentals",
    issuer: "Scaler",
    date: "May 2024",
    image: certi2,
  },
  {
    id: 3,
    title: "The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    issuer: "Udemy",
    date: "July 2023",
    image: certi3,
  },
  {
    id: 4,
    title: "Microsoft Certified: Azure Fundamentals (AZ-900)",
    issuer: "Microsoft",
    date: "September 2024",
    image: certi4,
  },
  {
    id: 5,
    title: "Microsoft Certified: Azure Administrator Associate (AZ-104)",
    issuer: "Microsoft",
    date: "October 2024",
    image: certi5,
  },
];

// Modified helper function to handle mobile view
const chunkArray = (arr, size) => {
  if (window.innerWidth <= 768) {
    // For mobile, return array of single items
    return arr.map(item => [item]);
  }
  // For desktop, chunk into groups of 3
  return Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  );
};

const Certifications = () => {
  const theme = useSelector(selectMode);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [index, setIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Group certifications based on screen size
  const groupedCertifications = chunkArray(certificationData, 3);

  return (
    <Element name={"Certifications"} id="certifications">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Certifications"} />
          </Container>
          
          <StyledCarousel 
            activeIndex={index} 
            onSelect={handleSelect}
            interval={3000}
            indicators={true}
            controls={true}
            theme={theme}
          >
            {groupedCertifications.map((group, groupIndex) => (
              <Carousel.Item key={groupIndex}>
                <Row className="justify-content-center">
                  {group.map((certification) => (
                    <Col 
                      xs={12} 
                      md={4} 
                      key={certification.id} 
                      className="mb-4"
                      style={{
                        display: window.innerWidth <= 768 ? 
                          (group.length > 1 ? 'none' : 'block') : 'block'
                      }}
                    >
                      <figure>
                        <StyledImage
                          src={certification.image}
                          alt={certification.title}
                          onClick={() => handleShow(certification.image)}
                        />
                        <figcaption className="mt-3">
                          <h5 style={{ 
                            fontSize: '1.1rem', 
                            fontWeight: 'bold',
                            marginBottom: '0.5rem' 
                          }}>
                            {certification.title}
                          </h5>
                          <p style={{ 
                            color: '#666',
                            marginBottom: '0.25rem' 
                          }}>
                            {certification.issuer}
                          </p>
                          <p style={{ 
                            color: '#888',
                            fontSize: '0.9rem' 
                          }}>
                            {certification.date}
                          </p>
                        </figcaption>
                      </figure>
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </StyledCarousel>

          <Modal show={show} onHide={handleClose} centered size="lg">
            <Modal.Header closeButton>
              <Modal.Title>Certificate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img 
                src={selectedImage} 
                alt="Certificate" 
                style={{ width: "100%", height: "auto" }} 
              />
            </Modal.Body>
          </Modal>
        </Container>
      </section>
    </Element>
  );
};

export default Certifications;
