import React, { useCallback, useEffect, useState } from "react";
import parseQueryString from "../../lib/qs/parse-query-string";
import { Link, useLocation, useHistory, useParams } from "react-router-dom";
import SearchForm, { useQuery } from "../../components/SearchForm/SearchForm";

const TestPage = () => {
  const location = useLocation();
  const history = useHistory();
  const { query } = useQuery();
  const [data, setData] = useState([]);
  const params = useParams()
  console.log(params)
  // componentDidMount() {
  //   const currentQuery = parseQueryString(this.props.location.search).query;
  //   if (currentQuery) {
  //     this.handleSearch();
  //   }
  // }
  //
  // componentDidUpdate(prevProps, prevState) {
  //   const query = parseQueryString(prevProps.location.search).query;
  //   const currentQuery = parseQueryString(this.props.location.search).query;
  //
  //   if (query !== currentQuery) {
  //     this.handleSearch();
  //   }
  // }

  const handleSearch = useCallback(async () => {
    if (query) {
      const f = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&query=${query}&language=en-US&page=1&include_adult=false`
      );
      const data = await f.json();
      setData(data.results);
    }
  }, [query]);

  useEffect(() => {
    handleSearch();
  }, [handleSearch]);

  // handleSearch = async () => {
  //   const { location } = this.props;
  //   const query = parseQueryString(location.search).query;
  //   return fetch(
  //     `https://api.themoviedb.org/3/search/movie?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&query=${query}&language=en-US&page=1&include_adult=false`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => this.setState({ data: data.results }));
  // };
  //
  // handleChange = (evt) => {
  //   this.setState({ term: evt.target.value });
  // };

  // const handleSubmit = (term) => {
  //   const { history, location } = this.props;
  //   const query = parseQueryString(location.search).query;
  //   if (!term || term === query) {
  //     return;
  //   }
  //
  //   history.push(`/test?query=${term}`);
  // };
  //
  const handleSubmit = (term) => {
    const query = parseQueryString(location.search).query;
    if (!term || term === query) {
      return;
    }

    history.push(`/test?query=${term}`);
  };
  //
  // render() {
  //   const { data } = this.state;

  return (
    <div>
      <SearchForm searchProducts={handleSubmit} />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`}>{item.original_title}</Link>
          </li>
          // <li>{item}</li>
        ))}
      </ul>
    </div>
  );
  // }
};

export default TestPage;
