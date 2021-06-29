import axios from "axios";

class BaseHttpService {
  httpClient;
  _accessToken = null;
  _refreshToken = null;

  constructor(baseURL = null) {
    this.httpClient = axios.create({
      baseURL: baseURL ?? "https://amz-app.herokuapp.com/api/v1/",
    });
  }

  get accessToken() {
    return this._accessToken ? this._accessToken : this._loadToken();
  }

  set accessToken(accessToken) {
    return { accessToken: 'Bearer' + accessToken }
  }

  _loadToken = () => {
    this._accessToken = localStorage.getItem('accessToken');
    return {
      accessToken: this._accessToken,
    };
  };

  get(url = "", config = {}, query) {
    return this.httpClient.get(url, config).then(({ data }) => data);
  }
}

// instance;

export class ProductsService extends BaseHttpService {
  static classInstance = new ProductsService();

  getProducts(query = {}) {
    const queryStr = new URLSearchParams(query).toString();
    // console.log(this._accessToken)
    const queryResult = "?" + queryStr;
    // console.log(queryResult)
    return this.get(`products${queryResult}`);
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new ProductsService();
    }

    return this.classInstance;
  }
}

export default BaseHttpService;
