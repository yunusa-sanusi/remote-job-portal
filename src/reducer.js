export const initialState = {
  data: [],
  jobs: [],
  categories: [],
  loading: true,
  searchText: '',
};

export const ACTION_TYPES = {
  FETCH_JOBS: 'FETCH_JOBS',
  FILTER_JOBS: 'FILTER_JOBS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_SEARCH_TEXT: 'SET_SEARCH_TEXT',
};

export const jobReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ACTION_TYPES.FETCH_JOBS:
      return {
        ...state,
        data: payload.jobs,
        jobs: payload.jobs,
        loading: payload.loading,
      };
    case ACTION_TYPES.FILTER_JOBS:
      return { ...state, jobs: payload.jobs };
    case ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: payload.categories };
    case ACTION_TYPES.SET_SEARCH_TEXT:
      return { ...state, searchText: payload.searchText };
    default:
      return state;
  }
};
