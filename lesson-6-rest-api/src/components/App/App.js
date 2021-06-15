import { Component } from "react";
import axios from "axios";
import SearchForm from "../SearchForm/SearchForm";
import Modal from "../../shared/components/Modal/Modal";

class App extends Component {
  state = {
    data: [],
    error: null,
    loading: false,
    search: "",
    page: 1,
    endPage: 1,
    selected: null,
  };

  // async componentDidMount() {}

  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.search !== this.state.search ||
      prevState.page !== this.state.page
    ) {
      this.handleSearchProducts();
    }
  }

  handleSearchProducts = async () => {
    const { page, search } = this.state;
    this.setState({ loading: true });
    try {
      const response = await axios.get(
        `https://amz-app.herokuapp.com/api/v1/products?search=${search}&limits=${3}&page=${page}`
      );
      const { result, pager } = response.data;
      const { endPage } = pager;
      // console.log(result);
      this.setState((prevState) => ({
        data: [...prevState.data, ...result],
        endPage,
      }));
    } catch (error) {
      this.setState({ error: error.response.data });
    } finally {
      this.setState({ loading: false });
    }
  };

  handleSubmit = (search) => {
    this.setState({ search, data: [], page: 1 });
  };

  showMore = () => {
    this.setState((prevState) => ({ page: prevState.page + 1 }));
  };

  selectProduct = (selected) => {
    this.setState({ selected });
  };

  unSelectProduct = () => {
    this.setState({ selected: null });
  };

  changeProduct = (idx) => {
    const selected = this.state.data[idx];
    // console.log(idx, selected);
    if (!selected) {
      this.setState({ selected: null });
      return;
    }
    this.setState({ selected: { ...selected, idx } });
  };

  render() {
    const { data, error, loading, page, endPage, selected } = this.state;
    return (
      <div className="container mx-auto px-4">
        <h3>Products</h3>

        <Modal open={!!selected} onClose={this.unSelectProduct}>
          <div className="flex flex-column">
            {selected && <img src={selected.thumbnail} alt={selected.name} />}
            <div className="flex">
              <button onClick={() => this.changeProduct(selected.idx - 1)}>
                Prev Product
              </button>
              <button onClick={() => this.changeProduct(selected.idx + 1)}>
                Next Product
              </button>
            </div>
          </div>
        </Modal>

        <SearchForm searchProducts={this.handleSubmit} />
        {error && <p>{error?.message}</p>}
        {loading && (
          <div className="fixed top-0 right-0 h-screen w-screen z-50 flex justify-center items-center">
            <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-gray-900" />
          </div>
        )}
        <ul className="grid grid-cols-4 gap-2">
          {data &&
            data.map(({ _id, thumbnail, price, name: { ukr } }, idx) => (
              <li key={_id}>
                <img src={thumbnail} className="img-fluid" alt={ukr} />
                <h3>{ukr}</h3>
                Price <strong>{price}</strong>
                <div className="actions">
                  <button
                    onClick={() =>
                      this.selectProduct({ thumbnail, name: ukr, idx })
                    }
                    type="button"
                    className="bg-blue-500 py-2 px-10 hover:bg-blue-700 text-white rounded-md"
                  >
                    Buy
                  </button>
                </div>
              </li>
            ))}
        </ul>

        {/*{page !== endPage && (*/}
        {/*  <button*/}
        {/*    className="bg-yellow-500 text-white w-20"*/}
        {/*    onClick={this.showMore}*/}
        {/*  >*/}
        {/*    Show More*/}
        {/*  </button>*/}
        {/*)}*/}

        {page !== endPage ? (
          loading ? (
            <p>Loading...</p>
          ) : (
            <button
              className="bg-yellow-500 text-white w-20"
              onClick={this.showMore}
            >
              Show More
            </button>
          )
        ) : null}
      </div>
    );
  }
}

export default App;
