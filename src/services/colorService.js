import axios from "axios";

export default class ColorService {
   baseUrl = "https://localhost:34070/api/colors";

   getAll() {
      return axios.get(this.baseUrl);
   }

}