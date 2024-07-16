import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectMode } from "../app/appSlice";
import { Element } from "react-scroll";
import { Button, Col, Container, Row, Modal } from "react-bootstrap";
import styled from "styled-components";
import Title from "./Title";
import certi1 from "../images/spring_certi.jpg"
import certi2 from "../images/java certi.png"
import certi3 from "../images/sql certi.jpg"

// Example certification data
const certificationData = [
  {
    id: 1,
    title: "[NEW] Master Spring Boot 3 & Spring Framework 6 with Java",
    issuer: "Udemy",
    date: "July 2024",
    image: certi1, // replace with actual image paths
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
    title: " The Ultimate MySQL Bootcamp: Go from SQL Beginner to Expert",
    issuer: "Udemy",
    date: "July 2023",
    image: certi3,
  },
];

// Styled-components for the modal image
const StyledImage = styled.img`
  width: 100%;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

// #region component
const Certifications = () => {
  const theme = useSelector(selectMode);
  const [show, setShow] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (image) => {
    setSelectedImage(image);
    setShow(true);
  };

  return (
    <Element name={"Certifications"} id="certifications">
      <section className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"Certifications"} />
          </Container>
          <Row className="mt-3 align-items-center">
            {certificationData.map((certification) => {
              return (
                <Col xs={12} md={4} key={certification.id} className="my-md-5">
                  <figure>
                    <StyledImage
                      src={certification.image}
                      alt={certification.title}
                      onClick={() => handleShow(certification.image)}
                    />
                    <figcaption>
                      <h4>{certification.title}</h4>
                      <p>{certification.issuer}</p>
                      <p>{certification.date}</p>
                    </figcaption>
                  </figure>
                </Col>
              );
            })}
          </Row>
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
              <Modal.Title>Certificate</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <img src={selectedImage} alt="Certificate" style={{ width: "100%" }} />
            </Modal.Body>
          </Modal>
        </Container>
      </section>
    </Element>
  );
};
// #endregion

export default Certifications;
