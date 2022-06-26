import React from "react";
import { useGlobalContext } from "../context";

const SidebarContainer = () => {
  const { data, jobs, filterJobs } = useGlobalContext();

  const categories = [...new Set(data.map((job) => job.job_type))];

  return (
    <aside className="w-full md:w-1/4">
      {categories.map((category, index) => {
        return (
          <div key={index} className="form-check mb-3">
            <input
              className="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
              type="checkbox"
              name=""
              id="flexCheckDefault"
              onClick={() => filterJobs(category)}
            />
            <label
              className="form-check-label inline-block text-gray-800"
              htmlFor="flexCheckDefault"
            >
              {category ? category : "no category"}
            </label>
          </div>
        );
      })}
    </aside>
  );
};

export default SidebarContainer;
