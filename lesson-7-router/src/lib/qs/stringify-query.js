const stringifyQuery = (query = {}) => {
  const currentQuery = {};

  for  (const queryKey of Object.keys(query)) {
    if (query[queryKey] !== "") {
      currentQuery[queryKey] = query[queryKey];
    }
  }

  const qs = new URLSearchParams(currentQuery);
  return "?" + qs.toString();
};

export default stringifyQuery;
