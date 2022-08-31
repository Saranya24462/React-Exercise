import React from "react";

const Header = () => {
  return (
    <div>
      <header className="header">
        <h3>Rick and Morty Show</h3>
      </header>
    </div>
  );
};

export default React.memo(Header);

