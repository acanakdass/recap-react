import axios from "axios";

export default class CarService {
   baseUrl = "https://localhost:34070/api/cars";


   getAll() {
      return axios.get(this.baseUrl);
   }
   getByBrandId(brandId) {
      return axios.get(this.baseUrl + "/getByBrand/" + brandId);
   }
   getByColorId(colorId) {
      return axios.get(this.baseUrl + "/getByColor/" + colorId);
   }
}