import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
let base_url = `https://rickandmortyapi.com/api/character/`;

function FilterData() {
  const [filteredResults, setFilteredResults] = useState([]);
  const [Containers, setContainers] = useState([]);
  const [selectedClient, setSelectedClient] = useState([]);
  const [loaded, isloaded] = useState(true);
  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
    if (
      event.target.value === "Male" ||
      event.target.value === "Female" ||
      event.target.value === "unknown"
    ) {
      const selectedCategory = Containers.filter((item) => {
        return Object.values(item.gender)
          .join("")
          .toLowerCase()
          .includes(event.target.value.toLowerCase());
      });

      isloaded(false);
      setFilteredResults(selectedCategory);
    } else if (event.target.value === "All") {
      setFilteredResults(Containers);
    } else {
      setFilteredResults(Containers);
    }
  }

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
    <div className="FilterApp">
      <div style={{ padding: 20 }}>
        <h3>Filter Value Based on Gender</h3>
        <select
          class="filterbutton"
          value={selectedClient}
          onChange={handleSelectChange}
        >
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {filteredResults &&
        filteredResults.map((Contain, index) => (
          <div class="col1" key={index}>
            <img src={Contain?.image} alt="Gender based" />
            <ul class="listdata">
              <li class="list">Name:{Contain.name}</li>
              <li class="list">Status:{Contain.status}</li>
              <li class="list">Species:{Contain.species}</li>
              <li class="list">Gender:{Contain.gender}</li>
            </ul>
          </div>
        ))}
      {Containers &&
        loaded &&
        Containers.map((Contain, index) => (
          <div class="col1" key={index}>
            <img src={Contain?.image} alt="Gender based" />
            <ul class="listdata">
              <li class="list">Name:{Contain.name}</li>
              <li class="list">Status:{Contain.status}</li>
              <li class="list">Species:{Contain.species}</li>
              <li class="list">Gender:{Contain.gender}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default FilterData;
