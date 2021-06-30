import axios from "axios";

export default class BaseHttpService {
  axios;

  constructor() {
    this.axios = axios.create({
      baseURL: "https://amz-app.herokuapp.com/api/v1/",
    });
  }

  get(url = "", config = {}) {
    return this.axios.get(url, config);
  }
}