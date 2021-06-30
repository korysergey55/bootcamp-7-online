import BaseHttpService from "./base-http.service";

export default class RestaurantsService extends BaseHttpService {
  static classInstance = new RestaurantsService();

  getRestaurants() {
    return this.get("restaurants");
  }

  getRestaurantDetails(restId = "") {
    return this.get(`categories/rest/${restId}/details`);
  }

  getCategoriesDetails(categoryId = '') {
    return this.get(`categories/${categoryId}/details`)
  }

  static getInstance() {
    if (!this.classInstance) {
      this.classInstance = new RestaurantsService();
    }

    return this.classInstance;
  }
}
