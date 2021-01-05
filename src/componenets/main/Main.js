import React from "react";
import { RiVirusFill } from "react-icons/ri";
import { FaHandPointUp } from "react-icons/fa";
import { GiLoveInjection } from "react-icons/gi";
import { SiOpenstreetmap } from "react-icons/si";
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

      <Container fluid className="virus-con">
        <Row>
          <Col className="virus-col" md={{ span: 4 }}>
            <a href="/corona" className="virus-icon">
              <RiVirusFill style={{ fontSize: "400%" }} />
            </a>
            <Row>
              <Col className="click-me-col" md={{ offset: 3 }}>
                <h1>
                  Countries <FaHandPointUp style={{ fontSize: "100%" }} />{" "}
                </h1>
              </Col>
            </Row>
          </Col>

          <Col className="virus-col" md={{ span: 4 }}>
            <a href="/vaccine" className="virus-icon">
              <GiLoveInjection style={{ fontSize: "400%" }} />
            </a>
            <Row>
              <Col className="click-me-col" md={{ offset: 4 }}>
                <h1>
                  Vaccine <FaHandPointUp style={{ fontSize: "100%" }} />{" "}
                </h1>
              </Col>
            </Row>
          </Col>

          <Col className="virus-col" md={{ span: 4 }}>
            <a href="/corona" className="virus-icon">
              <SiOpenstreetmap style={{ fontSize: "400%" }} />
            </a>
            <Row>
              <Col className="click-me-col" md={{ offset: 4 }}>
                <h1>
                  Map <FaHandPointUp style={{ fontSize: "100%" }} />{" "}
                </h1>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
