import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchJobs = async () => {
    const response = await fetch(
      "https://remotive.com/api/remote-jobs?limit=100",
    );
    const { jobs } = await response.json();
    setData(jobs);
    setJobs(jobs);
    setLoading(false);
  };

  const filterJobs = (category) => {
    if (categories.length > 0 && categories.includes(category)) {
      const filteredCat = categories.filter((cat) => cat !== category);
      setCategories(filteredCat);
    } else {
      setCategories([...categories, category]);
    }
  };

  const changeSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const search = () => {
    const matchedJobs = data.filter((job) => {
      const { title, company_name, job_type } = job;
      return (
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        company_name.toLowerCase().includes(searchText.toLowerCase()) ||
        job_type.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    setJobs(matchedJobs);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const filteredJobs = data.filter((job) =>
      categories.includes(job.job_type),
    );

    if (categories.length <= 0) {
      setJobs(data);
    } else {
      setJobs(filteredJobs);
    }
  }, [categories]);

  useEffect(() => {
    search();
  }, [searchText]);

  return (
    <AppContext.Provider
      value={{
        data,
        jobs,
        loading,
        searchText,
        filterJobs,
        search,
        changeSearchText,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};
