import React from "react";
import { RiVirusFill } from "react-icons/ri";
import virus from "./assets/virus.mp4";
import { Container, Row, Col } from "react-bootstrap";
import "./Main.css";

export const Main = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: "50%",
          top: "50%",
          objectFit: "cover",
          transform: "translate(-50%, -50%)",
          zIndex: "-1",
        }}
      >
        <source src={virus} type="video/mp4" />
      </video>

      <Container>
        <Row>
          <Col className="virus-col">
            <a href="/corona" className="virus-icon">
              <RiVirusFill style={{ fontSize: "400%" }} />
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
