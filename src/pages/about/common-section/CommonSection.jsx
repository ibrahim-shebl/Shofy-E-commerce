import React from "react";
import "./common-section.css";
import Container from "../../../components/container/Container";

const CommonSection = (props) => {
  return (
    <section className="about__section">
      <Container>
        <h2>{props.title}</h2>
      </Container>
    </section>
  );
};

export default CommonSection;
