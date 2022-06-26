import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="mb-4">
      <Link to="/">
        <h1 className="text-veryDarkBlue font-poppins text-2xl font-bold">
          Remote <span className="font-light">Jobs</span>
        </h1>
      </Link>
    </header>
  );
};

export default Header;
