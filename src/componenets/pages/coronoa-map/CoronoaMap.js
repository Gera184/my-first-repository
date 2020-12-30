import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import CoronoaData from "./corona-data/CoronoaData";
import "./CoronaMap.css";

export const CoronoaMap = () => {
  const [query, setQuery] = useState([]);
  const [search, setSearch] = useState("");

  const URL = `https://corona.lmao.ninja/v2/countries`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        setQuery(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredQuery = query.filter((querys) =>
    querys.country.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <div>
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

      <div>
        {filteredQuery.map((querys) => {
          return (
            <CoronoaData
              active={querys.active}
              cases={querys.cases}
              continent={querys.continent}
              country={querys.country}
              critical={querys.critical}
              deaths={querys.deaths}
              population={querys.population}
              recovered={querys.recovered}
              todayCases={querys.todayCases}
              todayDeaths={querys.todayDeaths}
              todayRecovered={querys.todayRecovered}
              flag={querys.countryInfo.flag}
            />
          );
        })}
      </div>
    </div>
  );
};
