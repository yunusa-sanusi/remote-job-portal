import React from "react";
import moment from "moment";
import parse from "html-react-parser";
import { useParams } from "react-router-dom";
import { AiOutlineClockCircle } from "react-icons/ai";
import { FaGlobeAfrica } from "react-icons/fa";
import { useGlobalContext } from "../context";
import DetailSidebar from "../components/DetailSidebar";

const JobDetail = () => {
  let { id } = useParams();
  const { jobs } = useGlobalContext();

  const job = jobs.filter((job) => job.id === Number(id))[0];

  let date = job.publication_date.split("T")[0].split("-");
  date = date[0] + date[1] + date[2];
  let formattedDate = moment(date, "YYYYMMDD").fromNow();

  return (
    <main className="flex flex-col md:flex-row md:justify-between">
      <aside className="w-full md:w-1/4">
        <DetailSidebar jobUrl={job.url} />
      </aside>
      <section className="w-full md:w-3/4">
        <header>
          <div className="flex flex-col md:flex-row">
            <h2 className="text-2xl font-bold md:mr-5">{job.title}</h2>
            <span className="border rounded-md border-[#334680] py-1 px-3 font-xs font-semibold w-fit my-2 md:my-0">
              {job.job_type}
            </span>
          </div>
          <p className="flex items-center text-lightGray text-xs font-medium">
            <AiOutlineClockCircle color="#B9BDCF" size={14} className="mr-1" />{" "}
            {formattedDate}
          </p>
        </header>

        <section className="my-5 flex items-center">
          <img
            src={job.company_logo}
            alt={job.company_name}
            className="w-11 h-11 rounded-sm mr-2"
          />
          <div>
            <h4 className="font-bold text-lg mb-1">{job.company_name}</h4>
            <p className="flex items-center text-lightGray text-xs font-medium">
              <FaGlobeAfrica color="#B9BDCF" size={14} className="mr-1" />{" "}
              {job.candidate_required_location}
            </p>
          </div>
        </section>

        <section>{parse(job.description)}</section>
      </section>
    </main>
  );
};

export default JobDetail;
