import "./App.css";
import axios from "axios";
import React from "react";
import { useState, useEffect, useMemo } from "react";
import SearchName from "./SearchName";
import FilterData from "./FilterData";
import FilterSpecies from "./FilterSpecies";
import Header from "./Header";
import Alldata from "./Alldata";
import Sorting from "./Sorting";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

let base_url = `https://rickandmortyapi.com/api/character/`;

function App() {
  const [Containers, setContainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    axios
      .get(base_url)
      .then((res) => {
        setContainers(res.data.results);
      })
      .catch((Error) => {
        console.log(Error);
      });
  }, []);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/search"
            exact
            render={(props) => (
              <SearchName
                {...props}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            )}
          />
          <Route
            path="/filter"
            exact
            render={(props) => (
              <FilterData {...props} Containers={Containers} />
            )}
          />
          <Route
            path="/FilterSpecies"
            exact
            render={(props) => <FilterSpecies {...props} data={Containers} />}
          />
          <Route
            path="/"
            exact
            render={(props) => <Alldata {...props} Containers={Containers} />}
          />
          <Route
            path="/sort"
            exact
            render={(props) => <Sorting {...props} Containers={Containers} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
