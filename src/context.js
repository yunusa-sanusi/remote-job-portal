import React, { useEffect, useContext, useReducer } from 'react';

import { initialState, jobReducer, ACTION_TYPES } from './reducer';

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(jobReducer, initialState);
  const { data, jobs, loading, categories, searchText } = state;

  const fetchJobs = async () => {
    const response = await fetch(
      'https://remotive.com/api/remote-jobs?limit=100',
    );
    const { jobs } = await response.json();
    dispatch({
      type: ACTION_TYPES.FETCH_JOBS,
      payload: { jobs, loading: false },
    });
  };

  const toggleCategory = (category) => {
    /*
     * this is used to filter jobs based on categories.

     * checks if the a particular category is already in our array
     * if the that category is in the array and the array's length is greater than 1. we remove the category from the array.
     *
     * else we add it to the array if the category is not in the array
     */
    if (categories.length > 0 && categories.includes(category)) {
      const filteredCat = categories.filter((cat) => cat !== category);
      dispatch({
        type: ACTION_TYPES.SET_CATEGORIES,
        payload: { categories: filteredCat },
      });
    } else {
      dispatch({
        type: ACTION_TYPES.SET_CATEGORIES,
        payload: { categories: [...categories, category] },
      });
    }
  };

  const changeSearchText = (e) => {
    dispatch({
      type: ACTION_TYPES.SET_SEARCH_TEXT,
      payload: { searchText: e.target.value },
    });
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    const filteredJobs = data.filter((job) =>
      categories.includes(job.job_type),
    );

    const payloadToSend = categories.length <= 0 ? data : filteredJobs;

    dispatch({
      type: ACTION_TYPES.FILTER_JOBS,
      payload: { jobs: payloadToSend },
    });
  }, [categories, data]);

  useEffect(() => {
    const matchedJobs = data.filter((job) => {
      const { title, company_name, job_type } = job;
      return (
        title.toLowerCase().includes(searchText.toLowerCase()) ||
        company_name.toLowerCase().includes(searchText.toLowerCase()) ||
        job_type.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    dispatch({
      type: ACTION_TYPES.FILTER_JOBS,
      payload: { jobs: matchedJobs },
    });
  }, [searchText, data]);

  return (
    <AppContext.Provider
      value={{
        data,
        jobs,
        loading,
        searchText,
        toggleCategory,
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
