import React, { useEffect, useState } from "react";
import axios from "axios";
import VaccineData from "./vaccineData/VaccineData";
import { Container, Row, Col } from "react-bootstrap";
import { GiExitDoor } from "react-icons/gi";

export const Vaccine = () => {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState("");

  const URL = `https://disease.sh/v3/covid-19/vaccine`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setQuery(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  console.log(query);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredQuery = query.filter((querys) =>
    querys.trialPhase.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div className="main">
      <Container fluid>
        <Row>
          <Col>
            <a href="/home" className="home-icon">
              <GiExitDoor style={{ fontSize: "270%" }} />
            </a>
          </Col>
        </Row>
      </Container>
      <Container>
        <div className="main-search">
          <form action="" className="search-bar">
            <input type="search" name="Search" onChange={handleChange} />
            <button className="search-btn" type="submit">
              <span>Search</span>
            </button>
          </form>
        </div>
      </Container>

      <Container fluid>
        {filteredQuery.map((querys) => {
          return (
            <VaccineData
              candidate={querys.candidate}
              details={querys.details}
              mechanism={querys.mechanism}
              trialPhase={querys.trialPhase}
              institutions={querys.institutions}
              sponsors={querys.sponsors}
            />
          );
        })}
      </Container>
    </div>
  );
};
