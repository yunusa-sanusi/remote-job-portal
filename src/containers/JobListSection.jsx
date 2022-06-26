import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";
import { useGlobalContext } from "../context";
import Job from "../components/Job";
import Loading from "../components/Loading";

const JobListSection = () => {
  const { jobs, loading } = useGlobalContext();
  const [currentJobs, setCurrentJobs] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 10;

  const handlePageClick = ({ selected }) => {
    const newOffset = (selected * itemsPerPage) % jobs.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentJobs(jobs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(jobs.length / itemsPerPage));
  }, [itemOffset, jobs]);

  return (
    <>
      <section>
        {loading ? (
          <Loading />
        ) : (
          currentJobs.map((job) => {
            const { id } = job;
            return <Job key={id} {...job} />;
          })
        )}
      </section>
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        containerClassName="paginationContainer"
        activeClassName="currentPage"
        previousClassName="prev"
        nextClassName="next"
      />
    </>
  );
};

export default JobListSection;
