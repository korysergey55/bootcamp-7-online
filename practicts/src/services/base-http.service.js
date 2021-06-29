import axios from "axios";

class BaseHttpService {
  static classInstance = new BaseHttpService();

  _accessToken = null;
  _refreshToken = null;

  get = (url = '', config = {}) => {
    return axios.get(url, config);
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new BaseHttpService();
    }

    return this.classInstance;
  }

}

// instance;

export default BaseHttpService;
