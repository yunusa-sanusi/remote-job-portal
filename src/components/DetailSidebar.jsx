import React from "react";
import { Link } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";

const DetailSidebar = ({ jobUrl }) => {
  return (
    <>
      <div className="mb-7">
        <Link to="/" className="flex items-center">
          <CgArrowLongLeft size={16} color="#1E86FF" className="mr-2" />
          <h4 className="text-sm font-medium font-poppins text-lightBlue">
            Back to Homepage
          </h4>
        </Link>
      </div>

      <h3 className="text-lightGray text-sm font-bold font-poppins uppercase mb-3">
        how to apply
      </h3>

      <div className="">
        <p>
          Visit
          <a
            href={jobUrl}
            className="hover:text-lightBlue mx-1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Remotive
          </a>
          to apply for position.
        </p>
      </div>
    </>
  );
};

export default DetailSidebar;
