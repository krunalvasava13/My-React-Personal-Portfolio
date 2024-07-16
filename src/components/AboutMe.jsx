import React from "react";
// Styles
import styled from "styled-components";
// State
import PropTypes from "prop-types";
// Components
import { Element } from "react-scroll";
import { Button, Col, Container, Row } from "react-bootstrap";
import Title from "./Title";
import { resume } from "../config";

// #region styled-components
const StyledAboutMe = styled.section`
  p {
    font-size: 1.25rem;
  }

  .img {
    width: 28rem;
    height: 28rem;
    border: 5px solid;
    border-image-slice: 1;
    border-width: 5px;
    border-image-source: linear-gradient(to left, #f0ad4e, #d9534f); /* Gradient border */
    //border-radius: 15px; /* Rounded corners */
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2); /* Drop shadow */
    transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s; /* Smooth transition */
    transform: rotate(0deg); /* Initial tilt */

    &:hover {
      transform: scale(1.1) rotate(-2deg); /* Slightly enlarge and tilt on hover */
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4); /* Stronger shadow on hover */
    }

    @media (max-width: 768px) {
      width: 75%;
      height: auto;
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
  }

  .about-content {
    text-align: left;

    @media (max-width: 768px) {
      text-align: center;
    }
  }

  .education, .experience {
    margin-top: 2rem;
  }

  .section-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1rem;
  }

  ul {
    list-style-type: none;
    padding-left: 0;

    li::before {
      content: "•";
      color: #d9534f;
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }

  .details {
    background-color: #f8f9fa;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }

  .details-header {
    font-size: 1.25rem;
    font-weight: bold;
    color: #d9534f;
  }

  .details-body {
    font-size: 1rem;
    color: #333;
  }
`;
// #endregion

// #region component
const propTypes = {
  avatar_url: PropTypes.string.isRequired,
  bio: PropTypes.string,
  moreInfo: PropTypes.string,
};

const AboutMe = ({ avatar_url, bio, moreInfo }) => {
  return (
    <Element name={"About"} id="about">
      <StyledAboutMe className="section">
        <Container className="text-center">
          <Container className="d-flex justify-content-center">
            <Title size={"h2"} text={"About Me"} />
          </Container>
          <Row className="align-items-center mb-5">
            <Col md={6} className="d-flex justify-content-center">
              <img
                src={avatar_url}
                alt="Convocation"
                loading="lazy"
                className="img"
              />
            </Col>
            <Col md={6} className="about-content">
              {bio && <p>{bio}</p>}
              {moreInfo && <p>{moreInfo}</p>}
              <div className="education">
                <div className="section-title">Education</div>
                <div className="details">
                  <div className="details-header">M.Tech in Information Technology</div>
                  <div className="details-body">IIIT Allahabad (Sept. 2021 - July 2023) - GPA: 8.29/10</div>
                  <div className="details-body">Prayagraj, U.P. </div>
                </div>
                <div className="details">
                  <div className="details-header">B.E in Mechanical Engineering</div>
                  <div className="details-body">M S University of Baroda (July 2016 - May 2020) - GPA: 8.18/10</div>
                  <div className="details-body">Vadodara, Gujarat.</div>
                </div>
              </div>
              <div className="experience">
                <div className="section-title">Experience</div>
                <div className="details">
                  <div className="details-header">Software Engineer 1</div>
                  <div className="details-body">Qualifacts (August 2023 - April 2024)</div>
                  <div className="details-body">Vadodara, Gujarat.</div>
                </div>
              </div>
            </Col>
          </Row>
          {resume && (
            <a href={resume}>
              <Button
                size="lg"
                //variant={theme === "light" ? "outline-dark" : "outline-light"}
                className="mt-5"
              >
                Resume
              </Button>
            </a>
          )}
        </Container>
      </StyledAboutMe>
    </Element>
  );
};

AboutMe.propTypes = propTypes;
// #endregion

export default AboutMe;
