import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaGlobeAfrica } from "react-icons/fa";
import moment from "moment";

const Job = ({
  id,
  title,
  company_name,
  company_logo,
  job_type,
  candidate_required_location,
  publication_date,
}) => {
  let date = publication_date.split("T")[0].split("-");
  date = date[0] + date[1] + date[2];
  let formattedDate = moment(date, "YYYYMMDD").fromNow();

  return (
    <article className="bg-white rounded-md shadow-md mb-8 flex justify-between items-center p-4">
      <Link
        to={`job/${id}`}
        className="flex justify-between items-center w-full"
      >
        <div className="flex items-center">
          <div className="company-logo-container w-[90px] h-[90px] rounded-md mr-4">
            <img src={company_logo} alt={title} className="w-full h-full" />
          </div>
          <div className="company-detail">
            <h4 className="text-xs text font-semibold">{company_name}</h4>
            <h3 className="font-normal text-lg mt-[2px] mb-2">{title}</h3>
            <span className="border rounded-md border-[#334680] py-1 px-3 font-xs font-semibold">
              {job_type ? job_type : "no category"}
            </span>
          </div>
        </div>

        <div className="flex items-end self-end">
          <p className="flex items-center text-lightGray text-xs font-medium">
            <FaGlobeAfrica color="#B9BDCF" size={14} className="mr-1" />{" "}
            {candidate_required_location}
          </p>
          <p className="flex items-center text-lightGray text-xs font-medium ml-4">
            <AiOutlineClockCircle color="#B9BDCF" size={14} className="mr-1" />{" "}
            {formattedDate}
          </p>
        </div>
      </Link>
    </article>
  );
};

export default Job;
