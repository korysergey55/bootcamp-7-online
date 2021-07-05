import React, { Component } from "react";
import parseQueryString from "../../lib/qs/parse-query-string";
import { Link } from "react-router-dom";
import SearchForm from "../../components/SearchForm/SearchForm";

class TestPage extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    const currentQuery = parseQueryString(this.props.location.search).query;
    if (currentQuery) {
      this.handleSearch();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const query = parseQueryString(prevProps.location.search).query;
    const currentQuery = parseQueryString(this.props.location.search).query;

    if (query !== currentQuery) {
      this.handleSearch();
    }
  }

  handleSearch = async () => {
    const { location } = this.props;
    const query = parseQueryString(location.search).query;
    return fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=6e40e6f870b3f7c3f9fcc54179d0bae2&query=${query}&language=en-US&page=1&include_adult=false`
    )
      .then((res) => res.json())
      .then((data) => this.setState({ data: data.results }));
  };

  handleChange = (evt) => {
    this.setState({ term: evt.target.value });
  };

  handleSubmit = (term) => {
    const { history, location } = this.props;
    const query = parseQueryString(location.search).query;
    if (!term || term === query) {
      return;
    }

    history.push(`/test?query=${term}`);
  };

  render() {
    const { data } = this.state;

    return (
      <div>
        {/*<form onSubmit={this.handleSubmit}>*/}
        {/*  <input*/}
        {/*    type="text"*/}
        {/*    onChange={this.handleChange}*/}
        {/*    value={this.state.term}*/}
        {/*  />*/}
        {/*  <button type="submit">Search</button>*/}
        {/*</form>*/}
        <SearchForm searchProducts={this.handleSubmit} />
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
  }
}

export default TestPage;
