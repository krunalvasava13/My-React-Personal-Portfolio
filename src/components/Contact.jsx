import React from "react";
// Styles
import styled from "styled-components";
// Components
import { Element } from "react-scroll";
import { Container } from "react-bootstrap";
import Title from "./Title";
import { Icon } from '@iconify/react';

// #region styled-components
const StyledSection = styled.section`
  min-height: calc(100vh - var(--nav-height) - 2rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ContactInfo = styled.div`
  background: ${({ theme }) => (theme.name === "light" ? "#f8f9fa" : "#343a40")};
  border: 1px solid ${({ theme }) => (theme.name === "light" ? "#dee2e6" : "#495057")};
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;

  h4 {
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  p {
    margin: 0.5rem 0;
    font-size: 1.1rem;
    color: ${({ theme }) => (theme.name === "light" ? "#495057" : "#ced4da")};
  }

  a {
    color: ${({ theme }) => (theme.name === "light" ? "#495057" : "#ced4da")};
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }

    display: flex;
    align-items: center;

    svg {
      margin-right: 0.5rem;
    }
  }
`;
// #endregion

// #region component
const Contact = () => {
  return (
    <Element name={"Contact"} id="contact">
      <StyledSection>
        <Container className="d-flex justify-content-center">
          <Title size={"h2"} text={"Contact"} />
        </Container>
        <Container className="d-flex justify-content-center">
          <ContactInfo>
            <h4>Krunal Vasava</h4>
            <p>
              <a href="mailto:vasavakrunal139@gmail.com">
                <Icon icon="mdi:gmail" width="24" height="24" />
                vasavakrunal139@gmail.com
              </a>
            </p>
            <p>
              <a href="https://wa.me/917048514385" target="_blank" rel="noopener noreferrer">
                <Icon icon="mdi:whatsapp" width="24" height="24" />
                +91-7048514385
              </a>
            </p>
            <p>
              <a href="tel:+917048514385">
                <Icon icon="mdi:phone" width="24" height="24" />
                +91-7048514385
              </a>
            </p>
            <p>
            <a><Icon icon="mdi:place" width="24" height="24" />
            Vadodara, Gujarat</a></p>
          </ContactInfo>
        </Container>
      </StyledSection>
    </Element>
  );
};
// #endregion

export default Contact;