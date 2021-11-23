import axios from "axios";

export default class UserService {
   baseUrl = "https://localhost:34070/api/users";

   getCurrentUser(token) {
      return axios.get(this.baseUrl + "/getCurrentUser", {
         headers: {
            'Authorization': `Bearer ${token}`
         }
      });
   }
}