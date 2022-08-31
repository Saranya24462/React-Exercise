import "./App.css";
import React from "react";

function Alldata(props) {
  let Containers = props.Containers;
  return (
    <div className="App">
      {Containers &&
        Containers.map((Contain, index) => (
          <div class="col1" key={index}>
            <img src={Contain?.image} alt="description" />
            <ul class="listdata">
              <li class="list">Name: {Contain.name}</li>
              <li class="list">Status: {Contain.status}</li>
              <li class="list">Species: {Contain.species}</li>
              <li class="list">Gender: {Contain.gender}</li>
            </ul>
          </div>
        ))}
    </div>
  );
}

export default Alldata;
