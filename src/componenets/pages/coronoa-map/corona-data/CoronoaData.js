import React from "react";
import "./CoronoaData.css";
import { Container, Row, Col } from "react-bootstrap";

const CoronoaData = ({
  active,
  cases,
  continent,
  country,
  critical,
  deaths,
  population,
  recovered,
  todayCases,
  todayDeaths,
  todayRecovered,
  flag,
}) => {
  return (
    <div className="main-table">
      <div class="table-wrapper">
        <table class="fl-table">
          <thead>
            <tr>
              <th>Country flag</th>
              <th>Continent</th>
              <th>Country</th>
              <th>Population</th>
              <th>Cases</th>
              <th>Active </th>
              <th>Critical</th>
              <th>Deaths</th>
              <th>Recovered</th>
              <th>today Cases</th>
              <th>today Deaths</th>
              <th>today Recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <div className="img-div">
                <img src={flag} alt="" className="flag-img" />
              </div>
              <td>{continent}</td>
              <td>{country}</td>
              <td>{population}</td>
              <td>{cases}</td>
              <td>{active}</td>
              <td>{critical}</td>
              <td className="deaths">{deaths}</td>
              <td className="recovered">{recovered}</td>
              <td>{todayCases}</td>
              <td>{todayDeaths}</td>
              <td>{todayRecovered}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoronoaData;
