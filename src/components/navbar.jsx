import React from "react";

// stateless functional component

const NavBar = ({ totalCounters }) => {
  return (
    <div className="nav">
      <span>Navbar&nbsp;&nbsp;&nbsp;</span>
      <span className="totalCount">{totalCounters}</span>
    </div>
  );
};

export default NavBar;
