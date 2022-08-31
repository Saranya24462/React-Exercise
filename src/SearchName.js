import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import { Input } from "semantic-ui-react";
import axios from "axios";

let base_url = `https://rickandmortyapi.com/api/character/`;

function SearchName() {
  const [Containers, setContainers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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
        <h3>Search by Name</h3>

        <Input
          id="searchInput"
          type="text"
          placeholder="Search here..."
          onChange={(event) => {
            setSearchTerm(event.target.value);
          }}
        />
      </div>
      {Containers.filter((val) => {
        if (searchTerm === "") {
          return val;
        } else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
          return val;
        }
      }).map((Contain, index) => {
        return (
          <div class="col1" key={index}>
            <img src={Contain?.image} alt="description" />
            <ul class="listdata">
              <li class="list">Name: {Contain.name}</li>
              <li class="list">Status: {Contain.status}</li>
              <li class="list">Species: {Contain.species}</li>
              <li class="list">Gender: {Contain.gender}</li>
            </ul>
          </div>
        );
      })}
    </div>
  );
}

export default SearchName;
