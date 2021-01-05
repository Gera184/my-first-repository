import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./VaccineData.css";

const VaccineData = ({
  candidate,
  details,
  mechanism,
  trialPhase,
  institutions,
  sponsors,
}) => {
  return (
    <div class="main-body">
      <div class="head">
        <div class="headerobjectswrapper">
          <header> Trial Phase </header>
        </div>

        <div class="subhead">{trialPhase}</div>
      </div>
      <div class="content">
        <div class="collumns">
          <div class="collumn">
            <div class="head">
              <span class="headline hl5">Background details</span>
              <p>
                <span class="headline hl6">Candidate: {candidate}</span>
              </p>
            </div>
            <p>{details}</p>
            <figure class="figure">
              <img
                class="media"
                src="http://i.giphy.com/PW7MoTD2d9pJK.gif"
                alt=""
              />
              <figcaption class="figcaption">
                Hermine hoping for courage.
              </figcaption>
            </figure>
            <div class="bottom-page">
              <div>Mechanism: {mechanism}</div>
              <div>Institutions: {institutions}</div>
              <div>Sponsors: {sponsors}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VaccineData;
