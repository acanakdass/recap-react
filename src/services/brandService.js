import axios from "axios";

export default class BrandService {
   baseUrl = "https://localhost:34070/api/brands";

   getAll() {
      return axios.get(this.baseUrl);
   }
}