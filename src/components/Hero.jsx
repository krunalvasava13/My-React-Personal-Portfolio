import React from "react";
// Styles
import styled, { keyframes } from "styled-components";
// State
import PropTypes from "prop-types";
// Icons
import { Icon } from "@iconify/react";
// Images
import HomeImg from "../images/img.jpg";
import { Light, Dark } from "../config";
// Components
import { useErrorBoundary } from "react-error-boundary";
import { Link } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import SocialLinks from "./SocialLinks";

// #region styled-components
const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const fadeInUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const StyledHero = styled.header`
  position: relative;
  display: grid;
  place-items: center;
  max-width: 1920px;
  margin: 0 auto;
  min-height: calc(100vh - var(--nav-height));

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "linear-gradient(135deg, var(--bs-primary), var(--bs-light))"
        : "linear-gradient(135deg, var(--bs-primary), var(--bs-dark))"};
    z-index: -2;
  }

  /* Overlay for contrast */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme }) =>
      theme.name === "light"
        ? "rgba(255, 255, 255, 0.2)"
        : "rgba(0, 0, 0, 0.2)"};
    z-index: -1;
  }

  .down-container {
    height: 10rem;
  }

  @media screen and (max-width: 1179px) {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: ${({ theme }) =>
        theme.name === "light"
          ? "rgba(235, 233, 225, 0.2)"
          : "rgba(0, 0, 0, 0.2)"};
      background-size: auto;
      background-position: center;
      z-index: -1;
    }
  }

  @media screen and (min-width: 1180px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? "rgba(235, 233, 225, 0.2)"
          : "rgba(0, 0, 0, 0.2)"};
      background-size: 100vw auto;
    }
  }

  @media screen and (min-width: 0px) {
    &::before {
      background: ${({ theme }) =>
        theme.name === "light"
          ? "rgba(235, 233, 225, 0.2)"
          : "rgba(0, 0, 0, 0.2)"};
      background-size: cover;
    }
  }

  .title {
  animation: ${slideInLeft} 1s ease-out;
  font-size: 3rem;
  font-weight: 700;
  color: #e43d12;
  //text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3); /* Adds a subtle shadow for depth */
  letter-spacing: 1.5px; /* Adjusts letter spacing */
  background: linear-gradient(90deg, #ff8a00, #e52e71); /* Adds gradient text */
  -webkit-background-clip: text; /* Ensures gradient is applied to text only */
  -webkit-text-fill-color: transparent; /* Ensures text color is transparent to show gradient */
  transition: color 0.3s ease, text-shadow 0.3s ease; /* Adds a smooth transition effect */

  &:hover {
    color: #d9534f; /* Changes color on hover */
    text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.5); /* Intensifies shadow on hover */
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
}


  .role {
    animation: ${slideInLeft} 1.5s ease-out;
    font-size: 1.5rem;
    font-weight: 400;
    color: #555;
  }

  .link-icons {
    animation: ${slideInLeft} 2s ease-out;
    font-size: 2rem;
    margin-top: 20px;
    color: #e43d12;

    &:hover {
      color: #d9534f;
    }
  }
`;

const StyledImage = styled.img`
  width: 70%;
  height: auto;
  border: 5px solid;
  border-image-slice: 1;
  border-width: 5px;
  border-image-source: linear-gradient(to left, #f0ad4e, #d9534f); /* Gradient border */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Drop shadow */
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; /* Smooth transition */
  transform: rotate(0deg); /* Initial tilt */

  &:hover {
    transform: scale(1.1) rotate(-2deg); /* Slightly enlarge and tilt on hover */
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Stronger shadow on hover */
  }

  @media (max-width: 768px) {
    width: 75%;
    margin: 0 auto;
    display: block;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(240, 173, 78, 0.7);
    }
    70% {
      box-shadow: 0 0 10px 20px rgba(240, 173, 78, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(240, 173, 78, 0);
    }
  }

  &:hover {
    animation: pulse 1.5s infinite;
  }
`;

const StyledCol = styled(Col)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
// #endregion

// #region component
const propTypes = {
  name: PropTypes.string,
};

const Hero = ({ name }) => {
  const { showBoundary } = useErrorBoundary();

  return (
    <StyledHero>
      <Container>
        <Row className="align-items-center text-center">
          <Col xs={12} md={6}>
            <h1 className="mb-3 display-3 title">
              {name === null ? "null" : name}
            </h1>
            <h3 className="role">Full Stack Developer</h3>
            <div className="d-flex align-items-center justify-content-center">
              <SocialLinks />
            </div>
          </Col>
          <StyledCol xs={12} md={6} className="mt-5">
            <StyledImage
              src={HomeImg}
              alt="React Logo"
              className="mx-auto hero-img"
            />
          </StyledCol>
        </Row>
        <Row className="align-items-end down-container">
          <Col className="m-4 text-center">
            <Link to={"About"} className="link-icons">
              <Icon icon="fa6-solid:circle-chevron-down" />
            </Link>
          </Col>
        </Row>
        <Button
          className="d-none"
          onClick={() =>
            showBoundary({
              name: "Error",
              message: "Simulated error message",
            })
          }
        >
          Simulate Error Boundary
        </Button>
      </Container>
    </StyledHero>
  );
};

Hero.propTypes = propTypes;
// #endregion

export default Hero;
