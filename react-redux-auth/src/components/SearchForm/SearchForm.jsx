import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import parseQueryString from "../../lib/qs/parse-query-string";

export const useQuery = () => {
  const location = useLocation();
  return parseQueryString(location.search);
};

const SearchForm = ({ searchProducts }) => {
  const query = useQuery();
  const [search, setSearch] = useState(() => query.query ?? "");

  const handleChange = (evt) => {
    setSearch(evt.target.value);
  };

  //
  // handleSubmit = (evt) => {
  //   evt.preventDefault();
  //   this.props.searchProducts(this.state.search);
  //   this.setState({ search: "" });
  // };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    searchProducts(search);
    // setSearch('');
  };

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        name="search"
        className="w-75"
        onChange={handleChange}
        type="text"
        value={search}
      />
      <button
        type="submit"
        className="bg-blue-500 py-2 px-10 hover:bg-blue-700 text-white rounded-md w-25"
      >
        Поехали!
      </button>
    </form>
  );
};

SearchForm.propTypes = {
  searchProducts: PropTypes.func.isRequired,
};

export default SearchForm;
