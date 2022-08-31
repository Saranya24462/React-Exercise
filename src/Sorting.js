import React, { useEffect, useState } from "react";

import "./App.css";
import axios from "axios";
let base_url = `https://rickandmortyapi.com/api/character/`;

function Sorting() {
  const [Containers, setContainers] = useState([]);
  const [selectedClient, setSelectedClient] = useState([]);
  const [sorted, setsorted] = useState();
  const [loaded, isloaded] = useState(true);

  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
    if (event.target.value === "Desc") {
      isloaded(false);
      setsorted(Containers.sort((a, b) => b.id - a.id));
    } else {
      setsorted(Containers.sort((a, b) => a.id - b.id));
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
        <h3>Sorting Based on Data</h3>
        <select
          class="filterbutton"
          value={selectedClient}
          onChange={handleSelectChange}
        >
          <option value="Asc">Asc</option>
          <option value="Desc">Desc</option>
        </select>
      </div>
      {sorted &&
        sorted.map((Contain, index) => (
          <div class="col1" key={index}>
            <img src={Contain?.image} alt="Gender based" />
            <ul class="listdata">
              <li class="list">Name:{Contain.name}</li>
              <li class="list">Status:{Contain.status}</li>
              <li class="list">Species:{Contain.species}</li>
              <li class="list">Gender:{Contain.gender}</li>
              <li class="list">Id:{Contain.id}</li>
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
              <li class="list">Id:{Contain.id}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Sorting;
